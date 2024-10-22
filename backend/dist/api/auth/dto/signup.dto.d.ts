import { Gender } from '@/common/enums';
export declare class SignupDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    gender?: Gender;
    dob?: Date;
}
