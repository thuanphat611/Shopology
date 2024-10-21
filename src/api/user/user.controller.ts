import { Controller, Get, Version } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser() {
    return 'User resource';
  }

  @Version('2')
  @Get()
  getUserV2() {
    return 'User resource version 2';
  }
}
