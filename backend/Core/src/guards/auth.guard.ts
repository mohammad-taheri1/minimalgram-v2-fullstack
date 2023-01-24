import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import * as jwt from "jsonwebtoken";
import {PrismaService} from "../prisma/prisma.service";
import {UserInfo} from "../auth/auth.dto";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prismaService: PrismaService
  ) {
  }

  async canActivate(context: ExecutionContext) {
    const roles = this.reflector.getAllAndOverride('roles', [
      context.getHandler(),
      context.getClass()
    ])

    console.log(roles)
    if (roles?.length) {
      // check the jwt to confirm admin access or user access
      const request = context.switchToHttp().getRequest();
      const token = request.headers?.authorization?.split("Bearer ")[1];
      try {
        const payload = await jwt.verify(token, process.env.JSON_TOKEN_KEY) as UserInfo;
        const user = await this.prismaService.user.findUnique({
          where: {
            id: payload.id
          }
        })
        if (!user) return false;

        return !!roles.includes(user.user_type);
      } catch
        (e) {
        return false
      }
    }

    return
    true
  }

}