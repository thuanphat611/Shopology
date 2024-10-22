"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNestApp = CreateNestApp;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const app_middleware_1 = require("./app.middleware");
const app_guard_1 = require("./app.guard");
const app_interceptor_1 = require("./app.interceptor");
async function CreateNestApp() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, app_middleware_1.loadMiddlewares)(app);
    (0, app_guard_1.loadGuards)(app);
    (0, app_interceptor_1.loadInterceptors)(app);
    return app;
}
//# sourceMappingURL=index.js.map