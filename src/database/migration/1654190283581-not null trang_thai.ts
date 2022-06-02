import {MigrationInterface, QueryRunner} from "typeorm";

export class notNullTrangThai1654190283581 implements MigrationInterface {
    name = 'notNullTrangThai1654190283581'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Khoa" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "Khoa" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "ChuyenNganh" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "ChuyenNganh" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "PhanQuyen" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "PhanQuyen" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "trang_thai" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "HocVien" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "HocVien" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "HocPhan" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "HocPhan" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "BangDiem" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "BangDiem" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "GiangVien" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "GiangVien" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "LoaiThongBao" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "LoaiThongBao" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "PhanLop" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "PhanLop" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "PhienDangNhap" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "PhienDangNhap" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "ThongBao" ALTER COLUMN "created_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
        await queryRunner.query(`ALTER TABLE "ThongBao" ALTER COLUMN "updated_at" SET DEFAULT '"2022-06-02T17:18:05.670Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ThongBao" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "ThongBao" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "PhienDangNhap" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "PhienDangNhap" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "PhanLop" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "PhanLop" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "LoaiThongBao" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "LoaiThongBao" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "LopHocPhan" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "GiangVien" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "GiangVien" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "BangDiem" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "BangDiem" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "HocPhan" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "HocPhan" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "HocVien" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "HocVien" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "trang_thai" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "PhanQuyen" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "PhanQuyen" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "ChuyenNganh" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "ChuyenNganh" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "Khoa" ALTER COLUMN "updated_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
        await queryRunner.query(`ALTER TABLE "Khoa" ALTER COLUMN "created_at" SET DEFAULT '2022-06-02 17:16:59.81'`);
    }

}
