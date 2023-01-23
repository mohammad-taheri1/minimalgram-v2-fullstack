import {BadRequestException, HttpException, Injectable} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePostDto } from "./post.dto";
import {UserInfo} from "../auth/auth.dto";

@Injectable()
export class PostService {

  constructor(private readonly prismaService: PrismaService) {
  }

  private urlCreator(imgName: string): string {
    const baseUrl = process.env.APP_URL;
    return `${baseUrl}/post_images/${imgName}`;
  }

  async createPost(body: CreatePostDto, file: Express.Multer.File, user: UserInfo) {

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
        user_id: user.id
      }
    });
  }

  async getAllPosts() {
    const posts = await this.prismaService.post.findMany({
      select: {
        id: true,
        caption: true,
        image: {
          select: {
            url: true
          }
        },
        user: {
          select: {
            name: true
          }
        },
        created_at: true
      },
      orderBy: [
        { created_at: "desc" }
      ]
    });

    return posts.map(post => {
      return {
        id: post.id,
        caption: post.caption,
        image: this.urlCreator(post.image?.url),
        user: post.user.name,
        created_at: post.created_at
      };
    });

  }

}
