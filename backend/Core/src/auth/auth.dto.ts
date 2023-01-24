import { IsString, IsNotEmpty, IsEmail, MinLength, Matches } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ default: "+989992228877" })
  @Matches(/^[+]\d{7,15}$/, { message: "please enter a valid phone number, start with + sign" })
  phone: string;

  @ApiProperty({ default: "name@tmail.com" })
  @IsEmail({}, { message: "Email format is incorrect" })
  email: string;

  @IsString()
  @MinLength(5, { message: "Password length must be at least 5" })
  password: string;
  // min length is considering ADMIN word
}

export class LoginDto {
  @ApiProperty({ default: "name@tmail.com" })
  @IsEmail({}, { message: "Email format is incorrect" })
  email: string;

  @IsString()
  @MinLength(5, { message: "Password length must be at least 5" })
  password: string;
}

export interface ISignupParams {
  name: string,
  phone: string,
  email: string,
  password: string
}

export interface ILoginParams {
  email: string,
  password: string
}

export interface UserInfo {
  name: string;
  id: number;
  iat: number;
  exp: number;
}
