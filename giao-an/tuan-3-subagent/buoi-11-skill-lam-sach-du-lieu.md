# Buổi 11 - Skill làm sạch dữ liệu (giáo án chữa bài)

Tuần 3 - Thứ 2 | 45 phút | Claude Code | Buổi chốt mảng Skill.

**Format khác các buổi trước:** học viên tự làm trước, giảng viên chữa sau. Không hands-on song song.

| Phút | Việc |
|---|---|
| 0-5 | Phát đề, học viên đọc đề và mở file |
| 5-25 | Học viên tự làm. GV và trợ giảng đi vòng, chỉ gỡ tắc kỹ thuật, KHÔNG giải hộ |
| 25-42 | GV chữa bài theo chuỗi prompt bên dưới |
| 42-45 | Chốt Mức 2 |

## A. Chuẩn bị

- Đề bài: `tai-nguyen-hoc-vien/tuan-3-subagent/de-bai-buoi-11-lam-sach-du-lieu.md`
- File học viên làm: `tai-lieu-mau-don-hang-2026-ban-a.csv`
- **Đáp án (chỉ GV):** `giao-an/tuan-3-subagent/dap-an-loi-da-gieo.md` - mở sẵn để đối chiếu lúc chữa.
- Tự chạy trước trọn chuỗi prompt ở nhà.

## B. Chuỗi prompt chữa bài

Gõ lần lượt trên màn hình chia sẻ, sau mỗi bước cho lớp đối chiếu với bài của mình.

**Nguyên tắc:** các prompt dưới đây cố ý viết như của người **chưa biết gì về file** - không gợi ý sẵn có lỗi loại nào. Để máy tự tìm ra thì lớp mới thấy nó thật sự làm được việc. Giảng viên cầm file đáp án đối chiếu, chứ không đọc đáp án vào prompt.

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

## C. Bẫy cần chỉ ra khi chữa

| Bẫy | Dấu hiệu | Chốt |
|---|---|---|
| Xóa luôn dòng trùng gần đúng | File kết quả thiếu dòng so với đáp án | Xóa nhầm là mất đơn thật của công ty |
| Để AI tự đoán ngày kiểu mm/dd | Báo cáo không nhắc nhóm ngày mơ hồ | Đoán sai lệch cả báo cáo doanh số |
| Lấp ô trống bằng dữ liệu bịa | Cột email/điện thoại đầy đủ bất thường | Bịa dữ liệu nguy hơn để trống |
| Bỏ qua nhóm ngoại lệ | Báo cáo chỉ nói về định dạng | Định dạng sai dễ thấy, số liệu vô lý mới chết người |
| Mất dấu tiếng Việt hoặc mất cột | Mở file thấy lỗi font, đếm thiếu cột | Lưu CSV phải UTF-8 có BOM |
| Không có bước phân nhóm sửa/hỏi | Nhảy thẳng vào sửa hết | Đây là chỗ phân loại giỏi khá |

## D. Chấm nhanh

Đếm số dòng file kết quả của học viên (bản A gốc 500 dòng):

- **500 dòng**: chưa xử lý trùng lặp.
- **492 dòng**: xóa đúng 8 dòng trùng hoàn toàn - ĐẠT.
- **486 dòng**: xóa luôn 6 dòng trùng gần đúng - QUÁ TAY, trừ điểm nặng.

Riêng nhóm "ngày giao trước ngày đặt": cố ý gieo 9 dòng nhưng đếm thực tế trên file ra 14, vì đổi ngày sang kiểu mm/dd làm một số dòng vô tình đảo thứ tự. **Đừng bắt bẻ con số học viên báo** - chấm ở chỗ họ có phát hiện ra nhóm lỗi này không. Chi tiết trong file đáp án.

Thang điểm 10: có skill chạy được 2 . sửa đúng lỗi định dạng 3 . xử lý trùng đúng cách 2 . phát hiện ngoại lệ 2 . nêu rõ chỗ phải hỏi 1.

## E. Chốt Mức 2 (3 phút cuối)

Bốn cách có skill đã học: nhờ Claude đóng gói (B07) . tự sinh từ các lượt hỏi (B08-09) . cài skill viết sẵn (B10) . tự làm skill có phán đoán (B11).

Tuần sau lên Mức 3: nhiều trợ lý, mỗi con một vai, tự chuyển việc cho nhau.
