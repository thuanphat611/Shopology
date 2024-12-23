import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { envConfig } from '@/config';
import { DatabaseModule } from '@/database/database.module';
import { AuthModule } from '@/api/auth/auth.module';
import { UserModule } from '@/api/user/user.module';
import { ProductModule } from '@/api/product/product.module';
import { CartModule } from '@/api/cart/cart.module';
import { WishListModule } from '@/api/wish-list/wish-list.module';

import { AppController } from './app.controller';

const EnvSchema = Joi.object({
  PORT: Joi.number().required(),

  DATABASE_TYPE: Joi.string().required(),
  DATABASE_CONNECTION_STRING: Joi.string().required(),

  JWT_SECRET: Joi.string().required(),
  JWT_REFRESH_SECRET: Joi.string().required(),
  JWT_EXPIRATION_TIME: Joi.string().required(),
  JWT_REFRESH_EXPIRATION_TIME: Joi.string().required(),
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
      validationSchema: EnvSchema,
    }),
    DatabaseModule,
    AuthModule,
    UserModule,
    ProductModule,
    CartModule,
    WishListModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
