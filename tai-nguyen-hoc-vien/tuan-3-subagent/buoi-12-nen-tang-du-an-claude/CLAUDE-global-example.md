## Văn phong / Dấu câu (GLOBAL)

Khi tạo BẤT KỲ nội dung văn bản nào (tin nhắn chat, file markdown, tài liệu, comment code, commit message, báo cáo, script), dùng dấu câu ASCII thuần. Các ký tự kiểu chữ AI-style khiến nội dung trông rõ ràng là do máy tạo ra, và người dùng đã nêu rõ vấn đề này.

### Phạm vi áp dụng quy tắc này

Quy tắc này CHỈ áp dụng cho các ký tự dấu câu kiểu chữ (typographic punctuation marks). KHÔNG áp dụng cho dấu thanh/dấu phụ của ngôn ngữ (tone marks, accents) trên các từ thực tế. Bỏ dấu tiếng Việt / Pháp / Đức / Tây Ban Nha / v.v. là một LỖI (BUG), không phải tuân thủ quy tắc. Xem phần "KHÔNG được bỏ dấu ngôn ngữ" bên dưới.

**BẮT BUỘC thay bằng ký tự ASCII tương đương:**
- `—` (em-dash, U+2014) -> `-`
- `–` (en-dash, U+2013) -> `-`
- `→` (mũi tên phải, U+2192) -> `->`
- `←` (mũi tên trái, U+2190) -> `<-`
- `⇒` `⇐` (mũi tên đôi) -> `=>` `<=`
- `…` (dấu ba chấm, U+2026) -> `...`
- `"` `"` (dấu ngoặc kép cong, U+201C/U+201D) -> `"`
- `'` `'` (dấu nháy đơn cong, U+2018/U+2019) -> `'`
- `•` (bullet, U+2022) -> `-` (hoặc dùng list markdown `-`)

**Ngoại lệ (KHÔNG tự động chuyển đổi):**
- Bên trong chuỗi code/regex/test fixture nơi ký tự chính xác có ý nghĩa quan trọng.
- Khi chỉnh sửa văn bản do người dùng viết sẵn đã dùng các ký tự này - chỉ sửa phần BẠN đang thêm/tạo mới, không viết lại nguyên văn của người dùng trừ khi họ yêu cầu rõ ràng.
- Nội dung ngôn ngữ nước ngoài nơi kiểu chữ là một phần ý nghĩa (vd: tiếng Nhật `「」`).

Tư duy mặc định: gõ như một developer đang gõ trong terminal, không phải như tính năng tự sửa (autocorrect) của Word.

### KHÔNG được bỏ dấu ngôn ngữ (QUAN TRỌNG)

Dấu thanh tiếng Việt + ký tự có dấu trong các ngôn ngữ khác là MỘT PHẦN CỦA TỪ, không phải "kiểu chữ AI". Bỏ dấu sẽ tạo ra nội dung sai, thiếu chuyên nghiệp.

**BẮT BUỘC giữ nguyên các dấu này trong mọi văn bản tiếng Việt** (tin nhắn chat, chuỗi code, nhãn UI, thông báo lỗi, comment, commit message):

- Dấu thanh: `á à ả ã ạ` `ắ ằ ẳ ẵ ặ` `ấ ầ ẩ ẫ ậ` `é è ẻ ẽ ẹ` `ế ề ể ễ ệ` `í ì ỉ ĩ ị` `ó ò ỏ õ ọ` `ố ồ ổ ỗ ộ` `ớ ờ ở ỡ ợ` `ú ù ủ ũ ụ` `ứ ừ ử ữ ự` `ý ỳ ỷ ỹ ỵ`
- Chữ cái đặc biệt: `ă â đ ê ô ơ ư` (+ chữ hoa tương ứng)

**SAI (không được làm như vậy):**
```
"Toi thieu 2 ky tu"           // bị bỏ dấu từ "Tối thiểu 2 ký tự"
"Khong the chinh sua"          // bị bỏ dấu từ "Không thể chỉnh sửa"
"Vai tro he thong"             // bị bỏ dấu từ "Vai trò hệ thống"
"Da xoa nhan vien"             // bị bỏ dấu từ "Đã xóa nhân viên"
```

**ĐÚNG:**
```
"Tối thiểu 2 ký tự"
"Không thể chỉnh sửa"
"Vai trò hệ thống"
"Đã xóa nhân viên"
```

Nguyên tắc tương tự áp dụng cho tiếng Pháp (`é è ç à`), tiếng Đức (`ä ö ü ß`), tiếng Tây Ban Nha (`ñ á í`), v.v. - nếu ngôn ngữ đó có dấu, phải giữ nguyên.
