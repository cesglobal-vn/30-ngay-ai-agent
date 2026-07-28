# Giáo án Buổi 8 + 9: Skill - Đóng gói quy trình lặp lại

## Mục tiêu buổi (học xong học viên làm được gì)
1. Nói được skill là gì và khác gì với việc gõ lại chỉ dẫn mỗi lần.
2. **Hiểu skill sinh ra từ đâu:** làm tay vài lượt, thấy mình lặp lại chỉ dẫn nào thì gói chỉ dẫn đó lại. Không phải chép một file mẫu có sẵn.
3. Biết skill là 1 thư mục chứa file SKILL.md, đặt đúng chỗ trong dự án.
4. Tự tay tạo skill "tom-tat-tai-lieu" trong dự án của mình.
5. Dùng skill để tóm tắt hợp đồng: bóc ra số tiền, ngày tháng, hạn chót, điều khoản bất lợi.
6. Hiểu quy tắc chống bịa: thông tin không có trong tài liệu thì ghi "không đề cập", không suy đoán.

## Kết quả cầm về (deliverable)
- 1 skill `tom-tat-tai-lieu` nằm trong thư mục dự án của học viên, chạy được.
- 1 bản tóm tắt hợp đồng demo do skill sinh ra (đủ 5 mục: tóm tắt nhanh, ý chính, số liệu, lưu ý, quy tắc).
- 1 bản tóm tắt tài liệu công việc thật của học viên.

## Khái niệm cốt lõi (giải thích cho lớp, ngôn ngữ thường)
- **Skill là gói chỉ dẫn cho một việc bạn làm đi làm lại.** Ví dụ: tóm tắt tài liệu, soạn email, kiểm tra hợp đồng. Thay vì mỗi lần lại gõ lại một loạt chỉ dẫn dài, bạn viết chỉ dẫn đó một lần vào skill, rồi dùng lại mãi.
- **Claude tự nạp skill khi gặp việc phù hợp.** Mỗi skill có một dòng mô tả (description) ghi rõ "dùng khi nào". Khi bạn nhờ một việc khớp với dòng mô tả đó, Claude tự lấy skill ra dùng. Bạn cũng gọi thẳng skill bằng tên được.
- **Skill là một thư mục chứa một file tên SKILL.md.** Đặt tại `.claude/skills/<ten-skill>/SKILL.md` trong thư mục dự án. Ví dụ: `.claude/skills/tom-tat-tai-lieu/SKILL.md`. Không phải cài đặt gì, chỉ là file văn bản.
- **Quy tắc quan trọng nhất khi tóm tắt: chống bịa.** Bắt AI chỉ dùng thông tin có thật trong tài liệu. Chỗ nào tài liệu không nói thì ghi "Tài liệu không đề cập", tuyệt đối không tự đoán ra con số hay điều khoản.

---

## Timeline chi tiết (theo phút)

### [00:12-00:27] Lý thuyết ngắn: Skill là gì
> Giữ ngắn, nói vừa đủ để lớp có cái khung. Phần "vì sao cần skill" sẽ tự sáng ra ở
> khối demo ngay sau đây, đừng giảng kỹ ở đây kẻo trùng và cháy giờ.

- **Lời dẫn GV:** "Hình dung skill giống một tờ quy trình dán trên tường. Ai vào làm việc đó cũng theo đúng tờ quy trình, ra kết quả giống nhau. Skill là tờ quy trình đó, nhưng cho AI. Lát nữa tôi sẽ không đưa sẵn tờ quy trình cho cả lớp chép. Tôi sẽ làm việc bằng tay trước, rồi cả lớp xem tờ quy trình đó tự hình thành thế nào."
- Nội dung trình bày (giữ đơn giản, có thể vẽ lên bảng):
  1. **Vì sao cần skill.** Việc lặp lại mà mỗi lần gõ lại chỉ dẫn thì mất công và dễ quên bước. Skill viết một lần, dùng mãi, luôn đủ bước.
  2. **Skill nằm ở đâu.** Là một thư mục trong dự án: `.claude/skills/<ten-skill>/`. Trong đó có một file `SKILL.md`. Tên thư mục chính là tên skill.
  3. **Bên trong SKILL.md có gì.** Phần đầu ghi `name` (tên) và `description` (mô tả dùng khi nào). Phần thân là các bước chỉ dẫn cho AI làm.
  4. **Claude tự nạp nhờ dòng description.** Đây là điểm mấu chốt. Dòng mô tả viết càng rõ "dùng khi nào" thì Claude càng biết lúc nào lôi skill ra dùng. Nếu mô tả mờ, Claude không tự nạp, khi đó phải gọi thẳng tên skill.
