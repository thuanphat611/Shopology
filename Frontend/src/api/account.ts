import { IRequestBody } from "@/pages/AccountPage";
import { IUserInfo } from "@/pages/LoginPage";
import { axiosClient } from "@/service";
import { apiErrorHandler } from "@/utils/functions";

const validatePassword = async (password: string) => {
  try {
    const response = await axiosClient.post(
      `${import.meta.env.VITE_BACKEND}/api/v1/users/validate-password`,
      {
        password,
      }
    );

    return response.data.isPasswordValid;
  } catch (error) {
    apiErrorHandler(error);
  }
};
const updateAccount = async (data: IRequestBody) => {
  try {
    const response = await axiosClient.put<IUserInfo>(
      `${import.meta.env.VITE_BACKEND}/api/v1/users`,
      {
        ...data,
      }
    );

    return response.data;
  } catch (error) {
    apiErrorHandler(error);
  }
};

export const AccountService = {
  validatePassword,
  updateAccount,
};
