# Buổi 19: Xem một con agent tự chạy suốt ngày trong Zalo

> Cách dùng file này: buổi 19 khác các buổi trước. Đây là **buổi xem demo**, không có bước
> cài đặt cho học viên làm theo. Nên mỗi phần có khúc **Lý thuyết** (lời giảng viên nói) và
> khúc **Demo** (giảng viên làm trên màn hình, lớp xem).
>
> Mỗi bước demo có thêm ô **Nói gì trong lúc chờ**. Bot phải gọi công cụ nên có lúc đứng vài
> giây, đó là lúc giảng viên nói tiếp chứ đừng để lớp nhìn màn hình im lặng.
>
> Trước khi vào lớp, giảng viên chuẩn bị sẵn: bot đã chạy, đã đăng nhập một **nick Zalo phụ**,
> dashboard đã mở ở một tab riêng, và một nhóm Zalo thử có sẵn bot trong đó.
>
> Buổi này chỉ đi hai phần đầu (chatbot khác agent chỗ nào, xem một con agent thật chạy) -
> chậm và kỹ, có thời gian cho lớp hỏi. Ba phần còn lại (dùng vào việc gì, tự làm riêng, cái
> giá phải trả) chuyển sang buổi 20 để không bị dồn giờ.
>
> Hai phần:
> - Phần A: chatbot khác agent chỗ nào
> - Phần B: xem một con agent thật chạy

## Nhịp buổi

| Phần | Nội dung | Phút | Dạng | Bước |
|---|---|---|---|---|
| | Mở buổi: buổi này nằm ở đâu trong khóa | 8' | LT 8' | |
| A | Chatbot khác agent chỗ nào | 15' | LT 10' + DEMO 5' | 1 |
| B | Xem một con agent thật chạy | 18' | DEMO 18' | 2-5 |
| | Hỏi đáp / dự phòng | 4' | | |

LT = giảng viên nói. HV = học viên tự làm. DEMO = giảng viên làm, học viên xem.

So với bản gộp trước đây, buổi này giờ chỉ còn hai phần nên có nhiều thời gian hơn hẳn cho
mỗi bước - đừng vội, để lớp hỏi giữa chừng, nhất là ở Bước 3 (trang Trace).

---

## Mở buổi: buổi này nằm ở đâu trong khóa

Mười tám buổi vừa rồi anh chị dựng được một bộ trợ lý khá đầy đủ: có hồ sơ để nó biết mình là
ai, có skill đóng gói cách làm, có agent riêng cho từng vai, có cả một dây chuyền ba người
chuyền tay nhau.

Nhưng cả bộ đó có chung một điểm: **nó chỉ sống khi anh chị mở máy tính lên và gõ.** Đóng máy
là hết. Người khác nhắn cho anh chị thì nó không biết. Ba giờ sáng có việc thì nó cũng không
biết.

Hôm nay lớp xem một con agent không có giới hạn đó. Nó nằm luôn trong Zalo, chạy suốt ngày,
ai nhắn nó cũng trả lời, tới giờ nó tự nhắn cho anh chị.

Học buổi này để làm hai việc:

Một, **hiểu cho đúng chữ agent** mà anh chị nghe suốt từ đầu khóa. Ai cũng nói AI agent, mà
hỏi nó khác con chatbot bình thường chỗ nào thì phần lớn trả lời không rõ. Hôm nay chốt một
lần bằng thứ nhìn thấy được.

Hai, **thấy tận mắt vòng lặp bên trong một con agent.** Từ buổi 13 tới giờ ta nói agent tự
quyết gọi công cụ nào, nhưng chưa ai nhìn thấy nó quyết. Buổi này có màn hình chiếu ra đúng
chỗ đó.

Buổi sau (buổi 20) mới tới phần dùng nó vào việc gì và cái giá phải trả khi để máy tự chạy.

Buổi này anh chị **chỉ ngồi xem**, không phải cài gì.

---

## PHẦN A. Chatbot khác agent chỗ nào

### Lý thuyết

Hình dung **một bộ óc rất giỏi, nhưng nằm trong cái lọ thủy tinh.** Hỏi gì cũng biết, nói
chuyện rất hay. Nhưng nó không cầm được cái gì, không nhớ hôm qua anh chị nói gì, và phải chờ
anh chị hỏi thì nó mới mở miệng.

Đó là **chatbot**. Thông minh thật, mà chỉ thông minh bằng lời.

**Agent là bộ óc đó được lắp thêm ba thứ:**

