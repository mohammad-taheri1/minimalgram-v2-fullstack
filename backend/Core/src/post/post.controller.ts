import { Controller, NotImplementedException, Post } from "@nestjs/common";

@Controller('post')
export class PostController {

  @Post()
  createPost(){
    // Todo
    throw new Error(process.env.NOT_IMPLEMENTED_ERROR_TEXT);
  }

}
