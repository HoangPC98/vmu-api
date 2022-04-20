import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddTimestampColums1641291245872 implements MigrationInterface {
  static readonly tablesName = [
    'offworks',
    'reviews',
    'user_types',
    'users',
    'work_types',
    'worktimes',
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const tableName of AddTimestampColums1641291245872.tablesName) {
      if (!(await queryRunner.hasTable(tableName))) {
        continue;
      }
      await queryRunner.addColumns(tableName, [
        new TableColumn({
          name: 'createdAt',
          type: 'datetime',
          isNullable: false,
        }),
        new TableColumn({
          name: 'updatedAt',
          type: 'datetime',
          isNullable: false,
        }),
        new TableColumn({
          name: 'deletedAt',
          type: 'datetime',
          isNullable: true,
        }),
      ]);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    for (const tableName of AddTimestampColums1641291245872.tablesName) {
      if (!(await queryRunner.hasTable(tableName))) {
        continue;
      }
      await queryRunner.dropColumns(tableName, [
        'createdAt',
        'updatedAt',
        'deletedAt',
      ]);
    }
  }
}
