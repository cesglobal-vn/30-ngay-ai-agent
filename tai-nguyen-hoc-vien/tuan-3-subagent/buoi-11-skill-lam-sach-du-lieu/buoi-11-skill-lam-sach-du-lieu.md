# Skill làm sạch dữ liệu - Các câu lệnh (Buổi 11)

> **Công cụ:** Claude Code (đã cài từ buổi 08).
> **Chuẩn bị:** thư mục dự án, bên trong có file `buoi-11-don-hang-2026-ban-a.csv` (**giữ nguyên tên file**).
> **Cách dùng:** gõ lần lượt từng câu lệnh dưới đây (7 câu, khoảng 15 phút), đọc kết quả rồi sang câu tiếp theo ngay - đừng dán dồn nhiều câu một lúc.

---

## Bối cảnh

Anh chị vừa nhận file đơn hàng năm 2026 của công ty: 500 dòng, 21 cột, do nhiều người nhập tay suốt cả năm nên chất lượng không đồng đều. Sếp cần dùng file này để chốt doanh số cuối năm, và hỏi anh chị đúng một câu: **"File này có tin được không?"**

---

## Phần 1 - Làm sạch theo 7 bước

### Bước 1 - Mở file và quét từng cột

```
Tôi vừa nhận file buoi-11-don-hang-2026-ban-a.csv, chưa biết gì về nó. Đọc file và cho tôi biết: có bao nhiêu dòng, bao nhiêu cột, mỗi cột chứa loại thông tin gì. Sau đó kiểm tra TỪNG cột xem giá trị có đồng nhất về cách ghi không - cột nào bị lẫn nhiều kiểu ghi khác nhau thì liệt kê các kiểu đó kèm số dòng.
```

### Bước 2 - Trùng lặp

```
Trong file có dòng nào bị nhập trùng không? Cho tôi biết bạn dựa vào đâu để kết luận hai dòng là trùng nhau, liệt kê các cặp tìm được, và tách riêng ra nhóm cặp nào bạn không dám chắc chắn là trùng thật. Chưa xóa gì cả.
```

> Nhóm "trùng gần đúng, khác cách viết tên" là bẫy - không được tự xóa.

### Bước 3 - Hợp lý nghiệp vụ

```
Giờ bỏ qua chuyện định dạng. Kiểm tra xem dữ liệu có hợp lý về mặt nghiệp vụ bán hàng không: có dòng nào chứa con số hoặc mốc thời gian không thể xảy ra ngoài đời thật không? Chú ý kỹ cột tiền, cột số lượng, và quan hệ giữa hai cột ngày. Liệt kê từng loại kèm mã đơn.
```

### Bước 4 - Chia nhóm được sửa và nhóm phải hỏi (bước quan trọng nhất)

```
Chia các lỗi vừa tìm được thành 2 nhóm: nhóm bạn sửa được an toàn mà không cần hỏi tôi, và nhóm bắt buộc phải hỏi tôi trước khi sửa. Giải thích ngắn vì sao.
```

### Bước 5 - Làm sạch và viết báo cáo

```
Làm sạch file, chỉ xử lý nhóm an toàn. Giữ nguyên đủ 21 cột và giữ nguyên dấu tiếng Việt. Xuất ra don-hang-2026-da-lam-sach.csv, mã hóa UTF-8 có BOM. Nhóm cần hỏi thì giữ nguyên dòng và ghi lý do vào cột ghi_chu. Sau đó viết báo cáo làm sạch: đã sửa gì (từng loại, số dòng), đã giữ nguyên gì và vì sao, và danh sách dòng cần người xác nhận kèm mã đơn.
```

---

## Phần 2 - Đóng gói thành skill

### Bước 6 - Đóng gói

```
Đóng gói toàn bộ cách làm này thành skill lam-sach-du-lieu trong .claude/skills/. Sau này tôi chỉ nói "làm sạch file X" là bạn chạy đủ các bước trên, và luôn giữ quy tắc: nhóm cần hỏi thì không được tự sửa.
```

### Bước 7 - Chứng minh tái dùng - chỉ một câu

```
Làm sạch file buoi-11-don-hang-2026-ban-b.csv giúp tôi.
```

> So sánh: Phần 1 mất 5 lượt hỏi mới ra kết quả; file thứ hai này chỉ 1 câu, lại là file khác.

---

## Ba quy tắc bắt buộc

1. **Không tự ý xóa dòng khi chưa chắc chắn.**
2. **Không bịa dữ liệu để lấp ô trống.** Trống thì ghi rõ là trống.
3. **File kết quả giữ nguyên đủ 21 cột và giữ nguyên dấu tiếng Việt.**

## Bài tập về nhà

Chạy skill `lam-sach-du-lieu` trên một file dữ liệu thật của công ty mình (nhớ che thông tin nhạy cảm trước). Xem nó có tự nạp skill khi chỉ gõ "làm sạch file X" không, và đối chiếu xem nhóm "cần hỏi" nó liệt kê có đúng thực tế không.
