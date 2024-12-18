import { Form } from "antd";

import { useAuth } from "@/hooks";
import { apiErrorHandler, getObjectsDifference } from "@/utils/functions";
import { showError, showSuccess } from "@/service";
import { AccountService } from "@/api/account";
import { USER_KEY } from "@/utils/constants";

import { IFormData, IRequestBody } from "./interfaces";

export default function useHandler() {
  const { getUser } = useAuth();
  let user = getUser();
  const [form] = Form.useForm();

  const formInitialValues = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phone: user?.phone,
  };

  async function handleSubmit(data: IFormData) {
    try {
      const {
        email,
        phone,
        firstName,
        lastName,
        password,
        newPassword,
        confirmNewPassword,
      } = data;

      let changedContent: IRequestBody = {
        email,
        phone,
        firstName,
        lastName,
      };

      if (newPassword) {
        changedContent = { ...changedContent, password: newPassword };
      }

      if (newPassword !== confirmNewPassword && newPassword?.length !== 0) {
        showError("Confirm new password is not match.");
        return;
      }

      if (newPassword && !password) {
        showError("Please enter old password.");
        return;
      }

      if (password) {
        const isOldPasswordCorrect = await AccountService.validatePassword(
          password
        );

        if (!isOldPasswordCorrect || !newPassword) {
          showError("Old password is not correct.");
          return;
        }
      }

      const difference = getObjectsDifference(
        changedContent,
        formInitialValues
      );

      const newData = await AccountService.updateAccount(difference);
      localStorage.setItem(USER_KEY, JSON.stringify(newData));
      user = newData;
      form.resetFields(["password", "newPassword", "confirmNewPassword"]);
      showSuccess("Changed information successfully!");
    } catch (error) {
      apiErrorHandler(error);
    }
  }

  return { user, form, formInitialValues, onSubmit: handleSubmit };
}
