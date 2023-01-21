export interface ISignupDto {
  name: string,
  phone: string,
  email: string,
  password: string,
}

export interface ILoginDto {
  email: string,
  password: string,
}