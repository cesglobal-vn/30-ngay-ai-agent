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
> Năm phần:
> - Phần A: chatbot khác agent chỗ nào
> - Phần B: xem một con agent thật chạy
> - Phần C: dùng nó vào việc gì trong công việc của mình
> - Phần D: tự làm riêng cho mình được không
> - Phần E: cái giá của việc để máy tự chạy

## Nhịp buổi

| Phần | Nội dung | Phút | Dạng | Bước |
|---|---|---|---|---|
| | Mở buổi: buổi này nằm ở đâu trong khóa | 4' | LT 4' | |
| A | Chatbot khác agent chỗ nào | 8' | LT 6' + DEMO 2' | 1 |
| B | Xem một con agent thật chạy | 12' | DEMO 12' | 2-5 |
| C | Dùng nó vào việc gì | 8' | LT 5' + DEMO 3' | 6 |
| D | Tự làm riêng cho mình được không | 7' | LT 4' + DEMO 3' | 7-8 |
| E | Cái giá của việc để máy tự chạy | 4' | LT 4' (chỉ đọc) | 9 |
| | Dự phòng | 2' | | |

LT = giảng viên nói. HV = học viên tự làm. DEMO = giảng viên làm, học viên xem.

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

Học buổi này để làm ba việc:

Một, **hiểu cho đúng chữ agent** mà anh chị nghe suốt từ đầu khóa. Ai cũng nói AI agent, mà
hỏi nó khác con chatbot bình thường chỗ nào thì phần lớn trả lời không rõ. Hôm nay chốt một
lần bằng thứ nhìn thấy được.

Hai, **thấy tận mắt vòng lặp bên trong một con agent.** Từ buổi 13 tới giờ ta nói agent tự
quyết gọi công cụ nào, nhưng chưa ai nhìn thấy nó quyết. Buổi này có màn hình chiếu ra đúng
chỗ đó.

Ba, **biết trần của công nghệ này ở đâu**, để về công ty anh chị nói chuyện được với sếp:
việc gì giao cho máy tự chạy, việc gì phải giữ nút bấm của người.

Buổi này anh chị **chỉ ngồi xem**, không phải cài gì. Ai muốn tự dựng ở nhà thì cuối buổi có
đường dẫn và có trợ giảng hỗ trợ riêng.

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
"gọi công cụ" nghĩa là gì.

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

## PHẦN C. Dùng nó vào việc gì

### Lý thuyết

Tới đây lớp thường hỏi đúng một câu: **con này để làm việc gì trong công việc của em?**

Cách nghĩ đơn giản nhất: nó là **một người phụ việc ngồi sẵn trong nhóm Zalo của anh chị.**
Việc gì mà anh chị hay phải mở máy tính lên làm rồi chụp màn hình gửi lại vào nhóm, thì việc
đó giao được.

Sáu việc dân văn phòng dùng được ngay:

- **Trực nhóm phòng ban.** Ai hỏi số liệu, hỏi quy định, hỏi lịch, nó tra rồi trả lời ngay
  trong nhóm. Không phải chờ anh chị rảnh.
- **Nhắc việc bằng lời.** Nói một câu là có lịch, tới giờ nó nhắn lại đúng nhóm đó.
- **Soạn file gửi thẳng trong chat.** Cần một bảng Excel hay một văn bản Word, nhắn một câu,
  nó gửi file vào chat. Anh chị đang đi đường vẫn nhận được.
- **Đọc ảnh chụp.** Chụp tờ hóa đơn, biểu mẫu, bảng số liệu gửi vào, nhờ nó đọc số hoặc đọc
  chữ nhỏ.
- **Tra cứu ngoài mạng.** Hỏi một thông tin cần tra, nó tra rồi tóm tắt, có ghi nguồn.
- **Nhớ bối cảnh.** Không phải kể lại mình là ai mỗi lần hỏi.

Và đây là phần quan trọng hơn, **ba việc không nên giao**:

