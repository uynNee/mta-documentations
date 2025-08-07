
Thanh toán là bước cuối cùng trong quy trình mua hàng, nơi khách hàng xác nhận đơn hàng và lựa chọn phương thức thanh toán. 
Sau khi tạo link thanh toán và chia sẻ, khách hàng sẽ nhận link và thực hiện thanh toán.
Một số thông tin dưới đây có thể sẽ giúp bạn hiểu hơn về cách thức hoạt động và tối ưu trải nghiệm thanh toán cho khách hàng.

## 1. Giao diện trang thanh toán

![payment link page](assets/images/payment-link-page.png)

![payment page](assets/images/payment-page.png)

**Các thông tin hiển thị trên trang thanh toán**

| STT | Thông tin              | Định nghĩa                                                                                                      |
|:---:|:-----------------------|:----------------------------------------------------------------------------------------------------------------|
|  1  | Số tiền                | Số tiền khách hàng cần thanh toán cho đơn hàng                                                                  |
|  2  | Mã đơn hàng            | Mã do nhà bán hàng nhập khi tạo link thanh toán, giúp nhà bán hàng quản lý thanh toán theo đơn hàng dễ dàng hơn |
|  3  | Ghi chú                | Ghi chú đơn hàng, do nhà bán hàng nhập khi tạo link thanh toán                                                  |
|  4  | Thời hạn               | Thời gian còn lại cho phép thanh toán                                                                           |
|  5  | Phương thức thanh toán | Các phương thức chấp nhận để thanh toán                                                                         |

**Các tính năng chính trên trang thanh toán**

**1. Tuỳ chọn phương thức thanh toán:** Paykit cung cấp giải pháp cho phép khách hàng
thanh toán qua 03 phương thức chính: Thẻ quốc tế Visa/Mastercard/JCB, Thẻ nội địa NAPAS
và chuyển khoản VietQR.

> **Lưu ý:** Phương thức thanh toán hiển thị trên trang thanh toán sẽ phụ thuộc 
> vào Phương thức thanh toán chấp nhận khi nhà bán hàng thiết lập link thanh toán.

**2. Thanh toán đơn giản:** Khách hàng chỉ cần chọn phương thức thanh toán mong muốn,
kiểm tra thông tin và có thể thanh toán ngay mà không cần đăng ký tài khoản hay các
bổ sung khác.

## 2. Phương thức thanh toán chấp nhận

* **Thẻ quốc tế Visa/Mastercard/JCB** là thẻ thanh toán quốc tế, được phát hành bởi các Ngân hàng và Công ty Tài chính Việt Nam hoặc quốc tế liên kết với các Tổ chức thẻ quốc tế (Visa, Mastercard, JCB,…).

* **Thẻ nội địa NAPAS** hay còn gọi là thẻ ATM: là thẻ thanh toán nội địa, được phát hành bởi các Ngân hàng và Công ty Tài chính Việt Nam.

* **Chuyển khoản VietQR** là mã QR cho phép khách hàng chuyển tiền từ tài khoản/thẻ của mình tới một tài khoản/thẻ khác trong mạng lưới của NAPAS bằng cách quét mã QR.

