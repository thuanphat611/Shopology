import { useEffect } from "react";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";

import { AuthService } from "@/api";
import { useAuth } from "@/hooks";
import { apiErrorHandler } from "@/utils/functions";

import { ILoginFormValues } from "./interfaces";

export default function useHandler() {
  const { login, isAuthenticated } = useAuth();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) navigate("/home");
  }, [isAuthenticated, navigate]);

  const handleLogin = async (values: ILoginFormValues) => {
    try {
      const response = await AuthService.login(values);
      login(response);
      window.location.href = "/home";
    } catch (error) {
      apiErrorHandler(error);
    }
  };

  return { form, onLogin: handleLogin };
}
