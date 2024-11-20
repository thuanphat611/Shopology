import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from '../user/user.module';

import { Token } from './entities';
import { TokenService } from './token.service';

@Module({
  imports: [TypeOrmModule.forFeature([Token]), UserModule],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
