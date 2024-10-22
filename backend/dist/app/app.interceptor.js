"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadInterceptors = loadInterceptors;
const common_1 = require("@nestjs/common");
const interceptors_1 = require("../interceptors");
const core_1 = require("@nestjs/core");
function loadInterceptors(app) {
    app.useGlobalInterceptors(new interceptors_1.LoggingInterceptor(), new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
}
//# sourceMappingURL=app.interceptor.js.map