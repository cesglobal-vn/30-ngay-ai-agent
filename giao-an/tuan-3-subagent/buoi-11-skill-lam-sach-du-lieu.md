# Buổi 11 - Skill làm sạch dữ liệu (giáo án hands-on)

Tuần 3 - Thứ 2 | 45 phút | Claude Code | Buổi chốt mảng Skill.

**Hands-on song song như mọi buổi khác:** học viên đã có sẵn đủ 10 câu lệnh trong file phát `de-bai-buoi-11-lam-sach-du-lieu.md`. Giảng viên gõ trước trên màn hình chia sẻ, học viên gõ theo trên file của mình, dừng lại đối chiếu sau mỗi bước rồi mới qua bước sau.

| Phút | Việc |
|---|---|
| 0-5 | Giới thiệu bối cảnh (file đơn hàng 500 dòng, sếp hỏi "file này có tin được không?"), phát file câu lệnh |
| 5-38 | Cùng làm theo chuỗi 10 câu lệnh (Phần B), mỗi bước đối chiếu kết quả trước khi qua bước tiếp |
| 38-42 | Điểm lại các bẫy thường gặp (Phần C) |
| 42-45 | Chốt Mức 2 |

## A. Chuẩn bị

- File phát học viên: `tai-nguyen-hoc-vien/tuan-3-subagent/de-bai-buoi-11-lam-sach-du-lieu.md` - đã có sẵn đủ 10 câu lệnh, học viên copy-dán theo, không cần tự nghĩ prompt.
- File học viên làm: `tai-lieu-mau-don-hang-2026-ban-a.csv`
- **Đáp án lỗi đã gieo (chỉ GV):** `giao-an/tuan-3-subagent/dap-an-loi-da-gieo.md` - dùng để đối chiếu nhanh khi học viên báo kết quả từng bước.
- Tự chạy trước trọn chuỗi prompt ở nhà.

## B. Chuỗi prompt cùng làm với học viên

Gõ trước trên màn hình chia sẻ, học viên gõ theo ngay trên file của mình, sau mỗi bước dừng lại cho lớp đối chiếu kết quả.

**Nguyên tắc:** các prompt dưới đây cố ý viết như của người **chưa biết gì về file** - không gợi ý sẵn có lỗi loại nào, để cả lớp thấy Claude tự tìm ra vấn đề thật sự. Giảng viên cầm file đáp án đối chiếu, không đọc đáp án thành lời trước khi học viên tự thấy kết quả của mình.

**1. Mở file lần đầu**

```
Tôi vừa nhận file tai-lieu-mau-don-hang-2026-ban-a.csv, chưa biết gì về nó. Đọc file và cho tôi biết: có bao nhiêu dòng, bao nhiêu cột, mỗi cột chứa loại thông tin gì, và dữ liệu này nhìn chung có sạch không.
```

**2. Bắt nó tự quét mọi cột**

```
Kiểm tra TỪNG cột xem các giá trị có đồng nhất về cách ghi không. Cột nào đang bị lẫn nhiều kiểu ghi khác nhau thì liệt kê các kiểu đó ra, kèm số dòng của mỗi kiểu.
```

Cố ý không liệt kê tên cột, để nó tự soi đủ 21 cột. Đối chiếu đáp án ở bước này.

**3. Chỗ nó không dám chắc**

```
Nếu bây giờ tôi bảo bạn chuẩn hóa toàn bộ cột ngày về dd/mm/yyyy, có dòng nào bạn KHÔNG thể chắc chắn là mình hiểu đúng ý người nhập không? Liệt kê ra và giải thích vì sao.
```

Đây là chỗ bẫy ngày kiểu Mỹ tự lộ ra mà mình không phải mách. Chốt: loại này máy không được tự quyết, phải hỏi người nhập.

**4. Trùng lặp - để nó tự định nghĩa thế nào là trùng**

```
Trong file có dòng nào bị nhập trùng không? Cho tôi biết bạn dựa vào đâu để kết luận hai dòng là trùng nhau, rồi liệt kê các cặp tìm được. Chưa xóa gì cả.
```

Hỏi tiếp để nhóm bẫy tự tách ra:

```
Trong các cặp vừa liệt kê, có cặp nào bạn không dám chắc chắn là trùng thật không? Tách riêng nhóm đó ra.
```

**5. Hợp lý nghiệp vụ - điểm nhấn của buổi**

```
Giờ bỏ qua chuyện định dạng. Kiểm tra xem dữ liệu có hợp lý về mặt nghiệp vụ bán hàng không: có dòng nào chứa con số hoặc mốc thời gian không thể xảy ra ngoài đời thật không? Liệt kê từng loại kèm mã đơn.
```

