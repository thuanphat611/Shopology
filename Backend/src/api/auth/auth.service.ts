import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

import { UserService } from '../user/user.service';
import { TokenService } from '../token/token.service';
import { UserExistException } from '../user/user.exception';
import { User } from '../user/entities';

import { LoggedInDto, SignupDto } from './dto';
import { WrongCredentialException } from './auth.exception';
import { ITokenPayload, IValidateUserParams } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(user: User): Promise<LoggedInDto> {
    const { email, id } = user;
    const payload: ITokenPayload = { email, id };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get('jwt.access.secret'),
        expiresIn: this.configService.get('jwt.access.signOptions.expiresIn'),
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.get('jwt.refresh.secret'),
        expiresIn: this.configService.get('jwt.refresh.signOptions.expiresIn'),
      }),
    ]);

    await this.tokenService.saveToken({ token: refreshToken, email });

    return {
      accessToken,
      refreshToken,
      userInfo: user,
    };
  }

  async signup(data: SignupDto): Promise<User> {
    const { email, phone } = data;

    const userExist = await this.userService.findOneByEmailOrPhone({
      email,
      phone,
    });

    if (userExist) {
      throw new UserExistException();
    }

    return this.userService.create(data);
  }

  async refresh(user: User) {
    const { email, id } = user;
    const payload: ITokenPayload = { email, id };

    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get('jwt.access.secret'),
      expiresIn: this.configService.get('jwt.access.signOptions.expiresIn'),
    });

    return {
      accessToken,
    };
  }

  async validateUser(data: IValidateUserParams) {
    const { email, password } = data;

    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new WrongCredentialException();
    }

    const isPasswordMatching = await compare(password, user.password);
    if (!isPasswordMatching) {
      throw new WrongCredentialException();
    }

    return user;
  }

  async validateAccessToken(email: string): Promise<User> {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new WrongCredentialException();
    }

    return user;
  }
}
