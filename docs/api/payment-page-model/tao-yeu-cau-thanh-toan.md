# Tạo thanh toán theo mô hình Payment Page

Merchant Server gửi thông tin thanh toán đến Paykit PGW để tạo thanh toán theo mô hình Payment Page.

## Đặc tả API

|  Tham số  | Mô tả     |
| --------- | --------- |
| Method    | `POST`      |
| Endpoint  | `{base_url}/v2/payment-page-checkout` |
| Content-Type  | `application/json` |

## Request

| Tham số                   | Đặc tả dữ liệu                        | Mô tả                                         |
| ------------------------- | ------------------------------------- | --------------------------------------------- |
| `payment_method`           | **Kiểu dữ liệu:** `String`<br> Các giá trị hợp lệ:<br> • `DOMESTIC_CARD`<br> • `INTERNATIONAL_CARD`<br> • `BANK_TRANSFER`<br><br>**Bắt buộc:** `Conditional`<br>Bắt buộc có 1 trong 2 tham số `payment_method` hoặc `available_payment_methods`.<br><br>Trong trường hợp đã có `payment_method`, tham số `available_payment_methods` sẽ bị bỏ qua. | Xác định phương thức thanh toán cho payment.<br><br>Khi `payment_method` được xác định, Paykit sẽ không hiển thị trang chọn phương thức thanh toán cho người mua, mà hiển thị ngay giao diện thanh toán tương ứng với phương thức thanh toán đã xác định.<br><br>_Ví dụ: `INTERNATIONAL_CARD`_ |
| `available_payment_methods` | **Kiểu dữ liệu:** `List[String]`<br> Các giá trị hợp lệ:<br> • `DOMESTIC_CARD`<br> • `INTERNATIONAL_CARD`<br> • `BANK_TRANSFER`<br><br>**Bắt buộc:** `Conditional`<br>Bắt buộc có 1 trong 2 tham số `payment_method` hoặc `available_payment_methods`.<br><br>Trong trường hợp đã có `payment_method`, tham số `available_payment_methods` sẽ bị bỏ qua. | Xác định các phương thức thanh toán mà người mua có thể lựa chọn.<br><br>Nếu `payment_method` chưa được xác định, Paykit sẽ hiển thị trang chọn phương thức thanh toán cho người mua.<br><br> _Ví dụ: `[“DOMESTIC_CARD”, “INTERNATIONAL_CARD”, ”BANK_TRANSFER”]`_ |
| `payment`                  | **Kiểu dữ liệu:** `Json`<br> Gồm các tham số bên dưới<br><br>**Bắt buộc:** `Required`| Thông tin thanh toán  |
| `payment`.`id`            | **Kiểu dữ liệu:** `String`<br>• Min length: 1 <br> • Max length: 50 <br><br>**Bắt buộc:** `Required` | ID duy nhất để phân biệt các thanh toán<br><br>_Ví dụ: `PAY_0001`_ |
| `payment`.`amount`        | **Kiểu dữ liệu:** `Decimal`<br>• Min value: 0.000001 <br> • Max digits: 30 <br> • Decimal places: 6 <br><br>**Bắt buộc:** `Required`| Tổng giá trị thanh toán<br><br>_Ví dụ: `100000`_ |
| `payment`.`currency`      | **Kiểu dữ liệu:** `String`<br> Giá trị hợp lệ: `VND`<br><br>**Bắt buộc:** `Required`| Đơn vị tiền tệ thanh toán<br><br>_Ví dụ: `VND`_ |
| `payment`.`currency`      | **Kiểu dữ liệu:** `String`<br> • Max length: 1023<br><br>**Bắt buộc:** `Optional` | Dòng mô tả cho thanh toán<br><br>_Ví dụ: `Thanh toán cho đơn hàng ABC`_ |
| `payment`.`due_time`      | **Kiểu dữ liệu:** `Datetime`<br>Format ISO 8601<br><br>Nếu giá trị này không được cung cấp, mặc định thanh toán hết hạn sau 30 phút.<br><br>**Bắt buộc:** `Optional` | Thời điểm thanh toán hết hạn.<br><br> _Ví dụ: `2023-09-10T00:00:00.000000Z`_ |
| `payment`.`success_url`   | **Kiểu dữ liệu:** `String`<br>• Url với format hợp lệ <br> • Max length: 255<br><br>**Bắt buộc:** `Required` đối với Merchant<br><br> Tham số này chỉ có hiệu lực đối với Merchant, không có hiệu lực với Platform.<br><br>Platform sẽ đăng ký `success_url` cố định khi tích hợp với Paykit | Khi thanh toán thành công, Paykit sẽ redirect người mua đến `success_url`<br><br>_Ví dụ: `https://www.abc.com/success-payment`_ |
| `payment`.`cancel_url`    | **Kiểu dữ liệu:** `String`<br>• Url với format hợp lệ <br> • Max length: 255<br><br>**Bắt buộc:** `Required` đối với Merchant<br><br> Tham số này chỉ có hiệu lực đối với Merchant, không có hiệu lực với Platform.<br><br>Platform sẽ đăng ký `cancel_url` cố định khi tích hợp với Paykit | Khi thanh toán thất bại (hoặc hủy thanh toán, thanh toán hết hạn), Paykit sẽ redirect người mua đến `cancel_url`<br><br>_Ví dụ: `https://www.abc.com/cancel-payment`_ |
| `payment`.`ipn_url`       | **Kiểu dữ liệu:** `String`<br>• Url với format hợp lệ <br> • Max length: 255<br><br>**Bắt buộc:** `Optional`<br><br>Nếu giá trị này không được cung cấp, url được merchant cấu hình khi đăng ký dịch vụ sẽ được sử dụng.<br><br>Tham số này chỉ có hiệu lực đối với Merchant, không có hiệu lực với Platform.<br><br>Platform sẽ đăng ký `ipn_url` cố định khi tích hợp với Paykit | Khi có đơn hàng thay đổi trạng thái, Paykit sẽ thực hiện POST đến url này để thông báo.<br><br>_Ví dụ: `https://www.abc-ipn.com`_

