import { IsString, IsNotEmpty, IsEmail, MinLength, Matches } from "class-validator";

export class SignupDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @Matches(/^[+]\d{7,15}/, {message: "please enter a valid phone number, start with + sign"})
  phone: string;

  @IsEmail({} , {message: "Email format is incorrect"})
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}