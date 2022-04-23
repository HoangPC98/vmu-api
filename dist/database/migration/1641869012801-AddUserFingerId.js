"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserFingerId1641869012801 = void 0;
const typeorm_1 = require("typeorm");
class AddUserFingerId1641869012801 {
    async up(queryRunner) {
        await queryRunner.addColumn('users', new typeorm_1.TableColumn({
            name: 'id_finger',
            type: 'int',
            isNullable: false,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('users', 'id_finger');
    }
}
exports.AddUserFingerId1641869012801 = AddUserFingerId1641869012801;
//# sourceMappingURL=1641869012801-AddUserFingerId.js.map