# Buổi 11 - Skill làm sạch dữ liệu (giáo án hands-on, rút gọn)

Tuần 3 - Thứ 2 | 45 phút | Claude Code | Buổi chốt mảng Skill.

**Hands-on song song như mọi buổi khác:** học viên đã có sẵn đủ 7 câu lệnh trong file phát `buoi-11-skill-lam-sach-du-lieu.md`. Giảng viên gõ trước trên màn hình chia sẻ, học viên gõ theo trên file của mình.

**Chạy liên tục, không dừng thảo luận giữa chừng** - mỗi bước chỉ chốt 1 câu ngắn rồi qua bước sau ngay. Phần giảng thêm/thảo luận sâu là việc riêng của giảng viên, không nằm trong 20 phút chạy prompt này.

| Phút | Việc |
|---|---|
| 0-5 | Giới thiệu bối cảnh (file đơn hàng 500 dòng, sếp hỏi "file này có tin được không?"), phát file câu lệnh |
| 5-20 | **Cùng làm 7 câu lệnh (Phần B) - 15 phút**, chốt nhanh 1 câu mỗi bước, không dừng thảo luận |
| 20-45 | Dành cho giảng viên (giảng thêm, bài tập, phần khác của buổi - ngoài phạm vi giáo án này) |

## A. Chuẩn bị

- File phát học viên: `tai-nguyen-hoc-vien/tuan-3-subagent/buoi-11-skill-lam-sach-du-lieu/buoi-11-skill-lam-sach-du-lieu.md` - đã có sẵn đủ 7 câu lệnh, học viên copy-dán theo.
- File học viên làm: `buoi-11-don-hang-2026-ban-a.csv`
- **Đáp án lỗi đã gieo (chỉ GV, đọc trước ở nhà):** `giao-an/tuan-3-subagent/buoi-11-dap-an-loi-da-gieo.md`.
- Tự chạy trước trọn chuỗi prompt ở nhà, canh giờ để biết 15 phút có đủ không với tốc độ lớp mình.

## B. Chuỗi 7 câu lệnh cùng làm với học viên (15 phút)

Gõ trước trên màn hình chia sẻ, học viên gõ theo ngay trên file của mình. Mỗi bước chỉ chốt 1 câu, không mở rộng thảo luận - giữ nhịp nhanh.

**Nguyên tắc:** các prompt dưới đây cố ý viết như của người **chưa biết gì về file** - không gợi ý sẵn có lỗi loại nào.

**1. Mở file và quét từng cột**

```
Tôi vừa nhận file buoi-11-don-hang-2026-ban-a.csv, chưa biết gì về nó. Đọc file và cho tôi biết: có bao nhiêu dòng, bao nhiêu cột, mỗi cột chứa loại thông tin gì. Sau đó kiểm tra TỪNG cột xem giá trị có đồng nhất về cách ghi không - cột nào bị lẫn nhiều kiểu ghi khác nhau thì liệt kê các kiểu đó kèm số dòng.
```

Chốt (1 câu): số cột/dòng đúng chưa.

**2. Trùng lặp - để nó tự định nghĩa thế nào là trùng**

```
Trong file có dòng nào bị nhập trùng không? Cho tôi biết bạn dựa vào đâu để kết luận hai dòng là trùng nhau, liệt kê các cặp tìm được, và tách riêng ra nhóm cặp nào bạn không dám chắc chắn là trùng thật. Chưa xóa gì cả.
```

Chốt: nhóm "trùng gần đúng, khác cách viết tên" không được tự xóa.

**3. Hợp lý nghiệp vụ**

```
Giờ bỏ qua chuyện định dạng. Kiểm tra xem dữ liệu có hợp lý về mặt nghiệp vụ bán hàng không: có dòng nào chứa con số hoặc mốc thời gian không thể xảy ra ngoài đời thật không? Chú ý kỹ cột tiền, cột số lượng, và quan hệ giữa hai cột ngày. Liệt kê từng loại kèm mã đơn.
```

