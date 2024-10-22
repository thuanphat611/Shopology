"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: configService.get('DATABASE_HOST'),
    port: parseInt(configService.get('DATABASE_PORT'), 10) || 5432,
    database: configService.get('DATABASE_NAME'),
    username: configService.get('DATABASE_USERNAME'),
    password: configService.get('DATABASE_PASSWORD'),
    entities: [`${__dirname}/../**/*.entity.{js,ts}`],
    migrations: [`${__dirname}/../database/migrations/**/*{.ts,.js}`],
    logging: false,
    synchronize: false,
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
});
//# sourceMappingURL=typeorm.config.js.map