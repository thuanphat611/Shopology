import { Body, Controller, Post } from '@nestjs/common';

import { User } from '../user/entities';

import { AuthService } from './auth.service';
import { SignupDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login() {
    return this.authService.login();
  }

  @Post('signup')
  async signup(@Body() data: SignupDto): Promise<User> {
    return this.authService.signup(data);
  }
}
