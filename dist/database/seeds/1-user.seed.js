"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../entities/user.entity");
const usertype_entity_1 = require("../entities/usertype.entity");
class CreateUser {
    async run(factory, connection) {
        await connection
            .createQueryBuilder()
            .insert()
            .orIgnore()
            .into(usertype_entity_1.UserType)
            .values([
            { id: 1, desc: 'admin' },
            { id: 2, desc: 'user' },
        ])
            .execute();
        await connection
            .createQueryBuilder()
            .insert()
            .orIgnore()
            .into(user_entity_1.User)
            .values([
            { id: 1, email: 'admin@email.com', user_type_id: 1 },
            { id: 2, email: 'user@email.com', user_type_id: 2 },
        ])
            .execute();
    }
}
exports.default = CreateUser;
//# sourceMappingURL=1-user.seed.js.map