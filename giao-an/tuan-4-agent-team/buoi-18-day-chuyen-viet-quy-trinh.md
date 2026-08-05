# Buổi 18: Lập dây chuyền ba trợ lý viết ra quy trình cho việc bạn làm hằng tuần

> Cách dùng file này: mỗi phần có hai khúc. Khúc **Lý thuyết** đọc để hiểu mình sắp làm gì
> và vì sao, có ví von cho dễ nhớ. Khúc **Thao tác** là các bước có sẵn prompt, cứ copy dán
> vào Claude Code.
>
> Làm lần lượt, không nhảy cóc. Bước sau dùng kết quả bước trước.
>
> Trước khi bắt đầu: mở Claude Code đúng tại thư mục làm việc của bạn, thư mục đã có
> `CLAUDE.md` từ buổi 12. Và nghĩ sẵn trong đầu **một việc bạn làm đi làm lại hằng tuần**
> mà chưa bao giờ viết ra giấy: xử lý đơn xin nghỉ phép, đối chiếu công nợ cuối tuần, tiếp
> nhận yêu cầu mua sắm, chốt bảng chấm công, gì cũng được, miễn là việc thật của bạn.
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
| A | Lấy cho được nguyên liệu thật | 9' | LT 3' + HV 6' | 1-2 |
| B | Tuyển ba vai cho dây chuyền | 15' | LT 4' + HV 11' | 3-6 |
| C | Chỉ cho Claude thứ tự bàn giao | 7' | LT 3' + HV 4' | 7 |
| D | Cho cả dây chuyền chạy trên việc thật | 8' | LT 1' + HV 7' | 8-9 |
| E | Dây chuyền chạy sai thì chữa ở đâu | 3' | LT 3' (chỉ đọc) | 10 |
| | Dự phòng | 3' | | |

LT = giảng viên nói. HV = học viên tự làm. DEMO = giảng viên làm, học viên xem.

Buổi 13 bạn tuyển một nhân viên. Hôm nay bạn lập cả một dây chuyền, và học chỗ khó nhất của
việc lập đội: ai là người điều phối.

Sản phẩm cuối buổi là thứ mang đi dùng được ngay: **một bản quy trình cho việc bạn làm hằng
tuần**, có người chịu trách nhiệm từng bước và có bảng kiểm cuối. Thứ mà đến giờ vẫn chỉ nằm
trong đầu bạn, và mỗi lần người khác làm thay là mỗi lần sai một kiểu.

---

## PHẦN A. Lấy cho được nguyên liệu thật

### Lý thuyết

Hình dung bạn thuê một người viết rất giỏi, nhưng chưa từng làm ở công ty bạn ngày nào, rồi
bảo họ viết quy trình cho một việc trong phòng bạn. Họ sẽ viết ra được. Bản đó đọc rất trơn,
đủ mục, chia bước đàng hoàng. Nhưng nó là **bản sách giáo khoa**: đúng ở mọi công ty và vô
dụng ở đúng công ty bạn, vì nó không biết ở chỗ bạn ai ký, ai duyệt, kẹt ở khâu nào, tháng
nào cao điểm.

Claude lúc này đúng là người viết đó. Nó viết được, nhưng **nguyên liệu thì phải từ đầu bạn
ra.** Quy trình của bạn không nằm trong sách nào cả, nó nằm trong đầu bạn dưới dạng thói
quen làm việc mà chính bạn cũng chưa bao giờ đọc thành lời.

Nên việc đầu tiên hôm nay không phải là viết, mà là **moi cho được thói quen đó ra thành
chữ**. Cách moi đơn giản nhất là để Claude phỏng vấn bạn từng câu một, rồi ghi lại thành
một file ghi chú. File ghi chú đó chính là nguyên liệu để cả dây chuyền chạy ở Phần D.

Có một lý do kỹ thuật khiến khâu phỏng vấn này phải làm ở đây, ngay trong cửa sổ bạn đang
gõ, chứ không giao cho trợ lý phụ được. Ta nói rõ ở Phần C.

Một hiểu lầm hay gặp: nhiều người tưởng AI viết hộ quy trình được từ không khí, cứ nói tên
việc là nó ra bản dùng luôn. Nó chỉ **sắp xếp lại thứ bạn đã biết** cho gọn và đủ mục. Bạn
không đưa nguyên liệu thì nó lấy sách giáo khoa ra chép, và bản đó không ai làm theo được.

