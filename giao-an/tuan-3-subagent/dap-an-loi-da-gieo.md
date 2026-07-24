# Đáp án - lỗi đã gieo trong file dữ liệu mẫu (Buổi 11)

> **CHỈ DÀNH CHO GIẢNG VIÊN.** Không phát cho học viên.
> Dữ liệu hư cấu, sinh bằng script định danh (chạy lại ra y hệt).

Bản A dùng dạy và làm bài tại lớp. Bản B dùng để chứng minh skill tái dùng được (prompt 10 trong giáo án).

## Bản A (dùng tại lớp)

File: `tai-lieu-mau-don-hang-2026-ban-a.csv` (và bản .xlsx cùng tên) - **500 dòng, 21 cột**

### Nhóm SỬA ĐƯỢC an toàn (máy tự xử lý, không cần hỏi)

| Loại lỗi | Số dòng | Ví dụ mã đơn |
|---|---|---|
| Ngày lẫn định dạng khác (yyyy-mm-dd, d-m-yy, dd.mm.yyyy) | 76 | DH2026-0397, DH2026-0157, DH2026-0342, DH2026-0022 |
| Số điện thoại sai định dạng (rớt số 0, +84, có dấu chấm) | 60 | DH2026-0391, DH2026-0365, DH2026-0092, DH2026-0371 |
| Tên khách viết hoa/thường lung tung, thừa khoảng trắng | 75 | DH2026-0423, DH2026-0129, DH2026-0349, DH2026-0459 |
| Đơn giá lẫn kiểu ghi tiền | 70 | DH2026-0054, DH2026-0240, DH2026-0189, DH2026-0143 |
| Tỉnh thành viết tắt lẫn lộn | 100 | DH2026-0192, DH2026-0367, DH2026-0452, DH2026-0171 |
| Mã khách hàng lẫn định dạng | 50 | DH2026-0118, DH2026-0370, DH2026-0216, DH2026-0314 |
| Email sai định dạng | 24 | DH2026-0400, DH2026-0351, DH2026-0378, DH2026-0444 |

### Nhóm PHẢI HỎI trước khi sửa (chấm điểm ở đây)

Liệt kê đầy đủ mã đơn để giảng viên dò nhanh.

**Lưu ý khi chấm nhóm ngày giao trước ngày đặt:** cố ý gieo **9 dòng**, nhưng đếm thực tế trên file ra **14 dòng**. Chênh lệch là do việc đổi ngày sang kiểu Mỹ mm/dd làm một số dòng vô tình bị đảo thứ tự ngày - hệ quả thật của lỗi định dạng, không phải sai sót của đề.

Con số học viên báo có thể dao động quanh 9-14 tùy họ có chuẩn hóa định dạng ngày trước khi kiểm logic hay không. **Đừng bắt bẻ con số** - chấm ở chỗ họ CÓ PHÁT HIỆN ra nhóm lỗi này không. Ai nhận ra rằng phải chuẩn hóa ngày trước rồi mới kiểm được thứ tự thì cho điểm cộng, đó là tư duy làm sạch đúng.

**Thành tiền âm** - 7 dòng

```
DH2026-0197, DH2026-0133, DH2026-0171, DH2026-0105, DH2026-0368, DH2026-0206, DH2026-0405
```

**Ngày giao trước ngày đặt** - 9 dòng

```
DH2026-0179, DH2026-0438, DH2026-0002, DH2026-0220, DH2026-0346, DH2026-0120, DH2026-0174, DH2026-0127, DH2026-0343
```

**Số lượng bằng 0** - 5 dòng

```
DH2026-0077, DH2026-0168, DH2026-0149, DH2026-0359, DH2026-0435
```

**Thành tiền không khớp số lượng x đơn giá** - 4 dòng

```
DH2026-0387, DH2026-0325, DH2026-0394, DH2026-0407
```

**Ngày đặt ở tương lai (2027)** - 3 dòng

```
DH2026-0146, DH2026-0019, DH2026-0079
```

**Ngày kiểu Mỹ mm/dd - đọc kiểu nào cũng hợp lệ** - 14 dòng

```
DH2026-0240, DH2026-0231, DH2026-0135, DH2026-0057, DH2026-0092, DH2026-0483, DH2026-0268, DH2026-0291, DH2026-0361, DH2026-0037, DH2026-0060, DH2026-0087, DH2026-0154, DH2026-0390
```

