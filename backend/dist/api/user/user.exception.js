"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExistException = void 0;
const common_1 = require("@nestjs/common");
class UserExistException extends common_1.BadRequestException {
    constructor() {
        super('User with that email or phone number already exists.');
    }
}
exports.UserExistException = UserExistException;
//# sourceMappingURL=user.exception.js.map