### Thao tác

**Bước 1. Nhờ Claude viết quy trình một phát**

Để làm gì: có một bản đối chứng để cuối buổi đặt cạnh bản do cả dây chuyền làm.

Điền bản mô tả dưới đây bằng việc thật của bạn. **Giữ lại bản mô tả này**, cuối buổi ta dùng
lại y nguyên nó ở Bước 8, để hai bản quy trình chỉ khác nhau đúng một thứ: có chạy dây
chuyền hay không. Nếu đầu buổi giao việc sơ sài mà cuối buổi giao việc kỹ càng thì so không
còn công bằng nữa.

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

Bạn sẽ thấy: một bản quy trình đủ mục, chia bước gọn gàng, bám đúng bốn dòng bạn vừa giao.
Brief đã kỹ như vậy rồi mà bản này vẫn chưa dùng được. Giờ áp **phép thử một câu** đã
học ở buổi 12: đọc từng bước và thử thay tên công ty bạn bằng tên một công ty bất kỳ khác.
Nếu bước nào thay vào vẫn đúng nguyên, bước đó là sách giáo khoa, chưa dùng được ở chỗ bạn.
Thường thì cả bản đều thế.

Soi thêm ba chỗ: có bước nào ghi rõ **ai làm, ai duyệt** không; có bước nào nói **mất bao
lâu** không; có chỗ nào nói **kẹt thì xử lý sao** không.

Giữ bản này lại, đừng xóa. Cuối buổi ta đặt cạnh bản mới.

---

**Bước 2. Để Claude phỏng vấn bạn, lấy nguyên liệu thật**

Để làm gì: biến thói quen làm việc trong đầu bạn thành một file ghi chú cho cả dây chuyền
dùng.

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

Bạn sẽ thấy: Claude hỏi bạn từng câu, bạn trả lời bằng lời thường không cần chỉn chu, cuối
cùng nó tóm tắt cho bạn gật đầu rồi tạo file `06-quy-trinh/ghi-chu-cach-lam-hien-tai.md`.
Mở file ra đọc, đó là chính lời bạn vừa nói, đã sắp lại cho gọn.

Nếu nó hỏi dồn cả 5 câu một lượt: gõ `Hỏi lại từ câu 1, mỗi lần chỉ một câu, chờ tôi trả
lời rồi mới hỏi câu tiếp.`

Mẹo: trả lời thật và cụ thể. Đừng nói "duyệt theo quy định", hãy nói "trưởng phòng ký, quá
3 ngày không ký thì tôi nhắc qua Zalo". Chỗ càng cụ thể thì quy trình càng dùng được.

---

## PHẦN B. Tuyển ba vai cho dây chuyền

### Lý thuyết

Bạn đã có nguyên liệu. Giờ tới chuyện ai làm.

Cách nhanh nhất là đưa file ghi chú đó cho Claude và bảo viết thành quy trình. Chạy được.
Nhưng nó rơi lại đúng vấn đề của Phần A ở một dạng khác: **người viết tự soát bài mình.**
Ai viết xong đọc lại cũng thấy ổn, đó là chuyện của con người chứ không phải chuyện giỏi dở.
Bước thiếu, câu mơ hồ, chỗ không ghi ai chịu trách nhiệm, chính người viết là người khó
thấy nhất.

Cách chữa trong một công ty thật là **chia thành dây chuyền bàn giao**: người này làm xong
đẩy sang người kia, cuối chuyền có một người chỉ làm mỗi việc gác cổng. Tên kỹ thuật của
thứ ta sắp dựng là agent team, tức **một đội trợ lý nối tiếp nhau**. Ba chỗ đứng:

- **Người gom tư liệu.** Đọc file ghi chú của bạn và các file liên quan trong thư mục, tra
  thêm chuẩn chung của loại việc này. Chỉ đọc.
- **Người viết.** Cầm tư liệu về, dựng thành bản quy trình có mục, lưu vào đúng ngăn.
- **Người gác cổng.** Chỉ đọc bản nháp và chỉ ra chỗ hở. Không được sửa.

Tuyển người thì phải có **bản mô tả công việc**. Bạn không tuyển ai bằng cách nói "em làm
cái này nhé" rồi thôi. Ở đây cũng vậy: nói mơ hồ thì Claude vẫn tạo ra file, file đọc còn rất
trơn, mà thiếu mất vế quan trọng nhất.

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
Đúng cái lời dặn không có răng mà buổi 13 đã cảnh báo.

