import { Injectable } from '@nestjs/common';

import { UserService } from '../user/user.service';
import { UserExistException } from '../user/user.exception';
import { User } from '../user/entities';

import { SignupDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login() {
    return 'login route';
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
}
