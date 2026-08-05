# Buổi 18: Lập dây chuyền ba trợ lý viết ra quy trình cho việc bạn làm hằng tuần

> Cách dùng file này: mỗi phần có hai khúc. Khúc **Lý thuyết** đọc để hiểu mình sắp làm gì
> và vì sao. Khúc **Thao tác** là các bước có sẵn prompt, cứ copy dán vào Claude Code.
>
> Làm lần lượt, không nhảy cóc. Bước sau dùng kết quả bước trước.
>
> Trước khi bắt đầu: mở Claude Code đúng tại thư mục làm việc của bạn, thư mục đã có
> `CLAUDE.md` từ buổi 12. Và nghĩ sẵn **một việc bạn làm đi làm lại hằng tuần** mà chưa bao
> giờ viết ra giấy: xử lý đơn xin nghỉ phép, đối chiếu công nợ, chốt bảng chấm công, gì cũng
> được, miễn là việc thật của bạn.
>
> Năm phần, đi từ dễ tới khó:
> - Phần A: lấy cho được nguyên liệu thật, thứ đang nằm trong đầu bạn
> - Phần B: tuyển ba vai cho dây chuyền
> - Phần C: chỉ cho Claude thứ tự bàn giao giữa ba vai
> - Phần D: cho cả dây chuyền chạy trên việc thật của bạn
> - Phần E: dây chuyền chạy sai thì chữa ở đâu

## Nhịp buổi

| Phần | Nội dung | Phút | Dạng | Bước |
|---|---|---|---|---|
| | Mở buổi: buổi này để làm gì | 2' | LT 2' | |
| A | Lấy cho được nguyên liệu thật | 9' | LT 3' + HV 6' | 1-2 |
| B | Tuyển ba vai cho dây chuyền | 15' | LT 4' + HV 11' | 3-6 |
| C | Chỉ cho Claude thứ tự bàn giao | 7' | LT 3' + HV 4' | 7 |
| D | Cho cả dây chuyền chạy trên việc thật | 8' | LT 1' + HV 7' | 8-9 |
| E | Dây chuyền chạy sai thì chữa ở đâu | 2' | LT 2' (chỉ đọc) | 10 |
| | Dự phòng | 2' | | |

LT = giảng viên nói. HV = học viên tự làm. DEMO = giảng viên làm, học viên xem.

---

## Buổi này để làm gì

Cái việc anh chị làm đi làm lại mỗi tuần: tuần sau anh chị nghỉ phép, có ai làm thay mà
không phải nhắn Zalo hỏi anh chị không?

Thường là không. Vì cách làm nằm trong đầu anh chị, chưa bao giờ có trên giấy. Ai cũng biết
nên viết ra, nhưng ngồi viết mất cả buổi, mà viết xong vẫn thiếu - người viết là người khó
thấy chỗ thiếu nhất.

Hôm nay ta thuê ba người làm hộ: một người gom tư liệu, một người viết, một người soi chỗ
hở. Anh chị chỉ kể lại mình đang làm thế nào, rồi duyệt.

Cuối buổi anh chị có bản quy trình cho đúng việc của mình, và ba người đó nằm sẵn trong máy.
Lần sau viết quy trình cho việc khác chỉ mất vài phút.

Chấm điểm: đưa bản quy trình cho người chưa từng làm việc đó, đếm xem họ phải hỏi lại mấy
câu. Càng ít càng tốt.

Buổi này học riêng cũng được. Cần sẵn file `CLAUDE.md` từ buổi 12 và một việc mình làm hằng
tuần.

---

## PHẦN A. Lấy cho được nguyên liệu thật

### Lý thuyết

Thuê một người viết rất giỏi, nhưng chưa từng làm ở công ty bạn ngày nào, rồi bảo họ viết
quy trình cho phòng bạn. Họ viết được. Bản đó đọc trơn, đủ mục. Nhưng là **bản sách giáo
khoa**: đúng ở mọi công ty, vô dụng ở đúng chỗ bạn, vì nó không biết ai ký, ai duyệt, kẹt ở
khâu nào.

Claude lúc này đúng là người viết đó. Nó viết được, nhưng **nguyên liệu phải từ đầu bạn ra.**
Nên việc đầu tiên hôm nay không phải là viết, mà là moi thói quen làm việc trong đầu bạn ra
thành chữ. Cách moi: để Claude phỏng vấn bạn, rồi ghi lại thành một file ghi chú. File đó là
nguyên liệu cho cả dây chuyền.

Một hiểu lầm hay gặp: tưởng AI viết hộ quy trình được từ không khí, cứ nói tên việc là ra
bản dùng luôn. Nó chỉ **sắp xếp lại thứ bạn đã biết**. Không đưa nguyên liệu thì nó chép
sách giáo khoa, và bản đó không ai làm theo được.

### Thao tác