Nếu nó bỏ sót loại nào, gợi thêm mà vẫn không nói thẳng lỗi gì:

```
Kiểm tra kỹ lại cột tiền, cột số lượng, và quan hệ giữa hai cột ngày.
```

Chốt: đây là thứ đọc tay 500 dòng không ai thấy.

**6. Chia nhóm được sửa và nhóm phải hỏi**

```
Chia các lỗi vừa tìm được thành 2 nhóm: nhóm bạn sửa được an toàn mà không cần hỏi tôi, và nhóm bắt buộc phải hỏi tôi trước khi sửa. Giải thích ngắn vì sao.
```

Chốt: đây là câu 4 của đề bài. Ai không có bước này là làm sạch mù.

**7. Làm sạch thật**

```
Làm sạch file, chỉ xử lý nhóm an toàn. Giữ nguyên đủ 21 cột và giữ nguyên dấu tiếng Việt. Xuất ra don-hang-2026-da-lam-sach.csv, mã hóa UTF-8 có BOM. Nhóm cần hỏi thì giữ nguyên dòng và ghi lý do vào cột ghi_chu.
```

**8. Báo cáo gửi sếp**

```
Viết báo cáo làm sạch: đã sửa gì (từng loại, số dòng), đã giữ nguyên gì và vì sao, và danh sách dòng cần người xác nhận kèm mã đơn.
```

**9. Đóng gói**

```
Đóng gói toàn bộ cách làm này thành skill lam-sach-du-lieu trong .claude/skills/. Sau này tôi chỉ nói "làm sạch file X" là bạn chạy đủ các bước trên, và luôn giữ quy tắc: nhóm cần hỏi thì không được tự sửa.
```

**10. Chứng minh tái dùng - một câu duy nhất**

```
Làm sạch file tai-lieu-mau-don-hang-2026-ban-b.csv giúp tôi.
```

Chốt: nãy gần chục lượt mới ra, giờ 1 câu, lại còn trên file khác. Đó là lý do phải đóng gói.

## C. Bẫy cần chỉ ra khi cả lớp đối chiếu kết quả

| Bẫy | Dấu hiệu | Chốt |
|---|---|---|
| Xóa luôn dòng trùng gần đúng | File kết quả thiếu dòng so với đáp án | Xóa nhầm là mất đơn thật của công ty |
| Để AI tự đoán ngày kiểu mm/dd | Báo cáo không nhắc nhóm ngày mơ hồ | Đoán sai lệch cả báo cáo doanh số |
| Lấp ô trống bằng dữ liệu bịa | Cột email/điện thoại đầy đủ bất thường | Bịa dữ liệu nguy hơn để trống |
| Bỏ qua nhóm ngoại lệ | Báo cáo chỉ nói về định dạng | Định dạng sai dễ thấy, số liệu vô lý mới chết người |
| Mất dấu tiếng Việt hoặc mất cột | Mở file thấy lỗi font, đếm thiếu cột | Lưu CSV phải UTF-8 có BOM |
| Không có bước phân nhóm sửa/hỏi | Nhảy thẳng vào sửa hết | Đây là chỗ phân loại giỏi khá |

## D. Đối chiếu kết quả nhanh

Đếm số dòng file kết quả (bản A gốc 500 dòng) để biết cả lớp đã theo đúng tới đâu:

- **500 dòng**: chưa xử lý trùng lặp - dừng lại, làm lại Bước 7.
- **492 dòng**: xóa đúng 8 dòng trùng hoàn toàn - đúng.
- **486 dòng**: xóa luôn 6 dòng trùng gần đúng - QUÁ TAY, nhắc lại Bước 4 (nhóm chưa chắc chắn không được tự xóa).

Riêng nhóm "ngày giao trước ngày đặt": cố ý gieo 9 dòng nhưng đếm thực tế trên file ra 14, vì đổi ngày sang kiểu mm/dd làm một số dòng vô tình đảo thứ tự. **Đừng bắt bẻ con số học viên báo** - quan trọng là họ có nhận ra nhóm lỗi này ở Bước 3 không. Chi tiết trong file đáp án.

## E. Chốt Mức 2 (3 phút cuối)

Bốn cách có skill đã học: nhờ Claude đóng gói (B07) . tự sinh từ các lượt hỏi (B08-09) . cài skill viết sẵn (B10) . tự làm skill có phán đoán (B11).

Tuần sau lên Mức 3: nhiều trợ lý, mỗi con một vai, tự chuyển việc cho nhau.