Bạn có thể tìm hiểu thêm về cách mở phương thức thanh toán [tại đây](https://docs.paykit.vn/bat-dau/mo-phuong-thuc-chap-nhan-thanh-toan.html)

## 3. Quy trình thanh toán

Khách hàng khi truy cập vào link thanh toán có thể chọn một trong các phương thức thanh toán (PTTT) sau để tiến hành thanh toán.

### 3.1. Thanh toán bằng VietQR
Phương thức thanh toán phổ biến, nhanh chóng, tiện lợi và an toàn. Để thực hiện thanh toán bằng VietQR, khách hàng sẽ thực hiện những bước sau:
- Khách hàng chọn PTTT là "VietQR" và nhấn Thanh toán
- Hệ thống sẽ tạo mã QR tương ứng với giá trị đơn hàng
- Khách hàng có thể sử dụng ứng dụng ngân hàng hoặc ví điện tử chấp nhận thanh toán VietQR để quét mã QR
- Khách hàng xác nhận thanh toán trên ứng dụng
- Hệ thống ghi nhận thanh toán thành công và cập nhật trạng thái đơn hàng

> **Lưu ý:**
> Để đảm bảo ghi nhận giao dịch, khách hàng vui lòng không thoát trang cho đến khi giao dịch hoàn tất.

### 3.2. Thanh toán bằng thẻ Napas
Phương thức thanh toán phù hợp cho khách hàng sử dụng thẻ Napas, kết nối với nhiều ngân hàng nội dịa, an toàn và bảo mật.
- Khách hàng chọn PTTT là "Napas" và nhấn Thanh toán
- Hệ thống chuyển hướng sang trang thanh toán với Napas
- Khách hàng nhập thông tin thẻ ngân hàng (số thẻ, tên chủ thẻ, ngày hết hạn, CVV/CVC)
- Khách hàng xác thực giao dịch bằng mã OTP
- Hệ thống nhận thông tin thanh toán thành công và cập nhật trạng thái đơn hàng

> Mọi giao dịch đều được bảo mật theo tiêu chuẩn quốc tế PCI DSS v4.0


### 3.3. Thanh toán qua thẻ thanh toán quốc tế
Phương thức này hỗ trợ thanh toán bằng thẻ thanh toán quốc tế (Visa, Mastercard, JCB,...) đảm bảo an toàn và bảo mật.
- Khách hàng chọn PTTT là "Thẻ thanh toán quốc tế" và nhấn Thanh toán
- Hệ thống chuyển hướng khách hàng sang trang thanh toán với thẻ quốc tế
- Khách hàng nhập thông tin thẻ (số thẻ, ngày hết hạn, CVV/CVC).
- Khách hàng xác thực giao dịch
- Hệ thống nhận thông tin thanh toán thành công và cập nhật trạng thái đơn hàng

> Mọi giao dịch đều được bảo mật theo tiêu chuẩn quốc tế PCI DSS v4.0

## 4. Theo dõi và quản lý giao dịch

### 4.1. Theo dõi và quản lý

Bạn có thể quản lý danh sách các giao dịch thanh toán của cửa hàng trên nền tảng ứng dụng và website Paykit.

**Trên ứng dụng Paykit**

1. Đăng nhập vào tài khoản Paykit của bạn, chọn tab **Bán hàng** và nhấn **Giao dịch thanh toán**

2. Sau khi vào trang Giao dịch thanh toán, ứng dụng sẽ hiển thị danh sách các giao dịch phát sinh 
trong cửa hàng. Bạn có thể lọc danh sách theo trạng thái thanh toán để xem nhanh hơn.

**Trên website Paykit**

1. Đăng nhập vào tài khoản Paykit của bạn trên [website Paykit](https://merchant.paykit.vn/authentication/login)

2. Nhấn **Quản lý giao dịch** > **Giao dịch thanh toán**, khi đó hệ thống sẽ hiển thị danh sách 
các giao dịch phát sinh trong cửa hàng. Tại đây bạn có thể xem các thông tin liên quan đến 
giao dịch thanh toán và cũng có thể tạo giao dịch hoàn tiền.

### 4.2. Thông tin giao dịch

Hệ thống Paykit sẽ cung cấp các thông tin chi tiết cho từng giao dịch. Tham khảo bảng dưới đây 
để hiểu hơn về các thông tin này.

**Thông tin giao dịch**

| Thông tin | Định nghĩa |
|:---|:---|
| **Mã giao dịch** | Mã duy nhất để phân biệt các giao dịch thanh toán với nhau |
| **Trạng thái** | Trạng thái thanh toán của giao dịch |
| **Phương thức thanh toán** | Phương thức khách hàng sử dụng để thanh toán cho đơn hàng, phụ thuộc vào các phương thức bạn cho phép khi tạo đơn thanh toán. Tìm hiểu thêm về Phương thức thanh toán |
| **Mã thanh toán** | Mã tham chiếu cho giao dịch. Đại diện cho đơn hàng nếu bạn tích hợp API Paykit trên phần mềm thanh toán hoặc website cửa hàng; hoặc đại diện cho link thanh toán nếu bạn cho phép khách hàng thanh toán qua link thanh toán tạo trên Paykit. |
| **Tổng giá trị** | Tổng số tiền đơn hàng mà khách hàng cần phải thanh toán |
| **Số tiền ghi nhận thanh toán** | Số tiền thanh toán của khách hàng được hệ thống Paykit ghi nhận đến thời điểm hiện tại |
| **Thời gian thực hiện** | Thời gian bắt đầu giao dịch |
| **Thời gian hoàn tất** | Thời gian hoàn tất giao dịch |
| **Phí giao dịch** | Tổng của các phí, bao gồm phí thanh toán và phí xử lý giao dịch |
| **Ngôn ngữ trang thanh toán hiển thị** | Ngôn ngữ thể hiện trên trang thanh toán của khách hàng |

**Trạng thái giao dịch**

Tuỳ thuộc vào từng trường hợp, Paykit phân loại giao dịch thành các trạng thái giúp nhà bán hàng dễ nắm bắt thông tin và quản lý. Tham khảo bảng trạng thái dưới đây để hiểu rõ hơn:

| Trạng thái | Định nghĩa                                                                                                                                                                                                                                                |
|:---|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Chờ thanh toán** | Đang chờ khách hàng thanh toán đơn hàng                                                                                                                                                                                                                   |
| **Đang xử lý** | Hệ thống đang xử lý giao dịch                                                                                                                                                                                                                             |
| **Thanh toán một phần** | Khách hàng đã thanh toán một phần số tiền và chưa đủ giá trị đơn hàng. Trạng thái này chỉ xảy ra khi khách hàng sử dụng phương thức thanh toán qua chuyển khoản VietQR                                                                                    |
| **Thanh toán thành công** | Khách hàng thanh toán đầy đủ cho đơn hàng. Trong trường hợp khách hàng sử dụng phương thức thanh toán qua **Chuyển khoản VietQR** và **thanh toán thừa** số tiền nhiều hơn giá trị của đơn hàng, hệ thống vẫn trả về trạng thái **Thanh toán thành công** |
| **Hết hạn thanh toán** | Trang thanh toán hết hiệu lực                                                                                                                                                                                                                             |
| **Đã huỷ** | Giao dịch bị huỷ bởi nhà bán hàng hoặc bên thứ ba như Ngân hàng                                                                                                                                                                                           |
| **Thanh toán thất bại** | Hệ thống hoặc ngân hàng phát sinh lỗi trong quá trình xử lý giao dịch thanh toán                                                                                                                                                                          |

## 5. Biểu phí giao dịch
Để hiểu rõ hơn về các thông tin phí giao dịch, tìm hiểu [tại đây](https://docs.paykit.vn/bat-dau/phi.html)

