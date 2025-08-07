# Hoàn tiền

Merchant Server gửi yêu cầu hoàn tiền với số tiền tương ứng. Tổng số tiền đã hoàn trả và đang hoàn trả không được vượt quá số tiền đã ghi nhận thanh toán.

##Đặc tả API

| Tham số | Mô tả |
|---|---|
| Method | POST |
| Endpoint | {base_url}/v2/refund |
| Content-Type | application/json |

## Request

| Tham số | Kiểu dữ liệu | Ràng buộc | Bắt buộc | Mô tả | Ví dụ |
|---|---|---|---|---|---|
| `payment_id` | String | • Min length: 1<br>• Max length: 50 | ✔ | ID duy nhất để phân biệt các thanh toán | `PAY_0001` |
| `refund_id` | String | • Min length: 1<br>• Max length: 50 | ✔ | ID duy nhất để phân biệt giao dịch hoàn tiền | `RF_0001` |
| `amount` | Decimal | • Min value: 0.000001<br>• Max digits: 30<br>• Decimal places: 6 | ✔ | Số tiền cần hoàn trả | `20000` |
| `currency` | String | Một trong các giá trị: VND | ✔ | Đơn vị tiền tệ | `VND` |

**Ví dụ Request:**

```json linenums="1"
{
  "payment_id": "PAY_0001",
  "refund_id": "RF_0001",
  "amount": 20000,
  "currency": "VND"
}
```

## Response

