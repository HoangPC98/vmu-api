CREATE TABLE `PhanQuyen` (
  `id_role` varchar(255) PRIMARY KEY,
  `mo_ta` varchar(255),
  `quyen` longtext
);

CREATE TABLE `PhienDangNhap` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_name` varchar(255),
  `token` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp,
  `deleted_at` timtimestamp
);

CREATE TABLE `HocVien` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `ho_ten` varchar(255),
  `id_khoa` int,
  `id_chuyen_nganh` int,
  `id_info` int,
  `diem_dau_vao` float,
  `mon_hoc_bo_sung` varchar(255),
  `trang_thai` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp,
  `deleted_at` timtimestamp
);

CREATE TABLE `GiangVien` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `ho_ten` varchar(255),
  `id_khoa` int,
  `id_info` int,
  `trang_thai` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp,
  `deleted_at` timtimestamp
);

CREATE TABLE `Info` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_name` varchar(255),
  `password` varchar(255),
  `ngay_sinh` datetime,
  `gioi_tinh` ENUM ('male', 'female', 'other'),
  `dien_thoai` varchar(255),
  `email` varchar(255),
  `dia_chi` varchar(255)
);

CREATE TABLE `MonHoc` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `so_tin_chi` int,
  `ma_chuyen_nganh` int,
  `created_at` timestamp,
  `updated_at` timestamp,
  `deleted_at` timtimestamp
);

CREATE TABLE `Khoa` (
  `id` varcahr PRIMARY KEY,
  `ten_khoa` varchar(255),
  `truong_khoa` varchar(255),
  `dien_thoai` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp,
  `deleted_at` timtimestamp
);

CREATE TABLE `ChuyenNganh` (
  `id` varchar(255) PRIMARY KEY,
  `ten_chuyen_nganh` varchar(255),
  `id_khoa` int,
  `created_at` timestamp,
  `updated_at` timestamp,
  `deleted_at` timtimestamp
);

CREATE TABLE `Class` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_mon` int,
  `id_giang_vien` int,
  `list_hoc_vien` longtext,
  `created_at` timestamp,
  `updated_at` timestamp,
  `deleted_at` timtimestamp
);

CREATE TABLE `BangDiem` (
  `id_hoc_vien` int,
  `id_mon` int,
  `diem_x` float,
  `diem_y` float,
  `diem_btl` float,
  `diem_z` float,
  `du_dieu_kien` boolean,
  PRIMARY KEY (`id_hoc_vien`, `id_mon`)
);

CREATE TABLE `ThongBao` (
  `id_thong_bao` int PRIMARY KEY AUTO_INCREMENT,
  `id_loai_thong_bao` int,
  `tieu_de` varchar(255),
  `noi_dung` varchar(255),
  `file_dinh_kem` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp,
  `deleted_at` timtimestamp
);

CREATE TABLE `LoaiThongBao` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `mo_ta` varchar(255)
);

ALTER TABLE `HocVien` ADD FOREIGN KEY (`id_khoa`) REFERENCES `Khoa` (`id`);

ALTER TABLE `HocVien` ADD FOREIGN KEY (`id_chuyen_nganh`) REFERENCES `ChuyenNganh` (`id`);

ALTER TABLE `HocVien` ADD FOREIGN KEY (`id_info`) REFERENCES `Info` (`id`);

ALTER TABLE `GiangVien` ADD FOREIGN KEY (`id_khoa`) REFERENCES `Khoa` (`id`);

ALTER TABLE `GiangVien` ADD FOREIGN KEY (`id_info`) REFERENCES `Info` (`id`);

ALTER TABLE `ChuyenNganh` ADD FOREIGN KEY (`id`) REFERENCES `MonHoc` (`ma_chuyen_nganh`);

ALTER TABLE `ChuyenNganh` ADD FOREIGN KEY (`id_khoa`) REFERENCES `Khoa` (`id`);

ALTER TABLE `Class` ADD FOREIGN KEY (`id_mon`) REFERENCES `MonHoc` (`id`);

ALTER TABLE `BangDiem` ADD FOREIGN KEY (`id_hoc_vien`) REFERENCES `HocVien` (`id`);

ALTER TABLE `BangDiem` ADD FOREIGN KEY (`id_mon`) REFERENCES `MonHoc` (`id`);