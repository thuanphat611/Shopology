import { Body, Controller, Put } from '@nestjs/common';

import { ReqUser } from '@/decorators';

import { UserService } from './user.service';
import { UpdateUserDto } from './dto';
import { User } from './entities';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Put()
  async updateUser(@Body() data: UpdateUserDto, @ReqUser() user: User) {
    return this.userService.update(user.id, data);
  }
}