**Ô trống ở cột đáng lẽ phải có** - 30 dòng

```
DH2026-0358, DH2026-0003, DH2026-0028, DH2026-0180, DH2026-0285, DH2026-0382, DH2026-0061, DH2026-0076, DH2026-0459, DH2026-0484, DH2026-0004, DH2026-0395, DH2026-0253, DH2026-0403, DH2026-0407, DH2026-0448, DH2026-0360, DH2026-0307, DH2026-0271, DH2026-0208, DH2026-0427, DH2026-0199, DH2026-0237, DH2026-0355, DH2026-0280, DH2026-0227, DH2026-0119, DH2026-0478, DH2026-0120, DH2026-0467
```

**TRÙNG HOÀN TOÀN (chỉ khác mã đơn)** - 8 dòng

```
DH2026-0213 = DH2026-0487, DH2026-0183 = DH2026-0488, DH2026-0308 = DH2026-0489, DH2026-0123 = DH2026-0490, DH2026-0207 = DH2026-0491, DH2026-0012 = DH2026-0492, DH2026-0425 = DH2026-0493, DH2026-0410 = DH2026-0494
```

**TRÙNG GẦN ĐÚNG (khác cách viết tên - BẪY, không được tự xóa)** - 6 dòng

```
DH2026-0292 = DH2026-0495, DH2026-0234 = DH2026-0496, DH2026-0071 = DH2026-0497, DH2026-0031 = DH2026-0498, DH2026-0142 = DH2026-0499, DH2026-0219 = DH2026-0500
```

**Ngày giao trước ngày đặt - ĐẾM THỰC TẾ trên file** - 14 dòng

```
DH2026-0002, DH2026-0057, DH2026-0060, DH2026-0087, DH2026-0120, DH2026-0127, DH2026-0154, DH2026-0174, DH2026-0179, DH2026-0343, DH2026-0346, DH2026-0361, DH2026-0390, DH2026-0438
```

### Chấm nhanh bằng số dòng

- Nộp 500 dòng: chưa xử lý trùng lặp.
- Nộp 492 dòng: xóa đúng 8 dòng trùng hoàn toàn - ĐẠT.
- Nộp 486 dòng: xóa luôn 6 dòng trùng gần đúng - QUÁ TAY, trừ điểm nặng.

## Bản B (chứng minh tái dùng)

File: `tai-lieu-mau-don-hang-2026-ban-b.csv` (và bản .xlsx cùng tên) - **500 dòng, 21 cột**

### Nhóm SỬA ĐƯỢC an toàn (máy tự xử lý, không cần hỏi)

| Loại lỗi | Số dòng | Ví dụ mã đơn |
|---|---|---|
| Ngày lẫn định dạng khác (yyyy-mm-dd, d-m-yy, dd.mm.yyyy) | 63 | DH2026-0048, DH2026-0323, DH2026-0359, DH2026-0209 |
| Số điện thoại sai định dạng (rớt số 0, +84, có dấu chấm) | 72 | DH2026-0116, DH2026-0069, DH2026-0089, DH2026-0382 |
| Tên khách viết hoa/thường lung tung, thừa khoảng trắng | 62 | DH2026-0374, DH2026-0006, DH2026-0051, DH2026-0464 |
| Đơn giá lẫn kiểu ghi tiền | 84 | DH2026-0159, DH2026-0421, DH2026-0328, DH2026-0296 |
| Tỉnh thành viết tắt lẫn lộn | 88 | DH2026-0387, DH2026-0365, DH2026-0156, DH2026-0345 |
| Mã khách hàng lẫn định dạng | 61 | DH2026-0343, DH2026-0399, DH2026-0410, DH2026-0336 |
| Email sai định dạng | 19 | DH2026-0448, DH2026-0147, DH2026-0040, DH2026-0222 |

### Nhóm PHẢI HỎI trước khi sửa (chấm điểm ở đây)

Liệt kê đầy đủ mã đơn để giảng viên dò nhanh.

**Lưu ý khi chấm nhóm ngày giao trước ngày đặt:** cố ý gieo **11 dòng**, nhưng đếm thực tế trên file ra **20 dòng**. Chênh lệch là do việc đổi ngày sang kiểu Mỹ mm/dd làm một số dòng vô tình bị đảo thứ tự ngày - hệ quả thật của lỗi định dạng, không phải sai sót của đề.

