# Buổi 17: Ghép ba trợ lý thành một dây chuyền viết bài đăng

> Cách dùng file này: mỗi phần có hai khúc. Khúc **Lý thuyết** đọc để hiểu mình sắp làm gì
> và vì sao, có ví von cho dễ nhớ. Khúc **Thao tác** là các bước có sẵn prompt, cứ copy dán
> vào Claude Code.
>
> Làm lần lượt, không nhảy cóc. Bước sau dùng kết quả bước trước.
>
> Trước khi bắt đầu: mở Claude Code đúng tại thư mục làm việc của bạn, thư mục đã có
> `CLAUDE.md` từ buổi 12 và file `.claude/agents/nghien-cuu-doi-thu.md` từ buổi 13. Gõ
> `ls .claude/agents` để chắc chắn con trợ lý cũ vẫn còn, hôm nay ta dùng lại nó.
>
> Năm phần, đi từ dễ tới khó:
> - Phần A: xem một mình Claude viết bài thì hỏng ở đâu
> - Phần B: tuyển thêm hai vai còn thiếu cho đủ dây chuyền
> - Phần C: chỉ cho Claude thứ tự bàn giao giữa ba vai
> - Phần D: cho cả dây chuyền chạy một lượt trên việc thật
> - Phần E: dây chuyền chạy sai thì chữa ở đâu

## Nhịp buổi

| Phần | Nội dung | Phút | Dạng | Bước |
|---|---|---|---|---|
| A | Xem một mình Claude viết bài thì hỏng ở đâu | 6' | LT 2' + HV 4' | 1 |
| B | Tuyển thêm hai vai còn thiếu | 17' | LT 4' + HV 13' | 2-5 |
| C | Chỉ cho Claude thứ tự bàn giao | 7' | LT 3' + HV 4' | 6 |
| D | Cho cả dây chuyền chạy một lượt | 9' | LT 1' + HV 8' | 7-8 |
| E | Dây chuyền chạy sai thì chữa ở đâu | 3' | LT 3' (chỉ đọc) | 9 |
| | Dự phòng | 3' | | |

LT = giảng viên nói. HV = học viên tự làm. DEMO = giảng viên làm, học viên xem.

Buổi 13 bạn tuyển một nhân viên. Hôm nay bạn lập cả một dây chuyền, và học chỗ khó nhất
của việc lập đội: ai là người điều phối.

---

## PHẦN A. Xem một mình Claude viết bài thì hỏng ở đâu

### Lý thuyết

Hình dung bạn giao cho một nhân viên rất giỏi trọn gói một bài đăng: tự đi hỏi tư liệu, tự
viết, rồi tự soát bài mình trước khi đăng. Bạn ấy giỏi thật, bài viết trôi chảy thật. Nhưng
có một thứ bạn ấy không làm được, dù giỏi tới đâu: **tự bắt lỗi của chính mình.** Ai viết
xong đọc lại bài mình cũng thấy ổn. Đó là chuyện của con người, không phải chuyện giỏi dở.

Cách chữa trong một công ty thật là **chia thành dây chuyền bàn giao**: người này làm xong
đẩy sang người kia, cuối chuyền có một người chỉ làm mỗi việc gác cổng. Tên kỹ thuật của
thứ ta sắp dựng là agent team, tức **một đội trợ lý nối tiếp nhau**.

Vì sao đáng dựng: người gác cổng không phải người viết, nên đọc bài bằng con mắt lạ. Nó bắt
được số liệu bịa, từ cấm lọt, câu khen chung chung mà chính người viết không thấy. Và mỗi
khâu có người chịu trách nhiệm rõ, sai ở đâu bạn biết chữa chỗ nào.

Một hiểu lầm hay gặp: nhiều người tưởng con nào đủ giỏi thì làm trọn gói được, chia dây
chuyền là bày vẽ. Vấn đề không nằm ở giỏi hay dở. Nó nằm ở chỗ **không ai tự soát được
chính mình**, và khi một con ôm hết ba khâu thì bạn không biết khâu nào hỏng để sửa.