- **Tay chân**, tức là công cụ. Tra mạng, đọc file, tạo file, gửi tin. Không phải nói cách
  làm nữa, mà làm luôn.
- **Trí nhớ**, sống qua nhiều ngày. Không phải hỏi lại từ đầu mỗi lần mở lên.
- **Đồng hồ**, để tự chạy theo giờ mà không cần ai gọi.

Cả khóa này là quá trình lắp dần ba thứ đó. Tuần 1 học viên có một bộ óc đã đọc hồ sơ, vẫn
nằm trong lọ. Từ buổi 8 sang Claude Code là lắp tay chân, nó bắt đầu đụng được vào file. Buổi
17-18 là ba bộ óc chuyền tay nhau. **Hôm nay là con đầu tiên có đủ cả ba, và không cần anh
chị ngồi trước máy.**

Một hiểu lầm hay gặp: nhiều người nghĩ agent là con AI thông minh hơn chatbot. Không phải.
Nhiều khi nó dùng cùng một model, cùng độ thông minh. **Khác nhau ở chỗ nó được cho phép làm
gì, chứ không phải nó biết nhiều hơn.**

### Demo

**Bước 1. Hỏi một chatbot thường một việc cần tay chân**

Để làm gì: cho lớp thấy tận mắt cái lọ thủy tinh. Phần này **giảng viên làm, lớp xem**.

Làm trên màn hình: mở một cửa sổ chat AI thông thường, gõ một câu cần thao tác thật, ví dụ

```
9 giờ sáng mai nhắc tôi gửi báo cáo tuần cho sếp nhé.
```

Lớp sẽ thấy: nó trả lời rất lễ phép, đại loại "được, tôi sẽ nhắc bạn" hoặc "bạn có thể dùng
ứng dụng nhắc việc". Nhưng đóng cửa sổ là xong. Mai 9 giờ không có gì xảy ra cả.

Nói gì trong lúc chờ: đây không phải nó dở. Nó chỉ có mỗi cái miệng. Không có đồng hồ, không
có tay để bấm gửi, và ngày mai nó cũng không nhớ hôm nay ta nói gì. Giữ câu này lại, lát nữa
ta hỏi lại đúng câu đó cho một con khác.

---

## PHẦN B. Xem một con agent thật chạy

### Lý thuyết

Vẫn bộ óc đó, nhưng lần này lắp đủ tay chân, trí nhớ và đồng hồ, rồi **đặt luôn vào trong
Zalo**. Không phải mở web, không phải mở phần mềm gì. Nó là một cái tên trong danh bạ Zalo
của anh chị.

Chỗ khác lớn nhất so với mọi thứ đã học: **anh chị không cần có mặt.** Đồng nghiệp nhắn vào
nhóm, nó đọc và trả lời. Anh chị đang họp, đang ngủ, nó vẫn chạy.

Một hiểu lầm hay gặp: nghe "tự chạy" nhiều người tưởng nó tự nghĩ ra việc rồi làm. Không.
**Nó vẫn chỉ phản ứng**: có người nhắn thì nó chạy, tới giờ đã hẹn thì nó chạy. Ngoài hai cái
đó ra nó nằm im. Đây là điều đáng nói rõ để không ai sợ vô cớ.

### Demo

**Bước 2. Nhắn đúng câu ban nãy cho bot trong Zalo**

Để làm gì: đặt cạnh Bước 1 để lớp tự thấy khác biệt. **Giảng viên làm, lớp xem.**

Làm trên màn hình: mở Zalo, nhắn cho bot đúng câu vừa gõ ở Bước 1.

Lớp sẽ thấy: bot trả lời rằng đã đặt lịch, và nói rõ mấy giờ nó sẽ nhắn lại. Khác biệt không
nằm ở câu trả lời hay hơn, mà ở chỗ **lần này có một cái lịch được tạo thật.**

Nói gì trong lúc chờ: cùng một câu hỏi, cùng một loại model. Con ban nãy trả lời bằng lời, con
này làm ra một thứ có thật. Chênh nhau đúng ở chỗ con này được phát công cụ, còn con kia thì
không. Đây là toàn bộ ý nghĩa của chữ agent.

---

**Bước 3. Mở trang Trace xem nó vừa nghĩ gì**

Để làm gì: chiếu ra vòng lặp bên trong, thứ 18 buổi qua chỉ nói bằng lời. **Đây là bước quan
trọng nhất buổi.**

