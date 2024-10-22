import { BadRequestException } from '@nestjs/common';

export class WrongCredentialException extends BadRequestException {
  constructor() {
    super('Wrong credentials provided.');
  }
}
