import { Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  public async login() {
    return this.authService.login();
  }

  @Post('signup')
  public async signup() {
    return this.authService.signup();
  }
}
