export interface IValidateUserParams {
  email: string;
  password: string;
}

export interface ITokenPayload {
  id: string;
  email: string;
}
