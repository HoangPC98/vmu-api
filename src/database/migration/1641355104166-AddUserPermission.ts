import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddUserPermission1641355104166 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'user_types',
      new TableColumn({
        name: 'permissions',
        type: 'varchar',
        isNullable: false,
        default: "'[{}]'", // can not do any things
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user_types', 'permissions');
  }
}