**Bước 1. Nhờ Claude viết quy trình một phát**

Để làm gì: có một bản đối chứng để cuối buổi đặt cạnh bản do cả dây chuyền làm.

**Giữ lại bản mô tả này**, cuối buổi ta dùng lại y nguyên nó ở Bước 8. Đầu buổi giao sơ sài
mà cuối buổi giao kỹ càng thì so không còn công bằng.

Gõ vào Claude (điền bốn dòng trong ngoặc vuông bằng việc của bạn):

```
Viết cho tôi một quy trình.

- Việc cần viết quy trình: [việc bạn làm đi làm lại hằng tuần, ví dụ: xử lý đơn
  xin nghỉ phép của nhân viên]
- Ai sẽ cầm quy trình này để làm theo: [ví dụ: nhân viên mới vào phòng hành chính]
- Người đó cần làm được tới đâu: [ví dụ: tự làm trọn việc mà không phải hỏi lại tôi]
- Phòng ban của tôi: [ví dụ: phòng hành chính nhân sự, 4 người]

Viết luôn một mạch, đừng hỏi lại tôi câu nào.
```

Bạn sẽ thấy: một bản quy trình đủ mục, chia bước gọn gàng. Brief kỹ vậy rồi mà vẫn chưa dùng
được. Áp **phép thử một câu** đã học ở buổi 12: thay tên công ty bạn bằng tên công ty bất kỳ
khác, bước nào thay vào vẫn đúng nguyên là bước sách giáo khoa. Thường cả bản đều thế.

Soi thêm ba chỗ: có bước nào ghi **ai làm, ai duyệt** không; có bước nào nói **mất bao lâu**
không; có chỗ nào nói **kẹt thì xử lý sao** không.

Giữ bản này lại, đừng xóa.

Bản demo của giảng viên điền như sau, chiếu lên cho lớp thấy độ ngắn gọn cần có:

```
- Việc cần viết quy trình: soạn bài giảng cho một buổi học
- Ai sẽ cầm quy trình này để làm theo: giảng viên mới của trung tâm
- Người đó cần làm được tới đâu: tự soạn xong một buổi mà không phải hỏi tôi
- Phòng ban của tôi: bộ phận đào tạo, 3 người
```

---

**Bước 2. Để Claude phỏng vấn bạn, lấy nguyên liệu thật**

Để làm gì: biến thói quen trong đầu bạn thành một file ghi chú cho cả dây chuyền dùng.

Gõ vào Claude (điền lại tên việc của bạn):

```
Tôi muốn viết ra quy trình cho việc [tên việc bạn làm đi làm lại hằng tuần].
Việc này hiện nằm trong đầu tôi, chưa có trên giấy.

Trước khi ghi gì, hãy phỏng vấn tôi. Hỏi từng câu một, chờ tôi trả lời xong rồi
mới hỏi câu tiếp, không hỏi dồn:
1. Việc này bắt đầu từ cái gì, ai là người châm ngòi cho nó chạy.
2. Kể tuần tự các bước tôi đang làm, mỗi bước ai làm và ai duyệt.
3. Bước nào hay kẹt hoặc hay sai nhất, kẹt vì cái gì.
4. Việc coi như xong khi nào, kết quả cuối cùng giao cho ai.
5. Có giấy tờ, biểu mẫu, phần mềm hay quy định nào bắt buộc phải dùng không.

Hỏi xong, tóm tắt lại cho tôi xác nhận. Tôi đồng ý rồi bạn mới ghi.

Khi ghi: tạo thư mục 06-quy-trinh nếu chưa có, rồi lưu file
06-quy-trinh/ghi-chu-cach-lam-hien-tai.md. Chỉ ghi đúng những gì tôi trả lời,
chỗ nào tôi chưa nói thì ghi [cần bổ sung], tuyệt đối không tự suy diễn thêm.
```

Bạn sẽ thấy: Claude hỏi từng câu, bạn trả lời bằng lời thường, cuối cùng nó tóm tắt cho bạn
gật đầu rồi tạo file `06-quy-trinh/ghi-chu-cach-lam-hien-tai.md`. Mở ra đọc, đó là chính lời
bạn vừa nói.

Nếu nó hỏi dồn cả 5 câu một lượt: gõ `Hỏi lại từ câu 1, mỗi lần chỉ một câu, chờ tôi trả lời
rồi mới hỏi câu tiếp.`

Mẹo: trả lời cụ thể. Đừng nói "duyệt theo quy định", hãy nói "trưởng phòng ký, quá 3 ngày
không ký thì tôi nhắc qua Zalo".

Bản demo của giảng viên trả lời năm câu như sau, cho việc soạn bài giảng. Chiếu lên cho lớp
thấy trả lời bằng lời thường là được, không cần chỉn chu:

```
Câu 1. Bắt đầu từ cái gì, ai châm ngòi

Có lộ trình 20 buổi chốt từ đầu khóa rồi. Cứ cuối tuần tôi ngồi soạn trước các
buổi của tuần sau. Không ai giao, tự tôi phải làm, tới lịch là làm.

Câu 2. Các bước tôi đang làm

1. Mở lộ trình ra xem buổi đó dạy gì, coi lại buổi trước đã dạy tới đâu
2. Nghĩ xương sống: buổi này chia mấy phần, mỗi phần học viên làm ra được cái gì
3. Viết file giáo án, mỗi bước có prompt sẵn cho học viên copy
4. Tự chạy thử mấy prompt đó xem có ra không
5. Chuẩn bị file phát học viên, gửi vào nhóm Zalo lớp trước buổi
6. Tôi tự duyệt, không ai duyệt cho tôi

Câu 3. Bước nào hay kẹt hoặc hay sai

Bước 4, chạy thử prompt. Hay bỏ qua vì gấp, tới lớp mới lòi ra prompt không
chạy như mình tưởng, phải chữa live trước mặt học viên.
Bước 1 cũng hay sai: buổi trước dạy lệch so với lộ trình mà tôi quên cập nhật,
nên soạn buổi sau bị hụt, học viên chưa có cái mình tưởng họ đã có.

Câu 4. Xong khi nào, giao cho ai

Xong khi giáo án viết đủ các phần, prompt đã chạy thử, file phát học viên đã gửi
nhóm Zalo. Giao cho chính tôi lên lớp dạy. Giảng viên khác cũng cầm file đó dạy
được, nên phải viết sao cho người khác đọc là giảng được, không cần hỏi tôi.

Câu 5. Giấy tờ, biểu mẫu, phần mềm, quy định bắt buộc

- File hướng dẫn giảng viên: khung 45 phút, xưng em gọi anh chị, giữ dấu tiếng Việt
- Lộ trình 20 buổi, không được lệch tên agent đã hứa trên trang bán khóa
- Giáo án viết dạng markdown, để trong thư mục giáo án theo tuần
- File phát học viên để thư mục riêng
- Nhóm Zalo lớp để gửi tài liệu
```

Ba chỗ đáng chỉ cho lớp thấy trong bộ trả lời này:

- **Câu 3 là câu ăn tiền nhất.** Nó lòi ra chỗ hay bỏ qua vì gấp. Đó chính là chỗ quy trình
  phải ghi thành bước bắt buộc, chứ không để tùy hứng.
- **Câu 4 lộ một yêu cầu ẩn**: bản quy trình phải viết cho người khác đọc được, không phải
  cho mình nhớ. Không hỏi câu này thì không lòi ra.
- **Câu 2 có chỗ "tôi tự duyệt, không ai duyệt cho tôi"**. Lát nữa con gác cổng sẽ bắt đúng
  chỗ này và ghi vào bảng lỗi.

---

## PHẦN B. Tuyển ba vai cho dây chuyền

### Lý thuyết

Đưa thẳng file ghi chú cho Claude bảo viết cũng chạy được. Nhưng rơi lại vấn đề cũ ở dạng
khác: **người viết tự soát bản của mình.** Bước thiếu, câu mơ hồ, chỗ không ghi ai chịu
trách nhiệm - người viết là người khó thấy nhất.

Cách chữa: **chia thành dây chuyền bàn giao**, cuối chuyền có một người chỉ làm mỗi việc gác
cổng. Tên kỹ thuật là agent team, tức **một đội trợ lý nối tiếp nhau**. Ba chỗ đứng:

- **Người gom tư liệu.** Đọc ghi chú của bạn, tra thêm chuẩn chung. Chỉ đọc.
- **Người viết.** Dựng thành bản quy trình có mục, lưu vào đúng ngăn.
- **Người gác cổng.** Chỉ đọc rồi chỉ ra chỗ hở. Không được sửa.

Tuyển người thì phải có **bản mô tả công việc**. Nói mơ hồ thì Claude vẫn tạo ra file, đọc
còn rất trơn, mà thiếu mất vế quan trọng nhất. Đây là **công thức đặt hàng một trợ lý**, năm
dòng, không cần gõ một chữ tiếng Anh nào:

| Dòng | Trả lời câu gì | Vì sao cần |
|---|---|---|
| Tên | Gọi nó là gì | Để bạn gọi đích danh khi cần |
| Khi nào gọi | Gặp việc nào thì tới lượt nó | Claude đọc dòng này để **tự biết** lúc nào cần nó |
| Được đụng vào | Nó được làm gì, cấm làm gì | **Dòng quan trọng nhất**, đây chính là cái khóa |
| Làm gì | Việc cụ thể của nó | Để nó không làm lệch |
| Trả về | Kết quả ra dạng gì | Để bạn nhận được thứ dùng ngay |