- **Câu hỏi tương tác:** "Trong công việc của bạn, có việc nào tuần nào cũng làm, bước nào cũng giống nhau không? Kể một cái." (gọi 2-3 học viên, ghi lên bảng để cuối buổi họ tự làm skill cho việc đó)

### [00:27-01:05] Demo giảng viên: từ chat nhiều lượt tới một skill
> GV làm mẫu trên màn hình chia sẻ. Học viên xem, chưa gõ theo.
>
> **Ý đồ của khối này (GV đọc kỹ trước khi lên lớp):** KHÔNG đưa sẵn nội dung SKILL.md
> cho lớp chép. Để lớp NHÌN THẤY GV phải hỏi đi hỏi lại 5 lượt mới ra bản tóm tắt dùng
> được, rồi mới đóng gói chỗ đó lại thành skill. Mỗi lượt chat sẽ biến thành đúng một
> mục trong SKILL.md. Học viên hiểu vì sao có từng mục, thay vì chép một file mẫu rơi
> từ trên trời xuống. Đây là điểm khác biệt lớn nhất của buổi này, đừng rút gọn.

**Bước 1 (Lượt 1): Tóm tắt kiểu thông thường để lớp thấy nó chưa đủ**
- **Lời dẫn GV:** "Tôi có một báo cáo tổng kết năm dài 14 trang. Cả lớp nhìn số trang ở góc màn hình. Trong 10 phút trước giờ họp, không ai đọc hết được cái này. Giờ tôi nhờ AI tóm tắt theo cách bình thường nhất, tức là nghĩ gì gõ nấy."
- **Prompt gõ vào Claude Code:**
  ```
  Tóm tắt giúp tôi báo cáo trong tai-lieu-phat/demo/buoi-02/bao-cao-tong-ket-nam-2026.docx
  ```
- **File demo:** `tai-lieu-phat/demo/buoi-02/bao-cao-tong-ket-nam-2026.docx`
- **Kết quả mong đợi:** Claude trả về một bản tóm tắt chung chung, thường vài đoạn hoặc dăm gạch đầu dòng: doanh thu tăng, Gói Cao cấp bán tốt, có khó khăn về nhân sự và công nợ. Đọc thì xuôi tai. Nhưng nó KHÔNG bóc đủ số liệu, KHÔNG gom hạn chót, và gần như chắc chắn KHÔNG phát hiện con số bị lệch trong báo cáo.
- **Lời dẫn GV chốt bước:** "Nghe thì ổn đúng không? Nhưng nếu tôi mang đúng bản này đi họp, sếp hỏi tổng doanh thu bao nhiêu, hạn nào sắp tới, tôi vẫn phải mở lại 14 trang. Nó chưa dùng được. Nên tôi hỏi tiếp."

**Bước 2 (Lượt 2): Ép liệt kê theo từng phần**
- **Lời dẫn GV:** "Vấn đề thứ nhất là nó gộp hết vào một cục. Tôi muốn theo đúng bố cục báo cáo."
- **Prompt gõ vào Claude Code:**
  ```
  Chưa đủ. Liệt kê lại theo từng phần của báo cáo, mỗi phần vài ý chính.
  ```
- **File demo:** dùng tiếp tài liệu ở Bước 1 (không cần nạp lại)
- **Kết quả mong đợi:** Claude liệt kê theo 9 phần La Mã của báo cáo (từ I. Đặc điểm tình hình tới IX. Kiến nghị, đề xuất), mỗi phần vài gạch đầu dòng. Giờ đã đầy đủ nhưng còn dài và chưa nổi số.
- **Ghi chú GV:** viết lên bảng: "Lượt 2 -> sau này thành mục **Ý CHÍNH CHI TIẾT**".