### Thao tác

**Bước 1. Nhờ Claude viết bài quảng bá một phát**

Để làm gì: có một bài đối chứng để cuối buổi đặt cạnh bài do cả dây chuyền làm.

Điền bản mô tả dưới đây bằng việc thật của bạn. **Giữ lại bản mô tả này**, cuối buổi ta dùng
lại y nguyên nó ở Bước 7, để hai bài chỉ khác nhau đúng một thứ: có chạy dây chuyền hay
không. Nếu đầu buổi giao việc sơ sài mà cuối buổi giao việc kỹ càng thì so không còn công
bằng nữa.

Gõ vào Claude (điền năm dòng trong ngoặc vuông bằng việc của bạn):

```
Viết cho tôi một bài đăng Facebook quảng bá.

- Sản phẩm: [tên khóa học hoặc sản phẩm của bạn, ví dụ: khóa 30 ngày làm chủ AI Agent]
- Bán cho ai: [đối tượng, ví dụ: nhân viên văn phòng đang phải làm báo cáo tay mỗi tuần]
- Điểm muốn nhấn: [một ý duy nhất, ví dụ: mỗi buổi 45 phút, học xong dùng được ngay]
- Kêu gọi hành động: [ví dụ: nhắn tin để nhận lịch khai giảng]
- Độ dài: khoảng 150 chữ

Viết luôn một mạch, đừng hỏi lại tôi câu nào.
```

Bạn sẽ thấy: một bài trôi chảy, đúng giọng của bạn vì đã có `CLAUDE.md` từ buổi 12, và bám
đúng năm dòng bạn vừa giao. Brief đã kỹ như vậy rồi mà soi kỹ vẫn hở ba chỗ:

1. Có chỗ nào nêu ngày khai giảng, học phí, số suất mà bạn **chưa hề cung cấp** không.
2. Có câu khen nào chung chung mà đối thủ nào cũng viết được y hệt không.
3. Bài đó đang nằm trong khung chat, **không được lưu vào thư mục nào cả**.

Giữ bài này lại, đừng xóa. Cuối buổi ta đặt cạnh bài mới.

Mẹo: chụp màn hình hoặc copy bài này ra một chỗ, vì lát nữa khung chat sẽ trôi dài.

---

## PHẦN B. Tuyển thêm hai vai còn thiếu

### Lý thuyết

Vẫn dây chuyền bàn giao đó. Một dây chuyền viết bài cần đúng ba chỗ đứng:

- **Người đi lấy tư liệu.** Xem thị trường đang nói gì, để bài mình không nói trùng.
- **Người viết.** Cầm tư liệu về, viết thành bản nháp, lưu vào đúng ngăn.
- **Người gác cổng.** Chỉ đọc bản nháp và chỉ ra chỗ sai. Không được sửa.

Tin vui: **chỗ đứng thứ nhất bạn đã có người rồi.** Con `nghien-cuu-doi-thu` lập ở buổi 13
chính là nó. Lập đội không có nghĩa là tuyển mới từ đầu, mà là nhìn xem dây chuyền còn
trống chỗ nào rồi tuyển đúng chỗ đó. Hôm nay bạn chỉ tuyển thêm hai người.

Nhưng tuyển người thì phải có **bản mô tả công việc**. Bạn không tuyển ai bằng cách nói với
họ "em làm cái này nhé" rồi thôi. Ở đây cũng vậy: nói mơ hồ thì Claude vẫn tạo ra file, file
đọc còn rất trơn, mà thiếu mất vế quan trọng nhất.

Đây là **công thức đặt hàng một trợ lý**. Năm dòng, không cần nhớ gì thêm, không cần gõ một
chữ tiếng Anh nào:

| Dòng | Trả lời câu gì | Vì sao cần |
|---|---|---|
| Tên | Gọi nó là gì | Để bạn gọi đích danh khi cần |
| Khi nào gọi | Gặp việc nào thì tới lượt nó | Claude đọc dòng này để **tự biết** lúc nào cần nó, khỏi phải gọi tay |
| Được đụng vào | Nó được làm gì, cấm làm gì | **Dòng quan trọng nhất**, đây chính là cái khóa |
| Làm gì | Việc cụ thể của nó | Để nó không làm lệch |
| Trả về | Kết quả ra dạng gì | Để bạn nhận được thứ dùng ngay, không phải bảo nó làm lại |

Năm dòng đó thay cho cả một đoạn dài. Bạn cứ điền, Claude tự dịch sang bộ chìa khóa của nó
rồi ghi vào file. Bạn không phải biết tên chìa khóa nào.

**Dòng thứ ba là dòng người ta hay quên nhất, và quên nó thì hỏng theo kiểu không nhìn thấy.**
Không nói con này được đụng vào gì thì Claude bỏ luôn dòng khóa trong file, mà file agent
thiếu dòng khóa **không phải là không cho gì, mà là cho tất** - kể cả xóa file. Nhìn file thì
chẳng thấy gì bất thường, vì trong phần chữ nó vẫn viết "không tự ý sửa file của người dùng".
Đúng cái lời dặn không có răng mà buổi 13 đã cảnh báo. Bước 2 ngay dưới đây ta cố tình quên
để thấy tận mắt.

Một hiểu lầm hay gặp: nhiều người nghĩ khóa tay người gác cổng là làm khó nó, thà cho sửa
luôn cho nhanh. Ngược lại. Người gác cổng mà sửa được thì nó vừa đá bóng vừa thổi còi, bài
sửa xong không còn ai soát nữa, và bạn quay lại đúng vấn đề của Phần A.

### Thao tác

**Bước 2. Đặt hàng kiểu nói miệng, xem hụt chỗ nào**

Để làm gì: thấy tận mắt chuyện gì xảy ra khi quên vế "được đụng vào gì".

Gõ vào Claude:

```
Tạo cho tôi một agent tên soat-bai-dang trong thư mục này, để soát bản nháp bài
đăng trước khi tôi đăng.
```

Bạn sẽ thấy: Claude tạo file `.claude/agents/soat-bai-dang.md` rất nhanh, nội dung đọc còn
trơn tru. Mở file ra, nhìn khối mấy dòng nằm giữa hai vạch `---` ở trên cùng. Trong đó có
`name:` và `description:`, **nhưng không có dòng `tools:`**.

Đây đúng là cái hụt ở Lý thuyết: không có dòng đó nghĩa là con này được cầm mọi thứ, kể cả
xóa file. Kéo xuống phần chữ bên dưới, bạn sẽ thấy nó tự viết một câu đại loại "không tự ý
sửa file của người dùng" - nghe rất yên tâm, nhưng đó chỉ là lời dặn. Con gác cổng của bạn
đang không bị khóa gì cả.

Giảng viên chiếu file này lên màn hình cho cả lớp nhìn khối trên cùng. Đây là chỗ dễ trôi
qua nhất trong cả buổi.

Nếu máy bạn lại có sẵn dòng `tools:`: không sao, cứ làm tiếp Bước 3 rồi so hai bản. Claude
đoán ý được hay không là tùy lúc, và đó chính là vấn đề - **thứ bạn viết ra thì chắc chắn,
thứ để nó đoán thì hên xui.**

---

**Bước 3. Đặt hàng lại bằng công thức năm dòng**

Để làm gì: có con gác cổng bị khóa thật, và làm quen công thức để tự đặt hàng sau này.

Gõ vào Claude:

