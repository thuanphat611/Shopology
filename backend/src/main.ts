import { ConfigService } from '@nestjs/config';

import { CreateNestApp } from './app';

async function bootstrap() {
  const app = await CreateNestApp();

  const configService = app.get(ConfigService);

  await app.listen(configService.get('port'));
  console.log(`App is listening on port ${configService.get('port')}`);
}
bootstrap();
