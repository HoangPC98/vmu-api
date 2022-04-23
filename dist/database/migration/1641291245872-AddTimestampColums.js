"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTimestampColums1641291245872 = void 0;
const typeorm_1 = require("typeorm");
class AddTimestampColums1641291245872 {
    async up(queryRunner) {
        for (const tableName of AddTimestampColums1641291245872.tablesName) {
            if (!(await queryRunner.hasTable(tableName))) {
                continue;
            }
            await queryRunner.addColumns(tableName, [
                new typeorm_1.TableColumn({
                    name: 'createdAt',
                    type: 'datetime',
                    isNullable: false,
                }),
                new typeorm_1.TableColumn({
                    name: 'updatedAt',
                    type: 'datetime',
                    isNullable: false,
                }),
                new typeorm_1.TableColumn({
                    name: 'deletedAt',
                    type: 'datetime',
                    isNullable: true,
                }),
            ]);
        }
    }
    async down(queryRunner) {
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
exports.AddTimestampColums1641291245872 = AddTimestampColums1641291245872;
AddTimestampColums1641291245872.tablesName = [
    'offworks',
    'reviews',
    'user_types',
    'users',
    'work_types',
    'worktimes',
];
//# sourceMappingURL=1641291245872-AddTimestampColums.js.map