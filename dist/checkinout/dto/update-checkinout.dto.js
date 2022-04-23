"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCheckinoutDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_checkinout_dto_1 = require("./create-checkinout.dto");
class UpdateCheckinoutDto extends (0, mapped_types_1.PartialType)(create_checkinout_dto_1.CreateCheckinoutDto) {
}
exports.UpdateCheckinoutDto = UpdateCheckinoutDto;
//# sourceMappingURL=update-checkinout.dto.js.map