Chốt: đây là thứ đọc tay 500 dòng không ai thấy.

**4. Chia nhóm được sửa và nhóm phải hỏi (bước quan trọng nhất)**

```
Chia các lỗi vừa tìm được thành 2 nhóm: nhóm bạn sửa được an toàn mà không cần hỏi tôi, và nhóm bắt buộc phải hỏi tôi trước khi sửa. Giải thích ngắn vì sao.
```

Chốt: ai không có bước này là làm sạch mù.

**5. Làm sạch và viết báo cáo**

```
Làm sạch file, chỉ xử lý nhóm an toàn. Giữ nguyên đủ 21 cột và giữ nguyên dấu tiếng Việt. Xuất ra don-hang-2026-da-lam-sach.csv, mã hóa UTF-8 có BOM. Nhóm cần hỏi thì giữ nguyên dòng và ghi lý do vào cột ghi_chu. Sau đó viết báo cáo làm sạch: đã sửa gì (từng loại, số dòng), đã giữ nguyên gì và vì sao, và danh sách dòng cần người xác nhận kèm mã đơn.
```

**6. Đóng gói**

```
Đóng gói toàn bộ cách làm này thành skill lam-sach-du-lieu trong .claude/skills/. Sau này tôi chỉ nói "làm sạch file X" là bạn chạy đủ các bước trên, và luôn giữ quy tắc: nhóm cần hỏi thì không được tự sửa.
```

**7. Chứng minh tái dùng - một câu duy nhất**

```
Làm sạch file buoi-11-don-hang-2026-ban-b.csv giúp tôi.
```

Chốt: nãy 5 lượt mới ra, giờ 1 câu, lại còn trên file khác. Đó là lý do phải đóng gói.

## C. Phụ lục cho GV (đọc trước ở nhà, không dùng trong 15 phút chạy prompt)

### Bẫy cần biết

| Bẫy | Dấu hiệu | Chốt |
|---|---|---|
| Xóa luôn dòng trùng gần đúng | File kết quả thiếu dòng so với đáp án | Xóa nhầm là mất đơn thật của công ty |
| Để AI tự đoán ngày kiểu mm/dd | Báo cáo không nhắc nhóm ngày mơ hồ | Đoán sai lệch cả báo cáo doanh số |
| Lấp ô trống bằng dữ liệu bịa | Cột email/điện thoại đầy đủ bất thường | Bịa dữ liệu nguy hơn để trống |
| Bỏ qua nhóm ngoại lệ | Báo cáo chỉ nói về định dạng | Định dạng sai dễ thấy, số liệu vô lý mới chết người |
| Mất dấu tiếng Việt hoặc mất cột | Mở file thấy lỗi font, đếm thiếu cột | Lưu CSV phải UTF-8 có BOM |
| Không có bước phân nhóm sửa/hỏi | Nhảy thẳng vào sửa hết | Đây là chỗ phân loại giỏi khá |

### Đối chiếu kết quả nhanh (nếu cần chấm)

Đếm số dòng file kết quả (bản A gốc 500 dòng):

- **500 dòng**: chưa xử lý trùng lặp.
- **492 dòng**: xóa đúng 8 dòng trùng hoàn toàn - đúng.
- **486 dòng**: xóa luôn 6 dòng trùng gần đúng - QUÁ TAY.

Riêng nhóm "ngày giao trước ngày đặt": cố ý gieo 9 dòng nhưng đếm thực tế trên file ra 14, vì đổi ngày sang kiểu mm/dd làm một số dòng vô tình đảo thứ tự. Chi tiết trong file đáp án.

## D. Chốt Mức 2 (chèn vào cuối buổi, tùy giảng viên sắp xếp giờ)

Bốn cách có skill đã học: nhờ Claude đóng gói (B07) . tự sinh từ các lượt hỏi (B08-09) . cài skill viết sẵn (B10) . tự làm skill có phán đoán (B11).

Tuần sau lên Mức 3: nhiều trợ lý, mỗi con một vai, tự chuyển việc cho nhau.
