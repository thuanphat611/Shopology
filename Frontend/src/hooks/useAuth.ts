import {
  USER_KEY,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/utils/constants";
import { ILoginResponse, IUserInfo } from "@/pages/LoginPage";

export default function useAuth() {
  function login(data: ILoginResponse) {
    localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
    localStorage.setItem(USER_KEY, JSON.stringify(data.userInfo));
  }

  function getUser(): IUserInfo | null {
    const data = localStorage.getItem(USER_KEY);

    if (data) return JSON.parse(data);
    else return null;
  }

  function getAccessToken(): string {
    return localStorage.getItem(ACCESS_TOKEN_KEY)!;
  }

  function getRefreshToken(): string {
    return localStorage.getItem(REFRESH_TOKEN_KEY)!;
  }

  function isAuthenticated(): boolean {
    return !!localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  function logout() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  return {
    login,
    logout,
    getUser,
    getAccessToken,
    getRefreshToken,
    isAuthenticated,
  };
}
