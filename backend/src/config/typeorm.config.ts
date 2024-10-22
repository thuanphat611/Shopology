import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

config();

const configService = new ConfigService();

export const AppDataSource = new DataSource({
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
  namingStrategy: new SnakeNamingStrategy(),
});