```
Tạo lại giúp tôi agent này trong thư mục này:
- Tên: soat-bai-dang
- Khi nào gọi: khi tôi cần soát một bản nháp bài đăng trước khi đăng
- Được đụng vào: chỉ đọc file trong thư mục này, cấm sửa file, cấm ra mạng
- Làm gì: soát bốn thứ - số liệu không có nguồn, sai giọng so với CLAUDE.md,
  câu khen rỗng thay tên thương hiệu nào vào cũng đúng, thiếu lời kêu gọi hành động
- Trả về: bảng ba cột chỗ sai (trích nguyên câu), lỗi gì, sửa thế nào. Không có
  lỗi thì ghi không phát hiện, đừng bịa cho đủ bảng
```

Bạn sẽ thấy: file được viết lại, và lần này khối trên cùng có dòng `tools:` với ba công cụ
đọc, không có công cụ ghi nào. Đặt hai bản cạnh nhau: cùng một con trợ lý, khác nhau đúng
một dòng bạn thêm vào, mà một bên bị khóa còn một bên không.

Nếu nó vẫn không ghi dòng `tools:`: gõ `File .claude/agents/soat-bai-dang.md vẫn thiếu dòng
khóa quyền. Thêm dòng tools: vào, chỉ để lại các công cụ đọc.`

---

**Bước 4. Tự tay đặt hàng người viết**

Để làm gì: tự áp công thức một lần, đây mới là thứ bạn mang về dùng được.

Điền năm dòng dưới đây rồi gõ vào Claude. Chỗ nào đã điền sẵn thì giữ nguyên, đó là con
người viết của dây chuyền hôm nay:

```
Tạo cho tôi một agent trong thư mục này:
- Tên: viet-bai-quang-ba
- Khi nào gọi: khi tôi cần viết một bài đăng quảng bá
- Được đụng vào: đọc file trong thư mục này và lưu được file, không cần ra mạng
- Làm gì: đọc CLAUDE.md để bám giọng của tôi, dùng tư liệu được đưa chứ không
  viết chay, số nào tôi chưa cung cấp thì để [cần bổ sung], không bịa
- Trả về: lưu bản nháp vào 03-noi-dung-quang-ba/nhap/ rồi báo đường dẫn
```

Bạn sẽ thấy: file `.claude/agents/viet-bai-quang-ba.md`, khối trên cùng có dòng `tools:` lần
này **có** công cụ ghi file, và **không có** công cụ tra mạng. Đúng như dòng ba bạn vừa viết.

Mẹo: gõ `ls .claude/agents` để nhìn cả ba file cạnh nhau. Đội của bạn giờ có ba người.

---

**Bước 5. Nghiệm thu xem ai đang cầm chìa khóa gì**

Để làm gì: bạn vừa để Claude tự quyết bộ công cụ, giờ soát lại quyết định đó. Đây là thói
quen mang theo cả khóa, không riêng buổi này.

Gõ vào Claude:

```
Mở cả ba file trong .claude/agents/ của thư mục này ra xem.

Lập cho tôi một bảng, mỗi file một dòng, bốn cột: tên trợ lý, con này ghi hay sửa
được file của tôi không, con này ra được ngoài mạng không, và nếu có công cụ nào
thừa so với việc của nó thì chỉ ra.

Giải thích bằng lời thường, tôi không rành kỹ thuật.
```

Bạn sẽ thấy: một bảng bốn cột. Đối chiếu: cột "ghi sửa được file" chỉ được ghi "có" ở đúng
dòng `viet-bai-quang-ba`; cột "ra được mạng" chỉ được ghi "có" ở đúng dòng
`nghien-cuu-doi-thu`. Các ô còn lại phải là "không".

Nếu bảng không đúng như vậy: gõ `Sửa lại file agent bị sai: con nào không cần ghi file thì bỏ
hết công cụ ghi và sửa, con nào không cần ra mạng thì bỏ công cụ tra mạng.`

