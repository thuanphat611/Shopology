import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { envConfig } from '@/config';
import { DatabaseModule } from '@/database/database.module';
import { AuthModule } from '@/api/auth/auth.module';
import { UserModule } from '@/api/user/user.module';

import { AppController } from './app.controller';

const EnvSchema = Joi.object({
  PORT: Joi.number().required(),

  DATABASE_TYPE: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
});

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      validationSchema: EnvSchema,
    }),
    DatabaseModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
