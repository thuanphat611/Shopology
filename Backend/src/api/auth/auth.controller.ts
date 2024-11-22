import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';

import { User } from '../user/entities';

import { AuthService } from './auth.service';
import { LoggedInDto, SignupDto } from './dto';
import { LocalAuthGuard, JwtRefreshGuard } from './guards';
import { ReqUser, Public } from '@/decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@ReqUser() user: User): Promise<LoggedInDto> {
    return this.authService.login(user);
  }

  @Public()
  @Post('signup')
  async signup(@Body() data: SignupDto): Promise<User> {
    return this.authService.signup(data);
  }

  @Public()
  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  async refresh(@ReqUser() user: User) {
    return this.authService.refresh(user);
  }

  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(@ReqUser() user: User) {
    if (user) return this.authService.logout(user.email);
  }
}