Claude hay nói thêm một ý và hỏi bạn có muốn siết nữa không: rằng con `viet-bai-quang-ba` tuy
được dặn chỉ lưu vào `03-noi-dung-quang-ba/nhap/` nhưng quyền ghi của nó thật ra phủ cả thư
mục. Ý đó **đúng**, và nó chính là bài học của buổi 13 lặp lại: dặn bằng chữ thì không phải
là khóa. Nhưng hôm nay **trả lời là không, rồi đi tiếp**. Siết thêm nữa là khóa luôn khả năng
lưu bản nháp, tức là khóa mất chính việc của con này. Muốn an toàn hơn thì bật Git cho thư
mục, để lỡ có ghi đè còn lấy lại được.

Mẹo: cách hỏi này dùng được với mọi thứ bạn không hiểu trong file agent. Không hiểu chỗ nào
thì bắt nó dịch chỗ đó ra tiếng Việt, đừng bỏ qua.

---

## PHẦN C. Chỉ cho Claude thứ tự bàn giao

### Lý thuyết

Bạn đã có ba người, nhưng chưa có dây chuyền. Ba người đứng rời nhau thì lần nào bạn cũng
phải tự đứng ra hô: gọi con này trước, xong đưa kết quả cho con kia. Dặn miệng ba vế mỗi
lần, quên một vế là hỏng.

Câu hỏi đúng lúc này là: **ai làm trưởng phòng?**

Nghe hợp lý nhất là lập thêm một con agent "trưởng phòng" để nó đứng ra gọi ba con kia. Làm
được, trợ lý phụ gọi được trợ lý phụ khác. Nhưng với việc của anh chị thì **để chính bạn làm
trưởng phòng vẫn hơn**, vì ba lẽ:

- **Bạn nhìn thấy từng khâu.** Con nào vừa chạy, trả về cái gì, hiện ngay trên màn hình. Giao
  cho một con trưởng phòng thì cả dây chuyền chạy kín trong phòng nó, xong mới đưa bạn một
  bản tóm tắt. Hỏng ở khâu nào rất khó lần ra.
- **Trợ lý phụ không quay ra hỏi bạn được.** Nó chạy một mạch tới xong. Khâu nào cần bạn
  quyết giữa chừng thì phải nằm ở phiên chính.
- **Càng lồng nhiều tầng càng tốn.** Mỗi tầng là một Claude nữa đọc lại đầu bài.

Nên trưởng phòng là **phiên chính của bạn**, cái cửa sổ Claude bạn đang gõ vào. Thứ tự dây
chuyền vì thế viết vào chỗ mà phiên chính luôn đọc, và bạn biết chỗ đó rồi: `CLAUDE.md`,
đúng cái tờ giới thiệu dựng ở buổi 12.

Nhớ lại buổi 12, `CLAUDE.md` trả lời câu "bạn là ai". Hôm nay ta thêm vào đó một câu nữa:
**"việc này thì đi qua những khâu nào"**. Vẫn là thứ luôn đúng cho mọi lần, nên để ở đó là
đúng chỗ.

Một hiểu lầm hay gặp: viết dây chuyền vào `CLAUDE.md` xong nhiều người tưởng từ giờ nói gì
nó cũng chạy đủ ba khâu. Không phải. Đó là chỉ dẫn mạnh, Claude bám theo nhưng vẫn có thể
bỏ khâu, nhất là khi bạn nhờ một câu cụt. Nên vẫn phải nhìn xem nó có gọi đủ ba con không,
thiếu thì nhắc.

### Thao tác

**Bước 6. Ghi dây chuyền vào CLAUDE.md**

Để làm gì: từ giờ chỉ cần nói việc, phiên chính tự biết gọi ai trước ai sau.

Gõ vào Claude:

