import { MigrationInterface, QueryRunner } from 'typeorm';

export class ModifyColumn1641528081241 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE worktimes MODIFY COLUMN checkin_at datetime NULL AFTER reg_end_at;
    `);
    await queryRunner.query(
      `ALTER TABLE worktimes MODIFY COLUMN checkout_at datetime NULL AFTER checkin_at;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE worktimes MODIFY COLUMN checkin_at datetime NOT NULL AFTER reg_end_at;`,
    );
    await queryRunner.query(
      `ALTER TABLE worktimes MODIFY COLUMN checkout_at datetime NOT NULL AFTER checkin_at;`,
    );
  }
}
