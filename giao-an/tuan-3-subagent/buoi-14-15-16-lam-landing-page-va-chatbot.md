# Buổi 14-15-16: Làm landing page bằng lời nói, đưa lên mạng, gắn chatbot

> Bộ prompt chạy xuyên ba buổi. Cứ copy dán lần lượt vào Claude Code, bước sau dùng kết quả
> bước trước.
>
> - Buổi 14: viết nội dung trang (bước 1-3)
> - Buổi 15: dựng trang, chạy thử, đưa lên mạng (bước 4-7)
> - Buổi 16: lấy đồ nghề cộng đồng, gắn chatbot (bước 8-12)
>
> Yêu cầu: đã cài Claude Code và Node.js từ buổi 7-8. Mở Claude Code tại thư mục làm việc
> của bạn.

---

## BUỔI 14. Viết nội dung trang bán hàng

**Bước 1. Xin mẫu khai thông tin**

```
Tôi cần làm landing page cho [tên sản phẩm/dịch vụ]. Hãy liệt kê cho tôi các mục thông tin cần cung cấp (dạng mẫu điền sẵn, gạch đầu dòng) để bạn có đủ dữ liệu viết landing page theo storytelling, gồm: sản phẩm, khách hàng mục tiêu, vấn đề, giải pháp, điểm khác biệt, ưu đãi, mục tiêu trang, CTA, yếu tố tin cậy, phong cách mong muốn. Chỉ đưa mẫu để tôi điền, chưa viết nội dung landing page vội.
```

---

**Bước 2. Điền mẫu rồi bảo nó viết**

```
Đây là thông tin đã điền: [dán mẫu]. Từ đây viết landing page hoàn chỉnh theo storytelling, áp dụng công thức PAIN, kèm 5 tiêu đề gợi ý, CTA. Độ dài khoảng 1 trang A4
```

---

**Bước 3. Bản demo của giảng viên (chiếu lên cho lớp xem mức độ cụ thể cần có)**

```
- Đây là thông tin đã điền:
* Sản phẩm/Dịch vụ: Nhiều khóa học, có khóa học Vibe Coding cho người mới bắt đầu, Claude, Antigravity,...
* Khách hàng mục tiêu: Người chưa biết lập trình (dân văn phòng, sinh viên, chủ shop nhỏ) muốn tự tay làm ra sản phẩm số bằng AI mà không cần học code truyền thống. học sinh, sinh viên, nhà nghiên cứu, ai cũng học được
* Giải pháp của bạn: Dạy anh/chị dùng AI (Claude, ChatGPT, Cursor...) để mô tả ý tưởng bằng lời và ra sản phẩm chạy được thật, theo từng bước cụ thể, không yêu cầu nền tảng lập trình trước đó, học skills, agents, học đi đôi với hành, có sản phẩm thật
* Điểm khác biệt: Học đến đâu làm ra sản phẩm thật đến đó, không lý thuyết suông; giảng viên đồng hành trực tiếp qua Zalo trong suốt khóa
* Ưu đãi (nếu có): Ưu đãi học phí cho 20 học viên đăng ký sớm nhất
* Mục tiêu Landing Page: Thu lead (đăng ký giữ chỗ / tư vấn)
* Nút kêu gọi hành động (CTA)

- Các nội dung còn thiếu thì tự đề xuất thông tin và điền cho tôi nhé
- Từ đây viết landing page hoàn chỉnh theo storytelling, áp dụng công thức PAIN, kèm 5 tiêu đề gợi ý, CTA. Độ dài khoảng 1 trang A4
```

---

## BUỔI 15. Dựng trang, chạy thử, đưa lên mạng

**Bước 4. Dựng trang HTML thuần**

```
Tạo cho tôi một landing page với nội dung như trên. Áp dụng phong cách thiết kế Premium, Dark Mode, Glassmorphism có viền Neon mờ (Ambient Glow). Code bằng HTML/CSS/JS thuần, cấu trúc phải chuẩn để sau này dễ chuyển sang React/Next.js. Tôi sẽ cung cấp cho bạn một số thông tin của tôi để bạn tạo trang, trang tôi, giao diện tối ưu cho mobile và desktop
```

---

