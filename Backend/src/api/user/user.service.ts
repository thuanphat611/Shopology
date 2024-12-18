import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';

import { SignupDto } from '../auth/dto';
import { WrongCredentialException } from '../auth/auth.exception';

import { User } from './entities';
import { UserRepository } from './user.repository';
import { UserExistException, UserNotFoundException } from './user.exception';
import { UpdateUserDto } from './dto';

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

    return createdUser;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new UserNotFoundException();
    }

    await this.userRepository.save({
      id: user.id,
      ...data,
    });

    if (data.password) {
      user.password = data.password;
      await this.userRepository.save(user);
    }

    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async validatePassword(user: User, password: string) {
    const isUserExist = await this.userRepository.findOne({
      where: {
        email: user.email,
      },
    });
    if (!isUserExist) {
      throw new WrongCredentialException();
    }

    const isPasswordMatching = await compare(password, user.password);
    if (!isPasswordMatching) {
      throw new BadRequestException('Password is not correct');
    }

    return {
      isPasswordValid: !!isPasswordMatching,
    };
  }
}
