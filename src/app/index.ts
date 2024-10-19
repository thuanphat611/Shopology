import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { loadMiddlewares } from './app.middleware';
import { loadGuards } from './app.guard';

export async function CreateNestApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);

  loadMiddlewares(app);
  loadGuards(app);

  return app;
}