**Dòng thứ ba hay quên nhất, và quên thì hỏng theo kiểu không nhìn thấy.** Không nói con này
được đụng vào gì thì Claude bỏ luôn dòng khóa trong file, mà file agent thiếu dòng khóa
**không phải là không cho gì, mà là cho tất** - kể cả xóa file. Nhìn file chẳng thấy gì bất
thường, vì phần chữ nó vẫn viết "không tự ý sửa file của người dùng". Đúng cái lời dặn không
có răng mà buổi 13 đã cảnh báo.

Ba người hôm nay ba kiểu: gom tư liệu cấm ghi nhưng được ra mạng; người viết được ghi nhưng
không cần mạng; gác cổng cấm cả hai.

Một hiểu lầm hay gặp: nghĩ khóa tay gác cổng là làm khó nó, thà cho sửa luôn cho nhanh.
Ngược lại. Nó sửa được thì vừa đá bóng vừa thổi còi, và bạn mất luôn bảng lỗi, thứ đáng giá
nhất khâu này đẻ ra.

### Thao tác

**Bước 3. Tuyển người gom tư liệu**

Để làm gì: có trợ lý đọc gom mọi thứ liên quan trước khi ai đó bắt đầu viết. Đây là lần đầu
áp công thức năm dòng, làm chậm để quen.

Gõ vào Claude:

```
Tạo cho tôi một agent trong thư mục này:
- Tên: gom-tu-lieu-quy-trinh
- Khi nào gọi: khi tôi cần gom tư liệu trước lúc viết một quy trình
- Được đụng vào: đọc file trong thư mục này và tra cứu ngoài mạng, cấm tạo hay
  sửa file
- Làm gì: đọc trước file 06-quy-trinh/ghi-chu-cach-lam-hien-tai.md vì đó là lời
  của tôi, rồi tra thêm xem loại việc này thường có bước bắt buộc nào tôi đang
  thiếu, kèm nguồn, không bịa
- Trả về: ba phần - cách tôi đang làm, các bước chuẩn tôi đang thiếu, các chỗ
  ghi chú còn thiếu dữ liệu hoặc mâu thuẫn
```

Bạn sẽ thấy: file `.claude/agents/gom-tu-lieu-quy-trinh.md`. Mở ra, nhìn khối mấy dòng giữa
hai vạch `---` ở trên cùng. Có dòng `tools:` do Claude tự chọn, gồm công cụ đọc và tra mạng,
**không có công cụ ghi file nào**. Đó là dòng thứ ba của bạn đã biến thành cái khóa.

Nếu file không có dòng `tools:`, hoặc có mà kèm công cụ ghi file: gõ `File
.claude/agents/gom-tu-lieu-quy-trinh.md chưa khóa đúng. Con này chỉ được đọc và tra mạng, cấm
ghi và sửa file. Sửa lại giúp tôi.`

Mẹo cho ai chưa học buổi 17: thử gõ trước một câu mơ hồ kiểu `Tạo cho tôi một agent tên
gom-tu-lieu-quy-trinh để gom tư liệu.` rồi mở file ra xem. Thường sẽ không có dòng `tools:`
nào, tức là con đó đang được cầm mọi thứ. Xem xong thì chạy prompt năm dòng ở trên để tạo đè
lên.

---

**Bước 4. Tuyển người viết**

Để làm gì: có trợ lý chuyên dựng bản quy trình đủ mục và lưu đúng ngăn.

Vẫn công thức năm dòng, chỉ khác dòng thứ ba: con này **được ghi file**.

Gõ vào Claude:

```
Tạo cho tôi một agent trong thư mục này:
- Tên: viet-quy-trinh
- Khi nào gọi: khi tôi cần dựng bản nháp một quy trình từ tư liệu đã gom
- Được đụng vào: đọc file trong thư mục này và lưu được file, không cần ra mạng
- Làm gì: đọc CLAUDE.md để bám giọng của tôi, bám sát cách tôi đang làm thật chứ
  không thay bằng quy trình mẫu chung chung, chỗ nào tư liệu chưa đủ thì để
  [cần bổ sung], không bịa cho đủ mục. Bản quy trình phải có đủ sáu mục theo thứ
  tự: dùng khi nào và khi nào không dùng; ai liên quan làm gì; điều kiện để bắt
  đầu; các bước đánh số, mỗi bước ghi ai làm, làm gì, mất bao lâu, xong giao lại
  cho ai; hay kẹt ở đâu và xử lý sao; bảng kiểm trước khi coi là xong
- Trả về: lưu file vào 06-quy-trinh/ đặt tên theo tên việc, rồi báo đường dẫn
```

Bạn sẽ thấy: file `.claude/agents/viet-quy-trinh.md`, khối trên cùng có dòng `tools:` lần này
**có** công cụ ghi file và **không có** công cụ tra mạng. Con duy nhất trong đội được ghi.

