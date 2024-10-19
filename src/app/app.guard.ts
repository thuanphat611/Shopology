import { INestApplication } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { JwtAuthGuard } from '@/api/auth/guards';

export function loadGuards(app: INestApplication): void {
  app.useGlobalGuards(new JwtAuthGuard(app.get(Reflector)));
}