- **Trả lời khách hàng thật thay mình.** Nó trả lời sai thì người chịu là anh chị, mà lúc đó
  tin đã gửi đi rồi, không rút lại được.
- **Bất cứ việc gì dính tới tiền.** Bản này cố ý không có công cụ chuyển tiền hay thanh toán,
  dù thư viện có sẵn. Không phải quên làm, mà là cố tình không làm.
- **Việc phải chính xác tuyệt đối mà không ai soát lại.** Số liệu đưa lên cấp trên, văn bản
  gửi ra ngoài. Nó soạn được, nhưng anh chị vẫn phải đọc trước khi gửi.

Một hiểu lầm hay gặp: giao được cho bot rồi nhiều người tưởng bỏ hẳn được việc đó khỏi đầu.
Không. Nó làm xong phần nặng, **phần nhìn lại vẫn là của anh chị** - chỉ là nhìn lại một bản
đã có sẵn thì nhanh hơn ngồi làm từ đầu rất nhiều. Đó mới là chỗ tiết kiệm thật.

### Demo

**Bước 6. Nhờ bot soạn một file Excel gửi thẳng trong chat**

Để làm gì: cho lớp thấy việc rõ ràng nhất, ai cũng dùng được ngay.

Làm trên màn hình: nhắn cho bot một yêu cầu thật, ví dụ

```
Làm giúp tôi file Excel theo dõi học viên lớp tháng này: họ tên, số điện thoại,
buổi đã học, học phí đã đóng, còn thiếu. Thêm dòng tổng cộng.
```

Lớp sẽ thấy: một file `.xlsx` xuất hiện ngay trong khung chat Zalo, tải về mở ra là dùng
được, có sẵn dòng tổng.

Nói gì trong lúc chờ: chỗ này có một chi tiết nhỏ mà đúng dân văn phòng mới thấy quý. Công
thức trong file được ghi kèm luôn kết quả đã tính sẵn, nên mở xem trước trên điện thoại vẫn
thấy số chứ không phải ô trống. Bình thường file Excel có công thức mà xem trên điện thoại
hay ra ô trắng.

Nếu lớp còn thời gian: cho học viên 2 phút tự nghĩ 2 việc trong tuần của mình có thể giao cho
con này, rồi gọi vài người đọc lên. Đây là chỗ để họ nối bài học vào việc thật của mình.

---

## PHẦN D. Tự làm riêng cho mình được không

### Lý thuyết

Câu hỏi tiếp theo lớp hay hỏi: **cái này của riêng thầy hay em cũng làm được?**

Làm được, và sửa được khá sâu. Vẫn hình ảnh người phụ việc ngồi trong nhóm Zalo: anh chị đổi
được tính cách của người đó, đổi được cái đầu của họ, và quan trọng nhất là **quyết được họ
cầm chìa khóa nào** - đúng bài đã học ở buổi 13 và buổi 17.

Bốn thứ sửa được ngay trên màn hình, không đụng tới code:

- **Tính cách và cách xưng hô** riêng cho từng tài khoản
- **Đổi model** đang dùng
- **Bật tắt từng công cụ** trong mười ba cái
- **Lịch hẹn** riêng

Và đây là chỗ đáng nói nhất: **cái anh chị đang xem không phải hàng độc.** Đây là cả một dòng
sản phẩm đang lớn rất nhanh trên thế giới:

- **OpenClaw**, ra cuối năm 2025, vượt 250.000 sao trên GitHub trong khoảng 60 ngày, nối được
  hơn 25 nền tảng nhắn tin.
- **Hermes Agent** của Nous Research, ra tháng 2/2026, hơn 180.000 sao trong chưa đầy 4
  tháng, tự sinh ra kỹ năng dùng lại được sau mỗi lần làm việc.

Và tin đáng chú ý nhất với người Việt: **Zalo đã chính thức tích hợp OpenClaw**, là nền tảng
Việt Nam đầu tiên vào hệ sinh thái này, đứng cạnh Telegram và WhatsApp. Nghĩa là hướng đi này
không còn là chuyện nghịch của dân kỹ thuật nữa.

