# Nhận kết quả giao dịch từ Paykit PGW

## **Thông qua Redirect**

Sau khi có kết quả thanh toán đơn hàng, Paykit redirect người mua về lại trang của đối tác merchant bằng giá trị `success_url` (trong trường hợp thanh toán thành công) và `cancel_url` (trong trường hợp thanh toán thất bại, hết hạn hoặc hủy thanh toán).

Các giá trị `mid`, `payment_id`, `result` sẽ được gửi kèm tương ứng như các query params. 

**Ví dụ:** Merchant có id `MC_001` tạo thanh toán `PAY_001` với `success_url` là `https://mc-001.com/abc`. Sau khi người mua thanh toán thành công, người mua sẽ được redirect về: `https://mc-001.com/abc?mid=MC_001&payment_id=PAY_001&result=APPROVED`

> **Lưu ý:** 
> 
> Khi nhận được redirect hợp lệ, merchant kiểm tra xem có nhận được thông báo qua IPN hay chưa, nếu chưa Merchant sử dụng API Truy vấn thanh toán để lấy kết quả cập nhật vào hệ thống.

## **Thông qua Instant Payment Notification (IPN)**

Mỗi khi trạng thái thanh toán được cập nhật hoặc có giao dịch hoàn tiền, Paykit sẽ gửi POST request để thông báo: đến `ipn_url` do merchant cung cấp để thông báo.

* Đối với Merchant: Nếu merchant có cung cấp `ipn_url` khi tạo thanh toán, Paykit sẽ thông báo đến `ipn_url`. Nếu không, Paykit sẽ thông báo đến Webhook url mà merchant cài đặt ở Merchant portal (nếu có).
* Đối với Platform: Paykit sẽ thông báo đến Webhook url mà platform cài đặt ở Platform portal (nếu có).


**Nếu ipn_url là HTTPS**

Khi nhận được thông báo, đối tác merchant xác thực yêu cầu là hợp lệ từ Paykit bằng cách kiểm tra `secret-key` ở header. Nếu kết quả chưa được cập nhật, đối tác merchant tiến hành cập nhật vào hệ thống.

**Header:**

| Tham số | Kiểu dữ liệu | Mô tả |
|---|---|---|
| `request-id` | `String` | ID duy nhất của request |
| `secret-key` | `String` | Merchant/Platform so sánh giá trị này với IPN Secret Key khi đăng ký dịch vụ với Paykit để xác thực request |

**Request body:**

