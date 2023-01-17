import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { ApiConsumes, ApiTags } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import path = require("path");

@ApiTags("upload")
@Controller("upload")
export class UploadController {

  @ApiConsumes("multipart/form-data")
  @Post()
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, callback) => {
          const fileName = path.parse(file.originalname).name;
          const extension = path.parse(file.originalname).ext;

          callback(null, `${fileName}-${Date.now()}-${Math.round(Math.random() * 1E5)}${extension}`);
        }
      }),
      fileFilter: (req, file, callback) => {
        const fileName = path.parse(file.originalname).name;
        const extension = path.parse(file.originalname).ext;

        if (extension !== ".jpg" && extension !== ".jpeg") {
          return callback(new BadRequestException("File should be jpg or jpeg"), false);
        }

        return callback(null, true);
      }
    })
  )
  uploadFile(@Body() content: string, @UploadedFile() image: Express.Multer.File) {
    console.log(content);
    console.log(image.filename);
    return image.filename;
  }

  @Get("/image/:name")
  showFile(@Param("name") name: string, @Res() res) {
    console.log(name);
    return res.sendFile(name, { root: "./uploads" });
  }


}