**Ví dụ Request:**

```json linenums="1"
{
  "payment_method": "INTERNATIONAL_CARD",
  "payment": {
    "id": "PAY_0001",
    "amount": "100000",
    "currency": "VND",
    "description": "Thanh toán cho đơn hàng ABC",
    "due_time": "2024-01-20T00:00:00.000000Z",
    "success_url": "https://www.abc.com/success-payment",
    "cancel_url": "https://www.abc.com/cancel-payment",
    "ipn_url": "https://api.abc.com/ipn"
  }
}
```

## Response

| Tham số   | Đặc tả dữ liệu    | Mô tả |
| --------- | ----------------- | ----- |
| `response_at` | **Kiểu dữ liệu:** `Datetime`<br>Format ISO 8601<br><br>**Bắt buộc:** `Required`   | Thời điểm respose được trả về<br><br>_Ví dụ: `2024-01-16T00:00:00.000001Z`_ |
| `result` | **Kiểu dữ liệu:** `String`<br>Một trong các giá trị sau<br> • `SUCCESS`: Xử lý yêu cầu thành công <br> • `FAILURE`: Xử lý yêu cầu thất bại, dựa vào `gateway_code` để biết rõ nguyên nhân thất bại <br> • `PENDING`: Giao dịch đang được xử lý. Khi có kết quả thành công hoặc thất bại, merchant sẽ được thông báo qua IPN <br> • `ERROR`: Có lỗi từ yêu cầu, lỗi trong quá trình xử lý, hoặc không rõ nguyên nhân thất bại của yêu cầu <br> • `UNKNOWN`: Không xác định kết quả của yêu cầu<br><br>**Bắt buộc:** `Required`| Kết quả tổng thể sau khi xử lý yêu cầu<br><br>_Ví dụ: `SUCCESS`_ |
| `gateway_code` | **Kiểu dữ liệu:** `String`<br> Một trong các giá trị sau: <br> • `APPROVED`: Thành công <br> • `DUPLICATE_PAYMENT_ID`: ID thanh toán đã tồn tại <br> • `PAYMENT_METHOD_NOT_SUPPORTED`: Phương thức thanh toán không được hỗ trợ <br> • `INVALID_AMOUNT`: Số tiền thanh toán không hợp lệ <br> • `INVALID_DUE_TIME`: Thời gian hết hạn không hợp lệ <br> • `PAYMENT_TOTAL_AMOUNT_LIMIT_EXCEED`: Vượt quá tổng hạn mức thanh toán <br> • `MERCHANT_ACCOUNT_HAS_BEEN_LOCKED`: Merchant account đã bị khóa <br> • `MERCHANT_ACCOUNT_HAS_BEEN_CLOSED`: Merchant account đã bị đóng <br> • `PLATFORM_HAS_BEEN_LOCKED`: Platform đã bị khóa <br> • `PLATFORM_HAS_BEEN_CLOSED`: Platform đã bị đóng<br><br>**Bắt buộc:** `Conditional`<br>Bắt buộc khi `result` là `SUCCESS`,`FAILURE` | Tóm tắt thành công hoặc nguyên nhân thất bại<br><br>_Ví dụ: `APPROVED`_ |
| `checkout_url` | **Kiểu dữ liệu:** `String`<br>URL với format hợp lệ<br><br>**Bắt buộc:** `Conditional`<br> Bắt buộc khi `result` là `SUCCESS` | Đường dẫn trang thanh toán của Paykit.<br>Merchant redirect người mua hàng đến trang này để thực hiện thanh toán.<br><br>_Ví dụ: `https://payment-page.paykit.vn/merchant/MC_001/payment/PAY_0001`_ |
| `payment` | **Kiểu dữ liệu:** `Json`<br>Gồm các tham số bên dưới<br><br>**Bắt buộc:** `Conditional`<br>Bắt buộc khi `result` là `SUCCESS` | Dữ liệu thanh toán |
| `payment`.`id` |  **Kiểu dữ liệu:** `String`<br>• Min length: 1 <br> • Max length: 50<br><br>**Bắt buộc:** `Required` | ID duy nhất để phân biệt các thanh toán<br><br>_Ví dụ: `PAY_0001`_ |
| `payment`.`payment_method` | **Kiểu dữ liệu:** `String`<br>Một trong các giá trị:<br> • `DOMESTIC_CARD`<br> • `INTERNATIONAL_CARD`<br> • `BANK_TRANSFER`<br><br>**Bắt buộc:** `Required` | Phương thức thanh toán<br><br>_Ví dụ: `INTERNATIONAL_CARD`_ |
| `payment`.`total_amount` | **Kiểu dữ liệu:** `Decimal`<br>• Min value: 0.000001 <br> • Max digits: 30 <br> • Decimal places: 6<br><br>**Bắt buộc:** `Required` | Tổng giá trị thanh toán<br><br>_Ví dụ: `100000`_ |
| `payment`.`captured_amount` | **Kiểu dữ liệu:** `Decimal`<br>• Min value: 0 <br> • Max digits: 30 <br> • Decimal places: 6<br><br>**Bắt buộc:** `Required` | Số tiền ghi nhận đã thanh toán<br><br>_Ví dụ: `0`_ |
| `payment`.`refunded_amount` | **Kiểu dữ liệu:** `Decimal`<br>• Min value: 0 <br> • Max digits: 30 <br> • Decimal places: 6<br><br>**Bắt buộc:** `Required` | Số tiền đã hoàn trả<br><br>_Ví dụ: `0`_ |
| `payment`.`refunding_amount` | **Kiểu dữ liệu:** `Decimal`<br>• Min value: 0 <br> • Max digits: 30 <br> • Decimal places: 6<br><br>**Bắt buộc:** `Required` | Số tiền đang hoàn trả<br><br>_Ví dụ: `0`_ |
| `payment`.`currency` | **Kiểu dữ liệu:** `String`<br>Một trong các giá trị:<br> • `VND`<br><br>**Bắt buộc:** `Required` | Đơn vị tiền tệ thanh toán<br><br>_Ví dụ: `VND`_ |
| `payment`.`status` | **Kiểu dữ liệu:** `String`<br>Một trong các giá trị:<br> • `OPEN`<br> • `PROCESSING`<br> • `CLOSED`<br><br>**Bắt buộc:** `Required` | Trạng thái thanh toán<br><br>_Ví dụ: `CLOSED`_ |
| `payment`.`result` | **Kiểu dữ liệu:** `String`<br>Một trong các giá trị:<br> • `APPROVED`<br> • `DENIED`<br> • `CANCELED`<br> • `EXPIRED`<br><br>**Bắt buộc:** `Conditional`<br>Bắt buộc khi `payment`.`status` là `CLOSED` | Kết quả thanh toán<br><br>_Ví dụ: `APPROVED`_ |
| `payment`.`due_time`  | **Kiểu dữ liệu:** `Datetime`<br>Format ISO 8601<br><br>**Bắt buộc:** `Required` | Thời điểm thanh toán hết hạn.<br><br> _Ví dụ: `2024-01-20T00:00:00.000000Z`_ |
| `payment`.`start_at`  | **Kiểu dữ liệu:** `Datetime`<br>Format ISO 8601<br><br>**Bắt buộc:** `Required` | Thời điểm khởi tạo thanh toán.<br><br> _Ví dụ: `2024-01-16T00:00:00.000000Z`_ |
| `payment`.`completed_at`  | **Kiểu dữ liệu:** `Datetime`<br>Format ISO 8601<br><br>**Bắt buộc:** `Conditional`<br>Bắt buộc khi `payment`.`result` laf `APPROVED` | Thời điểm hoàn thành thanh toán<br><br> _Ví dụ: `2024-01-17T00:00:00.000000Z`_ |
| `bank_transfer_payment` | **Kiểu dữ liệu:** `Json`<br>Gồm các tham số bên dưới<br><br>**Bắt buộc:** `Conditional`<br> Bắt buộc khi `result` là `SUCCESS` và `payment_method` là `BANK_TRANSFER`  | Thông tin bổ sung cho PTTT chuyển khoản ngân hàng |
| `bank_transfer_payment`.`vietqr_data` | **Kiểu dữ liệu:** `String`<br>URL với format hợp lệ<br><br>**Bắt buộc:** `Required` | Dữ liệu dùng để tạo mã VietQR. Merchant có thể lựa chọn redirect người mua theo checkout_url, hoặc có thể lựa chọn tự chủ động hiển thị mã QR theo dữ liệu VietQR này cho người mua.<br><br>_Ví dụ: `00020101021238620010A000000727013200069704480118PKTTEST1234567890A0208QRIBFTTA53037045405100005802VN62370833Thanh toan cho PKTTEST1234567890A6304DC58`_ |
| `bank_transfer_payment`.`status` | **Kiểu dữ liệu:** `String`<br>Một trong các giá trị:<br> • `ACTIVE`: Tài khoản ngân hàng (VA) còn hiệu lực<br> • `INACTIVE`: Tài khoản ngân hàng (VA) không còn hiệu lực<br><br>**Bắt buộc:** `Required` | <br><br>_Ví dụ: `ACTIVE`_ |
| `error` | **Kiểu dữ liệu:** `Json`<br>Gồm các tham số bên dưới<br><br>**Bắt buộc:** `Conditional`<br>Bắt buộc khi `result` là `ERROR` |   Các thông tin cụ thể hơn về lỗi |
| `error`.`cause` |  **Kiểu dữ liệu:** `String`<br> Một trong các giá trị sau:<br> • `INVALID_REQUEST`: Các tham số của yêu cầu được gửi không hợp lệ <br> • `REQUEST_REJECTED`: Yêu cầu bị từ chối <br> • `SERVER_BUSY`: Server hiện đang bận, không thể xử lý yêu cầu <br> • `SERVER_FAILED`: Lỗi server<br><br>**Bắt buộc:** `Required` | Loại nguyên nhân gây ra lỗi<br><br>_Ví dụ: `INVALID_REQUEST`_ |
| `error`.`explanation` | **Kiểu dữ liệu:** `String`<br><br>**Bắt buộc:** `Conditional`<br>Bắt buộc khi `error`.`cause` là `SERVER_BUSY` hoặc `REQUEST_REJECTED` | Nội dung mô tả lỗi<br><br>_Ví dụ: `The request was rejected because we detected unusual behavior`_ |
| `error`.`field`| **Kiểu dữ liệu:** `Json`<br><br>**Bắt buộc:** `Conditional`<br>Bắt buộc khi `error`.`cause` là `INVALID_REQUEST`<br><br> Keys là tên các tham số không hợp lệ. <br> Values là danh sách các nội dung xác thực không hợp lệ, có kiểu là `Json`(khi các keys lồng nhau) hoặc `List[String]`. | _Ví dụ: `{"order":  {"currency": ["\"USD\" is not a valid choice."] }}`_ |
| `error`.`support_code` | **Kiểu dữ liệu:** `String`<br><br>**Bắt buộc:** `Conditional`<br>Bắt buộc khi `error`.`cause` là `SERVER_FAILED` | Mã lỗi nội bộ giúp Paykit dễ dàng hơn trong việc hỗ trợ đối tác khi gặp lỗi Server<br><br>_Ví dụ: `6f4c81832a6d45b1be2ab19edd267414`_ |

**Ví dụ Response:**

```json linenums="1"
{
  "payment_method": "INTERNATIONAL_CARD",
  "payment": {
    "id": "PAY_0001",
    "amount": "100000",
    "currency": "VND",
    "description": "Thanh toán cho đơn hàng ABC",
    "due_time": "2024-01-20T00:00:00.000000Z",
    "success_url": "https://www.abc.com/success-payment",
    "cancel_url": "https://www.abc.com/cancel-payment)",
    "ipn_url": "https://api.abc.com/ipn"
  }
}
```