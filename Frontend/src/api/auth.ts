import axios from "axios";

import { ILoginResponse } from "@/pages/LoginPage";

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

export const AuthService = {
  login,
};
