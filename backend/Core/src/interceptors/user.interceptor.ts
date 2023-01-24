import {CallHandler, ExecutionContext, NestInterceptor} from "@nestjs/common";
import * as jwt from "jsonwebtoken";

export class UserInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler<any>){
    const request = context.switchToHttp().getRequest();
    const token = request?.headers?.authorization?.split("Bearer ")[1];
    request.user = await jwt.decode(token);

    return next.handle();
  }
}