import axios from "axios";

import { axiosClient } from "@/service";
import { ILoginResponse } from "@/pages/LoginPage";
import { ISignupFormValues } from "@/pages/SignupPage";

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const body = { email, password };
  const response = await axios.post<ILoginResponse>(
    `${import.meta.env.VITE_BACKEND}/api/v1/auth/login`,
    body
  );

  return response.data;
};

const signup = async (data: ISignupFormValues) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { confirmPassword, ...body } = data;
  const response = await axios.post<ILoginResponse>(
    `${import.meta.env.VITE_BACKEND}/api/v1/auth/signup`,
    body
  );

  return response.data;
};

const logout = async () => {
  await axiosClient.post(`${import.meta.env.VITE_BACKEND}/api/v1/auth/logout`);
};

export const AuthService = {
  login,
  signup,
  logout,
};
