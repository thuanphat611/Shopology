import { Gender } from '@/common/enums';
interface IUserInfo {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender?: Gender;
    dob?: Date;
}
export declare class LoggedInDto {
    accessToken: string;
    refreshToken: string;
    userInfo: IUserInfo;
}
export {};
