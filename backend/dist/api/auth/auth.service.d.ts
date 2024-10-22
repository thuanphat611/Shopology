import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/entities';
import { LoggedInDto, SignupDto } from './dto';
import { IValidateUserParams } from './auth.interface';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(user: User): Promise<LoggedInDto>;
    signup(data: SignupDto): Promise<User>;
    validateUser(data: IValidateUserParams): Promise<User>;
    validateAccessToken(email: string): Promise<User>;
}
