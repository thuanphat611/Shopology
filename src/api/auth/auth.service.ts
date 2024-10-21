import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { UserExistException } from '../user/user.exception';
import { User } from '../user/entities';

import { LoggedInDto, SignupDto } from './dto';
import { WrongCredentialException } from './auth.exception';
import { ITokenPayload, IValidateUserParams } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(user: User): Promise<LoggedInDto> {
    const { email, id } = user;
    const payload: ITokenPayload = { email, id };

    const accessToken = await this.jwtService.signAsync(payload);
    //TODO: implement refresh token
    const refreshToken = accessToken;

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
