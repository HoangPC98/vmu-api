"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserPermission1641355104166 = void 0;
const typeorm_1 = require("typeorm");
class AddUserPermission1641355104166 {
    async up(queryRunner) {
        await queryRunner.addColumn('user_types', new typeorm_1.TableColumn({
            name: 'permissions',
            type: 'varchar',
            isNullable: false,
            default: "'[{}]'",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('user_types', 'permissions');
    }
}
exports.AddUserPermission1641355104166 = AddUserPermission1641355104166;
//# sourceMappingURL=1641355104166-AddUserPermission.js.map