Con số học viên báo có thể dao động quanh 11-20 tùy họ có chuẩn hóa định dạng ngày trước khi kiểm logic hay không. **Đừng bắt bẻ con số** - chấm ở chỗ họ CÓ PHÁT HIỆN ra nhóm lỗi này không. Ai nhận ra rằng phải chuẩn hóa ngày trước rồi mới kiểm được thứ tự thì cho điểm cộng, đó là tư duy làm sạch đúng.

**Thành tiền âm** - 6 dòng

```
DH2026-0436, DH2026-0052, DH2026-0290, DH2026-0226, DH2026-0246, DH2026-0160
```

**Ngày giao trước ngày đặt** - 11 dòng

```
DH2026-0270, DH2026-0223, DH2026-0460, DH2026-0186, DH2026-0135, DH2026-0335, DH2026-0054, DH2026-0252, DH2026-0165, DH2026-0059, DH2026-0181
```

**Số lượng bằng 0** - 4 dòng

```
DH2026-0296, DH2026-0079, DH2026-0280, DH2026-0376
```

**Thành tiền không khớp số lượng x đơn giá** - 5 dòng

```
DH2026-0101, DH2026-0326, DH2026-0132, DH2026-0403, DH2026-0408
```

**Ngày đặt ở tương lai (2027)** - 2 dòng

```
DH2026-0033, DH2026-0337
```

**Ngày kiểu Mỹ mm/dd - đọc kiểu nào cũng hợp lệ** - 17 dòng

```
DH2026-0147, DH2026-0078, DH2026-0094, DH2026-0211, DH2026-0401, DH2026-0167, DH2026-0387, DH2026-0349, DH2026-0342, DH2026-0338, DH2026-0036, DH2026-0438, DH2026-0354, DH2026-0285, DH2026-0380, DH2026-0384, DH2026-0161
```

**Ô trống ở cột đáng lẽ phải có** - 36 dòng

```
DH2026-0073, DH2026-0084, DH2026-0225, DH2026-0264, DH2026-0428, DH2026-0010, DH2026-0100, DH2026-0051, DH2026-0304, DH2026-0384, DH2026-0450, DH2026-0352, DH2026-0357, DH2026-0114, DH2026-0154, DH2026-0080, DH2026-0116, DH2026-0140, DH2026-0302, DH2026-0033, DH2026-0339, DH2026-0198, DH2026-0475, DH2026-0204, DH2026-0022, DH2026-0039, DH2026-0020, DH2026-0124, DH2026-0462, DH2026-0373, DH2026-0469, DH2026-0166, DH2026-0276, DH2026-0281, DH2026-0173, DH2026-0322
```

**TRÙNG HOÀN TOÀN (chỉ khác mã đơn)** - 10 dòng

```
DH2026-0419 = DH2026-0486, DH2026-0004 = DH2026-0487, DH2026-0420 = DH2026-0488, DH2026-0480 = DH2026-0489, DH2026-0208 = DH2026-0490, DH2026-0356 = DH2026-0491, DH2026-0105 = DH2026-0492, DH2026-0321 = DH2026-0493, DH2026-0443 = DH2026-0494, DH2026-0461 = DH2026-0495
```

**TRÙNG GẦN ĐÚNG (khác cách viết tên - BẪY, không được tự xóa)** - 5 dòng

```
DH2026-0012 = DH2026-0496, DH2026-0444 = DH2026-0497, DH2026-0007 = DH2026-0498, DH2026-0056 = DH2026-0499, DH2026-0476 = DH2026-0500
```

**Ngày giao trước ngày đặt - ĐẾM THỰC TẾ trên file** - 20 dòng

```
DH2026-0036, DH2026-0054, DH2026-0059, DH2026-0135, DH2026-0147, DH2026-0161, DH2026-0165, DH2026-0181, DH2026-0186, DH2026-0211, DH2026-0223, DH2026-0252, DH2026-0270, DH2026-0335, DH2026-0342, DH2026-0349, DH2026-0354, DH2026-0384, DH2026-0387, DH2026-0401
```

### Chấm nhanh bằng số dòng

- Nộp 500 dòng: chưa xử lý trùng lặp.
- Nộp 490 dòng: xóa đúng 10 dòng trùng hoàn toàn - ĐẠT.
- Nộp 485 dòng: xóa luôn 5 dòng trùng gần đúng - QUÁ TAY, trừ điểm nặng.
