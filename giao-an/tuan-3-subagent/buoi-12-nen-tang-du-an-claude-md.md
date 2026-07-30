# Buổi 12: Dạy Claude biết bạn là ai và dựng thư mục làm việc

> Cách dùng file này: mỗi phần có hai khúc. Khúc **Lý thuyết** đọc để hiểu mình sắp làm gì
> và vì sao, có ví von cho dễ nhớ. Khúc **Thao tác** là các bước có sẵn prompt, cứ copy dán
> vào Claude Code.
>
> Làm lần lượt, không nhảy cóc. Bước sau dùng kết quả bước trước.
>
> Trước khi bắt đầu: mở Claude Code đúng tại thư mục làm việc của bạn (thư mục đã dùng từ
> buổi 8). Gõ `ls` để chắc chắn đang đứng đúng chỗ.
>
> Ba phần, đi từ dễ tới khó:
> - Phần A: dạy Claude biết bạn là ai (CLAUDE.md)
> - Phần B: dựng cấu trúc thư mục cho cả khóa
> - Phần C: ghi mục lục để Claude tìm file nhanh

## Nhịp buổi

| Phần | Nội dung | Phút | Dạng | Bước |
|---|---|---|---|---|
| A | Dạy Claude biết bạn là ai | 22' | LT 6' + HV 16' | 1-4 |
| B | Dựng cấu trúc thư mục cho cả khóa | 11' | LT 4' + HV 7' | 5 |
| C | Ghi mục lục để Claude tìm file nhanh | 9' | LT 3' + HV 6' | 6-7 |
| | Dự phòng | 3' | | |

LT = giảng viên nói. HV = học viên tự làm. DEMO = giảng viên làm, học viên xem.

Ví dụ chạy xuyên suốt buổi (giảng viên demo trên màn hình): CES Global, đơn vị mở các chương
trình đào tạo AI cho người dùng và doanh nghiệp. Học viên làm song song với công việc thật
của mình.

---

## PHẦN A. Dạy Claude biết bạn là ai

### Lý thuyết

Hình dung bạn vừa tuyển một cộng tác viên rất giỏi, nhưng mới nhận việc sáng nay. Bạn chưa kịp nói gì đã bắt bạn ấy viết bài bán hàng ngay. Bài viết ra sai không phải vì bạn ấy dở, mà vì **chưa ai đưa cho bạn ấy tờ giới thiệu**: công ty bán gì, cho ai, giọng viết thế nào, từ nào cấm dùng.

Claude lúc mới mở ra cũng đúng như cộng tác viên đó. Nó thông minh, nhưng chưa biết gì về bạn.

**Tờ giới thiệu ấy, trong Claude Code, chính là file `CLAUDE.md`.** Bạn để nó ngay trong thư mục làm việc. Mỗi lần mở phiên, việc đầu tiên Claude làm là đọc nó, y như nhân viên mới tới bàn là cầm tờ giới thiệu đọc trước. Bạn không phải kể lại bối cảnh mỗi lần nữa.

Hai điều cần nhớ:

- **Chỉ đưa vào thứ luôn đúng cho mọi việc.** Bạn là ai, bán gì, giọng thế nào, từ cấm. Còn quy trình cho từng việc cụ thể thì để dành cho skill, tức là những thứ bạn đã đóng gói từ tuần 2.
- **Phép thử một câu:** viết xong bài nào, thử thay tên thương hiệu của bạn bằng tên một hãng bất kỳ. Nếu câu vẫn đúng, tức là câu đó chung chung, chưa dùng được. Bài tốt phải gắn chặt với chính thương hiệu bạn.

Một hiểu lầm hay gặp: nhiều người tưởng viết vào `CLAUDE.md` là Claude tuân tuyệt đối như luật. Không phải. Nó là gợi ý rất mạnh mà Claude đọc trước và bám theo, nhưng vẫn có thể lỡ tay sai, nhất là khi bạn viết mơ hồ. Nên viết rõ, và vẫn phải duyệt kết quả.

### Thao tác

**Bước 1. Chứng minh Claude đang chưa biết gì về bạn**

Để làm gì: thấy tận mắt vấn đề trước khi chữa.

Gõ vào Claude:

```
Viết cho tôi bài đăng Facebook bán hàng cho khóa học mới. Khóa học AI cho mọi người.
```

Bạn sẽ thấy: một bài chung chung, sai giọng, có khi bịa công dụng. Thử áp phép thử một câu: thay tên thương hiệu vào, bài vẫn đúng, tức là nó chưa biết gì về bạn.

Học viên không bán khóa học thì thay bằng sản phẩm hoặc dịch vụ chính của mình, giữ nguyên phần còn lại của câu.

---

**Bước 2. Nhờ Claude phỏng vấn rồi viết hồ sơ thương hiệu**

Để làm gì: tạo file `CLAUDE.md`. Bạn không tự gõ, để Claude hỏi rồi nó viết.

Gõ vào Claude:

```
Tôi muốn bạn viết cho tôi một file CLAUDE.md, đặt ngay trong thư mục này.
Đây là hồ sơ để bạn đọc trước mọi việc tôi giao.

Trước khi viết, hãy phỏng vấn tôi. Hỏi từng câu một, chờ tôi trả lời rồi mới
hỏi câu tiếp:
1. Tôi là ai, bán gì, cho khách nào.
2. Ba việc tôi làm đi làm lại mỗi tuần.
3. Giọng văn của tôi: xưng hô thế nào, có từ nào cấm dùng.
4. Tôi đăng hoặc gửi nội dung ở kênh nào.

Hỏi xong, tóm tắt lại cho tôi xác nhận. Tôi đồng ý rồi bạn mới viết file.
Viết ngắn, dưới 80 dòng.
```

Bạn sẽ thấy: Claude hỏi bạn từng câu, xong viết file `CLAUDE.md` trong thư mục.

Mẹo: trả lời thật, cụ thể. Đừng nói "giọng chuyên nghiệp", hãy nói "xưng shop, gọi khách là bạn, không dùng từ trị bệnh".

Bản demo của giảng viên trả lời như sau, chiếu lên cho lớp thấy mức độ cụ thể cần có:

```
Tôi là doanh nghiệp CES Global, tôi mở các chương trình đào tạo về AI cho
người dùng và doanh nghiệp

soạn nội dung khóa học
viết bài đăng quảng bá
trả lời tin nhắn
tư vấn khách hàng

xưng CES Global - anh/chị, không dùng từ sáo rỗng, cần văn phong kiểu lịch sự

Facebook, nhóm Zalo, email marketing
```

Nếu nó hỏi dồn cả 4 câu một lượt: gõ `Hỏi lại từ câu 1, mỗi lần chỉ một câu, chờ tôi trả lời.`

---

**Bước 3. Hỏi thẳng xem nó đã nhớ chưa**

Để làm gì: xác nhận Claude thật sự đã nạp hồ sơ, trước khi giao việc lại.

Gõ vào Claude:

```
Bạn có nhớ gì về tôi không?
```

Bạn sẽ thấy: Claude kể lại đúng bạn là ai, bán gì, giọng văn thế nào, kênh nào. Nó đọc những thứ đó từ `CLAUDE.md` chứ không phải nhớ từ đoạn chat vừa rồi.

---

**Bước 4. Kiểm tra Claude giờ đã hiểu bạn chưa**

Để làm gì: thấy sự khác biệt so với Bước 1.

Gõ vào Claude:

```
Viết cho tôi bài đăng Facebook bán hàng cho khóa học mới. Khóa học AI cho mọi người.
```

Bạn sẽ thấy: bài lần này khác hẳn, đúng giọng, đúng sản phẩm. Cùng một Claude, cùng một câu lệnh, khác nhau ở chỗ nó có tờ giới thiệu hay không. Đây là khoảnh khắc quan trọng nhất buổi.

Giảng viên để hai bản cạnh nhau trên màn hình, đọc chung cho lớp so.

---

## PHẦN B. Dựng cấu trúc thư mục cho cả khóa

### Lý thuyết

Bây giờ Claude đã biết bạn là ai. Việc tiếp theo là **chia phòng cho ngôi nhà.**

Từ giờ tới cuối khóa bạn sẽ tạo ra rất nhiều thứ: hồ sơ sản phẩm và bảng giá, review và tin nhắn khách, bài viết nháp và bài đã đăng, kế hoạch chiến dịch, ảnh và tài liệu. Nếu tất cả nằm chung một chỗ, thư mục sẽ thành một đống lộn xộn. Bạn tìm không ra, và Claude cũng phải mò.

Cách làm đúng là dựng sẵn **một cấu trúc thư mục chuẩn ngay bây giờ**, mỗi loại đồ một phòng. Các buổi sau cứ bỏ đồ vào đúng phòng là xong. Dựng một lần, dùng cho cả khóa.

Đây là cấu trúc đề xuất cho người làm sale và marketing:

```
thu-muc-cua-ban/
├── CLAUDE.md              tờ giới thiệu thương hiệu (đã có ở Phần A)
├── .claude/
│   ├── skills/            các skill bạn lập
│   └── agents/            các trợ lý riêng bạn lập
├── 01-san-pham/          hồ sơ sản phẩm, bảng giá, chính sách sỉ
├── 02-khach-hang/        review, tin nhắn, bình luận, insight khách
├── 03-noi-dung/
│   ├── nhap/             bài đang soạn
│   └── da-dang/          bài đã đăng, để tra lại
├── 04-chien-dich/        kế hoạch và lịch nội dung
└── 05-tai-lieu/          ảnh, brief, file khác
```

Đánh số 01 tới 05 để các phòng luôn xếp đúng thứ tự, dễ nhìn.

Đây chỉ là bản đề xuất. Việc của bạn khác thì các phòng cũng khác, nên ở bước dưới ta đưa cây này cho Claude làm ví dụ, rồi bắt nó dựa vào `CLAUDE.md` đề xuất bản hợp với chính bạn, trình ra cho bạn duyệt trước khi tạo.

### Thao tác

**Bước 5. Nhờ Claude đề xuất rồi dựng cấu trúc thư mục**