Nếu file không có dòng `tools:`: gõ `File .claude/agents/viet-quy-trinh.md chưa ghi rõ quyền.
Con này được đọc và lưu file, không cần ra mạng. Sửa lại giúp tôi.`

---

**Bước 5. Tuyển người gác cổng**

Để làm gì: có trợ lý chỉ soi lỗ hổng và trả bảng lỗi, không đụng được vào bản quy trình.

Dòng thứ ba lần này đáng nghĩ nhất: cấm cả ghi lẫn ra mạng.

Gõ vào Claude:

```
Tạo cho tôi một agent trong thư mục này:
- Tên: soat-quy-trinh
- Khi nào gọi: khi tôi cần soát một bản nháp quy trình trước khi ban hành
- Được đụng vào: chỉ đọc file trong thư mục này, cấm sửa file, cấm ra mạng
- Làm gì: soát bằng con mắt người mới vào làm, chưa biết gì, cầm quy trình lên
  làm theo từng chữ. Soát năm thứ - bước nhảy cóc giả định người đọc đã biết
  thứ chưa ai nói; bước không ghi ai làm hoặc ai duyệt; từ mơ hồ không đo được
  như nhanh chóng, kịp thời, khi cần; tình huống bất thường chưa nói xử lý sao;
  các chỗ còn [cần bổ sung]
- Trả về: bảng ba cột chỗ hở (trích nguyên câu), vấn đề gì, sửa thế nào. Không
  có vấn đề thì ghi không phát hiện, đừng bịa cho đủ bảng. Cuối bảng kết luận
  một dòng: ban hành được, hoặc cần sửa trước khi ban hành
```

Bạn sẽ thấy: file `.claude/agents/soat-quy-trinh.md`, dòng `tools:` chỉ có công cụ đọc. Con
này muốn sửa cũng không có tay để sửa.

Nếu nó vẫn cho công cụ ghi, hoặc file không có dòng `tools:`: gõ `File
.claude/agents/soat-quy-trinh.md chưa khóa đúng. Con này chỉ được đọc, cấm ghi sửa file và
cấm ra mạng. Sửa lại giúp tôi.`

Mẹo: gõ `ls .claude/agents` để nhìn cả đội cạnh nhau.

---

**Bước 6. Nghiệm thu xem ai đang cầm chìa khóa gì**

Để làm gì: bạn vừa để Claude tự quyết bộ công cụ, giờ soát lại quyết định đó.

Gõ vào Claude:

```
Mở cả ba file trong .claude/agents/ của thư mục này ra xem.

Lập cho tôi một bảng, mỗi file một dòng, bốn cột: tên trợ lý, con này ghi hay sửa
được file của tôi không, con này ra được ngoài mạng không, và nếu có công cụ nào
thừa so với việc của nó thì chỉ ra.

Giải thích bằng lời thường, tôi không rành kỹ thuật.
```

Bạn sẽ thấy: một bảng bốn cột. Đối chiếu: cột "ghi sửa được file" chỉ được ghi "có" ở đúng
dòng `viet-quy-trinh`; cột "ra được mạng" chỉ được ghi "có" ở đúng dòng
`gom-tu-lieu-quy-trinh`. Các ô còn lại phải là "không".

Nếu bảng không đúng: gõ `Sửa lại file agent bị sai: con nào không cần ghi file thì bỏ hết
công cụ ghi và sửa, con nào không cần ra mạng thì bỏ công cụ tra mạng.`

Claude hay nói thêm một ý rồi hỏi bạn có muốn siết nữa không: rằng con `viet-quy-trinh` tuy
được dặn chỉ lưu vào `06-quy-trinh/` nhưng quyền ghi thật ra phủ cả thư mục. Ý đó **đúng**,
nhưng hôm nay **trả lời là không, rồi đi tiếp**. Siết thêm là khóa luôn khả năng lưu file,
tức là khóa mất chính việc của con này. Muốn an toàn hơn thì bật Git cho thư mục.

---

## PHẦN C. Chỉ cho Claude thứ tự bàn giao

### Lý thuyết

Ba người đứng rời nhau thì lần nào bạn cũng phải tự hô: gọi con này trước, xong đưa kết quả
cho con kia. Quên một vế là hỏng.

Vậy **ai làm trưởng phòng?** Đây là chỗ hầu hết đoán sai. Nghe hợp lý nhất là lập thêm một
agent "trưởng phòng" để nó gọi ba con kia. **Không làm được.** Trong Claude Code, một trợ lý
phụ không thuê được trợ lý phụ khác.

Trưởng phòng **chính là phiên chính của bạn**, cái cửa sổ Claude bạn đang gõ vào. Chỉ nó mới
gọi được trợ lý phụ. Đây cũng là lý do khâu phỏng vấn ở Bước 2 phải làm ở đây: trợ lý phụ
chạy một mạch trong phòng riêng, giữa chừng không quay ra hỏi bạn được.

