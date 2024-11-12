import { Gender } from "@/common/enums";

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IUserInfo {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  gender?: Gender;
  dob?: Date;
  avatar?: string;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  userInfo: IUserInfo;
}