Áp dòng thứ ba vào đội hôm nay, ba người ba kiểu khác nhau: người gom tư liệu cấm ghi nhưng
được ra mạng; người viết được ghi nhưng không cần ra mạng; người gác cổng cấm cả hai. Ở Bước
6 ta mở cả ba file ra kiểm lại.

Một hiểu lầm hay gặp: nhiều người nghĩ khóa tay người gác cổng là làm khó nó, thà cho sửa
luôn cho nhanh. Ngược lại. Nó mà sửa được thì vừa đá bóng vừa thổi còi, bản sửa xong không
còn ai soát nữa, và bạn mất luôn bảng lỗi, thứ đáng giá nhất mà khâu này đẻ ra.

### Thao tác

**Bước 3. Tuyển người gom tư liệu**

Để làm gì: có một trợ lý đọc gom mọi thứ liên quan trước khi ai đó bắt đầu viết. Đây cũng là
lần đầu bạn áp công thức năm dòng, làm chậm bước này để quen.

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

Bạn sẽ thấy: Claude tạo file `.claude/agents/gom-tu-lieu-quy-trinh.md`. Mở file ra, nhìn khối
mấy dòng nằm giữa hai vạch `---` ở trên cùng. Trong đó có dòng `tools:` do chính nó tự chọn,
gồm các công cụ đọc và tra mạng, **không có công cụ ghi file nào**. Đó là dòng thứ ba của bạn
đã biến thành cái khóa.

Nếu file không có dòng `tools:`, hoặc có mà lại kèm công cụ ghi file: gõ `File
.claude/agents/gom-tu-lieu-quy-trinh.md chưa khóa đúng. Con này chỉ được đọc và tra mạng, cấm
ghi và sửa file. Sửa lại giúp tôi.`

Mẹo cho ai chưa học buổi 17: thử gõ trước một câu mơ hồ kiểu `Tạo cho tôi một agent tên
gom-tu-lieu-quy-trinh để gom tư liệu.` rồi mở file ra xem. Thường sẽ không có dòng `tools:`
nào cả, tức là con đó đang được cầm mọi thứ. Xem xong thì chạy prompt năm dòng ở trên để tạo
lại đè lên.

---

**Bước 4. Tuyển người viết**

Để làm gì: có một trợ lý chuyên dựng bản quy trình đủ mục và lưu đúng ngăn.

Vẫn công thức năm dòng, chỉ khác dòng thứ ba: con này **được ghi file** vì nó phải lưu bản
quy trình.

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

Bạn sẽ thấy: Claude tạo file `.claude/agents/viet-quy-trinh.md`, khối trên cùng có dòng
`tools:` lần này **có** công cụ ghi file và **không có** công cụ tra mạng. Đây là con duy nhất
trong đội được ghi file.

Nếu file không có dòng `tools:` nào: gõ `File .claude/agents/viet-quy-trinh.md chưa ghi rõ
quyền. Con này được đọc và lưu file, không cần ra mạng. Sửa lại giúp tôi.`

---

**Bước 5. Tuyển người gác cổng**

Để làm gì: có một trợ lý chỉ soi lỗ hổng và trả bảng lỗi, không đụng được vào bản quy trình.

Lần này bạn tự điền. Dòng thứ ba là dòng đáng nghĩ nhất: con gác cổng cấm cả ghi lẫn ra mạng.

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

Bạn sẽ thấy: Claude tạo file `.claude/agents/soat-quy-trinh.md`, dòng `tools:` chỉ có các
công cụ đọc. Con này có muốn sửa cũng không có tay để sửa.

Nếu nó vẫn cho công cụ ghi, hoặc file không có dòng `tools:` nào: gõ `File
.claude/agents/soat-quy-trinh.md chưa khóa đúng. Con này chỉ được đọc, cấm ghi sửa file và
cấm ra mạng. Sửa lại giúp tôi.`

Mẹo: gõ `ls .claude/agents` để nhìn cả đội cạnh nhau.

---

**Bước 6. Nghiệm thu xem ai đang cầm chìa khóa gì**

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
dòng `viet-quy-trinh`; cột "ra được mạng" chỉ được ghi "có" ở đúng dòng
`gom-tu-lieu-quy-trinh`. Các ô còn lại phải là "không". Ba người ba xâu chìa khóa khác nhau,
đúng ba dòng thứ ba bạn đã viết.

