import { User } from '../user/entities';
import { AuthService } from './auth.service';
import { LoggedInDto, SignupDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(user: User): Promise<LoggedInDto>;
    signup(data: SignupDto): Promise<User>;
}
