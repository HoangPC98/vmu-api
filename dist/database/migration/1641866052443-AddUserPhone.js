"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserPhone1641866052443 = void 0;
const typeorm_1 = require("typeorm");
class AddUserPhone1641866052443 {
    async up(queryRunner) {
        await queryRunner.addColumn('users', new typeorm_1.TableColumn({
            name: 'phone',
            type: 'varchar',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('users', 'phone');
    }
}
exports.AddUserPhone1641866052443 = AddUserPhone1641866052443;
//# sourceMappingURL=1641866052443-AddUserPhone.js.map