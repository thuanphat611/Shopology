import { SignupDto } from '../auth/dto';
import { User } from './entities';
import { UserRepository } from './user.repository';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    findOneByEmail(email: string): Promise<User>;
    findOneByEmailOrPhone({ email, phone, }: {
        email: string;
        phone: string;
    }): Promise<User>;
    create(data: SignupDto): Promise<User>;
}
