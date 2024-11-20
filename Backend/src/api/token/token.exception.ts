import { BadRequestException } from '@nestjs/common';

export class WrongTokenException extends BadRequestException {
  constructor() {
    super('Wrong token provided.');
  }
}
