import {MigrationInterface, QueryRunner} from "typeorm";

export class notNullGioitinh1654190217782 implements MigrationInterface {
    name = 'notNullGioitinh1654190217782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Khoa" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "Khoa" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "ChuyenNganh" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "ChuyenNganh" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "PhanQuyen" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "PhanQuyen" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_9862f679340fb2388436a5ab3e4"`);
        await queryRunner.query(`ALTER TABLE "HocVien" DROP CONSTRAINT "FK_360c1b05e3ec160706a7bcc6d2b"`);
        await queryRunner.query(`ALTER TABLE "GiangVien" DROP CONSTRAINT "FK_6ddc7c28679628158d4110db577"`);
        await queryRunner.query(`ALTER TABLE "PhienDangNhap" DROP CONSTRAINT "FK_94cf783597e6db85021137d79b9"`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "UQ_9862f679340fb2388436a5ab3e4" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "gioi_tinh" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "BangDiem" DROP CONSTRAINT "FK_82d8db5d6fdb6c1085696e71aac"`);
        await queryRunner.query(`ALTER TABLE "PhanLop" DROP CONSTRAINT "FK_55936ada1b6824d56f7aff46aaa"`);
        await queryRunner.query(`ALTER TABLE "HocVien" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "HocVien" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "HocVien" ADD CONSTRAINT "UQ_360c1b05e3ec160706a7bcc6d2b" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "HocPhan" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "HocPhan" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "BangDiem" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "BangDiem" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" DROP CONSTRAINT "FK_4c16f4ed7114b2efdeff7e38148"`);
        await queryRunner.query(`ALTER TABLE "GiangVien" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "GiangVien" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "GiangVien" ADD CONSTRAINT "UQ_6ddc7c28679628158d4110db577" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "LoaiThongBao" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "LoaiThongBao" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "PhanLop" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "PhanLop" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "PhienDangNhap" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "PhienDangNhap" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "ThongBao" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "ThongBao" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:16:59.810Z"'`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_9862f679340fb2388436a5ab3e4" FOREIGN KEY ("id") REFERENCES "HocVien"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "HocVien" ADD CONSTRAINT "FK_360c1b05e3ec160706a7bcc6d2b" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "BangDiem" ADD CONSTRAINT "FK_82d8db5d6fdb6c1085696e71aac" FOREIGN KEY ("id_hoc_vien") REFERENCES "HocVien"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "GiangVien" ADD CONSTRAINT "FK_6ddc7c28679628158d4110db577" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" ADD CONSTRAINT "FK_4c16f4ed7114b2efdeff7e38148" FOREIGN KEY ("id_giang_vien") REFERENCES "GiangVien"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "PhanLop" ADD CONSTRAINT "FK_55936ada1b6824d56f7aff46aaa" FOREIGN KEY ("id_hoc_vien") REFERENCES "HocVien"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "PhienDangNhap" ADD CONSTRAINT "FK_94cf783597e6db85021137d79b9" FOREIGN KEY ("username") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "PhienDangNhap" DROP CONSTRAINT "FK_94cf783597e6db85021137d79b9"`);
        await queryRunner.query(`ALTER TABLE "PhanLop" DROP CONSTRAINT "FK_55936ada1b6824d56f7aff46aaa"`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" DROP CONSTRAINT "FK_4c16f4ed7114b2efdeff7e38148"`);
        await queryRunner.query(`ALTER TABLE "GiangVien" DROP CONSTRAINT "FK_6ddc7c28679628158d4110db577"`);
        await queryRunner.query(`ALTER TABLE "BangDiem" DROP CONSTRAINT "FK_82d8db5d6fdb6c1085696e71aac"`);
        await queryRunner.query(`ALTER TABLE "HocVien" DROP CONSTRAINT "FK_360c1b05e3ec160706a7bcc6d2b"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_9862f679340fb2388436a5ab3e4"`);
        await queryRunner.query(`ALTER TABLE "ThongBao" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 16:32:44.583'`);
        await queryRunner.query(`ALTER TABLE "ThongBao" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 16:32:44.582'`);
        await queryRunner.query(`ALTER TABLE "PhienDangNhap" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 16:32:44.583'`);
        await queryRunner.query(`ALTER TABLE "PhienDangNhap" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 16:32:44.582'`);
        await queryRunner.query(`ALTER TABLE "PhanLop" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 16:32:44.583'`);
        await queryRunner.query(`ALTER TABLE "PhanLop" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 16:32:44.582'`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 16:32:44.583'`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 16:32:44.582'`);
        await queryRunner.query(`ALTER TABLE "LoaiThongBao" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 16:32:44.583'`);
        await queryRunner.query(`ALTER TABLE "LoaiThongBao" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 16:32:44.582'`);
        await queryRunner.query(`ALTER TABLE "GiangVien" DROP CONSTRAINT "UQ_6ddc7c28679628158d4110db577"`);
        await queryRunner.query(`ALTER TABLE "GiangVien" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 16:32:44.583'`);
        await queryRunner.query(`ALTER TABLE "GiangVien" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 16:32:44.582'`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" ADD CONSTRAINT "FK_4c16f4ed7114b2efdeff7e38148" FOREIGN KEY ("id_giang_vien") REFERENCES "GiangVien"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "BangDiem" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 16:32:44.583'`);
        await queryRunner.query(`ALTER TABLE "BangDiem" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 16:32:44.582'`);
        await queryRunner.query(`ALTER TABLE "HocPhan" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 16:32:44.583'`);
        await queryRunner.query(`ALTER TABLE "HocPhan" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 16:32:44.582'`);
        await queryRunner.query(`ALTER TABLE "HocVien" DROP CONSTRAINT "UQ_360c1b05e3ec160706a7bcc6d2b"`);
        await queryRunner.query(`ALTER TABLE "HocVien" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 16:32:44.583'`);
        await queryRunner.query(`ALTER TABLE "HocVien" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 16:32:44.582'`);
        await queryRunner.query(`ALTER TABLE "PhanLop" ADD CONSTRAINT "FK_55936ada1b6824d56f7aff46aaa" FOREIGN KEY ("id_hoc_vien") REFERENCES "HocVien"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "BangDiem" ADD CONSTRAINT "FK_82d8db5d6fdb6c1085696e71aac" FOREIGN KEY ("id_hoc_vien") REFERENCES "HocVien"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "gioi_tinh" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "UQ_9862f679340fb2388436a5ab3e4"`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 16:32:44.583'`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 16:32:44.582'`);
        await queryRunner.query(`ALTER TABLE "PhienDangNhap" ADD CONSTRAINT "FK_94cf783597e6db85021137d79b9" FOREIGN KEY ("username") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "GiangVien" ADD CONSTRAINT "FK_6ddc7c28679628158d4110db577" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "HocVien" ADD CONSTRAINT "FK_360c1b05e3ec160706a7bcc6d2b" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_9862f679340fb2388436a5ab3e4" FOREIGN KEY ("id") REFERENCES "HocVien"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "PhanQuyen" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 16:32:44.583'`);
        await queryRunner.query(`ALTER TABLE "PhanQuyen" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 16:32:44.582'`);
        await queryRunner.query(`ALTER TABLE "ChuyenNganh" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 16:32:44.583'`);
        await queryRunner.query(`ALTER TABLE "ChuyenNganh" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 16:32:44.582'`);
        await queryRunner.query(`ALTER TABLE "Khoa" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 16:32:44.583'`);
        await queryRunner.query(`ALTER TABLE "Khoa" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 16:32:44.582'`);
    }

}
