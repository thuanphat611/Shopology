import { Rule } from "antd/es/form";

export const formValidationRules: {
  email: Rule[];
  phone: Rule[];
  firstName: Rule[];
  lastName: Rule[];
} = {
  email: [
    { required: true, message: "Email is required" },
    {
      type: "email",
      message: "Please enter a valid email address",
    },
  ],
  phone: [
    { required: true, message: "Phone number is required" },
    { pattern: /^[0-9]{10}$/, message: "Phone number must be 10 digits" },
  ],
  firstName: [
    { required: true, message: "Last name is required" },
    { pattern: /^[A-Za-z]+$/, message: "Last name must contain only letters" },
  ],
  lastName: [
    { required: true, message: "Last name is required" },
    { pattern: /^[A-Za-z]+$/, message: "Last name must contain only letters" },
  ],
};
