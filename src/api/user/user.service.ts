import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';

import { SignupDto } from '../auth/dto';

import { User } from './entities';
import { UserRepository } from './user.repository';
import { UserExistException } from './user.exception';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  async findOneByEmail(email: string) {
    const user = this.userRepository.findOneBy({ email });

    return user;
  }

  async findOneByEmailOrPhone({
    email,
    phone,
  }: {
    email: string;
    phone: string;
  }): Promise<User> {
    const user = await this.userRepository.findOne({
      where: [{ email }, { phone }],
    });

    return user;
  }

  async create(data: SignupDto): Promise<User> {
    const { email, phone } = data;

    const userExist = await this.findOneByEmailOrPhone({
      email,
      phone,
    });

    if (userExist) {
      throw new UserExistException();
    }

    const createdUser = this.userRepository.create(data);

    await this.userRepository.save(createdUser);

    return plainToClass(User, createdUser);
  }
}
