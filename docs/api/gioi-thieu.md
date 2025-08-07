# Tài liệu API Paykit

Paykit cung cấp bộ API dành cho các đối tác là nhà bán hàng hoặc nền tảng có nhu cầu tích hợp thanh toán trực tiếp vào hệ thống của mình. Điều kiện cần là đối tác phải có đội ngũ kỹ thuật thực hiện việc tích hợp.

Nếu bạn không muốn viết code, Paykit cung cấp giải pháp [Link thanh toán](https://docs.paykit.vn/tai-lieu/link-thanh-toan/tao-link.html) đơn giản và dễ sử dụng. Với Link thanh toán, bạn chỉ cần tạo liên kết thanh toán và chia sẻ với khách hàng ngay lập tức.

## Chế độ thử nghiệm

Trước khi tích hợp API chính thức, bạn có thể thử nghiệm đầy đủ các tính năng trong môi trường thử nghiệm của Paykit.

* **Bảo mật dữ liệu:** Môi trường thử nghiệm được tách biệt hoàn toàn với môi trường thật (Production), đảm bảo dữ liệu thực của bạn không bị ảnh hưởng.

* **Hướng dẫn sử dụng:** Đăng ký chế độ thử nghiệm theo [hướng dẫn tại đây](https://docs.paykit.vn/api/che-do-thu-nghiem/dang-ky-che-do-thu-nghiem.html).

## Các phiên bản API

API của Paykit sử dụng số phiên bản chính làm tiền tố trong URL của các endpoint (ví dụ: `/v2` tương thích với tất cả các phiên bản phụ như `v2.0`, `v2.1`, ...). Khi cập nhật API, Paykit luôn cố gắng duy trì tương thích ngược để không ảnh hưởng đến hệ thống đang dùng phiên bản cũ.

**Thay đổi tương thích ngược:**

  Các thay đổi dưới đây sẽ được phát hành dưới dạng phiên bản phụ và không làm gián đoạn hệ thống của bạn:

* Thêm API mới
* Thêm tham số tuỳ chọn vào các API hiện tại.
* Bổ sung thông tin trong phản hồi của API hiện có. 

**Thay đổi không tương thích ngược:**

  Trong trường hợp cần thay đổi không đảm bảo tương thích ngược, Paykit sẽ phát hành phiên bản chính mới và thông báo trước cho đối tác. Phiên bản cũ vẫn được hỗ trợ trong một khoảng thời gian, giúp bạn có thời gian cập nhật mà không làm gián đoạn dịch vụ.
