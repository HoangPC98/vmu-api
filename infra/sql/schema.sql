CREATE TYPE "Gender" AS ENUM (
  'male',
  'female',
  'other'
);

CREATE TYPE "TrangThaiHoc" AS ENUM (
  'dang_hoc'
  'da_dang_ki',
  'da_hoan_thanh',
  'da_huy'
);

CREATE TYPE "TrangThaiHocVien" AS ENUM (
  'dang_hoc'
  'da_thoi_hoc',
  'da_tot_nghiep',
  'bao_luu'
);

CREATE TYPE "TrinhDo" AS ENUM (
  'đại học',
  'thạc sĩ',
  'tiến sĩ',
  'giáo sư'
);
CREATE TYPE "UserType" AS ENUM (
  'hoc_vien',
  'giang_vien',
  'admin',
  'general_user'
);

CREATE TYPE "TrinhDo" AS ENUM (
  'dai_hoc',
  'thac_si',
  'tien_si',
  'giao_su'
);

CREATE TYPE "Action" AS ENUM (
  'created',
  'read',
  'update',
  'deleted',
  'manage',
  'access_api'
);

CREATE TABLE "PhanQuyen" (
  "id" SERIAL,
  "role" varchar,
  "mo_ta" varchar,
  "quyen" json,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp
  constraint "pk_phan_quyen" PRIMARY KEY ("id", "role")
);

CREATE TABLE "PhongHoc" (
  "id_phong" varchar primary key,
  "suc_chua" int,
  "tinh_trang" varchar,
  "note" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "PhienDangNhap" (
  "id" SERIAL PRIMARY KEY,
  "user_name" varchar,
  "token" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "User" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar UNIQUE,
  "password" varchar,
  "trang_thai" varchar,
  "user_type" "UserType",
  "ho_ten" varchar,
  "ngay_sinh" date,
  "gioi_tinh" "Gender",
  "dien_thoai" varchar,
  "email" varchar,
  "dia_chi" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "HocVien" (
  "user_id" int PRIMARY KEY,
  "id_khoa" varchar,
  "id_chuyen_nganh" varchar,
  "diem_dau_vao" float,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "GiangVien" (
  "user_id" int PRIMARY KEY,
  "id_khoa" varchar,
  "trinh_do" "TrinhDo",
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "HocPhan" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "so_tin_chi" int,
  "ma_chuyen_nganh" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp

);

CREATE TABLE "Khoa" (
  "id" varchar PRIMARY KEY,
  "ten_khoa" varchar,
  "truong_khoa" varchar,
  "dien_thoai" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "ChuyenNganh" (
  "id" varchar PRIMARY KEY,
  "ten_chuyen_nganh" varchar,
  "id_khoa" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "LopHocPhan" (
  "id" SERIAL PRIMARY KEY,
  "id_mon" int,
  "id_giang_vien" int,
  "list_hoc_vien" int[],
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "PhanLop" (
  "id_lop_hoc_phan" int,
  "id_hoc_vien" int,
  "status" "TrangThaiHoc",
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp,
   constraint "pk_phan_lop" PRIMARY KEY ("id_hoc_vien", "id_lop_hoc_phan")
)

CREATE TABLE "BangDiem" (
  "id_hoc_vien" int,
  "id_mon" int,
  "diem_x" float,
  "diem_y" float,
  "diem_btl" float,
  "diem_z" float,
  "du_dieu_kien" boolean,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp,
  PRIMARY KEY ("id_hoc_vien", "id_mon")
);

CREATE TABLE "ThongBao" (
  "id_thong_bao" SERIAL PRIMARY KEY,
  "id_loai_thong_bao" int,
  "tieu_de" varchar,
  "noi_dung" varchar,
  "file_dinh_kem" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "LoaiThongBao" (
  "id" SERIAL PRIMARY KEY,
  "mo_ta" varchar
);

ALTER TABLE "PhienDangNhap" ADD FOREIGN KEY ("user_name") REFERENCES "User" ("username");

ALTER TABLE "HocVien" ADD FOREIGN KEY ("user_id") REFERENCES "User" ("id");

ALTER TABLE "HocVien" ADD FOREIGN KEY ("id_khoa") REFERENCES "Khoa" ("id");

ALTER TABLE "HocVien" ADD FOREIGN KEY ("id_chuyen_nganh") REFERENCES "ChuyenNganh" ("id");

ALTER TABLE "HocPhan" ADD CONSTRAINT "fk_id_chuyen_nganh_of_hoc_phan" FOREIGN KEY ("id_chuyen_nganh") REFERENCES "ChuyenNganh" ("id");

ALTER TABLE "ChuyenNganh" ADD FOREIGN KEY ("id_khoa") REFERENCES "Khoa" ("id");

ALTER TABLE "LopHocPhan" ADD FOREIGN KEY ("id_mon") REFERENCES "HocPhan" ("id");

ALTER TABLE "BangDiem" ADD FOREIGN KEY ("id_hoc_vien") REFERENCES "HocVien" ("user_id");

ALTER TABLE "BangDiem" ADD FOREIGN KEY ("id_mon") REFERENCES "HocPhan" ("id");

ALTER TABLE "ThongBao" ADD FOREIGN KEY ("id_loai_thong_bao") REFERENCES "LoaiThongBao" ("id");

ALTER TABLE "LopHocPhan" ADD FOREIGN KEY ("id_phong_hoc") REFERENCES "PhongHoc" ("id_phong");

ALTER TABLE "PhanLop" ADD FOREIGN KEY ("id_hoc_vien") REFERENCES "HocVien" ("user_id");

ALTER TABLE "PhanLop" ADD FOREIGN KEY ("id_lop_hoc_phan") REFERENCES "LopHocPhan" ("id");

ALTER TABLE "GiangVien" ADD FOREIGN KEY ("user_id") REFERENCES "User" ("id")

 