```
Thêm vào file CLAUDE.md một mục mới tên "Dây chuyền viết bài quảng bá", đặt ngay
trước mục "Ghi chú cho AI". Nội dung mục đó ghi đúng như sau, giữ nguyên thứ tự:

Khi tôi nhờ viết một bài đăng quảng bá, chạy lần lượt ba khâu, không bỏ khâu nào:

1. Gọi agent nghien-cuu-doi-thu để xem thị trường đang nói gì về chủ đề này, lấy
   về vài điểm để bài của tôi không nói trùng. Nếu tôi đã đưa sẵn tư liệu thì báo
   tôi biết là bỏ qua khâu này.
2. Đưa tư liệu khâu 1 cho agent viet-bai-quang-ba viết bản nháp và lưu file vào
   03-noi-dung-quang-ba/nhap/.
3. Đưa đường dẫn bản nháp đó cho agent soat-bai-dang soát, lấy về bảng lỗi.

Sau khâu 3, đưa tôi xem bảng lỗi rồi hỏi tôi muốn sửa mục nào. Không tự sửa khi
tôi chưa trả lời. Không tự đăng, không tự gửi đi đâu.

Chỉ thêm mục này, đừng sửa các mục khác trong file.
```

Bạn sẽ thấy: `CLAUDE.md` có thêm mục "Dây chuyền viết bài quảng bá" với ba khâu đánh số.
Mở file ra đọc lại một lượt, các mục cũ vẫn nguyên.

Nếu nó viết lại cả file hoặc xóa mất mục cũ: gõ `Khôi phục các mục cũ của CLAUDE.md, chỉ
thêm mục mới vào, không sửa gì khác.`

---

## PHẦN D. Cho cả dây chuyền chạy một lượt

### Lý thuyết

Giờ dây chuyền đã có người ở cả ba chỗ, và bảng phân công đã dán ở cửa. Việc còn lại của
bạn nhẹ nhất: **nói việc, rồi ngồi xem.** Không phải hô từng khâu nữa.

Một hiểu lầm hay gặp, và nó làm nhiều người thất vọng ở đúng bước này: nghe "cả dây chuyền
chạy" nhiều người tưởng sẽ nhanh hơn nhờ một câu. Ngược lại, **nó chậm hơn hẳn và tốn
token hơn**, vì ba con làm nối tiếp nhau chứ không phải một con làm một lượt. Cái bạn đổi
lấy không phải tốc độ, mà là chất lượng ổn định và có người gác cổng. Việc gấp mà không
quan trọng thì cứ nhờ thẳng một câu như cũ, đừng gọi dây chuyền.

### Thao tác

**Bước 7. Chạy cả dây chuyền bằng một câu**

Để làm gì: nghiệm thu cả buổi bằng đúng một câu lệnh.

Lấy lại **đúng bản mô tả bạn đã dùng ở Bước 1**, không sửa một chữ nào trong năm dòng đó.
Chỉ thêm một dòng cuối. Có giữ nguyên brief thì phép so ở bước sau mới sạch.

Gõ vào Claude (dán lại năm dòng của Bước 1, đừng gõ mới):

```
Viết cho tôi một bài đăng Facebook quảng bá.

- Sản phẩm: [dán lại y nguyên dòng bạn đã điền ở Bước 1]
- Bán cho ai: [dán lại y nguyên dòng bạn đã điền ở Bước 1]
- Điểm muốn nhấn: [dán lại y nguyên dòng bạn đã điền ở Bước 1]
- Kêu gọi hành động: [dán lại y nguyên dòng bạn đã điền ở Bước 1]
- Độ dài: khoảng 150 chữ

Chạy theo đúng dây chuyền viết bài quảng bá trong CLAUDE.md.
```

Bạn sẽ thấy: Claude gọi lần lượt ba trợ lý, mỗi con báo về một khúc. Cuối cùng nó đưa bạn
đường dẫn file bản nháp trong `03-noi-dung-quang-ba/nhap/` và một bảng lỗi ba cột do con
gác cổng trả về, rồi dừng lại hỏi bạn muốn sửa mục nào. Nó không tự sửa và không tự đăng.

Nếu nó viết thẳng bài mà không gọi con nào: gõ `Bạn chưa chạy dây chuyền. Đọc lại mục "Dây
chuyền viết bài quảng bá" trong CLAUDE.md rồi làm lại từ khâu 1, gọi đủ ba agent.`

