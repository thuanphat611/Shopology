import { BadRequestException } from '@nestjs/common';

export class ItemNotInCartException extends BadRequestException {
  constructor() {
    super('Item is not in cart.');
  }
}
