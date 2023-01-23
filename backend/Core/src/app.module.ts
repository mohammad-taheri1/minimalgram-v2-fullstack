import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UploadModule } from './upload/upload.module';
import { PostModule } from './post/post.module';
import {APP_INTERCEPTOR} from "@nestjs/core";
import {UserInterceptor} from "./interceptors/user.interceptor";

@Module({
  imports: [AuthModule, PrismaModule, UploadModule, PostModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: UserInterceptor
  }],
})
export class AppModule {}
