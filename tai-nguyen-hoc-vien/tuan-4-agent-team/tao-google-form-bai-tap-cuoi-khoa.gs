/**
 * Tạo Google Form bài tập cuối khóa - "30 Ngày Làm Chủ AI Agent" (CES Global)
 *
 * CÁCH DÙNG
 *   1. Mở https://script.google.com  ->  New project
 *   2. Xóa hết code mẫu, dán trọn file này vào
 *   3. Chọn hàm taoBaiTapCuoiKhoa ở thanh trên  ->  bấm Run
 *   4. Lần đầu Google hỏi quyền: Review permissions -> chọn tài khoản -> Advanced
 *      -> Go to <tên project> (unsafe) -> Allow.  (Chữ "unsafe" là do script chưa
 *      qua kiểm duyệt của Google, không phải script có vấn đề - nó chạy bằng chính
 *      tài khoản của anh chị.)
 *   5. Chạy xong mở tab Execution log, ở đó có 3 đường dẫn: link phát cho học viên,
 *      link sửa form, link bảng tính chứa bài nộp.
 *
 * SAU KHI CHẠY CÒN ĐÚNG MỘT VIỆC PHẢI LÀM TAY
 *   Apps Script không đặt được mục "công bố điểm ngay". Mở form bằng link sửa,
 *   vào Cài đặt (Settings) -> Bài kiểm tra (Quizzes) -> Công bố điểm (Release grade)
 *   -> chọn "Ngay sau mỗi lần nộp" (Immediately after each submission). Một cú bấm.
 *
 * GHI CHÚ
 *   - Form này KHÔNG có ô tải file, nên học viên KHÔNG phải đăng nhập Google.
 *     Phần ảnh nộp bằng cách dán link (Google Docs hoặc Drive đã mở chia sẻ).
 *   - Muốn dùng lại cho khóa sau: đổi TEN_KHOA rồi chạy lại, ra một form mới hoàn
 *     toàn, form cũ giữ nguyên.
 */

// ---------------------------------------------------------------- CẤU HÌNH

var TEN_KHOA = 'K1';
var DIEM_MOI_CAU = 1;

// ---------------------------------------------------------------- BỘ CÂU HỎI
// dung: số thứ tự đáp án đúng, tính từ 0. Ví dụ 0 là lựa chọn đầu tiên.

