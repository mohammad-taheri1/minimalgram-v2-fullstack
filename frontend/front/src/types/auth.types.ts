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

export interface IJwt {
  name: string,
  id: number,
  iat: string,
  exp: string
}