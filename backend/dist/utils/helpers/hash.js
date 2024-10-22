"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
function generateSalt(numberOfCharacters = 10) {
    return (0, bcrypt_1.genSalt)(numberOfCharacters);
}
async function bcryptHash({ salt, source, }) {
    salt = salt || (await generateSalt());
    return (0, bcrypt_1.hash)(source, salt);
}
exports.default = { bcryptHash };
//# sourceMappingURL=hash.js.map