Nên thứ tự dây chuyền phải viết vào chỗ phiên chính luôn đọc: `CLAUDE.md`, đúng cái tờ giới
thiệu dựng ở buổi 12. Buổi đó nó trả lời câu "bạn là ai". Hôm nay thêm câu nữa: **"việc này
đi qua những khâu nào"**.

Một hiểu lầm hay gặp: viết vào `CLAUDE.md` rồi tưởng từ giờ nói gì nó cũng chạy đủ ba khâu.
Đó là chỉ dẫn mạnh, không phải luật. Vẫn phải nhìn xem nó có gọi đủ ba con không.

### Thao tác

**Bước 7. Ghi dây chuyền vào CLAUDE.md**

Để làm gì: từ giờ chỉ cần nói việc, phiên chính tự biết gọi ai trước ai sau.

Gõ vào Claude:

```
Thêm vào file CLAUDE.md một mục mới tên "Dây chuyền viết quy trình", đặt ngay
trước mục "Ghi chú cho AI". Nội dung mục đó ghi đúng như sau, giữ nguyên thứ tự:

Khi tôi nhờ viết một quy trình cho việc tôi làm lặp lại, chạy lần lượt ba khâu,
không bỏ khâu nào:

1. Gọi agent gom-tu-lieu-quy-trinh để gom tư liệu, nguồn chính là file ghi chú
   cách làm hiện tại trong 06-quy-trinh/.
2. Đưa tư liệu khâu 1 cho agent viet-quy-trinh dựng bản nháp và lưu file vào
   06-quy-trinh/.
3. Đưa đường dẫn bản nháp đó cho agent soat-quy-trinh soát, lấy về bảng lỗi.

Sau khâu 3, đưa tôi xem bảng lỗi rồi hỏi tôi muốn sửa mục nào. Không tự sửa khi
tôi chưa trả lời. Quy trình chỉ được coi là ban hành khi chính tôi duyệt, không
tự gửi cho ai.

Nếu tôi chưa có file ghi chú cách làm hiện tại thì đừng chạy dây chuyền, hãy
phỏng vấn tôi trước để dựng file đó.

Sau khi thêm xong, cập nhật luôn mục "Cấu trúc thư mục" trong CLAUDE.md, bổ sung
một dòng cho thư mục 06-quy-trinh. Ngoài hai chỗ đó thì đừng sửa gì khác.
```

Bạn sẽ thấy: `CLAUDE.md` có thêm mục "Dây chuyền viết quy trình" với ba khâu đánh số, và mục
"Cấu trúc thư mục" có thêm một dòng cho `06-quy-trinh/`. Các mục cũ vẫn nguyên.

Nếu nó viết lại cả file hoặc xóa mất mục cũ: gõ `Khôi phục các mục cũ của CLAUDE.md, chỉ
thêm mục mới và một dòng vào mục Cấu trúc thư mục, không sửa gì khác.`

---

## PHẦN D. Cho cả dây chuyền chạy trên việc thật

### Lý thuyết

Dây chuyền đã đủ người, bảng phân công đã dán ở cửa, nguyên liệu có sẵn. Việc còn lại của
bạn nhẹ nhất: **nói việc, rồi ngồi xem.**

Một hiểu lầm hay gặp, và nó làm nhiều người thất vọng ở đúng bước này: tưởng cả dây chuyền
chạy thì nhanh hơn nhờ một câu. Ngược lại, **chậm hơn hẳn và tốn token hơn**, vì ba con làm
nối tiếp nhau. Cái bạn đổi lấy không phải tốc độ, mà là một bản có người soi hộ và có bảng
lỗi kèm theo. Việc gấp mà không quan trọng thì cứ nhờ thẳng một câu như cũ.

### Thao tác

**Bước 8. Chạy cả dây chuyền bằng một câu**

Để làm gì: nghiệm thu cả buổi bằng đúng một câu lệnh.

Lấy lại **đúng bản mô tả đã dùng ở Bước 1**, không sửa một chữ nào. Chỉ thêm một dòng cuối.

Gõ vào Claude (dán lại bốn dòng của Bước 1, đừng gõ mới):

```
Viết cho tôi một quy trình.

- Việc cần viết quy trình: [dán lại y nguyên dòng bạn đã điền ở Bước 1]
- Ai sẽ cầm quy trình này để làm theo: [dán lại y nguyên dòng bạn đã điền ở Bước 1]
- Người đó cần làm được tới đâu: [dán lại y nguyên dòng bạn đã điền ở Bước 1]
- Phòng ban của tôi: [dán lại y nguyên dòng bạn đã điền ở Bước 1]

Chạy theo đúng dây chuyền viết quy trình trong CLAUDE.md.
```