| Tham số | Kiểu dữ liệu | Ràng buộc | Bắt buộc | Mô tả | Ví dụ |
|---|---|---|---|---|---|
| `response_at` | Datetime | Format ISO 8601 | ✔ | Thời điểm response được trả về | `2024-01-18T00:00:03.000001Z` |
| `result` | String | Một trong các giá trị sau:<br>• `SUCCESS`: Xử lý yêu cầu thành công<br>• `FAILURE`: Xử lý yêu cầu thất bại, dựa vào `gateway_code` để biết rõ nguyên nhân thất bại<br>• `PENDING`: Giao dịch đang được xử lý. Khi có kết quả thành công hoặc thất bại, merchant sẽ được thông báo qua IPN<br>• `ERROR`: Có lỗi từ yêu cầu, lỗi trong quá trình xử lý, hoặc không rõ nguyên nhân thất bại của yêu cầu<br>• `UNKNOWN`: Không xác định kết quả của yêu cầu | ✔ | Kết quả tổng thể sau khi xử lý yêu cầu | `SUCCESS` |
| `gateway_code` | String | Một trong các giá trị sau:<br>• `APPROVED`: Thành công<br>• `DUPLICATE_REFUND_ID`: ID giao dịch hoàn tiền đã tồn tại với thanh toán này<br>• `PAYMENT_NOT_FOUND`: Thanh toán không tồn tại<br>• `INVALID_PAYMENT`: Thanh toán không hợp lệ để hoàn tiền<br>• `INVALID_AMOUNT`: Số tiền hoàn tiền không hợp lệ<br>• `CURRENCY_NOT_MATCH`: Đơn vị tiền tệ không khớp với đơn hàng<br>• `PAYMENT_METHOD_NOT_SUPPORTED`: Phương thức thanh toán không được hỗ trợ để hoàn tiền<br>• `PENDING`: Giao dịch đang được xử lý. Khi có kết quả thành công hoặc thất bại, merchant sẽ được thông báo qua IPN<br>• `UNSPECIFIED_FAILURE`: Không xác định nguyên nhân thất bại<br>• `INVALID_REFUND`: Yêu cầu hoàn tiền không hợp lệ<br>• `EXCEEDED_RETRY_LIMIT`: Vượt quá số lần thử lại<br>• `INSUFFICIENT_BALANCE`: Không đủ số dư để hoàn tiền<br>• `MERCHANT_ACCOUNT_HAS_BEEN_LOCKED`: Merchant account đã bị khóa<br>• `MERCHANT_ACCOUNT_HAS_BEEN_CLOSED`: Merchant account đã bị đóng<br>• `PLATFORM_HAS_BEEN_LOCKED`: Platform đã bị khóa<br>• `PLATFORM_HAS_BEEN_CLOSED`: Platform đã bị đóng | Bắt buộc khi `result` khác `ERROR` | Tóm tắt thành công hoặc nguyên nhân thất bại | `APPROVED` |
| `error` | Json | Gồm các tham số bên dưới | Bắt buộc khi `result` là `ERROR` | Các thông tin cụ thể hơn về lỗi |  |
| `error.cause` | String | Một trong các giá trị:<br>• `INVALID_REQUEST`: Các tham số của yêu cầu được gửi không hợp lệ<br>• `REQUEST_REJECTED`: Yêu cầu bị từ chối<br>• `SERVER_BUSY`: Server hiện đang bận, không thể xử lý yêu cầu<br>• `SERVER_FAILED`: Lỗi server | ✔ | Loại nguyên nhân gây ra lỗi | `INVALID_REQUEST` |
| `error.explanation` | String |  | Bắt buộc khi `error.cause` là `SERVER_BUSY` hoặc `REQUEST_REJECTED` | Nội dung mô tả lỗi | `The request was rejected because we detected unusual behavior` |
| `error.field` | Json |  | Bắt buộc khi `error.cause` là `INVALID_REQUEST` | Keys là tên các tham số không hợp lệ<br>Values là danh sách các nội dung xác thực không hợp lệ, có kiểu là Json(khi các keys lồng nhau) hoặc List[String] | `{"payment_id": ["This field may not be blank."]}` |
| `error.support_code` | String |  | Bắt buộc khi `error.cause` là `SERVER_FAILED` | Mã lỗi nội bộ giúp Paykit dễ dàng hơn trong việc hỗ trợ Merchant khi gặp lỗi Server | `6f4c81832a6d45b1be2ab19edd267414` |
| `payment` | Json | Gồm các tham số bên dưới | Bắt buộc khi `result` là `SUCCESS` | Dữ liệu thanh toán |  |
| `payment.id` | String | • Min length: 1<br>• Max length: 50 | ✔ | ID duy nhất để phân biệt các thanh toán | `PAY_0001` |
| `payment.payment_method` | String | Một trong các giá trị: `DOMESTIC_CARD`, `INTERNATIONAL_CARD` | ✔ | Phương thức thanh toán | `INTERNATIONAL_CARD` |
| `payment.total_amount` | Decimal | • Min value: 0.000001<br>• Max digits: 30<br>• Decimal places: 6 | ✔ | Tổng giá trị thanh toán | `100000` |
| `payment.captured_amount` | Decimal | • Min value: 0<br>• Max digits: 30<br>• Decimal places: 6 | ✔ | Số tiền ghi nhận đã thanh toán | `0` |
| `payment.refunded_amount` | Decimal | • Min value: 0<br>• Max digits: 30<br>• Decimal places: 6 | ✔ | Số tiền đã hoàn trả | `0` |
| `payment.refunding_amount` | Decimal | • Min value: 0<br>• Max digits: 30<br>• Decimal places: 6 | ✔ | Số tiền đang hoàn trả | `0` |
| `payment.currency` | String | Một trong các giá trị: VND | ✔ | Đơn vị tiền tệ thanh toán | `VND` |
| `payment.status` | String | Một trong các giá trị: `OPEN`, `PROCESSING`, `CLOSED` | ✔ | Trạng thái thanh toán | `CLOSED` |
| `payment.result` | String | Một trong các giá trị: `CANCELED`, `APPROVED`, `DENIED`, `EXPIRED` |  | Kết quả thanh toán | `APPROVED` |
| `payment.due_time` | Datetime | Format ISO 8601 | ✔ | Thời điểm hết hạn thanh toán | `2024-01-20T00:00:00.000000Z` |
| `payment.start_at` | Datetime | Format ISO 8601 | ✔ | Thời điểm khởi tạo thanh toán | `2024-01-16T00:00:00.000000Z` |
| `payment.completed_at` | Datetime | Format ISO 8601 |  | Thời điểm hoàn thành thanh toán | `2024-01-17T00:00:00.000000Z` |
| `refund` | Json | Gồm các tham số bên dưới | Bắt buộc khi `result` là `SUCCESS` | Dữ liệu giao dịch hoàn tiền của thanh toán |  |
| `refund.id` | String | • Min length: 1<br>• Max length: 50 | ✔ | ID duy nhất để phân biệt các giao dịch hoàn tiền | `RF_0001` |
| `refund.payment_id` | String | • Min length: 1<br>• Max length: 50 | ✔ | ID của giao dịch thanh toán được hoàn tiền | `PAY_0001` |
| `refund.amount` | Decimal | • Min value: 0.000001<br>• Max digits: 30<br>• Decimal places: 6 | ✔ | Số tiền hoàn trả | `20000` |
| `refund.currency` | String | Một trong các giá trị: VND | ✔ | Đơn vị tiền tệ | `VND` |
| `refund.status` | String | Một trong các giá trị: `PROCESSING`, `CLOSED` | ✔ | Trạng thái của giao dịch hoàn tiền | `CLOSED` |
| `refund.result` | String | Một trong các giá trị: `APPROVED`, `DENIED` |  | Kết quả hoàn tiền | `APPROVED` |
| `refund.start_at` | Datetime | Format ISO 8601 | ✔ | Thời điểm khởi tạo giao dịch hoàn tiền | `2024-01-18T00:00:00.000001Z` |
| `refund.completed_at` | Datetime | Format ISO 8601 |  | Thời điểm hoàn thành giao dịch hoàn tiền | `2024-01-18T00:00:03.000001Z` |


**Ví dụ Response:**

```json linenums="1"
{
  "payment": {
    "id": "PAY_0001",
    "total_amount": 100000.0,
    "captured_amount": 100000.0,
    "refunded_amount": 20000.0,
    "refunding_amount": 0.0,
    "currency": "VND",
    "payment_method": "INTERNATIONAL_CARD",
    "status": "CLOSED",
    "result": "APPROVED",
    "due_time": "2024-01-20T00:00:00.000000Z",
    "start_at": "2024-01-16T00:00:00.000000Z",
    "completed_at": "2024-01-17T00:00:00.000000Z"
  },
  "refund": {
    "id": "RF_0001",
    "payment_id": "PAY_0001",
    "amount": 20000.0,
    "currency": "VND",
    "status": "CLOSED",
    "result": "APPROVED",
    "start_at": "2024-01-18T00:00:00.000000Z",
    "completed_at": "2024-01-18T00:00:03.000000Z"
  },
  "result": "SUCCESS",
  "gateway_code": "APPROVED",
  "response_at": "2024-01-18T00:00:03.000001Z"
}
```