| Tham số       | Đặc tả dữ liệu        | Mô tả         |
| ------------- | --------------------- | ------------- |
| `request_at`  | **Kiểu dữ liệu:** `Datetime`<br> • Format ISO 8601<br><br>**Bắt buộc:** `Required`    | Thời điểm gửi request |
| `mid`  | **Kiểu dữ liệu:** `String`<br> • Max length: 255<br><br>**Bắt buộc:** `Required`    | ID của merchant  |
| `payment`  | **Kiểu dữ liệu:** `Json`<br> Bao gồm các tham số bên dưới<br><br>**Bắt buộc:** `Required`    | Dữ liệu thanh toán  |
| `payment`.`id`  | **Kiểu dữ liệu:** `String`<br> • Min length: 1<br> • Max length: 50<br><br>**Bắt buộc:** `Required`    | ID duy nhất để phân biệt các thanh toán  |
| `payment`.`payment_method`  | **Kiểu dữ liệu:** `String`<br>Một trong các giá trị:<br> • `DOMESTIC_CARD`<br> • `INTERNATIONAL_CARD`<br> • `BANK_TRANSFER`<br><br>**Bắt buộc:** `Required`    | Phương thức thanh toán  |
| `payment`.`total_amount`  | **Kiểu dữ liệu:** `Decimal`<br> • Min value: 0.000001<br> • Max digits: 30<br> • Decimal places: 6<br><br>**Bắt buộc:** `Required`    | Tổng giá trị thanh toán  |
| `payment`.`captured_amount`  | **Kiểu dữ liệu:** `Decimal`<br> • Min value: 0<br> • Max digits: 30<br> • Decimal places: 6<br><br>**Bắt buộc:** `Required`    | Số tiền ghi nhận đã thanh toán  |
| `payment`.`refunded_amount`  | **Kiểu dữ liệu:** `Decimal`<br> • Min value: 0<br> • Max digits: 30<br> • Decimal places: 6<br><br>**Bắt buộc:** `Required`    | Số tiền đã hoàn trả  |
| `payment`.`refunding_amount`  | **Kiểu dữ liệu:** `Decimal`<br> • Min value: 0<br> • Max digits: 30<br> • Decimal places: 6<br><br>**Bắt buộc:** `Required`    | Số tiền đang hoàn trả  |
| `payment`.`currency`  | **Kiểu dữ liệu:** `String`<br>Một trong các giá trị:<br> • `VND`<br><br>**Bắt buộc:** `Required`    | Đơn vị tiền tệ thanh toán  |
| `payment`.`status`  | **Kiểu dữ liệu:** `String`<br>Một trong các giá trị:<br> • `OPEN`<br> • `PROCESSING`<br> • `CLOSED`<br><br>**Bắt buộc:** `Required`    | Trạng thái thanh toán  |
| `payment`.`result`  | **Kiểu dữ liệu:** `String`<br>Một trong các giá trị:<br> • `APPROVED`<br> • `DENIED`<br> • `CANCELED`<br> • `EXPIRED`<br><br>**Bắt buộc:** `Conditional`<br>Bắt buộc có nếu `payment`.`status` là `CLOSED`    | Kết quả thanh toán  |
| `payment`.`due_time`  | **Kiểu dữ liệu:** `Datetime`<br> • Format ISO 8601<br><br>**Bắt buộc:** `Required`    | Thời điểm hết hạn thanh toán  |
| `payment`.`start_at`  | **Kiểu dữ liệu:** `Datetime`<br> • Format ISO 8601<br><br>**Bắt buộc:** `Required`    | Thời điểm khởi tạo thanh toán  |
| `payment`.`completed_at`  | **Kiểu dữ liệu:** `Datetime`<br> • Format ISO 8601<br><br>**Bắt buộc:** `Conditional`<br> Bắt buộc nếu `payment`.`result` là `APPROVED`    | Thời điểm hoàn thành thanh toán  |
| `refund`  | **Kiểu dữ liệu:** `Json`<br> Bao gồm các tham số bên dưới<br><br>**Bắt buộc:** `Conditional`<br>Bắt buộc nếu có giao dịch hoàn tiền mới được tạo    | Dữ liệu giao dịch hoàn tiền  |
| `refund`.`id`  | **Kiểu dữ liệu:** `String`<br> • Min length: 1<br> • Max length: 50<br><br>**Bắt buộc:** `Required`    | ID duy nhất để phân biệt các giao dịch hoàn tiền  |
| `refund`.`payment_id`  | **Kiểu dữ liệu:** `String`<br> • Min length: 1<br> • Max length: 50<br><br>**Bắt buộc:** `Required`    | ID của giao dịch thanh toán được hoàn tiền  |
| `refund`.`amount`  | **Kiểu dữ liệu:** `Decimal`<br> • Min value: 0.000001<br> • Max digits: 30<br> • Decimal places: 6<br><br>**Bắt buộc:** `Required`    | Số tiền hoàn trả  |
| `refund`.`currency`  | **Kiểu dữ liệu:** `String`<br>Một trong các giá trị:<br> • `VND`<br><br>**Bắt buộc:** `Required`    | Đơn vị tiền tệ  |
| `refund`.`status`  | **Kiểu dữ liệu:** `String`<br>Một trong các giá trị:<br> • `OPEN`<br> • `PROCESSING`<br> • `CLOSED`<br><br>**Bắt buộc:** `Required`    | Trạng thái của giao dịch hoàn tiền  |
| `refund`.`result`  | **Kiểu dữ liệu:** `String`<br>Một trong các giá trị:<br> • `APPROVED`<br> • `DENIED`<br> <br>**Bắt buộc:** `Conditional`<br>Bắt buộc có nếu `refund`.`status` là `CLOSED`    | Kết quả hoàn tiền  |
| `refund`.`start_at`  | **Kiểu dữ liệu:** `Datetime`<br> • Format ISO 8601<br><br>**Bắt buộc:** `Required`    | hời điểm khởi tạo giao dịch hoàn tiền  |
| `refund`.`completed_at`  | **Kiểu dữ liệu:** `Datetime`<br> • Format ISO 8601<br><br>**Bắt buộc:** `Conditional`<br> Bắt buộc nếu `refund`.`result` là `APPROVED`    | Thời điểm hoàn thành giao dịch hoàn tiền  |

**Nếu ipn_url là HTTP**

Khi nhận được thông báo, đối tác merchant cần sử dụng API Truy vấn thanh toán để lấy kết quả. Nếu kết quả chưa được cập nhật, đối tác merchant tiến hành cập nhật vào hệ thống.

**Header:**

| Tham số | Kiểu dữ liệu | Mô tả |
|---|---|---|
| `request-id` | `String `| ID duy nhất của request |

**Request body:**

| Tham số       | Đặc tả dữ liệu        | Mô tả         |
| ------------- | --------------------- | ------------- |
| `request_at`  | **Kiểu dữ liệu:** `Datetime`<br> • Format ISO 8601<br><br>**Bắt buộc:** `Required`    | Thời điểm gửi request |
| `mid`  | **Kiểu dữ liệu:** `String`<br> • Max length: 255<br><br>**Bắt buộc:** `Required`    | ID của merchant  |
| `payment_id`  | **Kiểu dữ liệu:** `String`<br> • Min length: 1<br> • Max length: 50<br><br>**Bắt buộc:** `Required`    | ID duy nhất để phân biệt các thanh toán  |
| `refund_id`  | **Kiểu dữ liệu:** `String`<br> • Min length: 1<br> • Max length: 50<br><br>**Bắt buộc:** `Conditional`<br>Bắt buộc nếu có giao dịch hoàn tiền mới được tạo    | ID duy nhất để phân biệt các giao dịch hoàn tiền  |