**Bước 3 (Lượt 3): Bóc số liệu và hạn chót**
- **Lời dẫn GV:** "Thứ hai, cái sếp hỏi luôn là con số và deadline. Tôi bắt nó bóc riêng ra."
- **Prompt gõ vào Claude Code:**
  ```
  Bóc ra mọi con số, mốc thời gian, cam kết quan trọng trong tài liệu.
  ```
- **File demo:** dùng tiếp tài liệu ở Bước 1
- **Kết quả mong đợi:** Claude liệt kê được các con số chính (doanh thu năm, lợi nhuận trước thuế 1.885 triệu, lợi nhuận sau thuế 1.508 triệu, công nợ phải thu 1.240 triệu trong đó quá hạn 275 triệu, chi phí marketing 485 triệu, nhân sự từ 34 lên 41 người) và các mốc thời gian nằm rải trong bài: 20/01/2027, 31/01/2027, 15/02/2027, 31/3/2027, quý II/2027, 30/6/2027.
- **Lời dẫn GV (điểm cần soi):** kiểm xem agent có nhặt được mốc **28/02/2027** hay không. Mốc này nằm sâu ở Phụ lục 2 trang 13, thân báo cáo không hề nhắc. Nếu agent bỏ sót, đây là dịp tốt để nói: "Ngay cả AI cũng phải được dặn kỹ mới moi ra chỗ chôn sâu. Lát nữa mình sẽ dặn nó một lần rồi thôi." Nếu agent nhặt được, nhấn mạnh: "Cả lớp đọc 14 trang trong 10 phút có ai thấy dòng này không?"
- **Ghi chú GV:** viết lên bảng: "Lượt 3 -> mục **SỐ LIỆU, NGÀY THÁNG, HẠN CHÓT**".

**Bước 4 (Lượt 4): Hỏi chỗ bất lợi, mâu thuẫn, mập mờ (lượt quan trọng nhất)**
- **Lời dẫn GV:** "Thứ ba, và đây là thứ đáng tiền nhất. Tôi không chỉ muốn biết báo cáo nói gì, tôi muốn biết chỗ nào có vấn đề."
- **Prompt gõ vào Claude Code:**
  ```
  Trong báo cáo này có điều khoản nào bất lợi, chỗ nào mâu thuẫn, hoặc chỗ nào mập mờ không?
  ```
- **File demo:** dùng tiếp tài liệu ở Bước 1
- **Kết quả mong đợi:** đây là lượt agent phải bắt được các điểm sau:
  - **Mâu thuẫn số liệu:** mục II.1 ghi tổng doanh thu **12.450 triệu**, nhưng bảng theo quý, bảng theo sản phẩm, bảng theo khu vực và Phụ lục 1 đều cộng ra **12.545 triệu**. Lệch **95 triệu**. Thêm một dấu hiệu nữa: tỷ lệ "tăng 14,2%" ghi trong bài lại đúng với 12.545 chứ không đúng với 12.450.
  - **Điều khoản bất lợi:** hợp đồng Đại Tín (1.845 triệu, Phụ lục 2) **tự động gia hạn thêm 12 tháng** nếu Công ty không gửi văn bản từ chối trước **28/02/2027**.
  - **Rủi ro:** ba khách hàng lớn nhất chiếm **42,3%** doanh thu; nợ quá hạn **275 triệu** chiếm 22,2% công nợ phải thu; tăng trưởng chậm dần từ 9,8% quý II xuống 1,1% quý IV.
  - **Chỗ mập mờ:** ngân sách marketing 2027 được nhắc tới nhưng không nêu con số; mức thưởng vượt chỉ tiêu chỉ ghi "theo Quy chế thưởng hiện hành".
- **Lời dẫn GV chốt bước (đây là khoảnh khắc phải dừng lại):** "Cả lớp để ý con số này. Báo cáo tự nói vênh nhau 95 triệu. Tôi đọc tay 14 trang, thú thật là tôi không bắt được. Đây mới là chỗ AI đỡ việc thật sự, chứ không phải chỗ nó viết văn hay."
- **Ghi chú GV:** viết lên bảng: "Lượt 4 -> mục **ĐIỂM CẦN LƯU Ý / RỦI RO**".

