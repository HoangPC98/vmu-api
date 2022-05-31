"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentUserLogin = exports.GetUserIdInRequest = void 0;
const common_1 = require("@nestjs/common");
exports.GetUserIdInRequest = (0, common_1.createParamDecorator)((_, context) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return user.user_id;
});
exports.GetCurrentUserLogin = (0, common_1.createParamDecorator)((_, context) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log('USER', user);
    return user;
});
//# sourceMappingURL=getCurrentUser.auth.js.map