Làm trên màn hình: chuyển sang tab dashboard, vào trang Trace, mở lượt vừa chạy.

Lớp sẽ thấy: từng bước một. Model nhận câu của người dùng, nghĩ, quyết định gọi công cụ đặt
lịch, điền tham số vào, nhận kết quả về, rồi mới viết câu trả lời. Mỗi bước hiện nguyên tham
số nó truyền vào.

Nói gì trong lúc chờ: từ buổi 13 tới giờ mình cứ nói agent tự quyết gọi công cụ nào. Đây
chính là chỗ nó quyết, và anh chị đang nhìn thấy. Không ai lập trình sẵn câu "nếu người dùng
nói nhắc thì gọi hàm đặt lịch". Model tự đọc danh sách công cụ đang có, tự chọn. Đó là lý do
mô tả công cụ viết mờ thì nó chọn sai, đúng như hồi mình viết dòng mô tả cho agent ở buổi 13.

Mẹo cho giảng viên: dừng lâu ở đúng dòng tham số. Nhiều học viên tới đây mới thật sự hiểu
"gọi công cụ" nghĩa là gì. Buổi này rộng giờ hơn bản cũ, cứ để lớp hỏi thoải mái ở bước này.

---

**Bước 4. Cho bot nhớ một điều rồi hỏi lại**

Để làm gì: cho thấy trí nhớ sống qua nhiều lần chat, không phải nhớ trong một cuộc.

Làm trên màn hình: nhắn cho bot một thông tin về mình, ví dụ

```
Nhớ giúp tôi: tôi phụ trách mảng đào tạo doanh nghiệp, báo cáo nộp thứ Sáu hằng tuần.
```

Rồi mở một cuộc trò chuyện khác, hoặc để một lát, hỏi lại "tôi phụ trách mảng gì".

Lớp sẽ thấy: nó trả lời đúng, dù đây là cuộc trò chuyện khác.

Nói gì trong lúc chờ: chỗ này giống hệt file hồ sơ `CLAUDE.md` anh chị làm ở buổi 12, chỉ
khác là bot tự ghi lấy chứ không phải mình ngồi viết. Và nó có một luật riêng tư đáng chú ý:
thứ nó học được trong chat riêng thì **không bao giờ mang ra nói trong nhóm**. Nếu không có
luật đó thì bot vô tình kể chuyện riêng của một người giữa nhóm phòng ban, hỏng ngay.

---

**Bước 5. Đặt một lịch hẹn rồi cho nó chạy thử**

Để làm gì: đóng nốt cái "đồng hồ" trong bộ ba tay chân, trí nhớ, đồng hồ.

Làm trên màn hình: vào trang Lịch hẹn trên dashboard, mở cái lịch vừa tạo ở Bước 2, bấm chạy
thử ngay để lớp thấy tin nhắn rơi vào Zalo mà không ai gõ gì.

Lớp sẽ thấy: tin nhắn tự xuất hiện trong Zalo. Không ai bấm gửi.

Nói gì trong lúc chờ: có ba kiểu lịch. Nhắc một lần, nhắc lặp lại theo chu kỳ, và lịch phức
tạp theo giờ cố định. Có hai loại nội dung: gửi nguyên văn câu đã soạn sẵn, loại này không
tốn đồng nào; hoặc chạy hẳn một lượt AI để nó đi tra cứu rồi báo cáo, loại này mới tốn tiền.
Và có một chi tiết nhỏ mà quan trọng: nếu máy tắt đúng lúc tới hẹn, lát sau bật lên nó **vẫn
gửi** kèm ghi chú là nhắc trễ, chứ không im lặng nuốt mất. Lịch mà nuốt im lặng thì không ai
dám tin nữa.

---

## Xong buổi 19, kiểm lại bạn đã hiểu

Buổi này không có mục tự tay làm, vì đây là buổi xem demo.

Hiểu để dùng sau:
- [ ] Nói được chatbot khác agent chỗ nào: cùng bộ óc, khác ở tay chân, trí nhớ và đồng hồ
- [ ] Biết agent không tự nghĩ ra việc, nó chỉ phản ứng khi có người nhắn hoặc tới giờ đã hẹn
- [ ] Đã nhìn thấy một vòng lặp agent thật: nhận việc, nghĩ, chọn công cụ, nhận kết quả, trả lời

Buổi sau: dùng con agent này vào việc gì trong công việc thật, tự làm riêng được không, và
cái giá phải trả khi để máy tự chạy.
