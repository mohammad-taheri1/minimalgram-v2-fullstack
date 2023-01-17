import { IsNotEmpty } from "class-validator";

export class CreatePostDto {

  @IsNotEmpty()
  caption: string
}