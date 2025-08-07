# Xác thực

Để đảm bảo an toàn và bảo mật, tất cả các yêu cầu tới Paykit API đều phải tuân thủ quy định xác thực sau:

## Yêu cầu chung

*   **HTTPS:** Mọi yêu cầu API phải được thực hiện qua HTTPS. Các yêu cầu qua HTTP sẽ bị từ chối.
*   **Base URL:**
    *   **Live mode:** `https://merchant-api.paykit.vn/{main-version}` (Ví dụ: `https://merchant-api.paykit.vn/v2`)
    *   **Test mode:** `https://sandbox-merchant-api.paykit.vidiva-test.com/{main-version}` (Ví dụ: `https://sandbox-merchant-api.paykit.vidiva-test.com/v2`)
*   **Định danh:** Mỗi yêu cầu API cần được xác thực để Paykit có thể nhận diện người gọi. Các yêu cầu không xác thực sẽ không được xử lý.

## Phương thức xác thực

Paykit API sử dụng **API keys** để xác thực yêu cầu. Bạn có thể tạo và quản lý API keys trên Paykit Web App.

> **Lưu ý bảo mật**
> 
> Tuyệt đối không chia sẻ API keys với bất kỳ ai hoặc lưu trữ chúng trên các nền tảng không an toàn như GitHub, Bitbucket, hoặc mã client-side.


### Đối với Nhà bán hàng

Nếu bạn là Nhà bán hàng, bạn cần thêm các header sau vào API request:

| Header        | Kiểu dữ liệu | Mô tả                       |
| :------------- | :---------- | :---------------------------- |
| `api-key`      | String      | API key của client do merchant tạo |
| `secret-key`   | String      | Secret key của client do merchant tạo |

**Ví dụ (sử dụng curl):**

```bash linenums="1"
curl '{base-url}/v2/retrieve-payment' \
    -H 'api-key: B48D91A3B6F1234567890349EBC7EB9A' \
    -H 'secret-key: CCABF08A85D12345678900138A5B4FC6'
```

### Đối với Platform

Nếu bạn là Platform, bạn cần thêm các header sau vào API request:

| Header              | Kiểu dữ liệu | Mô tả                                    |
| :-------------------- | :---------- | :----------------------------------------- |
| `mid`                 | String      | ID của merchant                            |
| `merchant-api-key`    | String      | API key của merchant client               |
| `merchant-secret-key` | String      | Secret key của merchant client            |
| `platform-api-key`    | String      | API key của platform client               |
| `platform-secret-key` | String      | Secret key của platform client     |

**Ví dụ (sử dụng curl):**

```bash linenums="1"
curl '{base-url}/v2/retrieve-payment)' \
    -H 'mid: MA_123456' \
    -H 'merchant-api-key: B48D91A3B6F1234567890349EBC7EB9A' \
    -H 'merchant-secret-key: CCABF08A85D12345678900138A5B4FC6' \
    -H 'platform-api-key: B48D91A3B6F1234567890349EBC7EB9A' \
    -H 'platform-secret-key: CCABF08A85D12345678900138A5B4FC6'
```

> `platform-api-key` và `platform-secret-key` sẽ được trao đổi và thống nhất khi bạn đăng ký làm đối tác platform với Paykit. 