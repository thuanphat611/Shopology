import { INestApplication, VersioningType } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

export function loadMiddlewares(app: INestApplication): void {
  app.setGlobalPrefix('api');

  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.use(helmet());

  app.enableCors();
}
