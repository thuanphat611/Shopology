import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  public async login() {
    return 'login route';
  }

  public async signup() {
    return 'signup route';
  }
}
