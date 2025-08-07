Paykit cung cấp một hệ thống quản trị và phân quyền linh hoạt, giúp bạn dễ dàng quản lý cửa hàng và phân chia quyền truy cập cho các thành viên trong đội ngũ. Bài viết này sẽ hướng dẫn bạn từng bước cách sử dụng các tính năng quản trị và phân quyền trên Paykit.

### Tại sao phải cần quản trị và phân quyền?

- **Tăng cường bảo mật:** Giúp bảo vệ thông tin quan trọng của cửa hàng.
- **Nâng cao hiệu quả làm việc:** Phân chia công việc rõ ràng, giúp mỗi thành viên tập trung vào nhiệm vụ của mình.
- **Linh hoạt trong quản lý:** Dễ dàng điều chỉnh quyền truy cập của từng thành viên theo nhu cầu.

## Các vai trò thành viên
Paykit giúp bạn phân quyền cho các vai trò thành viên như sau:

| Chức năng                                                       | Quản trị viên   | Quản lý bán hàng                        | Nhân viên bán hàng |
|-----------------------------------------------------------------|-----------------|-----------------------------------------|-------------------|
| Khởi tạo và đóng tài khoản Paykit                                | ☑️              |                                         |                   |
| Thiết lập tài khoản ngân hàng liên kết - cho việc rút tiền      | ☑️              |                                         |                   |
| Thiết lập thông số kỹ thuật<br>(API key/Webhook)                | ☑️              |                                         |                   |
| Thiết lập thông số bán hàng<br>(Bật tắt PTTT/Ngôn ngữ mặc định) | ☑️              | ☑️                                      |                   |
| Mời thành viên tham gia vào cửa hàng                            | ☑️              | ☑️<br>Chỉ có thể mời Nhân viên bán hàng |                   |
| Xóa thành viên khỏi cửa hàng                                    | ☑️              | ☑️<br>Chỉ có thể xóa Nhân viên bán hàng |                   |
| Thực hiện rút tiền                                              | ☑️              | ☑️                                      |                   |
| Thực hiện hoàn tiền                                             | ☑️              | ☑️                                      |                   |
| Xem số dư tài khoản Paykit                                      | ☑️              | ☑️                                      |                   |
| Tạo link thanh toán                                             | ☑️              | ☑️                                      | ☑️                 |
| Nhận thông báo biến động tăng và giảm số dư                     | ☑️              | ☑️                                      |☑️<br>Chỉ nhận thông báo biến động tăng|


***

## Các thao tác quản lý thành viên

### 1. Mời thành viên vào cửa hàng
Bạn có thể mời thêm thành viên khác vào cửa hàng của mình trên ứng dụng Paykit và phân quyền cho họ hỗ trợ thực hiện các công việc từ quản lý đến bán hàng.

> **Lưu ý:**
> Chỉ tài khoản có vai trò **Quản trị viên hoặc Quản lý bán hàng** mới có quyền mời thêm thành viên vào cửa hàng.


**Trên Paykit mobile app**

1. Đăng nhập vào tài khoản Paykit của bạn

2. Chọn **Cài đặt** > **Danh sách thành viên** > **Lời mời**

3. Chọn **Mời thành viên** > **Nhập email thành viên** muốn mời > **Tiếp tục**

   _Lưu ý: Nếu email của thành viên mới chưa có tài khoản đăng nhập, thành viên đó cần tải ứng dụng Paykit và thực hiện đăng ký với email tương ứng._

4. **Chọn vai trò** của thành viên mới > **Hoàn tất thêm thành viên**

**Trên Paykit web app**

1. Đăng nhập vào tài khoản Paykit của bạn trên [Paykit web app](https://merchant.paykit.vn/authentication/login)

2. Chọn **Quản lý tài khoản** > **Danh sách lời mời** > **Mời thành viên**

3. **Nhập email thành viên** muốn mời > **Chọn vai trò của thành viên mới** > **Cập nhật vai trò**

**Chờ thành viên mới xác nhận tham gia vào cửa hàng**

Sau khi bạn mời thành viên mới tham gia vào cửa hàng của bạn, bạn phải chờ họ xác nhận lời mời.

Paykit sẽ gửi thông báo Lời mời tham gia đến email của thành viên mới. Thành viên mới thực hiện đăng nhập tài khoản trên ứng dụng Paykit và **xác nhận**/**từ chối** lời mời.

***

### 2. Cập nhật vai trò thành viên

> **Lưu ý:**
> Chỉ tài khoản có vai trò **Quản trị viên hoặc/và Quản lý bán hàng** mới có quyền cập nhật vai trò của thành viên

**Trên Paykit mobile app**

1. Đăng nhập vào tài khoản Paykit của bạn

2. Chọn **Cài đặt** > **Danh sách thành viên** > **Thành viên** > **Chọn thành viên** muốn cập nhật vai trò

3. Chọn **Cập nhật vai trò** > **Chọn vai trò mới** cho thành viên > **Cập nhật**

**Trên Paykit web app**

1. Đăng nhập vào tài khoản Paykit của bạn trên [Paykit web app](https://merchant.paykit.vn/authentication/login)

2. Chọn **Quản lý tài khoản** > **Danh sách thành viên**

3. **Chọn thành viên** muốn cập nhật vai trò > Chọn vào biểu tượng (ba chấm) để cập nhật vai trò thành viên

***

### 3. Xóa thành viên

> **Lưu ý:**
> Chỉ tài khoản có vai trò **Quản trị viên hoặc/và Quản lý bán hàng** mới có quyền xóa thành viên khỏi cửa hàng.

**Trên Paykit mobile app**

1. Đăng nhập vào tài khoản Paykit của bạn

2. Chọn **Cài đặt** > **Danh sách thành viên** > **Thành viên** > **Chọn thành viên** muốn xóa

3. Chọn **Xóa** > **Xác nhận Xóa**

**Trên Paykit web app**

1. Đăng nhập vào tài khoản Paykit của bạn trên [Paykit web app](https://merchant.paykit.vn/authentication/login)

2. Chọn **Quản lý tài khoản** > **Danh sách thành viên**

3. **Chọn thành viên** muốn xóa > Chọn vào biểu tượng (ba chấm) để xóa thành viên

