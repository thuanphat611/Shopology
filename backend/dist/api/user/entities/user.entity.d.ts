import { BaseEntity } from '@/common/entities';
import { Gender } from '@/common/enums';
export declare class User extends BaseEntity {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    gender?: Gender;
    dob?: Date;
    avatar?: string;
    private hashPassword;
}