Nếu bảng không đúng như vậy: gõ `Sửa lại file agent bị sai: con nào không cần ghi file thì bỏ
hết công cụ ghi và sửa, con nào không cần ra mạng thì bỏ công cụ tra mạng.`

Claude hay nói thêm một ý và hỏi bạn có muốn siết nữa không: rằng con `viet-quy-trinh` tuy
được dặn chỉ lưu vào `06-quy-trinh/` nhưng quyền ghi của nó thật ra phủ cả thư mục. Ý đó
**đúng**, và nó chính là bài học của buổi 13 lặp lại: dặn bằng chữ thì không phải là khóa.
Nhưng hôm nay **trả lời là không, rồi đi tiếp**. Siết thêm nữa là khóa luôn khả năng lưu file,
tức là khóa mất chính việc của con này. Muốn an toàn hơn thì bật Git cho thư mục, để lỡ có
ghi đè còn lấy lại được.

Mẹo: cách hỏi này dùng được với mọi thứ bạn không hiểu trong file agent. Không hiểu chỗ nào
thì bắt nó dịch chỗ đó ra tiếng Việt, đừng bỏ qua.

---

## PHẦN C. Chỉ cho Claude thứ tự bàn giao

### Lý thuyết

Bạn đã có ba người, nhưng chưa có dây chuyền. Ba người đứng rời nhau thì lần nào bạn cũng
phải tự đứng ra hô: gọi con này trước, xong đưa kết quả cho con kia. Dặn miệng ba vế mỗi
lần, quên một vế là hỏng.

Câu hỏi đúng lúc này là: **ai làm trưởng phòng?** Và đây là chỗ hầu hết mọi người đoán sai.

Nghe hợp lý nhất là lập thêm một con agent "trưởng phòng" để nó đứng ra gọi ba con kia.
**Không làm được.** Trong Claude Code, một trợ lý phụ không thuê được trợ lý phụ khác. Con
trưởng phòng bạn lập ra sẽ ngồi trong phòng riêng của nó và không gọi được ai cả.

Vậy trưởng phòng là ai? **Chính là phiên chính của bạn** - cái cửa sổ Claude bạn đang gõ
vào. Chỉ nó mới có quyền gọi trợ lý phụ. Đây cũng là lý do khâu phỏng vấn ở Bước 2 phải làm
ở đây: trợ lý phụ chạy trong phòng riêng, chạy một mạch tới xong rồi mới ra, giữa chừng nó
không quay ra hỏi bạn được. Việc gì cần đối đáp với bạn thì phải nằm ở phiên chính.

Thứ tự dây chuyền vì thế phải viết vào chỗ mà phiên chính luôn đọc, và bạn biết chỗ đó rồi:
`CLAUDE.md`, đúng cái tờ giới thiệu dựng ở buổi 12. Buổi đó `CLAUDE.md` trả lời câu "bạn là
ai". Hôm nay ta thêm một câu nữa: **"việc này thì đi qua những khâu nào"**.

Một hiểu lầm hay gặp: viết dây chuyền vào `CLAUDE.md` xong nhiều người tưởng từ giờ nói gì
nó cũng chạy đủ ba khâu. Không phải. Đó là chỉ dẫn mạnh, Claude bám theo nhưng vẫn có thể bỏ
khâu, nhất là khi bạn nhờ một câu cụt. Nên vẫn phải nhìn xem nó có gọi đủ ba con không.

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

Bạn sẽ thấy: `CLAUDE.md` có thêm mục "Dây chuyền viết quy trình" với ba khâu đánh số, và
mục "Cấu trúc thư mục" có thêm một dòng cho `06-quy-trinh/`. Mở file đọc lại một lượt, các
mục cũ vẫn nguyên.

Nếu nó viết lại cả file hoặc xóa mất mục cũ: gõ `Khôi phục các mục cũ của CLAUDE.md, chỉ
thêm mục mới và một dòng vào mục Cấu trúc thư mục, không sửa gì khác.`

---

## PHẦN D. Cho cả dây chuyền chạy trên việc thật

### Lý thuyết

Giờ dây chuyền đã có người ở cả ba chỗ, bảng phân công đã dán ở cửa, nguyên liệu đã có sẵn
trong `06-quy-trinh/`. Việc còn lại của bạn nhẹ nhất: **nói việc, rồi ngồi xem.**

