import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePostDto } from "./post.dto";

@Injectable()
export class PostService {

  constructor(private readonly prismaService: PrismaService) {
  }

  async createPost(body: CreatePostDto, file: Express.Multer.File) {
    const { caption } = body;
    const savedImage = await this.prismaService.image.create({
      data: {
        url: file.filename
      }
    });

    return await this.prismaService.post.create({
      data: {
        caption,
        image_id: savedImage.id,
        user_id: 4
      }
    });
  }


}
