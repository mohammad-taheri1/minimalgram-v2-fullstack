import {Controller, Get, Param, Res} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";

@ApiTags("app")
@Controller()
export class AppController {

  @Get()
  rootResponse(): string {
    return "Core Service is up";
  }

  @Get("/post_images/:name")
  showFileTemporaryImplemented(@Param("name") name: string, @Res() res) {
    return res.sendFile(name, {root: "./post_images"});
  }

}
