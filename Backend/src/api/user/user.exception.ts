import { BadRequestException } from '@nestjs/common';

export class UserExistException extends BadRequestException {
  constructor() {
    super('User with that email or phone number already exists.');
  }
}

export class UserNotFoundException extends BadRequestException {
  constructor() {
    super('User not found.');
  }
}
