import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

config();

const configService = new ConfigService();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: configService.get('DATABASE_CONNECTION_STRING'),

  entities: [`${__dirname}/../**/*.entity.{js,ts}`],
  migrations: [`${__dirname}/../database/migrations/**/*{.ts,.js}`],

  logging: false,
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
});
