"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaslAbilityFactory = void 0;
const ability_1 = require("@casl/ability");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../database/entities/user.entity");
const offwork_entity_1 = require("../database/entities/offwork.entity");
const review_entity_1 = require("../database/entities/review.entity");
const usertype_entity_1 = require("../database/entities/usertype.entity");
const worktype_entity_1 = require("../database/entities/worktype.entity");
const worktime_entity_1 = require("../database/entities/worktime.entity");
const Subjects = [
    user_entity_1.User.name,
    offwork_entity_1.Offwork.name,
    review_entity_1.Review.name,
    usertype_entity_1.UserType.name,
    worktime_entity_1.WorkTime.name,
    worktype_entity_1.WorkType.name,
    'all',
];
let CaslAbilityFactory = class CaslAbilityFactory {
    createForUser(user) {
        const permissions = JSON.parse(user.permissions);
        return new ability_1.Ability(permissions);
    }
};
CaslAbilityFactory = __decorate([
    (0, common_1.Injectable)()
], CaslAbilityFactory);
exports.CaslAbilityFactory = CaslAbilityFactory;
//# sourceMappingURL=casl-ability.factory.js.map