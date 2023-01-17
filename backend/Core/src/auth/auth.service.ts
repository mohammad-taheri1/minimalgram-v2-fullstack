import { ConflictException, Injectable } from "@nestjs/common";
import { ISignupParams } from "./auth.dto";
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

    // generate new jwt
    const token = jwt.sign({
      name: user.name,
      id: user.id
    }, process.env.JSON_TOKEN_KEY, {
      expiresIn: 60*60*24
    });

    return { token };
  }
}