var CAU_HOI = [
  {
    hoi: 'Trợ lý Project khác một cuộc chat thường ở chỗ nào?',
    chon: [
      'Project giữ sẵn bối cảnh và tài liệu đã nạp, không phải kể lại từ đầu mỗi lần',
      'Project trả lời nhanh hơn',
      'Project dùng model thông minh hơn',
      'Project chạy được khi không có mạng'
    ],
    dung: 0
  },
  {
    hoi: 'Anh chị muốn Claude luôn viết đúng giọng công ty mà không phải nhắc lại mỗi lần. Đặt ở đâu?',
    chon: [
      'Gõ lại ở đầu mỗi cuộc trò chuyện',
      'Phần hướng dẫn (Instructions) của Project',
      'Đặt tên Project cho thật rõ',
      'Ghi vào nhóm Zalo để nhớ'
    ],
    dung: 1
  },
  {
    hoi: 'Đặt lịch cho trợ lý tự chạy có ý nghĩa lớn nhất là gì?',
    chon: [
      'Câu trả lời chính xác hơn',
      'Đỡ tốn tiền hơn',
      'Việc lặp lại theo lịch không cần anh chị nhớ và ngồi mở máy',
      'Không cần viết hướng dẫn nữa'
    ],
    dung: 2
  },
  {
    hoi: 'Nói gọn thì skill là gì?',
    chon: [
      'Một phần mềm phải mua thêm',
      'Một loại tài khoản trả phí',
      'Một cách gõ câu hỏi cho nhanh',
      'Một quyển công thức ghi sẵn cách làm một việc, lần sau khỏi dặn lại từ đầu'
    ],
    dung: 3
  },
  {
    hoi: 'Cái gì quyết định Claude có tự nhớ ra mà dùng skill hay không?',
    chon: [
      'Tên file đặt hay hay dở',
      'Skill viết dài hay ngắn',
      'Dòng mô tả nói rõ skill này dùng khi nào',
      'Ngày tạo file'
    ],
    dung: 2
  },
  {
    hoi: 'Việc nào đáng đóng gói thành skill?',
    chon: [
      'Việc chỉ làm đúng một lần rồi thôi',
      'Việc lặp lại nhiều lần, cách làm gần như cố định',
      'Việc mỗi lần làm một kiểu khác nhau',
      'Việc không ai kiểm tra kết quả'
    ],
    dung: 1
  },
  {
    hoi: 'Artifact học ở buổi 6 là gì?',
    chon: [
      'Một ứng dụng nhỏ Claude dựng ra ngay trong khung chat, mở là dùng được, không phải cài gì',
      'Một file Word Claude gửi kèm cho mình tải về',
      'Một loại tài khoản trả phí',
      'Một thư mục để lưu kết quả'
    ],
    dung: 0
  },
  {
    hoi: 'Cả phòng cùng dùng chung một skill cho một việc thì lợi ích lớn nhất là gì?',
    chon: [
      'Đỡ tốn tiền hơn',
      'Chạy nhanh hơn',
      'Không cần ai kiểm tra kết quả nữa',
      'Ai làm cũng ra cùng một chuẩn, nên kết quả ghép lại mới khớp nhau'
    ],
    dung: 3
  },
  {
    hoi: 'File CLAUDE.md dùng để làm gì?',
    chon: [
      'Tờ giới thiệu Claude đọc trước mỗi phiên, để biết anh chị là ai và làm gì',
      'Lưu kết quả công việc đã làm',
      'Lưu mật khẩu và tài khoản',
      'Nhật ký các câu đã hỏi'
    ],
    dung: 0
  },
  {
    hoi: 'Nội dung nào KHÔNG nên đưa vào CLAUDE.md?',
    chon: [
      'Anh chị bán gì, cho khách nào',
      'Giọng văn, cách xưng hô, từ cấm dùng',
      'Quy trình chi tiết từng bước cho một việc cụ thể, thứ đó để dành cho skill',
      'Sơ đồ các thư mục và chỗ nào chứa gì'
    ],
    dung: 2
  },
  {
    hoi: 'Vì sao nên ghi sơ đồ thư mục thẳng vào CLAUDE.md, thay vì tạo một file mục lục riêng?',
    chon: [
      'Vì Claude luôn đọc CLAUDE.md ở đầu mỗi phiên, còn file riêng thì nó không tự mở ra đọc',
      'Vì file riêng chiếm nhiều dung lượng',
      'Vì Claude không đọc được file đặt tên khác',
      'Vì gộp vào một chỗ nhìn cho gọn'
    ],
    dung: 0
  },
  {
    hoi: 'Skill và agent khác nhau chỗ nào?',
    chon: [
      'Agent chạy nhanh hơn skill',
      'Skill chỉ dùng được đúng một lần',
      'Agent không cần viết mô tả',
      'Skill trả lời "làm việc này thế nào", agent trả lời "ai làm và được đụng vào những gì"'
    ],
    dung: 3
  },
  {
    hoi: 'Vì sao nên giao việc phụ nặng cho một trợ lý phụ, thay vì làm hết trong cửa sổ chính?',
    chon: [
      'Vì trợ lý phụ thông minh hơn',
      'Vì trợ lý phụ lúc nào cũng nhanh hơn',
      'Vì nó làm trong phòng riêng, màn hình chính của anh chị không bị đổ đầy tài liệu vào',
      'Vì như vậy thì không tốn tiền'
    ],
    dung: 2
  },
  {
    hoi: 'Trong file agent, dòng ghi công cụ (tools:) có tác dụng gì?',
    chon: [
      'Chỉ là ghi chú cho người đọc file',
      'Là cái khóa thật: con nào không có công cụ ghi file thì không sửa được file của anh chị',
      'Quyết định dùng model nào',
      'Đặt tên hiển thị cho agent'
    ],
    dung: 1
  },
  {
    hoi: 'Vì sao nên giữ file CLAUDE.md ngắn?',
    chon: [
      'Vì file dài dễ bị lỗi',
      'Vì Claude chỉ đọc được 80 dòng đầu',
      'Vì viết dài thì mình khó nhớ',
      'Vì nó được đọc lại ở đầu mỗi phiên, dài bao nhiêu thì mỗi phiên tốn thêm bấy nhiêu token'
    ],
    dung: 3
  },
  {
    hoi: 'Vì sao nên dùng một agent riêng để soát lại kết quả của agent khác, thay vì để một agent vừa làm vừa tự soát?',
    chon: [
      'Vì hai agent chạy nhanh hơn một agent',
      'Vì ai viết xong đọc lại bài mình cũng thấy ổn, agent soát đọc bằng con mắt lạ nên bắt được lỗi agent viết bỏ qua',
      'Vì Claude bắt buộc phải có đủ hai agent',
      'Vì tách ra thì đỡ tốn tiền hơn'
    ],
    dung: 1
  },
  {
    hoi: 'Agent chuyên đi soát lại kết quả nên được cấp quyền gì?',
    chon: [
      'Cho sửa file luôn để nó chữa cho nhanh',
      'Không cho đọc file nào cả',
      'Cấp toàn quyền y như agent viết',
      'Chỉ cho đọc, không cho sửa file'
    ],
    dung: 3
  },
  {
    hoi: 'Chạy cả dây chuyền so với nhờ thẳng một câu thì thế nào?',
    chon: [
      'Nhanh hơn và rẻ hơn',
      'Chậm hơn và tốn hơn, đổi lại có người soát nên chất lượng ổn định',
      'Giống hệt nhau, chỉ khác cách gọi',
      'Nhanh hơn nhưng kém chính xác'
    ],
    dung: 1
  },
  {
    hoi: 'Chatbot khác agent chỗ nào?',
    chon: [
      'Agent thông minh hơn hẳn',
      'Chatbot không trả lời được câu khó',
      'Agent được lắp thêm tay chân (công cụ), trí nhớ và đồng hồ, nên nó làm được chứ không chỉ nói',
      'Agent chạy được khi không có mạng'
    ],
    dung: 2
  },
  {
    hoi: 'Một agent chạy ra kết quả sai, và lần nào cũng sai đúng kiểu đó. Nên làm gì?',
    chon: [
      'Sửa thẳng vào file định nghĩa agent đó, chữa một lần là dùng được mãi',
      'Mỗi lần chạy lại dặn thêm một câu trong khung chat',
      'Xóa agent đi rồi quay lại làm tay',
      'Đổi sang model đắt tiền hơn'
    ],
    dung: 0
  }
];