Để làm gì: tạo sẵn các phòng cho cả khóa, chỉ một lần.

Gõ vào Claude:

```
Dựa vào thông tin của tôi và file CLAUDE.md, hãy tạo cho tôi cấu trúc thư mục
phù hợp với công việc trong project này, ví dụ:

thu-muc-cua-ban/
├── CLAUDE.md              tờ giới thiệu thương hiệu
├── .claude/
│   ├── skills/            các skill bạn lập
│   └── agents/            các trợ lý riêng bạn lập
├── 01-san-pham/          hồ sơ sản phẩm, bảng giá, chính sách sỉ
├── 02-khach-hang/        review, tin nhắn, bình luận, insight khách
├── 03-noi-dung/
│   ├── nhap/             bài đang soạn
│   └── da-dang/          bài đã đăng, để tra lại
├── 04-chien-dich/        kế hoạch và lịch nội dung
└── 05-tai-lieu/          ảnh, brief, file khác

Trình bày cấu trúc cho tôi xem và duyệt trước khi tạo.
```

Bạn sẽ thấy: Claude vẽ ra cây thư mục hợp với công việc của bạn và dừng lại chờ. Đọc xem có phòng nào thừa hoặc thiếu, sửa lại bằng lời rồi mới cho nó tạo.

Mẹo: nếu bạn đã có sẵn file hồ sơ sản phẩm nằm lộn ở ngoài, nhờ thêm `Chuyển file san-pham-cua-toi.md vào thư mục 01-san-pham giúp tôi.`

---

## PHẦN C. Ghi mục lục để Claude tìm file nhanh

### Lý thuyết

Bạn vừa chia phòng xong. Nhưng Claude chưa biết phòng nào chứa gì, trừ khi bạn nói cho nó. Nếu bạn nhờ "lấy bảng giá sỉ" mà không chỉ phòng, nó vẫn phải mở từng phòng để tìm. Vừa chậm, vừa tốn, đôi khi mở nhầm.

Cách chữa: **dán sơ đồ các phòng ngay ở cửa ra vào.** Cửa ra vào ở đây chính là `CLAUDE.md`, vì Claude đọc file này đầu mỗi phiên. Bạn viết vào đó vài dòng mô tả phòng nào chứa gì, thế là nó biết đường đi ngay từ đầu.

Lưu ý một hiểu lầm: nhiều người nghĩ phải tạo một file mục lục riêng, kiểu `index.md`. Không cần. File riêng thì Claude không tự đọc. Viết thẳng vào `CLAUDE.md` mới là chỗ nó luôn đọc.

### Thao tác

**Bước 6. Thêm mục lục cấu trúc thư mục vào CLAUDE.md**

Để làm gì: để Claude biết đường đi ngay từ đầu mỗi phiên.

Gõ vào Claude:

```
Quét lại các thư mục vừa tạo trong thư mục làm việc này. Sau đó thêm cấu trúc
vào CLAUDE.md một mục tên "Cấu trúc thư mục", ghi mỗi thư mục một dòng kèm một
câu nói nó chứa gì, dùng khi nào. Chỉ ghi những thư mục có thật.
```

Bạn sẽ thấy: Claude thêm mục "Cấu trúc thư mục" vào `CLAUDE.md`, khớp với các phòng bạn vừa dựng ở Phần B.

---

**Bước 7. Thử xem Claude có tìm đúng phòng không**

Để làm gì: nghiệm thu Phần B và Phần C bằng một câu hỏi.

Gõ vào Claude:

```
Nếu bây giờ tôi nhờ bạn cập nhật bảng giá sỉ, bạn sẽ mở file trong thư mục
nào, vì sao? Và nếu tôi nhờ xem lại các bài đã đăng thì bạn vào thư mục nào?
```

Bạn sẽ thấy: Claude trả lời đúng tên thư mục, không phải mò. Đó là tác dụng của mục lục vừa thêm.

Nếu nó vẫn hỏi lại file ở đâu: mở `CLAUDE.md` xem mục "Cấu trúc thư mục" đã có chưa, làm lại Bước 6.

---

## Xong buổi 12, kiểm lại bạn đã có

Tự tay làm được:
- [ ] File `CLAUDE.md` cho công việc thật, dưới 80 dòng
- [ ] Hai bài đăng cùng một câu lệnh, một bài trước và một bài sau khi có hồ sơ, để so
- [ ] Cấu trúc thư mục cho cả khóa, do chính bạn duyệt trước khi tạo
- [ ] Mục "Cấu trúc thư mục" nằm trong `CLAUDE.md`, khớp với các thư mục có thật

Hiểu để dùng sau:
- [ ] Phân biệt được `CLAUDE.md` (bạn là ai, luôn được đọc) với skill (cách làm một việc)
- [ ] Biết phép thử một câu để soát bài viết còn chung chung hay đã gắn với thương hiệu
- [ ] Biết vì sao mục lục phải viết thẳng vào `CLAUDE.md` chứ không để một file riêng

Thiếu mục nào thì làm lại đúng bước đó. Buổi sau ta đổ người vào phòng `.claude/agents/`
còn trống: trợ lý riêng đầu tiên của bạn.
