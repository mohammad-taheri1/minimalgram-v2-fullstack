import { Injectable, NotImplementedException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PostService {

  constructor(private readonly prismaService: PrismaService) {
  }

  createPost(){
    // Todo
    throw new Error(process.env.NOT_IMPLEMENTED_ERROR_TEXT);
  }
}
