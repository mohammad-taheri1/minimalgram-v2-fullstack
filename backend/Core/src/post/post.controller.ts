import {
  BadRequestException,
  Body,
  Controller, Get, HttpException,
  NotImplementedException,
  Post,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { PostService } from "./post.service";
import { diskStorage } from "multer";

const path = require("path");
import { ApiTags } from "@nestjs/swagger";
import { CreatePostDto } from "./post.dto";
import {User} from "../decorators/user.decorator";
import {UserInfo} from "../auth/auth.dto";

@ApiTags("post")
@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {
  }

  @Post()
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./post_images",
        filename: (req, file, callbackFN) => {
          const fileName = path.parse(file.originalname).name;
          const extension = path.parse(file.originalname).ext;
          callbackFN(null, `${fileName}-${Date.now()}-${Math.round(Math.random() * 1E5)}${extension}`);
        }
      }),
      fileFilter: (req, file, callbackFN) => {
        const extension = path.parse(file.originalname).ext;
        if (extension !== ".jpg" && extension !== ".jpeg") {
          return callbackFN(new BadRequestException("File should be jpg or jpeg"), false);
        }
        return callbackFN(null, true);
      },
      limits: {
        fileSize: 1024 * 1024 * 2
      }
    })
  )
  async createPost(@Body() caption: CreatePostDto, @UploadedFile() image: Express.Multer.File, @User() user: UserInfo) {
    if(!image) {
      throw new BadRequestException("image must be sent");
    }

    return this.postService.createPost(caption, image, user);
  }

  @Get()
  async getAllPosts() {
    return this.postService.getAllPosts();
  }
}
