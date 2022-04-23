"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorktimeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_worktime_dto_1 = require("./create-worktime.dto");
class UpdateWorktimeDto extends (0, mapped_types_1.PartialType)(create_worktime_dto_1.CreateWorktimeDto) {
}
exports.UpdateWorktimeDto = UpdateWorktimeDto;
//# sourceMappingURL=update-worktime.dto.js.map