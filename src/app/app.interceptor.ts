import { ClassSerializerInterceptor, INestApplication } from '@nestjs/common';

import { LoggingInterceptor } from '@/interceptors';
import { Reflector } from '@nestjs/core';

export function loadInterceptors(app: INestApplication): void {
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new ClassSerializerInterceptor(app.get(Reflector)),
  );
}