**Bước 5. Chuyển sang dự án Next.js**

Chỗ `...` điền đường dẫn thư mục chứa file HTML vừa tạo.

```
Đọc toàn bộ source code tại ... và chuyển đổi hoàn toàn sang một dự án Next.js. Sử dụng TypeScript, TailwindCSS để style cho pixel-perfect với bản gốc, và thêm các hiệu ứng chuyển động bằng Framer Motion (ví dụ: fade-in khi cuộn trang, hover button). Hãy tách các block thành các thư mục components riêng biệt và code phải sẵn sàng cho production.
```

---

**Bước 6. Chạy thử trên máy mình**

```
chạy project luôn và cho tôi link localhost để tôi vào xem nhé
```

---

**Bước 7. Đưa lên mạng bằng Vercel**

```
Tôi muốn deploy landingpage này lên vercel. Tôi đã có tài khoản vercel rồi, hướng dẫn tôi cách đưa lên nhé. Nếu cần cài đặt gì thì bạn làm cho tôi luôn. Tôi không chuyên code nên hướng dẫn tôi từng bước cách làm
```

---

## BUỔI 16. Đồ nghề cộng đồng và chatbot

**Bước 8. Tra cứu trước khi cài**

```
https://github.com/obra/superpowers
tìm hiểu cho tôi link này là gì, cộng đồng sử dụng có nhiều không, và có nên dùng không?
```

---

**Bước 9. Cài bộ plugin**

```
cài đặt bộ plugin này cho tôi luôn . Bạn tự chạy luôn nhé.
```

---

**Bước 10. Cài agent vào thư mục làm việc**

```
Cài đặt agent này vào thư mục làm việc hiện tại cho tôi nhé (/.claude/agents)
```

---

**Bước 11. Kiểm tra Claude đang load agent nào**

```
bạn có xem được hiện tại bạn (claude) load được agent nào không?
```

---

**Bước 12. Gắn chatbot vào landing page**

```
Hiện tại tôi muốn xây dựng và tích hợp một AI Chatbot hoàn chỉnh vào Landing Page của tôi, đảm bảo chuẩn UI/UX cao cấp và hoạt động mượt mà như sản phẩm thực tế, triển khai streaming chat

Thông tin cho chatbot thì bạn hãy tạo một file `chatbot_data.txt` (đặt cùng thư mục với source code) sử dụng nội dung như sau:
- Tên chuyên gia: [Nguyễn Văn A]
- Định vị thương hiệu: Chuyên gia AI & Tự động hóa
- Giải pháp cung cấp: Triển khai MCP server, Xây dựng hệ thống N8N AI, Đào tạo xây dựng thương hiệu cá nhân bằng AI.
- Khóa học nổi bật: Khóa K89 - Thực chiến Agentic AI & Tự động hóa (Thời gian học: 12 buổi, hình thức Online Zoom).
- Liên hệ tư vấn: Email a@example.com hoặc Zalo 0123456789.

Thông tin cấu hình API (OpenAI-compatible API) như sau:
Base URL: https://generativelanguage.googleapis.com/v1beta/openai
Model: gemini-3.5-flash-lite
api key: Tạo cho tôi file .env để tôi điền vào nhé

Có gì không hiểu thì hỏi lại tôi /
Sử dụng subagent fullstack-developer để làm nhé
```

Học viên thay khối thông tin chuyên gia bằng thông tin thật của mình.

---

## Lưu ý khi đứng lớp

- Bước 5 và 6 phải tải thư viện, có thể mất vài phút. Đây là lúc nói tiếp chứ đừng để lớp nhìn màn hình im lặng.
- Bước 7: nếu lớp chưa có git và tài khoản GitHub, để Claude dùng cách chạy thẳng `npx vercel` từ thư mục dự án, khỏi qua GitHub.
- Bước 9: cài plugin của cộng đồng là chạy code người khác viết. Nhắc lớp chỉ cài từ nguồn đã tra cứu ở bước 8.
- Bước 12: nếu báo lỗi model không tồn tại thì đổi sang tên model khác có trong tài khoản của mình.
- Khóa API nằm trong file `.env`, không đưa lên mạng, không gửi vào nhóm lớp.
