# Mô hình thanh toán thông qua Payment Page

## Tổng quan
Mô hình thanh toán thông qua payment page là mô hình lý tưởng trong trường hợp bạn cần một giải pháp vừa bảo mật vừa có thể triển khai nhanh chóng.

Trong mô hình này, tất cả việc bạn cần làm là tạo một yêu cầu thanh toán với Paykit.
Sau đó Paykit sẽ thực hiện toàn bộ các công việc còn lại như thu thập thông tin thanh toán từ người mua hàng như thông tin thẻ, thông tin chuyển khoản và làm việc với các bên liên quan để đảm bảo việc thanh toán được hoàn tất một cách an toàn và nhanh chóng nhất.
Sau khi người mua hàng thanh toán thành công, Paykit sẽ báo kết quả với bạn ngay lập tức.

## Các phương thức thanh toán được hỗ trợ

- Chuyển khoản ngân hàng (VietQR)
- Thẻ Visa
- Thẻ Mastercard
- Thẻ JCB
- Thẻ Napas

## Luồng thanh toán tổng quát

- **Bước 1:** Merchant gửi api tạo yêu cầu thanh toán đến Paykit. 
- **Bước 2:** Paykit khởi tạo yêu cầu thanh toán và gửi lại link trang thanh toán cho Merchant. 
- **Bước 3:** Merchant điều hướng buyer đến trang thanh thanh toán của Paykit. 
- **Bước 4:** Buyer thực hiện thanh toán trên trang thanh toán của Paykit. 
- **Bước 5:** Paykit gửi kết quả thanh toán cho Merchant thông qua đồng thời `success_url`/`cancel_url` và IPN.

> **Lưu ý**
> 
> Mô hình thanh toán thông qua Payment Page có một số hạn chế, phần lớn là bạn không thể tùy chỉnh quá nhiều trong trang thanh toán do Paykit cung cấp.
> 
> Tuy nhiên đây là một mô hình dễ tiếp cận nếu bạn mới bắt đầu, ưu tiên sự đơn giản, nhanh chóng và an toàn.