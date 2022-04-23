"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worktype_entity_1 = require("../entities/worktype.entity");
class CreateUser {
    async run(factory, connection) {
        await connection
            .createQueryBuilder()
            .insert()
            .orIgnore()
            .into(worktype_entity_1.WorkType)
            .values([
            { id: 1, desc: 'offline' },
            { id: 2, desc: 'remote' },
            { id: 3, desc: 'overtime' },
        ])
            .execute();
    }
}
exports.default = CreateUser;
//# sourceMappingURL=2-worktype.seed.js.map