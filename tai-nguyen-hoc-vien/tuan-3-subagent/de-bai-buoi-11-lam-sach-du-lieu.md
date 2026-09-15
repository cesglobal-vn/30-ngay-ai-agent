# Skill làm sạch dữ liệu - Các câu lệnh (Buổi 11)

> **Công cụ:** Claude Code (đã cài từ buổi 08).
> **Chuẩn bị:** thư mục dự án, bên trong có file `tai-lieu-mau-don-hang-2026-ban-a.csv` (**giữ nguyên tên file**).
> **Cách dùng:** gõ lần lượt từng câu lệnh dưới đây, đọc kỹ kết quả Claude trả về trước khi sang câu tiếp theo - đừng dán dồn nhiều câu một lúc.

---

## Bối cảnh

Anh chị vừa nhận file đơn hàng năm 2026 của công ty: 500 dòng, 21 cột, do nhiều người nhập tay suốt cả năm nên chất lượng không đồng đều. Sếp cần dùng file này để chốt doanh số cuối năm, và hỏi anh chị đúng một câu: **"File này có tin được không?"**

---

## Phần 1 - Làm sạch theo 10 bước

### Bước 1 - Mở file lần đầu

```
Tôi vừa nhận file tai-lieu-mau-don-hang-2026-ban-a.csv, chưa biết gì về nó. Đọc file và cho tôi biết: có bao nhiêu dòng, bao nhiêu cột, mỗi cột chứa loại thông tin gì, và dữ liệu này nhìn chung có sạch không.
```

### Bước 2 - Bắt Claude tự quét mọi cột

```
Kiểm tra TỪNG cột xem các giá trị có đồng nhất về cách ghi không. Cột nào đang bị lẫn nhiều kiểu ghi khác nhau thì liệt kê các kiểu đó ra, kèm số dòng của mỗi kiểu.
```

### Bước 3 - Chỗ Claude không dám chắc

```
Nếu bây giờ tôi bảo bạn chuẩn hóa toàn bộ cột ngày về dd/mm/yyyy, có dòng nào bạn KHÔNG thể chắc chắn là mình hiểu đúng ý người nhập không? Liệt kê ra và giải thích vì sao.
```

> Đây là câu hay bị bỏ qua nhất khi tự làm sạch bằng tay: ngày kiểu Mỹ (mm/dd) đọc kiểu nào cũng "hợp lệ" nhưng có thể sai hoàn toàn ý người nhập. Loại này máy không được tự quyết, phải hỏi lại người nhập.

### Bước 4 - Trùng lặp

```
Trong file có dòng nào bị nhập trùng không? Cho tôi biết bạn dựa vào đâu để kết luận hai dòng là trùng nhau, rồi liệt kê các cặp tìm được. Chưa xóa gì cả.
```

Hỏi tiếp để tách nhóm chưa chắc chắn:

```
Trong các cặp vừa liệt kê, có cặp nào bạn không dám chắc chắn là trùng thật không? Tách riêng nhóm đó ra.
```

### Bước 5 - Hợp lý nghiệp vụ

```
Giờ bỏ qua chuyện định dạng. Kiểm tra xem dữ liệu có hợp lý về mặt nghiệp vụ bán hàng không: có dòng nào chứa con số hoặc mốc thời gian không thể xảy ra ngoài đời thật không? Liệt kê từng loại kèm mã đơn.
```

Nếu Claude bỏ sót loại nào, hỏi thêm:

```
Kiểm tra kỹ lại cột tiền, cột số lượng, và quan hệ giữa hai cột ngày.
```

> Đây là thứ đọc tay 500 dòng gần như không ai thấy - máy làm chính xác hơn hẳn ở khoản này.

### Bước 6 - Chia nhóm được sửa và nhóm phải hỏi (bước quan trọng nhất)

```
Chia các lỗi vừa tìm được thành 2 nhóm: nhóm bạn sửa được an toàn mà không cần hỏi tôi, và nhóm bắt buộc phải hỏi tôi trước khi sửa. Giải thích ngắn vì sao.
```

> Bỏ qua bước này là "làm sạch mù" - sửa hết mà không biết chỗ nào mình đang tự quyết thay người khác.

### Bước 7 - Làm sạch thật