Nếu nó gọi đủ ba con nhưng con gác cổng lại trả lời chung chung, không ra bảng: gõ `Gọi lại
agent soat-bai-dang, yêu cầu trả đúng bảng ba cột chỗ sai - lỗi gì - sửa thế nào, có trích
nguyên câu.`

---

**Bước 8. Đặt hai bài cạnh nhau mà so**

Để làm gì: tự thấy dây chuyền được cái gì, không cần ai thuyết phục.

Gõ vào Claude:

```
So sánh giúp tôi hai bài: bài bạn viết một mạch ở đầu buổi, và bài vừa qua dây
chuyền ba khâu. Lưu ý là tôi đã giao cùng một bản mô tả cho cả hai lần, nên khác
biệt không đến từ cách tôi giao việc.

So theo bốn điểm: có bịa số liệu không, có câu rỗng thay tên thương hiệu nào vào
cũng đúng không, có lọt từ tôi cấm dùng không, và bài đang được lưu ở đâu.
Trả lời dạng bảng, đừng khen bài nào cả.
```

Bạn sẽ thấy: bảng so cho thấy bài đầu buổi có số bịa hoặc câu rỗng mà không ai bắt, và
không được lưu vào đâu; bài sau có chỗ chưa đủ dữ liệu thì đứng nguyên dạng `[cần bổ sung]`
chờ bạn điền, có bảng lỗi kèm theo, và nằm đúng ngăn `03-noi-dung-quang-ba/nhap/`.

Đây là khoảnh khắc quan trọng nhất buổi. Cùng một Claude, **cùng một bản mô tả công việc**,
khác nhau đúng một thứ là có người gác cổng hay không. Giảng viên để hai bài cạnh nhau trên màn hình, đọc chung cho
lớp.

Lưu ý nói thẳng: bảng lỗi là để bạn quyết, không phải để làm thay. Bài vẫn do bạn duyệt và
tự tay đăng. Không giao cho trợ lý tự đăng, tự gửi.

---

## PHẦN E. Dây chuyền chạy sai thì chữa ở đâu

### Lý thuyết

Dây chuyền có cái hay ở chỗ hỏng đâu biết đó. Trong một công ty thật, bàn nào ra hàng lỗi
thì gọi đúng người ở bàn đó nhắc, không họp cả phòng. Ở đây cũng vậy: mỗi khâu là một file
riêng, sửa đúng file của khâu hỏng.

Một hiểu lầm hay gặp: thấy kết quả sai, nhiều người gõ thêm một câu dặn ngay trong khung
chat rồi chạy lại. Cách đó chữa được một lần, mai chạy lại sai y hệt. **Sửa vào file thì
chữa một lần dùng mãi.** Đây là khác biệt lớn nhất giữa dặn miệng và có hồ sơ.

### Thao tác

**Bước 9. Bảng chẩn đoán và cách đổi dây chuyền sang việc khác (chỉ đọc)**

Để làm gì: cầm về một bảng tra, gặp lỗi nào mở đúng file đó mà sửa.

| Hiện tượng | Chữa ở file nào | Sửa gì |
|---|---|---|
| Claude viết thẳng bài, không gọi con nào | `CLAUDE.md` | Mục dây chuyền viết mờ. Ghi thẳng tên ba agent và đánh số thứ tự |
| Bài vẫn bịa học phí, ngày khai giảng | `.claude/agents/viet-bai-quang-ba.md` | Nhấn lại câu để nguyên `[cần bổ sung]`, cấm tự điền số |
| Con gác cổng trả lời chung chung, không ra bảng | `.claude/agents/soat-bai-dang.md` | Mô tả rõ bảng ba cột và bốn góc soát |
| Con gác cổng tự sửa bài luôn | `.claude/agents/soat-bai-dang.md` | Kiểm dòng `tools:`, bỏ `Write` và `Edit` nếu lỡ có |
| Trợ lý làm cả những việc bạn không giao | File agent của con đó | Nhiều khả năng file thiếu dòng `tools:`, tức là nó đang được cầm tất. Bắt Claude thêm dòng đó vào |
| Bản nháp rơi lung tung ngoài thư mục gốc | `.claude/agents/viet-bai-quang-ba.md` | Ghi rõ đường dẫn `03-noi-dung-quang-ba/nhap/` |
| Chạy lâu, tốn nhiều token | Không phải lỗi | Việc gấp và không quan trọng thì nhờ thẳng một câu, đừng gọi dây chuyền |
| Lập trợ lý mới, không biết viết prompt thế nào | Không phải lỗi | Dùng công thức năm dòng ở Phần B, điền lần lượt từng dòng |

