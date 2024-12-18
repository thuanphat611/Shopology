import { Body, Controller, Post, Put } from '@nestjs/common';

import { ReqUser } from '@/decorators';

import { UserService } from './user.service';
import { UpdateUserDto, ValidatePasswordDto } from './dto';
import { User } from './entities';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/validate-password')
  async validatePassword(
    @ReqUser() user: User,
    @Body() body: ValidatePasswordDto,
  ) {
    return this.userService.validatePassword(user, body.password);
  }

  @Put()
  async updateUser(@Body() data: UpdateUserDto, @ReqUser() user: User) {
    return this.userService.update(user.id, data);
  }
}