```
Làm sạch file, chỉ xử lý nhóm an toàn. Giữ nguyên đủ 21 cột và giữ nguyên dấu tiếng Việt. Xuất ra don-hang-2026-da-lam-sach.csv, mã hóa UTF-8 có BOM. Nhóm cần hỏi thì giữ nguyên dòng và ghi lý do vào cột ghi_chu.
```

### Bước 8 - Báo cáo gửi sếp

```
Viết báo cáo làm sạch: đã sửa gì (từng loại, số dòng), đã giữ nguyên gì và vì sao, và danh sách dòng cần người xác nhận kèm mã đơn.
```

**Tự nghiệm thu:** báo cáo phải trả lời đủ 4 câu - file có những loại lỗi nào (kèm số dòng); có bao nhiêu dòng trùng và xử lý ra sao; có số liệu nào vô lý không; chỗ nào không dám tự sửa phải hỏi lại. **Câu cuối là câu quan trọng nhất, đừng để Claude bỏ qua.**

---

## Phần 2 - Đóng gói thành skill

Việc vừa làm ở Phần 1 không phải làm một lần rồi thôi. Tháng sau lại có file đơn hàng mới, quý sau lại có file danh sách khách của phòng khác, và lần nào cũng đúng ngần ấy loại lỗi. Không đóng gói thì lần sau anh chị phải hỏi lại từ đầu ngần ấy câu, mà sót một câu là sót nguyên một loại lỗi. Đóng gói rồi thì lần sau chỉ cần gõ một câu là nó tự chạy đủ các bước.

### Bước 9 - Đóng gói

```
Đóng gói toàn bộ cách làm này thành skill lam-sach-du-lieu trong .claude/skills/. Sau này tôi chỉ nói "làm sạch file X" là bạn chạy đủ các bước trên, và luôn giữ quy tắc: nhóm cần hỏi thì không được tự sửa.
```

### Bước 10 - Chứng minh tái dùng - chỉ một câu

```
Làm sạch file tai-lieu-mau-don-hang-2026-ban-b.csv giúp tôi.
```

> So sánh: Phần 1 mất gần chục lượt hỏi mới ra kết quả; file thứ hai này chỉ 1 câu, lại là file khác. Đó là toàn bộ giá trị của việc đóng gói skill.

---

## Ba quy tắc bắt buộc

1. **Không tự ý xóa dòng khi chưa chắc chắn.** Thà giữ lại và ghi chú "cần xác nhận" còn hơn xóa nhầm một đơn hàng thật của công ty.
2. **Không bịa dữ liệu để lấp ô trống.** Trống thì ghi rõ là trống.
3. **File kết quả giữ nguyên đủ 21 cột và giữ nguyên dấu tiếng Việt.**

## Bẫy nên tự kiểm lại trước khi coi là xong

| Bẫy | Dấu hiệu | Vì sao nguy hiểm |
|---|---|---|
| Xóa luôn dòng trùng gần đúng (chỉ khác cách viết tên) | File kết quả thiếu dòng | Có thể mất một đơn hàng thật, không phải bản trùng |
| Để Claude tự đoán ngày kiểu mm/dd | Báo cáo không nhắc nhóm ngày mơ hồ | Đoán sai lệch cả báo cáo doanh số |
| Lấp ô trống bằng dữ liệu bịa | Cột email/điện thoại đầy đủ bất thường | Bịa dữ liệu nguy hiểm hơn để trống |
| Bỏ qua nhóm ngoại lệ nghiệp vụ | Báo cáo chỉ nói về định dạng | Định dạng sai dễ thấy, số liệu vô lý mới thật sự chết người |
| Mất dấu tiếng Việt hoặc mất cột | Mở file thấy lỗi font, đếm thiếu cột | Lưu CSV phải UTF-8 có BOM |
| Không có bước phân nhóm sửa/hỏi | Nhảy thẳng vào sửa hết | Đây là chỗ phân biệt làm sạch giỏi và làm sạch ẩu |

## Bài tập về nhà

Chạy skill `lam-sach-du-lieu` trên một file dữ liệu thật của công ty mình (nhớ che thông tin nhạy cảm trước). Xem nó có tự nạp skill khi chỉ gõ "làm sạch file X" không, và đối chiếu xem nhóm "cần hỏi" nó liệt kê có đúng thực tế không.