**Bước 5 (Lượt 5): Chặn suy đoán và rút gọn**
- **Lời dẫn GV:** "Còn một chuyện phải xử lý. AI hay có tật thấy thiếu thì tự điền vào cho trơn. Với báo cáo và hợp đồng thì đó là tai họa. Tôi hỏi thẳng nó."
- **Prompt gõ vào Claude Code:**
  ```
  Trong những gì bạn vừa trả lời, có chỗ nào bạn tự suy đoán mà tài liệu không nói không? Từ giờ chỉ dùng thông tin có trong tài liệu, chỗ nào tài liệu không nói thì ghi "Tài liệu không đề cập", không được đoán. Rút lại giúp tôi 3 tới 5 gạch đầu dòng quan trọng nhất để tôi gửi sếp.
  ```
- **File demo:** dùng tiếp tài liệu ở Bước 1
- **Kết quả mong đợi:** Claude tự rà lại, chỉ ra chỗ nào là suy luận của nó chứ không phải tài liệu nói (ví dụ nhận định về nguyên nhân tăng trưởng chậm), và trả về 3 tới 5 gạch đầu dòng cô đọng. Nếu GV hỏi thêm "ngân sách marketing 2027 là bao nhiêu", agent phải trả lời tài liệu không đề cập, không được bịa ra con số.
- **Ghi chú GV:** viết lên bảng: "Lượt 5 -> mục **QUY TẮC** + mục **TÓM TẮT NHANH**".

**Bước 6: Đóng gói 5 lượt chat vừa rồi thành một skill**
- **Lời dẫn GV (dẫn vào bằng nỗi đau, đọc chậm):** "Xong. Giờ tôi có bản tóm tắt dùng được. Nhưng nhìn lại xem tôi vừa mất mấy lượt: năm lượt. Tuần sau có báo cáo khác, tôi lại mất năm lượt nữa, và chắc gì đã hỏi đúng thứ tự như hôm nay. Cả phòng tôi năm người, mỗi người hỏi một kiểu, ra năm bản khác nhau. Đó chính là lý do phải đóng gói. Tôi bảo nó gói toàn bộ cách làm này lại thành một skill."
- **Chỉ lên bảng trước khi gõ:** 5 dòng vừa ghi (Lượt 2 tới Lượt 5) chính là 5 mục sắp xuất hiện trong SKILL.md. Nhấn: "Tôi không bịa ra cấu trúc này. Nó là đúng những gì tôi vừa phải hỏi."
- **Prompt gõ vào Claude Code:**
  ```
  Tôi thấy kết quả ổn rồi, giờ hãy đóng gói lại thành skill tóm tắt tài liệu cho tôi, để sau này tôi không phải chat nhiều nữa mà bạn vẫn đưa ra kết quả tốt. Sau này tôi muốn khi bảo bạn "Tóm tắt tài liệu abc" thì bạn sẽ tự động kích hoạt skill này cho tôi.

  Khi tôi đưa vào một tài liệu nào đó, làm theo các bước:

  1. Đọc toàn bộ tài liệu.
  2. Xuất ra đúng cấu trúc sau:
  - TÓM TẮT NHANH
  + 3 tới 5 gạch đầu dòng ý chính nhất.

  - Ý CHÍNH CHI TIẾT
  + Liệt kê theo từng mục/phần của tài liệu.

  - SỐ LIỆU, NGÀY THÁNG, HẠN CHÓT
  + Bóc ra mọi con số, mốc thời gian, cam kết quan trọng.

  - ĐIỂM CẦN LƯU Ý / RỦI RO
  + Nếu có điều khoản bất lợi, mâu thuẫn, hoặc chỗ mập mờ.

  - QUY TẮC
  + Chỉ dùng thông tin có trong tài liệu. Không có thì ghi "Tài liệu không đề cập", KHÔNG suy đoán.
  + Trích nguyên văn khi cần bằng chứng, đặt trong ngoặc kép.
  + Trả lời bằng tiếng Việt, rõ ràng.
  ```
