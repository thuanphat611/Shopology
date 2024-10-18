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
import { LocalAuthGuard } from './guards';
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
}
