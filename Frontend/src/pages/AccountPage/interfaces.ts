export interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password?: string;
  newPassword?: string;
  confirmNewPassword?: string;
}

export interface IRequestBody {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string;
}