- **File demo:** không cần file demo cho bước này (đang tạo file cấu hình). GV giữ `mau-cau-hinh/skill-tom-tat-tai-lieu.md` bên cạnh để đối chiếu, nhưng KHÔNG chiếu lên trước khi lớp thấy skill tự sinh ra.
- **Kết quả mong đợi:** Claude báo đã tạo file `.claude/skills/tom-tat-tai-lieu/SKILL.md`. GV mở file cho lớp xem và chỉ từng mục, đối chiếu với 5 dòng đã ghi trên bảng: mục TÓM TẮT NHANH ứng với Lượt 5, Ý CHÍNH CHI TIẾT ứng với Lượt 2, SỐ LIỆU NGÀY THÁNG HẠN CHÓT ứng với Lượt 3, ĐIỂM CẦN LƯU Ý ứng với Lượt 4, QUY TẮC ứng với Lượt 5.
- **Lời dẫn GV chốt bước:** "Nhìn kỹ file này. Nó không phải mẫu tôi tải ở đâu về. Nó là biên bản của 5 lượt tôi vừa phải hỏi, được ghi lại một lần để khỏi phải hỏi nữa. Skill của các anh chị sau này cũng sinh ra đúng kiểu đó: cứ làm tay vài lần, thấy mình lặp lại chỉ dẫn nào thì gói chỉ dẫn đó lại."

**Bước 7: Chạy skill trên một tài liệu KHÁC để chứng minh nó tái dùng được**
- **Lời dẫn GV:** "Thử xem nó có thật sự dùng lại được không. Tôi đưa vào một hợp đồng, tức là loại tài liệu hoàn toàn khác báo cáo lúc nãy. Và để ý: tôi chỉ gõ đúng một câu, không nhắc gì tới skill. Nhờ dòng description, Claude tự nhận ra đây là việc tóm tắt tài liệu và tự nạp skill vừa tạo."
- **Prompt gõ vào Claude Code:**
  ```
  Tóm tắt hợp đồng trong tai-lieu-phat/demo/buoi-02/hop-dong-dich-vu-mau.md
  ```
- **File demo:** `tai-lieu-phat/demo/buoi-02/hop-dong-dich-vu-mau.md`
- **Kết quả mong đợi:** Claude trả về bản tóm tắt đúng 5 mục của skill. Nội dung bóc ra phải khớp hợp đồng thật:
  - **Số liệu:** tổng giá trị **120.000.000 đồng** (đã gồm thuế), chia **2 đợt 50/50** (đợt 1 60 triệu trong 5 ngày sau ký, đợt 2 60 triệu sau nghiệm thu); bản quyền tối đa **20 người dùng**; đào tạo **2 buổi**.
  - **Ngày tháng, hạn chót:** ký ngày **10/6/2026**; cài đặt xong trong **15 ngày**; đào tạo trong **30 ngày**; thời hạn **12 tháng, tự động gia hạn** nếu không có ý kiến trước khi hết hạn 30 ngày.
  - **Điểm lưu ý / rủi ro:** **phạt chậm thanh toán 0,05%/ngày**; điều khoản **bảo mật còn hiệu lực 2 năm** sau khi chấm dứt; chấm dứt phải **báo trước 30 ngày**; nếu Bên B giao trễ quá 20 ngày, Bên A được chấm dứt và hoàn tiền phần chưa thực hiện.
- **Lời dẫn GV chốt demo (so sánh 5 lượt với 1 lượt):** "Để ý dòng đầu Claude thường báo nó đang dùng skill tom-tat-tai-lieu. Đó là bằng chứng skill tự nạp. Và quan trọng hơn: với báo cáo lúc nãy tôi mất 5 lượt mới ra đủ 5 mục. Với hợp đồng này tôi gõ 1 câu, ra ngay đủ 5 mục. Đó là toàn bộ giá trị của skill."

**Bước 8: Thử quy tắc chống bịa (điểm nhấn của buổi)**
- **Lời dẫn GV:** "Giờ mình thử một câu hỏi mà hợp đồng KHÔNG hề nói tới, xem skill có bịa không."
- **Prompt gõ vào Claude Code:**
  ```
  Trong hợp đồng này, mức phạt nếu Bên A tiết lộ bí mật ra ngoài là bao nhiêu tiền?
  ```
