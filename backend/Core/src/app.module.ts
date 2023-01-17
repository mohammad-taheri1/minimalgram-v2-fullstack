import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UploadModule } from './upload/upload.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [AuthModule, PrismaModule, UploadModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
