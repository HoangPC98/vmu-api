import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddUserFingerId1641869012801 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'id_finger',
        type: 'int',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'id_finger');
  }
}