Một hiểu lầm hay gặp, và nó làm nhiều người thất vọng ở đúng bước này: nghe "cả dây chuyền
chạy" nhiều người tưởng sẽ nhanh hơn nhờ một câu. Ngược lại, **nó chậm hơn hẳn và tốn token
hơn**, vì ba con làm nối tiếp nhau chứ không phải một con làm một lượt. Cái bạn đổi lấy
không phải tốc độ, mà là một bản quy trình có người soi hộ và có bảng lỗi kèm theo. Việc gấp
và không quan trọng thì cứ nhờ thẳng một câu như cũ.

### Thao tác

**Bước 8. Chạy cả dây chuyền bằng một câu**

Để làm gì: nghiệm thu cả buổi bằng đúng một câu lệnh.

Lấy lại **đúng bản mô tả bạn đã dùng ở Bước 1**, không sửa một chữ nào trong bốn dòng đó.
Chỉ thêm một dòng cuối. Có giữ nguyên brief thì phép so ở bước sau mới sạch.

Gõ vào Claude (dán lại bốn dòng của Bước 1, đừng gõ mới):

```
Viết cho tôi một quy trình.

- Việc cần viết quy trình: [dán lại y nguyên dòng bạn đã điền ở Bước 1]
- Ai sẽ cầm quy trình này để làm theo: [dán lại y nguyên dòng bạn đã điền ở Bước 1]
- Người đó cần làm được tới đâu: [dán lại y nguyên dòng bạn đã điền ở Bước 1]
- Phòng ban của tôi: [dán lại y nguyên dòng bạn đã điền ở Bước 1]

Chạy theo đúng dây chuyền viết quy trình trong CLAUDE.md.
```

Bạn sẽ thấy: Claude gọi lần lượt ba trợ lý, mỗi con báo về một khúc. Cuối cùng nó đưa bạn
đường dẫn file quy trình trong `06-quy-trinh/` và một bảng lỗi ba cột do con gác cổng trả
về, rồi dừng lại hỏi bạn muốn sửa mục nào. Nó không tự sửa.

Mở file quy trình ra đọc. Bản này khác bản ở Bước 1 ngay từ dòng đầu: nó gọi đúng tên phòng
ban của bạn, đúng người ký, đúng chỗ hay kẹt mà bạn kể ở Bước 2.

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

