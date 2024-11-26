import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form } from "antd";

import { AuthService } from "@/api";
import { showError, showSuccess } from "@/service";
import { apiErrorHandler } from "@/utils/functions";
import { passwordRegex } from "@/utils/regex";

import { ISignupFormValues } from "./interfaces";

export default function useHandler() {
  const [formDisable, setFormdisable] = useState<boolean>(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const delayTime = 3000;

  const handleSignup = async (data: ISignupFormValues) => {
    try {
      if (!passwordRegex.test(data.password)) {
        showError(
          "Password must be 8+ characters with uppercase, lowercase, number, and special character."
        );
        return;
      }
      if (data.confirmPassword !== data.password) {
        showError("Confirm password is not match.");
        return;
      }
      await AuthService.signup(data);
      showSuccess(
        "Create account successfully! You are being redirected to login page."
      );
      setFormdisable(true);
      setTimeout(() => navigate("/login"), delayTime);
    } catch (error) {
      apiErrorHandler(error);
    }
  };

  return { form, formDisable, onSignup: handleSignup };
}
