import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserService } from '../user/user.service';

import { Token } from './entities';
import { TokenRepository } from './token.repository';
import { WrongTokenException } from './token.exception';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private tokenRepository: TokenRepository,
    private userService: UserService,
  ) {}

  async saveToken({ token, email }: { token: string; email: string }) {
    const record = await this.tokenRepository.findOne({ where: { email } });

    if (record) {
      record.refreshToken = token;
      await this.tokenRepository.save(record);
    } else {
      const newRecord = await this.tokenRepository.create({
        email,
        refreshToken: token,
      });

      await this.tokenRepository.save(newRecord);
    }
  }

  async deleteToken(email: string) {
    await this.tokenRepository.delete({ email });
  }

  async validateRefreshToken({
    token,
    email,
  }: {
    token: string;
    email: string;
  }) {
    const isValid = await this.tokenRepository.findOne({
      where: {
        refreshToken: token,
        email,
      },
    });

    if (isValid) {
      isValid.lastUsedAt = new Date();
      await this.tokenRepository.save(isValid);

      return this.userService.findOneByEmail(isValid.email);
    } else {
      throw new WrongTokenException();
    }
  }
}