So theo năm điểm: có bao nhiêu bước ghi rõ ai làm và ai
duyệt, có bao nhiêu bước ghi thời gian, có nói chỗ hay kẹt không, có bảng kiểm
cuối không, và áp phép thử thay tên công ty khác vào thì bao nhiêu phần trăm nội
dung vẫn đúng nguyên. Trả lời dạng bảng, đừng khen bản nào cả.
```

Bạn sẽ thấy: bảng so cho thấy bản đầu buổi thay tên công ty nào vào cũng đúng, hầu như
không bước nào ghi người chịu trách nhiệm hay thời gian; bản sau gắn chặt vào chỗ bạn, có
người có hạn có bảng kiểm, và chỗ nào bạn chưa cung cấp đủ thì đứng nguyên dạng
`[cần bổ sung]` chờ bạn điền.

Đây là khoảnh khắc quan trọng nhất buổi. Cùng một Claude, **cùng một bản mô tả công việc**,
khác nhau ở chỗ có nguyên liệu thật và có người gác cổng hay không. Giảng viên để hai bản cạnh nhau trên màn
hình, đọc chung cho lớp.

Lưu ý nói thẳng: bảng lỗi là để bạn quyết, không phải để làm thay. Quy trình vẫn do bạn
duyệt và tự tay ban hành. Không giao cho trợ lý tự gửi cho phòng ban khác.

---

## PHẦN E. Dây chuyền chạy sai thì chữa ở đâu

### Lý thuyết

Dây chuyền có cái hay ở chỗ hỏng đâu biết đó. Trong một công ty thật, bàn nào ra hàng lỗi
thì gọi đúng người ở bàn đó nhắc, không họp cả phòng. Ở đây cũng vậy: mỗi khâu là một file
riêng, sửa đúng file của khâu hỏng.

Một hiểu lầm hay gặp: thấy kết quả sai, nhiều người gõ thêm một câu dặn ngay trong khung
chat rồi chạy lại. Cách đó chữa được một lần, mai chạy lại sai y hệt. **Sửa vào file thì
chữa một lần dùng mãi.**

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
| Trợ lý làm cả những việc bạn không giao | File agent của con đó | Nhiều khả năng file thiếu dòng `tools:`, tức là nó đang được cầm tất. Bắt Claude thêm dòng đó vào |
| File rơi lung tung ngoài thư mục gốc | `.claude/agents/viet-quy-trinh.md` | Ghi rõ đường dẫn `06-quy-trinh/` |
| Chạy lâu, tốn nhiều token | Không phải lỗi | Việc gấp và không quan trọng thì nhờ thẳng một câu |
| Lập trợ lý mới, không biết viết prompt thế nào | Không phải lỗi | Dùng công thức năm dòng ở Phần B, điền lần lượt từng dòng |

Dây chuyền ba vai này đổi được sang việc khác chỉ bằng cách thay ba con, giữ nguyên cách
làm:

- Làm **đề cương trình bày**: người gom tư liệu -> người dựng đề cương -> người soát thiếu
  mục và đứt mạch.
- Làm **báo cáo**: người gom số liệu -> người viết nhận định -> người soát số và soát logic.
- Làm **bài đăng quảng bá**: người xem thị trường -> người viết -> người soát giọng và soát
  câu rỗng.

Về nhà: chọn thêm một việc lặp lại nữa của bạn, đội đã có sẵn rồi nên chỉ cần chạy lại
Bước 2 rồi Bước 8, tức là phỏng vấn lấy nguyên liệu mới rồi cho dây chuyền chạy. Xong đưa bản
quy trình cho một đồng nghiệp chưa từng làm việc đó, nhờ họ làm theo và đánh dấu chỗ nào
họ phải hỏi lại bạn. Số câu họ phải hỏi chính là số lỗ hổng còn sót, mang lên lớp buổi sau.

---

## Xong buổi 18, kiểm lại bạn đã có

Tự tay làm được:
- [ ] Một bản mô tả công việc bốn dòng, dùng chung cho cả Bước 1 và Bước 8
- [ ] Một bản quy trình do Claude viết một mạch ở đầu buổi, giữ lại làm bản đối chứng
- [ ] File `06-quy-trinh/ghi-chu-cach-lam-hien-tai.md`, là chính lời bạn trả lời phỏng vấn
- [ ] Ba file agent do chính bạn điền công thức năm dòng, mỗi con một xâu chìa khóa khác nhau:
      `gom-tu-lieu-quy-trinh.md` đọc và tra mạng, `viet-quy-trinh.md` được ghi file,
      `soat-quy-trinh.md` chỉ đọc
- [ ] Bảng bốn cột ở Bước 6 cho thấy ai đang cầm gì, và đã đối chiếu thấy đúng
- [ ] Mục "Dây chuyền viết quy trình" trong `CLAUDE.md`, ba khâu đánh số
- [ ] Một bản quy trình thật cho việc bạn làm hằng tuần, nằm trong `06-quy-trinh/`, kèm bảng lỗi ba cột
- [ ] Bảng so hai bản đầu buổi và cuối buổi

Hiểu để dùng sau:
- [ ] Nói được vì sao AI không viết hộ quy trình từ không khí, nguyên liệu phải từ đầu bạn ra
- [ ] Biết phép thử thay tên công ty để soi một bản quy trình còn là sách giáo khoa hay đã dùng được
- [ ] Nói được vì sao người viết không tự soát được bản của mình
- [ ] Thuộc công thức năm dòng để tự đặt hàng một trợ lý mới: tên, khi nào gọi, được đụng vào, làm gì, trả về
- [ ] Biết dòng "được đụng vào" là dòng hay quên nhất, và quên nó thì mất luôn cái khóa
- [ ] Biết file agent thiếu dòng `tools:` nghĩa là cho tất chứ không phải không cho gì
- [ ] Biết vì sao người gác cổng phải bị khóa chỉ đọc
- [ ] Biết không lập được agent trưởng phòng, và trưởng phòng chính là phiên chính của bạn
- [ ] Biết vì sao việc cần đối đáp với bạn thì không giao cho trợ lý phụ được
- [ ] Biết dây chuyền chậm hơn và tốn hơn nhờ một câu, đổi lấy bản có người soi hộ
- [ ] Biết gặp lỗi nào thì mở file nào để sửa, thay vì dặn lại trong khung chat

Thiếu mục nào thì làm lại đúng bước đó. Buổi sau ta lấy chính các quy trình vừa viết ra làm
đầu vào, cho cả đội chạy trọn một chu kỳ tuần và tự tổng hợp thành báo cáo.
