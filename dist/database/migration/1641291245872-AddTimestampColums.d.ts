import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTimestampColums1641291245872 implements MigrationInterface {
    static readonly tablesName: string[];
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
