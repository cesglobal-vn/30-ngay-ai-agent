# BÀI THỰC HÀNH TẠI LỚP - Buổi 11: Skill làm sạch dữ liệu

Thời gian làm bài: 20 phút. Hết giờ mình chữa chung.

File làm bài: `tai-lieu-mau-don-hang-2026-ban-a.csv`

## Bối cảnh

Anh chị vừa nhận file đơn hàng năm 2026 của công ty: 500 dòng, 21 cột, do nhiều người nhập tay suốt cả năm nên chất lượng không đồng đều. Sếp cần dùng file này để chốt doanh số cuối năm, và hỏi anh chị đúng một câu: "File này có tin được không?"

## Phần 1 - Làm sạch và trả lời sếp

Dùng Claude Code xử lý file, rồi trả lời đủ 4 câu:

1. File này có những loại lỗi nào? Kể tên từng loại và cho biết mỗi loại khoảng bao nhiêu dòng.
2. Có bao nhiêu dòng trùng? Anh chị xử lý thế nào, và vì sao chọn cách đó?
3. Có dòng nào số liệu vô lý không - kiểu con số không thể xảy ra ngoài đời thật?
4. Chỗ nào anh chị không dám tự sửa, phải hỏi lại người phụ trách? Vì sao?

Câu 4 là câu quan trọng nhất của cả bài, đừng bỏ qua.

## Phần 2 - Đóng gói thành skill

Việc vừa làm ở Phần 1 không phải làm một lần rồi thôi. Tháng sau lại có file đơn hàng mới, quý sau lại có file danh sách khách của phòng khác, và lần nào cũng đúng ngần ấy loại lỗi. Không đóng gói thì lần sau anh chị phải ngồi hỏi lại từ đầu ngần ấy câu, mà sót một câu là sót nguyên một loại lỗi. Đóng gói rồi thì lần sau chỉ cần gõ một câu "Làm sạch file X giúp tôi" là nó tự chạy đủ các bước. Thêm nữa, cả phòng dùng chung một skill thì ai làm cũng ra cùng một chuẩn, số liệu ghép lại mới khớp nhau.

Việc cần làm:

1. Nhìn lại Phần 1 xem anh chị đã phải hỏi những câu nào. Chính những câu đó là nội dung của skill.
2. Bảo Claude đóng gói lại thành skill tên `lam-sach-du-lieu` trong dự án của mình, đúng cách đã học ở buổi 8.
3. Thử lại ngay: gõ đúng một câu "Làm sạch file ... giúp tôi" trên chính file đó, xem nó có tự chạy đủ các bước không.

## Ba quy tắc bắt buộc

1. Không tự ý xóa dòng khi chưa chắc chắn. Thà giữ lại và ghi chú "cần xác nhận" còn hơn xóa nhầm một đơn hàng thật của công ty.
2. Không bịa dữ liệu để lấp ô trống. Trống thì ghi rõ là trống.
3. File kết quả giữ nguyên đủ 21 cột và giữ nguyên dấu tiếng Việt.

## Nếu bí quá

Bắt đầu bằng câu đơn giản nhất: "Đọc file tai-lieu-mau-don-hang-2026-ban-a.csv và cho tôi biết dữ liệu này đang có vấn đề gì."

Rồi hỏi sâu từng khía cạnh một, mỗi lần một câu: định dạng có lộn xộn không, có dòng nào trùng nhau không, có con số nào vô lý không. Thấy kết quả đủ dùng rồi thì sang Phần 2.

Nhớ: làm sạch giỏi không phải là sửa được nhiều nhất, mà là biết chỗ nào không được phép tự sửa.
