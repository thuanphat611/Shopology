"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadGuards = loadGuards;
const core_1 = require("@nestjs/core");
const guards_1 = require("../api/auth/guards");
function loadGuards(app) {
    app.useGlobalGuards(new guards_1.JwtAuthGuard(app.get(core_1.Reflector)));
}
//# sourceMappingURL=app.guard.js.map