- **File demo:** `tai-lieu-phat/demo/buoi-02/hop-dong-dich-vu-mau.md`
- **Kết quả mong đợi:** Claude trả lời đại ý "Hợp đồng có điều khoản bảo mật (Điều 6) nhưng KHÔNG nêu mức phạt bằng tiền cho việc tiết lộ. Tài liệu không đề cập con số này." Không được bịa ra một số tiền. GV nhấn: "Đây là lý do có mục QUY TẮC trong skill. Với hợp đồng và số liệu, thà nói không có còn hơn đoán sai."

### [01:05-01:32] Thực hành 1: học viên tự tạo skill và chạy trên hợp đồng demo
- **Lời dẫn GV:** "Đến lượt cả lớp. Làm đúng 2 việc mình vừa demo: một, tạo skill; hai, tóm tắt hợp đồng. Ai xong giơ tay, mình qua xem kết quả."
- **Đề bài:**
  1. Tạo skill `tom-tat-tai-lieu` trong thư mục dự án của mình.
  2. Chạy skill trên hợp đồng demo.
  3. Kiểm tra bản tóm tắt có bóc đúng: 120 triệu, chia 2 đợt, thời hạn 12 tháng, phạt chậm 0,05%/ngày, bảo mật 2 năm.
- **Prompt gợi ý cho học viên (tạo skill):**
  ```
  Tạo cho tôi file .claude/skills/tom-tat-tai-lieu/SKILL.md. Nội dung tôi dán ngay dưới đây:
  [dán nguyên khối nội dung SKILL.md từ workbook]
  ```
- **Prompt gợi ý cho học viên (chạy skill):**
  ```
  Tóm tắt hợp đồng trong tai-lieu-phat/demo/buoi-02/hop-dong-dich-vu-mau.md
  ```
- **File demo:** `tai-lieu-phat/demo/buoi-02/hop-dong-dich-vu-mau.md`
- **Kết quả mong đợi:** Mỗi học viên có thư mục `.claude/skills/tom-tat-tai-lieu/` và một bản tóm tắt hợp đồng đủ 5 mục, các số liệu khớp hợp đồng thật. GV đi một vòng xác nhận từng máy, sửa nhanh các lỗi hay gặp (xem bảng tình huống bên dưới).

### [01:32-01:42] Nghỉ giải lao

### [01:42-02:15] Thực hành 2: dùng skill với tài liệu công việc thật của học viên
- **Lời dẫn GV:** "Skill của bạn đã chạy tốt với hợp đồng mẫu. Giờ mới là phần đáng tiền: đưa một tài liệu thật trong công việc của bạn vào. Cùng một skill đó, không phải tạo lại."
- **Đề bài:**
  1. Lấy 1 tài liệu dài trong công việc thật (hợp đồng, biên bản họp, báo cáo, đề xuất) đã chuẩn bị.
  2. Đặt nó vào thư mục dự án (hoặc chỉ cho Claude đường dẫn tới file).
  3. Nhờ tóm tắt bằng đúng skill vừa tạo.
  4. Đọc lại bản tóm tắt: kiểm tra số liệu có đúng không, có chỗ nào skill ghi "không đề cập" mà thực ra tài liệu có nói không.
- **Prompt gợi ý:**
  ```
  Tóm tắt tài liệu trong [đường-dẫn-tới-file-của-bạn]
  ```
  Nếu Claude không tự dùng skill, gọi thẳng tên:
  ```
  Dùng skill tom-tat-tai-lieu để tóm tắt tài liệu trong [đường-dẫn-file]
  ```
- **File demo:** tài liệu riêng của từng học viên (không dùng file demo chung).
- **Kết quả mong đợi:** Mỗi học viên có bản tóm tắt tài liệu công việc của mình, đủ cấu trúc 5 mục. GV nhắc: nếu thấy mục nào chưa hợp với nghề của mình (ví dụ cần thêm mục "Bên chịu trách nhiệm"), có thể sửa phần thân SKILL.md, đó chính là cách skill lớn dần theo nhu cầu.
- **Mở rộng cho ai làm nhanh:** chỉnh dòng `description` cho hẹp đúng nghề (ví dụ "Dùng khi tóm tắt hợp đồng thuê mặt bằng") rồi thử lại xem Claude còn tự nạp đúng không.