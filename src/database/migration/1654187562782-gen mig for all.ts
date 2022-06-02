import {MigrationInterface, QueryRunner} from "typeorm";

export class genMigForAll1654187562782 implements MigrationInterface {
    name = 'genMigForAll1654187562782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Khoa" ("created_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.582Z"', "updated_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.583Z"', "deleted_at" TIMESTAMP, "id" character varying NOT NULL, "ten_khoa" character varying NOT NULL, "truong_khoa" character varying NOT NULL, "dien_thoai" integer NOT NULL, CONSTRAINT "PK_abb527829028f8a43e74b5475ce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ChuyenNganh" ("created_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.582Z"', "updated_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.583Z"', "deleted_at" TIMESTAMP, "id" character varying NOT NULL, "id_khoa" character varying NOT NULL, "ten_chuyen_nganh" character varying NOT NULL, CONSTRAINT "PK_091f13350f88ccbe086e83d3958" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "PhanQuyen" ("created_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.582Z"', "updated_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.583Z"', "deleted_at" TIMESTAMP, "role" character varying NOT NULL, "mo_ta" character varying NOT NULL, "quyen" json array NOT NULL, CONSTRAINT "PK_c45ad5e19b12b8c13e5fc4a1d09" PRIMARY KEY ("role"))`);
        await queryRunner.query(`CREATE TABLE "User" ("created_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.582Z"', "updated_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.583Z"', "deleted_at" TIMESTAMP, "id" SERIAL NOT NULL, "user_type" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "ho_ten" character varying NOT NULL, "ngay_sinh" character varying NOT NULL, "gioi_tinh" character varying NOT NULL, "dien_thoai" character varying, "email" character varying NOT NULL, "dia_chi" character varying, "trang_thai" character varying NOT NULL, CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "REL_9862f679340fb2388436a5ab3e" UNIQUE ("id"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "HocVien" ("created_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.582Z"', "updated_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.583Z"', "deleted_at" TIMESTAMP, "user_id" integer NOT NULL, "id_khoa" character varying NOT NULL, "id_chuyen_nganh" character varying NOT NULL, "diem_dau_vao" integer NOT NULL, "trang_thai" character varying NOT NULL, CONSTRAINT "REL_360c1b05e3ec160706a7bcc6d2" UNIQUE ("user_id"), CONSTRAINT "PK_360c1b05e3ec160706a7bcc6d2b" PRIMARY KEY ("user_id"))`);
        await queryRunner.query(`CREATE TABLE "HocPhan" ("created_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.582Z"', "updated_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.583Z"', "deleted_at" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "so_tin_chi" integer NOT NULL, "id_chuyen_nganh" character varying NOT NULL, CONSTRAINT "PK_e66894f5fa46c2d9f20f49b7736" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "BangDiem" ("created_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.582Z"', "updated_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.583Z"', "deleted_at" TIMESTAMP, "id_hoc_vien" integer NOT NULL, "id_mon" integer NOT NULL, "diem_x" integer NOT NULL, "diem_y" integer NOT NULL, CONSTRAINT "PK_9474279f8add914c1f7c8909bd7" PRIMARY KEY ("id_hoc_vien", "id_mon"))`);
        await queryRunner.query(`CREATE TABLE "GiangVien" ("created_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.582Z"', "updated_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.583Z"', "deleted_at" TIMESTAMP, "user_id" integer NOT NULL, "id_khoa" character varying NOT NULL, "trinh_do" character varying NOT NULL, CONSTRAINT "REL_6ddc7c28679628158d4110db57" UNIQUE ("user_id"), CONSTRAINT "PK_6ddc7c28679628158d4110db577" PRIMARY KEY ("user_id"))`);
        await queryRunner.query(`CREATE TABLE "LoaiThongBao" ("created_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.582Z"', "updated_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.583Z"', "deleted_at" TIMESTAMP, "id" character varying NOT NULL, "mo_ta" character varying NOT NULL, CONSTRAINT "PK_fc05e5a0d50574bba6837aca6f6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "LopHocPhan" ("created_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.582Z"', "updated_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.583Z"', "deleted_at" TIMESTAMP, "id" integer NOT NULL, "id_mon" integer NOT NULL, "id_giang_vien" integer NOT NULL, "ngay_bat_dau" TIMESTAMP, "ngay_ket_thuc" TIMESTAMP NOT NULL, "ngay_hoc" character varying NOT NULL, "si_so_max" integer NOT NULL, "si_so_min" integer NOT NULL, "isactive" boolean DEFAULT false, CONSTRAINT "PK_302045e05ec91f50f40caac3a9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "PhienDangNhap" ("created_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.582Z"', "updated_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.583Z"', "deleted_at" TIMESTAMP, "id" SERIAL NOT NULL, "username" integer NOT NULL, "token" character varying NOT NULL, CONSTRAINT "UQ_94cf783597e6db85021137d79b9" UNIQUE ("username"), CONSTRAINT "UQ_5506e798ab4dd4675828779b4f1" UNIQUE ("token"), CONSTRAINT "REL_94cf783597e6db85021137d79b" UNIQUE ("username"), CONSTRAINT "PK_62bfbcf555265e2e278aac36807" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "PhanLop" ("created_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.582Z"', "updated_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.583Z"', "deleted_at" TIMESTAMP, "id_hoc_vien" integer NOT NULL, "id_lop_hoc_phan" integer NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_923bc074e331115b9a3d0d46a37" PRIMARY KEY ("id_hoc_vien", "id_lop_hoc_phan"))`);
        await queryRunner.query(`CREATE TABLE "ThongBao" ("created_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.582Z"', "updated_at" TIMESTAMP(6) NOT NULL DEFAULT '"2022-06-02T16:32:44.583Z"', "deleted_at" TIMESTAMP, "id" SERIAL NOT NULL, "id_loai_thong_bao" character varying NOT NULL, "tieu_de" character varying NOT NULL, "noi_dung" character varying NOT NULL, "file_dinh_kem" character varying, CONSTRAINT "PK_466f52de3f255bdd9f37faeb473" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ChuyenNganh" ADD CONSTRAINT "FK_2c3c451453176aceb22221ef095" FOREIGN KEY ("id_khoa") REFERENCES "Khoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_37bb2ed765daa3e7203dd6c9712" FOREIGN KEY ("user_type") REFERENCES "PhanQuyen"("role") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_9862f679340fb2388436a5ab3e4" FOREIGN KEY ("id") REFERENCES "HocVien"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "HocVien" ADD CONSTRAINT "FK_360c1b05e3ec160706a7bcc6d2b" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "HocVien" ADD CONSTRAINT "FK_8aad87856ed25357795c90c2e68" FOREIGN KEY ("id_khoa") REFERENCES "Khoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "HocVien" ADD CONSTRAINT "FK_8254eb1f3b9b91cf0fa40bd3755" FOREIGN KEY ("id_chuyen_nganh") REFERENCES "ChuyenNganh"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "HocPhan" ADD CONSTRAINT "FK_4df6207d43fa1e42cf39552aaa7" FOREIGN KEY ("id_chuyen_nganh") REFERENCES "ChuyenNganh"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "BangDiem" ADD CONSTRAINT "FK_82d8db5d6fdb6c1085696e71aac" FOREIGN KEY ("id_hoc_vien") REFERENCES "HocVien"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "BangDiem" ADD CONSTRAINT "FK_93ccbfac4c9b8f4bb7fa9a5a4a3" FOREIGN KEY ("id_mon") REFERENCES "HocPhan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "GiangVien" ADD CONSTRAINT "FK_6ddc7c28679628158d4110db577" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "GiangVien" ADD CONSTRAINT "FK_e9ebf64c76d8f02fb579fd73dae" FOREIGN KEY ("id_khoa") REFERENCES "Khoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" ADD CONSTRAINT "FK_3e754ab5d409bd72abdbf7fe926" FOREIGN KEY ("id_mon") REFERENCES "HocPhan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" ADD CONSTRAINT "FK_4c16f4ed7114b2efdeff7e38148" FOREIGN KEY ("id_giang_vien") REFERENCES "GiangVien"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "PhienDangNhap" ADD CONSTRAINT "FK_94cf783597e6db85021137d79b9" FOREIGN KEY ("username") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "PhanLop" ADD CONSTRAINT "FK_55936ada1b6824d56f7aff46aaa" FOREIGN KEY ("id_hoc_vien") REFERENCES "HocVien"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "PhanLop" ADD CONSTRAINT "FK_8d0da920fd237a7b2aff30056f3" FOREIGN KEY ("id_lop_hoc_phan") REFERENCES "LopHocPhan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "PhanLop" DROP CONSTRAINT "FK_8d0da920fd237a7b2aff30056f3"`);
        await queryRunner.query(`ALTER TABLE "PhanLop" DROP CONSTRAINT "FK_55936ada1b6824d56f7aff46aaa"`);
        await queryRunner.query(`ALTER TABLE "PhienDangNhap" DROP CONSTRAINT "FK_94cf783597e6db85021137d79b9"`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" DROP CONSTRAINT "FK_4c16f4ed7114b2efdeff7e38148"`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" DROP CONSTRAINT "FK_3e754ab5d409bd72abdbf7fe926"`);
        await queryRunner.query(`ALTER TABLE "GiangVien" DROP CONSTRAINT "FK_e9ebf64c76d8f02fb579fd73dae"`);
        await queryRunner.query(`ALTER TABLE "GiangVien" DROP CONSTRAINT "FK_6ddc7c28679628158d4110db577"`);
        await queryRunner.query(`ALTER TABLE "BangDiem" DROP CONSTRAINT "FK_93ccbfac4c9b8f4bb7fa9a5a4a3"`);
        await queryRunner.query(`ALTER TABLE "BangDiem" DROP CONSTRAINT "FK_82d8db5d6fdb6c1085696e71aac"`);
        await queryRunner.query(`ALTER TABLE "HocPhan" DROP CONSTRAINT "FK_4df6207d43fa1e42cf39552aaa7"`);
        await queryRunner.query(`ALTER TABLE "HocVien" DROP CONSTRAINT "FK_8254eb1f3b9b91cf0fa40bd3755"`);
        await queryRunner.query(`ALTER TABLE "HocVien" DROP CONSTRAINT "FK_8aad87856ed25357795c90c2e68"`);
        await queryRunner.query(`ALTER TABLE "HocVien" DROP CONSTRAINT "FK_360c1b05e3ec160706a7bcc6d2b"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_9862f679340fb2388436a5ab3e4"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_37bb2ed765daa3e7203dd6c9712"`);
        await queryRunner.query(`ALTER TABLE "ChuyenNganh" DROP CONSTRAINT "FK_2c3c451453176aceb22221ef095"`);
        await queryRunner.query(`DROP TABLE "ThongBao"`);
        await queryRunner.query(`DROP TABLE "PhanLop"`);
        await queryRunner.query(`DROP TABLE "PhienDangNhap"`);
        await queryRunner.query(`DROP TABLE "LopHocPhan"`);
        await queryRunner.query(`DROP TABLE "LoaiThongBao"`);
        await queryRunner.query(`DROP TABLE "GiangVien"`);
        await queryRunner.query(`DROP TABLE "BangDiem"`);
        await queryRunner.query(`DROP TABLE "HocPhan"`);
        await queryRunner.query(`DROP TABLE "HocVien"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TABLE "PhanQuyen"`);
        await queryRunner.query(`DROP TABLE "ChuyenNganh"`);
        await queryRunner.query(`DROP TABLE "Khoa"`);
    }

}
