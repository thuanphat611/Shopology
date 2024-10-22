"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMiddlewares = loadMiddlewares;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const helmet_1 = require("helmet");
function loadMiddlewares(app) {
    app.setGlobalPrefix('api');
    app.enableVersioning({
        defaultVersion: '1',
        type: common_1.VersioningType.URI,
    });
    app.useGlobalPipes(new common_2.ValidationPipe({
        transform: true,
        whitelist: true,
    }));
    app.use((0, helmet_1.default)());
    app.enableCors();
}
//# sourceMappingURL=app.middleware.js.map