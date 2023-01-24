import {ConflictException, HttpException, Injectable, NotFoundException} from "@nestjs/common";
import {ILoginParams, ISignupParams, UserInfo} from "./auth.dto";
import {PrismaService} from "../prisma/prisma.service";
import {UserType} from "@prisma/client";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthService {

  constructor(private readonly prismaService: PrismaService) {
  }

  async signup(body: ISignupParams) {
    const {email, password} = body;

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

  async login(body: ILoginParams) {
    const {email, password} = body;
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

  async profile(email: string, user: UserInfo) {
    const queryResult = await this.prismaService.user.findUnique({
      where: {
        email: email
      },
      include: {
        posts: true
      }
    })

    if (!queryResult) {
      throw new NotFoundException();
    }

    return ({
      requested_email: email,
      user_In_DB: queryResult,
      user_JWT_DATA: user
    })
  }

  // temp
  async getAllUsersTemporaryImplemented() {
    return await this.prismaService.user.findMany({
      orderBy: [
        { created_at: "asc" }
      ]
    });
  }
}