Ai muốn tự làm ở nhà thì có hai đường, khác nhau rõ:

| | Bản đang chiếu trên lớp | OpenClaw kèm plugin Zalo |
|---|---|---|
| Chạy trên | Tài khoản Zalo cá nhân | Tài khoản bot chính thức, lấy token trên trang nhà phát triển của Zalo |
| Được gì | Nhắn như chính mình, vào thẳng nhóm đang có, thả cảm xúc, tag người | Nhắn riêng và nhắn nhóm, gửi ảnh và file |
| Mất gì | Có rủi ro bị khóa tài khoản, bắt buộc dùng nick phụ | Không thả cảm xúc, không tag, mỗi tin tối đa 2000 ký tự |
| Hợp với ai | Muốn bot hành xử như người trong nhóm sẵn có | Muốn yên tâm về mặt tài khoản, chấp nhận nó là một con bot rõ ràng |

Một hiểu lầm hay gặp: thấy con số hai trăm nghìn sao rồi tưởng cài xong là chạy ngon ngay.
Không. Cả ba dự án đều là phần mềm tự cài tự nuôi: phải có máy chạy suốt, phải tự lo khóa API,
và hỏng thì tự sửa. Đây là lý do buổi này chỉ xem chứ chưa cài chung cả lớp.

### Demo

**Bước 7. Tắt một công cụ rồi hỏi lại đúng câu vừa hỏi**

Để làm gì: cho lớp thấy công cụ đúng là cái khóa thật, không phải lời dặn. **Giảng viên làm,
lớp xem.**

Làm trên màn hình: vào trang Tools, tắt công cụ tra cứu web. Quay lại Zalo, hỏi một câu bắt
buộc phải tra mạng mới trả lời được.

Lớp sẽ thấy: bot nói thẳng là không tra được, thay vì bịa ra một câu trả lời.

Nói gì trong lúc chờ: đây đúng cái đã học ở buổi 17. Mình không dặn nó "đừng tra mạng nhé",
mình **rút luôn cái công cụ** ra khỏi tay nó. Dặn bằng lời thì nó có thể quên hoặc bị người
khác dụ. Rút công cụ thì nó không có đường nào làm được. Bật lại thì nó tra bình thường.

---

**Bước 8. Chiếu OpenClaw và Hermes lên cho lớp nhìn**

Để làm gì: đặt buổi học vào bối cảnh thế giới, để lớp biết mình đang học đúng hướng.

Làm trên màn hình: mở trang GitHub của OpenClaw và của Hermes Agent, để lớp nhìn số sao và
danh sách nền tảng hỗ trợ. Mở thêm một bài báo tiếng Việt về việc Zalo tích hợp OpenClaw.

Lớp sẽ thấy: hai dự án mã nguồn mở với số sao rất lớn, và một bản tin tiếng Việt xác nhận
Zalo đã nối chính thức.

Nói gì trong lúc chờ: cái lớp vừa xem nãy giờ không phải đồ chơi riêng của thầy. Nó là một
dòng sản phẩm mà cả thế giới đang làm, và Việt Nam đã có mặt trong đó. Điều đó cũng có nghĩa
kỹ năng anh chị học suốt mười tám buổi - giao việc có cấu trúc, viết mô tả cho agent, quyết
quyền hạn cho nó - dùng được ở mọi công cụ trong dòng này, không riêng gì Claude.

---

## PHẦN E. Cái giá của việc để máy tự chạy

### Lý thuyết

Cả buổi hôm nay lớp xem một con máy tự chạy không cần ai bấm. Giờ là lúc nói phần còn lại của
câu chuyện, và nó ngược với chính buổi 17-18 vừa học nên đáng nói cho rõ.

Buổi 17 và 18 ta cố tình dựng dây chuyền có người gác cổng, và khâu cuối luôn là anh chị
duyệt rồi mới gửi. Hôm nay lớp xem một thứ **không có nút bấm nào của người cả**. Tin đi
thẳng ra ngoài.

