import { ConflictException, HttpException, Injectable } from "@nestjs/common";
import { ISigninParams, ISignupParams } from "./auth.dto";
import { PrismaService } from "../prisma/prisma.service";
import { UserType } from "@prisma/client";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthService {

  constructor(private readonly prismaService: PrismaService) {
  }

  async signup(body: ISignupParams) {
    const { email, password } = body;

    const userExists = await this.prismaService.user.findUnique({
      where: {
        email
      }
    });
    if (userExists) {
      throw new ConflictException("This email is already in use");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prismaService.user.create({
      data: {
        ...body,
        password: hashedPassword,
        user_type: UserType.USER
      }
    });

    return "user created successfully";
  }

  async signin(body: ISigninParams) {
    const { email, password } = body;
    const user = await this.prismaService.user.findUnique({
      where: {
        email
      }
    });
    if (!user) {
      throw new HttpException("Invalid credentials", 400);
    }
    const hashedPassword = user.password;
    const isValidPassword = await bcrypt.compare(password, hashedPassword);
    if (!isValidPassword) {
      throw new HttpException("Invalid credentials", 400);
    }

    return this.generateJWT(user.name, user.id);
  }

  private generateJWT(name: string, id: number) {
    return jwt.sign({
      name,
      id
    }, process.env.JSON_TOKEN_KEY, {
      expiresIn: 60 * 60 * 24
    });
  }

}
