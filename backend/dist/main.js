"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const app_1 = require("./app");
async function bootstrap() {
    const app = await (0, app_1.CreateNestApp)();
    const configService = app.get(config_1.ConfigService);
    await app.listen(configService.get('port'));
    console.log(`App is listening on port ${configService.get('port')}`);
}
bootstrap();
//# sourceMappingURL=main.js.map