"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyColumn1641528081241 = void 0;
class ModifyColumn1641528081241 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE worktimes MODIFY COLUMN checkin_at datetime NULL AFTER reg_end_at;
    `);
        await queryRunner.query(`ALTER TABLE worktimes MODIFY COLUMN checkout_at datetime NULL AFTER checkin_at;`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE worktimes MODIFY COLUMN checkin_at datetime NOT NULL AFTER reg_end_at;`);
        await queryRunner.query(`ALTER TABLE worktimes MODIFY COLUMN checkout_at datetime NOT NULL AFTER checkin_at;`);
    }
}
exports.ModifyColumn1641528081241 = ModifyColumn1641528081241;
//# sourceMappingURL=1641528081241-ModifyColumn.js.map