// ---------------------------------------------------------------- HÀM CHÍNH

function taoBaiTapCuoiKhoa() {
  kiemTraBoCauHoi_();

  var tieuDe = 'Bài tập cuối khóa - 30 Ngày Làm Chủ AI Agent (' + TEN_KHOA + ')';
  var form = FormApp.create(tieuDe);

  form.setIsQuiz(true);
  form.setDescription(
    'Bài gồm hai phần: 20 câu trắc nghiệm và một bài thực hành nhẹ.\n\n' +
    'Làm khoảng 45 phút. Nộp trước sáng Thứ Hai.\n\n' +
    'Trắc nghiệm chấm tự động, nộp xong xem điểm được ngay. ' +
    'Câu nào phân vân thì cứ chọn, buổi sau lớp chữa chung.'
  );
  form.setProgressBar(true);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage(
    'Đã nhận bài của anh chị. Cảm ơn anh chị đã theo hết khóa. Hẹn gặp ở buổi chữa bài.'
  );

  // --- Thông tin học viên -------------------------------------------------
  // Dùng ô nhập tay thay vì bật "thu thập email đã xác minh", vì bật cái đó là
  // form bắt đăng nhập Google.
  form.addSectionHeaderItem()
    .setTitle('Thông tin học viên')
    .setHelpText('Điền để giảng viên biết bài này của ai.');

  form.addTextItem()
    .setTitle('Họ và tên')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Số điện thoại hoặc email')
    .setHelpText('Để liên hệ lại khi cần, không bắt buộc phải là Gmail.')
    .setRequired(true);

  // --- Phần 1: trắc nghiệm ------------------------------------------------
  form.addPageBreakItem()
    .setTitle('Phần 1 - Trắc nghiệm (20 câu)')
    .setHelpText('Mỗi câu chọn một đáp án. Không cần tra tài liệu, cứ chọn theo cái anh chị nhớ.');

  for (var i = 0; i < CAU_HOI.length; i++) {
    var c = CAU_HOI[i];
    var item = form.addMultipleChoiceItem();

    var luaChon = [];
    for (var j = 0; j < c.chon.length; j++) {
      luaChon.push(item.createChoice(c.chon[j], j === c.dung));
    }

    item.setTitle((i + 1) + '. ' + c.hoi)
      .setChoices(luaChon)
      .setPoints(DIEM_MOI_CAU)
      .setRequired(true);
  }

  // --- Phần 2: thực hành --------------------------------------------------
  form.addPageBreakItem()
    .setTitle('Phần 2 - Thực hành')
    .setHelpText(
      'Chọn MỘT trong hai hướng, hướng nào hợp máy của anh chị hơn thì chọn hướng đó.\n\n' +
      'Hướng A (có Claude Code): kiểm file CLAUDE.md, chọn một việc mình làm đi làm lại, ' +
      'nhờ Claude đóng gói việc đó thành một skill, rồi thử lại hai lần trên hai trường hợp khác nhau.\n\n' +
      'Hướng B (chỉ dùng claude.ai): tạo một Project, viết phần hướng dẫn (Instructions), ' +
      'nạp một hai tài liệu thật đã xóa thông tin nhạy cảm, rồi giao việc thử hai lần.'
    );

  var huong = form.addMultipleChoiceItem();
  huong.setTitle('Anh chị làm theo hướng nào?')
    .setChoices([
      huong.createChoice('Hướng A - dùng Claude Code'),
      huong.createChoice('Hướng B - chỉ dùng claude.ai')
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('1. Việc anh chị chọn là gì, mỗi tuần làm mấy lần?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('2. Trước đây mỗi lần làm mất khoảng bao lâu, giờ mất khoảng bao lâu?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('3. Chỗ nào anh chị vẫn phải tự đọc lại, không dám để AI làm thay?')
    .setHelpText(
      'Câu này quan trọng nhất. Người dùng AI giỏi không phải người giao được nhiều việc nhất, ' +
      'mà là người biết rõ chỗ nào phải giữ lại cho mình.'
    )
    .setRequired(true);

  form.addTextItem()
    .setTitle('Link ảnh chụp màn hình')
    .setHelpText(
      'Cần hai ảnh: một ảnh cho thấy thứ anh chị vừa dựng (skill hoặc phần hướng dẫn của Project), ' +
      'một ảnh kết quả nó chạy ra.\n\n' +
      'Cách dễ nhất: mở Google Docs mới, dán hai ảnh vào, bấm Chia sẻ -> đổi thành ' +
      '"Bất kỳ ai có đường liên kết" -> sao chép link, dán vào đây.\n' +
      'Ai quen dùng Drive thì tải ảnh lên Drive, mở chia sẻ rồi dán link thư mục cũng được.'
    )
    .setRequired(true);

  // --- Bảng tính nhận bài -------------------------------------------------
  var bang = SpreadsheetApp.create('Bài nộp - Bài tập cuối khóa ' + TEN_KHOA);
  form.setDestination(FormApp.DestinationType.SPREADSHEET, bang.getId());

  // --- In ra các đường dẫn ------------------------------------------------
  var vach = '======================================================================';
  Logger.log(vach);
  Logger.log('TẠO XONG: ' + tieuDe);
  Logger.log(vach);
  Logger.log('1. LINK PHÁT CHO HỌC VIÊN (dán vào nhóm Zalo):');
  Logger.log('   ' + form.getPublishedUrl());
  Logger.log('');
  Logger.log('2. LINK SỬA FORM (giữ riêng, đừng gửi học viên):');
  Logger.log('   ' + form.getEditUrl());
  Logger.log('');
  Logger.log('3. BẢNG TÍNH CHỨA BÀI NỘP VÀ ĐIỂM:');
  Logger.log('   ' + bang.getUrl());
  Logger.log(vach);
  Logger.log('CÒN MỘT VIỆC PHẢI LÀM TAY:');
  Logger.log('   Mở link số 2 -> Cài đặt -> Bài kiểm tra -> Công bố điểm');
  Logger.log('   -> chọn "Ngay sau mỗi lần nộp".');
  Logger.log('   Apps Script không đặt được mục này, phải bấm tay một lần.');
  Logger.log(vach);
}

// ---------------------------------------------------------------- KIỂM TRA

/**
 * Soát bộ câu hỏi trước khi tạo form, để lỗi lộ ra ngay thay vì lộ ra khi
 * học viên đang làm bài.
 */
function kiemTraBoCauHoi_() {
  var loi = [];
  var demDapAn = { 0: 0, 1: 0, 2: 0, 3: 0 };

  for (var i = 0; i < CAU_HOI.length; i++) {
    var c = CAU_HOI[i];
    var so = i + 1;

    if (!c.hoi) {
      loi.push('Câu ' + so + ': thiếu nội dung câu hỏi');
    }
    if (!c.chon || c.chon.length !== 4) {
      loi.push('Câu ' + so + ': phải có đúng 4 lựa chọn');
      continue;
    }
    if (typeof c.dung !== 'number' || c.dung < 0 || c.dung > 3) {
      loi.push('Câu ' + so + ': số thứ tự đáp án đúng phải nằm trong khoảng 0 tới 3');
      continue;
    }
    for (var j = 0; j < c.chon.length; j++) {
      if (!c.chon[j]) {
        loi.push('Câu ' + so + ': lựa chọn thứ ' + (j + 1) + ' bị trống');
      }
    }
    demDapAn[c.dung]++;
  }

  if (loi.length > 0) {
    throw new Error('Bộ câu hỏi có lỗi, chưa tạo form:\n' + loi.join('\n'));
  }

  Logger.log('Soát bộ câu hỏi: ' + CAU_HOI.length + ' câu, không có lỗi.');
  Logger.log('Phân bố đáp án đúng - A: ' + demDapAn[0] + ', B: ' + demDapAn[1] +
             ', C: ' + demDapAn[2] + ', D: ' + demDapAn[3]);
}
