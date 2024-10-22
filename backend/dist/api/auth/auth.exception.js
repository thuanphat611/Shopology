"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongCredentialException = void 0;
const common_1 = require("@nestjs/common");
class WrongCredentialException extends common_1.BadRequestException {
    constructor() {
        super('Wrong credentials provided.');
    }
}
exports.WrongCredentialException = WrongCredentialException;
//# sourceMappingURL=auth.exception.js.map