import axios from "axios";
import { Form } from "antd";

import { AuthService } from "@/api";
import { showError } from "@/service";
import { useAuth } from "@/hooks";

import { ILoginFormValues } from "./interfaces";

export default function useHandler() {
  const { login } = useAuth();
  const [form] = Form.useForm();

  const handleLogin = async (values: ILoginFormValues) => {
    try {
      const response = await AuthService.login(values);
      login(response);
      window.location.href = "/home";
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        showError(error.response.data.message);
      } else {
        showError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return { form, onLogin: handleLogin };
}
