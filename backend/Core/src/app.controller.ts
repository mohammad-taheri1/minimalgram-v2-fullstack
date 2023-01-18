import { Controller, Get, Param, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiTags } from "@nestjs/swagger";
import { PrismaService } from "./prisma/prisma.service";

@ApiTags("app")
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService) {
  }

  @Get()
  rootResponse(): string {
    return "Core Service is up";
  }

  @Get("/users")
  getAllUsersTemporaryImplemented() {
    return this.prismaService.user.findMany({
      orderBy: [
        { created_at: "asc" }
      ]
    });
  }

  @Get("/post_images/:name")
  showFileTemporaryImplemented(@Param("name") name: string, @Res() res) {
    return res.sendFile(name, { root: "./post_images" });
  }

}