Ba cái giá phải trả, nói thẳng:

- **Rủi ro tài khoản.** Bản chạy trên tài khoản cá nhân dùng đường không chính thức. Zalo có
  thể khóa. Luôn dùng nick phụ, đừng bao giờ cắm tài khoản chính hay tài khoản công việc.
- **Tiền.** Mỗi tin đến là một lượt tính phí. Bot ngồi trong nhóm đông người là tốn thật.
- **Sai thì không ai chặn.** Không có ai đọc lại trước khi tin bay ra. Trả lời sai một câu
  với đồng nghiệp thì cười trừ, sai với khách hàng thì mất khách.

Vậy nên thước đo để mang về công ty là một câu hỏi duy nhất: **việc này sai một lần thì mất
gì?**

- Mất chút thời gian, mất công làm lại: cứ để máy tự chạy.
- Mất tiền, mất khách, mất uy tín: giữ nút bấm của người, đúng như dây chuyền buổi 17-18.

Một hiểu lầm hay gặp, và là hiểu lầm nguy hiểm nhất của cả tuần: thấy máy chạy trơn tru vài
hôm rồi tin luôn, giao cả việc quan trọng. Nó chạy trơn không có nghĩa là nó không sai, chỉ
có nghĩa là **mấy lần vừa rồi chưa sai.**

### Demo

**Bước 9. Ba câu hỏi trước khi giao việc gì cho máy tự chạy (chỉ đọc)**

Để làm gì: cầm về một thước đo dùng được ngay ở công ty, không cần nhớ gì thêm.

Trước khi để con nào tự chạy một việc, hỏi đủ ba câu:

1. **Việc này sai một lần thì mất gì?** Mất thời gian thì cho chạy. Mất tiền hoặc mất khách
   thì không.
2. **Ai là người đọc kết quả?** Người trong nhà thì thoáng được. Người ngoài công ty thì phải
   có người duyệt.
3. **Sai rồi có rút lại được không?** File lưu trong máy thì sửa lại được. Tin đã gửi đi thì
   không.

Câu nào trả lời theo hướng nặng thì giữ người ở khâu cuối. Đó là toàn bộ bài học của tuần
này, gói trong ba câu.

---

## Xong buổi 19, kiểm lại bạn đã hiểu

Buổi này không có mục tự tay làm, vì đây là buổi xem demo.

Hiểu để dùng sau:
- [ ] Nói được chatbot khác agent chỗ nào: cùng bộ óc, khác ở tay chân, trí nhớ và đồng hồ
- [ ] Biết agent không tự nghĩ ra việc, nó chỉ phản ứng khi có người nhắn hoặc tới giờ đã hẹn
- [ ] Đã nhìn thấy một vòng lặp agent thật: nhận việc, nghĩ, chọn công cụ, nhận kết quả, trả lời
- [ ] Kể được ít nhất ba việc trong công việc của mình giao được cho một con bot như vậy
- [ ] Thuộc ba việc không nên giao: trả lời khách thay mình, việc dính tiền, việc cần chính xác tuyệt đối
- [ ] Biết tự làm riêng được, và sửa được tính cách, model, công cụ, lịch mà không cần đụng code
- [ ] Biết đây là một dòng sản phẩm thế giới đang làm, và Zalo đã chính thức tích hợp OpenClaw
- [ ] Phân biệt được hai đường: chạy trên tài khoản cá nhân và chạy bằng tài khoản bot chính thức
- [ ] Thuộc ba câu hỏi trước khi giao việc cho máy tự chạy

Ai muốn tự dựng ở nhà: mã nguồn mở theo giấy phép MIT, gặp trợ giảng để được hướng dẫn cài
riêng. Bắt buộc dùng nick Zalo phụ.

Buổi sau là buổi cuối. Ta gom toàn bộ thứ anh chị đã tự dựng trong mười chín buổi thành một
chỗ làm việc hoàn chỉnh của riêng mình.