Bản demo của giảng viên, đúng bốn dòng đã điền ở Bước 1, chỉ thay dòng cuối:

```
Viết cho tôi một quy trình.

- Việc cần viết quy trình: soạn bài giảng cho một buổi học
- Ai sẽ cầm quy trình này để làm theo: giảng viên mới của trung tâm
- Người đó cần làm được tới đâu: tự soạn xong một buổi mà không phải hỏi tôi
- Phòng ban của tôi: bộ phận đào tạo, 3 người

Chạy theo đúng dây chuyền viết quy trình trong CLAUDE.md.
```

Bạn sẽ thấy: Claude gọi lần lượt ba trợ lý, mỗi con báo về một khúc. Cuối cùng nó đưa đường
dẫn file quy trình trong `06-quy-trinh/` và một bảng lỗi ba cột do con gác cổng trả về, rồi
dừng lại hỏi bạn muốn sửa mục nào. Nó không tự sửa.

Mở file quy trình ra đọc. Bản này khác bản ở Bước 1 ngay từ dòng đầu: gọi đúng tên phòng ban
của bạn, đúng người ký, đúng chỗ hay kẹt bạn kể ở Bước 2.

Nếu nó viết thẳng quy trình mà không gọi con nào: gõ `Bạn chưa chạy dây chuyền. Đọc lại mục
"Dây chuyền viết quy trình" trong CLAUDE.md rồi làm lại từ khâu 1, gọi đủ ba agent.`

Nếu con gác cổng trả lời chung chung, không ra bảng: gõ `Gọi lại agent soat-quy-trinh, yêu
cầu trả đúng bảng ba cột chỗ hở - vấn đề gì - sửa thế nào, có trích nguyên câu, và soát đủ
năm góc.`

---

**Bước 9. Đặt hai bản cạnh nhau mà so**

Để làm gì: tự thấy dây chuyền được cái gì, không cần ai thuyết phục.

Gõ vào Claude:

```
So sánh giúp tôi hai bản: bản quy trình bạn viết một mạch ở đầu buổi, và bản vừa
qua dây chuyền ba khâu. Lưu ý là tôi đã giao cùng một bản mô tả cho cả hai lần,
nên khác biệt không đến từ cách tôi giao việc.

So theo năm điểm: có bao nhiêu bước ghi rõ ai làm và ai duyệt, có bao nhiêu bước
ghi thời gian, có nói chỗ hay kẹt không, có bảng kiểm cuối không, và áp phép thử
thay tên công ty khác vào thì bao nhiêu phần trăm nội dung vẫn đúng nguyên.
Trả lời dạng bảng, đừng khen bản nào cả.
```

Bạn sẽ thấy: bản đầu buổi thay tên công ty nào vào cũng đúng, hầu như không bước nào ghi
người chịu trách nhiệm hay thời gian. Bản sau gắn chặt vào chỗ bạn, có người có hạn có bảng
kiểm, chỗ nào bạn chưa cung cấp đủ thì đứng nguyên `[cần bổ sung]` chờ điền.

Đây là khoảnh khắc quan trọng nhất buổi. Cùng một Claude, **cùng một bản mô tả công việc**,
khác nhau ở chỗ có nguyên liệu thật và có người gác cổng hay không. Giảng viên để hai bản
cạnh nhau trên màn hình, đọc chung cho lớp.

Nói thẳng: bảng lỗi là để bạn quyết, không phải để làm thay. Quy trình vẫn do bạn duyệt và
tự tay ban hành. Không giao cho trợ lý tự gửi cho phòng ban khác.

---

## PHẦN E. Dây chuyền chạy sai thì chữa ở đâu

### Lý thuyết

Dây chuyền hay ở chỗ hỏng đâu biết đó. Bàn nào ra hàng lỗi thì gọi đúng người ở bàn đó, không
họp cả phòng. Mỗi khâu là một file riêng, sửa đúng file của khâu hỏng.

Một hiểu lầm hay gặp: thấy sai thì gõ thêm một câu dặn ngay trong khung chat rồi chạy lại.
Cách đó chữa được một lần, mai chạy lại sai y hệt. **Sửa vào file thì chữa một lần dùng mãi.**

### Thao tác

**Bước 10. Bảng chẩn đoán và cách đổi dây chuyền sang việc khác (chỉ đọc)**

Để làm gì: cầm về một bảng tra, gặp lỗi nào mở đúng file đó mà sửa.

