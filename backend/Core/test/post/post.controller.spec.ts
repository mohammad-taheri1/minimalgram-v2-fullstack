import { Test, TestingModule } from "@nestjs/testing";
import { PostController } from "../../src/post/post.controller";
import { PostService } from "../../src/post/post.service";
import { PrismaService } from "../../src/prisma/prisma.service";

describe("PostController", () => {
  let postController: PostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [PostService, PrismaService]
    }).compile();

    postController = module.get<PostController>(PostController);
  });

  it("should be defined", () => {
    expect(postController).toBeDefined();
  });

  describe("createPost", () => {
    it("should be defined", () => {
      expect(postController.createPost).toBeDefined();
    });
  });

  describe("getAllPosts", () => {
    it("should be defined", () => {
      expect(postController.getAllPosts).toBeDefined();
    });
  });

});