Dây chuyền ba vai này đổi được sang việc khác chỉ bằng cách thay ba con, giữ nguyên cách
làm:

- Làm **đề cương trình bày**: người lấy tư liệu -> người dựng đề cương -> người soát thiếu
  mục và thiếu mạch.
- Làm **báo cáo**: người gom số liệu -> người viết nhận định -> người soát số và soát logic.
- Làm **quy trình cho việc lặp lại**: đây chính là buổi sau, ta làm tay đầy đủ.

Về nhà: chạy lại dây chuyền này thêm hai lần với hai chủ đề khác nhau, mỗi lần chép lại
bảng lỗi con gác cổng trả về. Đếm xem nó bắt được bao nhiêu lỗi mà bạn đọc lướt đã bỏ qua.
Đó là con số để đo hiệu quả, mang lên lớp buổi sau.

---

## Xong buổi 17, kiểm lại bạn đã có

Tự tay làm được:
- [ ] Một bản mô tả công việc năm dòng, dùng chung cho cả Bước 1 và Bước 7
- [ ] Một bài đăng do Claude viết một mạch ở đầu buổi, giữ lại làm bản đối chứng
- [ ] Hai bản `soat-bai-dang.md`, một bản thiếu dòng `tools:` và một bản có, để so
- [ ] File `.claude/agents/viet-bai-quang-ba.md` do bạn tự điền công thức năm dòng, `tools:` có công cụ ghi file
- [ ] Bảng bốn cột ở Bước 5 cho thấy ai đang cầm gì, và đã đối chiếu thấy đúng
- [ ] Mục "Dây chuyền viết bài quảng bá" trong `CLAUDE.md`, ba khâu đánh số
- [ ] Một bản nháp thật nằm trong `03-noi-dung-quang-ba/nhap/`, kèm bảng lỗi ba cột
- [ ] Bảng so hai bài đầu buổi và cuối buổi

Hiểu để dùng sau:
- [ ] Nói được vì sao người viết không tự soát được bài mình
- [ ] Biết lập đội là tuyển đúng chỗ còn trống, không tuyển lại từ đầu
- [ ] Thuộc công thức năm dòng để tự đặt hàng một trợ lý mới: tên, khi nào gọi, được đụng vào, làm gì, trả về
- [ ] Biết dòng "được đụng vào" là dòng hay quên nhất, và quên nó thì mất luôn cái khóa
- [ ] Biết file agent thiếu dòng `tools:` nghĩa là cho tất chứ không phải không cho gì
- [ ] Biết vì sao người gác cổng phải bị khóa chỉ đọc
- [ ] Biết vì sao nên để phiên chính làm trưởng phòng, dù lập agent điều phối cũng được
- [ ] Biết dây chuyền chậm hơn và tốn hơn nhờ một câu, đổi lấy chất lượng ổn định
- [ ] Biết gặp lỗi nào thì mở file nào để sửa, thay vì dặn lại trong khung chat

Thiếu mục nào thì làm lại đúng bước đó. Buổi sau ta dùng đúng dây chuyền này cho một việc
nặng hơn: viết ra quy trình cho việc bạn làm đi làm lại hằng tuần, thứ hiện đang nằm trong
đầu bạn chứ chưa có trên giấy.