| Hiện tượng | Chữa ở file nào | Sửa gì |
|---|---|---|
| Claude viết thẳng quy trình, không gọi con nào | `CLAUDE.md` | Mục dây chuyền viết mờ. Ghi thẳng tên ba agent và đánh số thứ tự |
| Quy trình vẫn chung chung như sách giáo khoa | `06-quy-trinh/ghi-chu-cach-lam-hien-tai.md` | Nguyên liệu còn sơ sài. Chạy lại Bước 2, trả lời cụ thể hơn |
| Bản quy trình thiếu mục, ví dụ không có bảng kiểm | `.claude/agents/viet-quy-trinh.md` | Kiểm lại danh sách 6 mục bắt buộc, ghi rõ hơn |
| Quy trình tự bịa bước mà bạn không hề làm | `.claude/agents/viet-quy-trinh.md` | Nhấn lại câu bám cách tôi làm thật, chỗ thiếu để `[cần bổ sung]` |
| Con gác cổng trả lời chung chung, không ra bảng | `.claude/agents/soat-quy-trinh.md` | Mô tả rõ bảng ba cột và năm góc soát |
| Con gác cổng tự sửa bản quy trình | `.claude/agents/soat-quy-trinh.md` | Kiểm dòng `tools:`, bỏ `Write` và `Edit` nếu lỡ có |
| Trợ lý làm cả những việc bạn không giao | File agent của con đó | Nhiều khả năng file thiếu dòng `tools:`, tức là nó đang được cầm tất |
| File rơi lung tung ngoài thư mục gốc | `.claude/agents/viet-quy-trinh.md` | Ghi rõ đường dẫn `06-quy-trinh/` |
| Chạy lâu, tốn nhiều token | Không phải lỗi | Việc gấp và không quan trọng thì nhờ thẳng một câu |
| Lập trợ lý mới, không biết viết prompt thế nào | Không phải lỗi | Dùng công thức năm dòng ở Phần B, điền lần lượt từng dòng |

Dây chuyền ba vai này đổi sang việc khác chỉ bằng cách thay ba con, giữ nguyên cách làm:

- **Đề cương trình bày**: người gom tư liệu -> người dựng đề cương -> người soát thiếu mục và
  đứt mạch.
- **Báo cáo**: người gom số liệu -> người viết nhận định -> người soát số và soát logic.
- **Bài đăng quảng bá**: người xem thị trường -> người viết -> người soát giọng và câu rỗng.

Về nhà: chọn thêm một việc lặp lại nữa. Đội có sẵn rồi nên chỉ cần chạy lại Bước 2 rồi Bước
8. Xong đưa bản quy trình cho một đồng nghiệp chưa từng làm việc đó, nhờ họ làm theo và đánh
dấu chỗ nào phải hỏi lại bạn. Số câu họ hỏi chính là số lỗ hổng còn sót, mang lên lớp buổi
sau.

---

## Xong buổi 18, kiểm lại bạn đã có

Tự tay làm được:
- [ ] Một bản mô tả công việc bốn dòng, dùng chung cho cả Bước 1 và Bước 8
- [ ] Một bản quy trình do Claude viết một mạch ở đầu buổi, giữ làm bản đối chứng
- [ ] File `06-quy-trinh/ghi-chu-cach-lam-hien-tai.md`, là chính lời bạn trả lời phỏng vấn
- [ ] Ba file agent do chính bạn điền công thức năm dòng, mỗi con một xâu chìa khóa khác nhau
- [ ] Bảng bốn cột ở Bước 6, đã đối chiếu thấy đúng
- [ ] Mục "Dây chuyền viết quy trình" trong `CLAUDE.md`, ba khâu đánh số
- [ ] Một bản quy trình thật cho việc bạn làm hằng tuần, trong `06-quy-trinh/`, kèm bảng lỗi
- [ ] Bảng so hai bản đầu buổi và cuối buổi

Hiểu để dùng sau:
- [ ] Nói được vì sao AI không viết hộ quy trình từ không khí, nguyên liệu phải từ đầu bạn ra
- [ ] Biết phép thử thay tên công ty để soi một bản còn là sách giáo khoa hay đã dùng được
- [ ] Nói được vì sao người viết không tự soát được bản của mình
- [ ] Thuộc công thức năm dòng: tên, khi nào gọi, được đụng vào, làm gì, trả về
- [ ] Biết dòng "được đụng vào" hay quên nhất, và quên thì mất luôn cái khóa
- [ ] Biết file agent thiếu dòng `tools:` nghĩa là cho tất chứ không phải không cho gì
- [ ] Biết không lập được agent trưởng phòng, trưởng phòng chính là phiên chính của bạn
- [ ] Biết việc cần đối đáp với bạn thì không giao cho trợ lý phụ được
- [ ] Biết dây chuyền chậm hơn và tốn hơn, đổi lấy bản có người soi hộ
- [ ] Biết gặp lỗi nào thì mở file nào để sửa, thay vì dặn lại trong khung chat

Thiếu mục nào thì làm lại đúng bước đó. Buổi sau ta lấy chính các quy trình vừa viết làm đầu
vào, cho cả đội chạy trọn một chu kỳ tuần và tự tổng hợp thành báo cáo.
