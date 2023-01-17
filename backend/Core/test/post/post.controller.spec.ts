import { Test, TestingModule } from "@nestjs/testing";
import { PostController } from "../../src/post/post.controller";
import { NotImplementedException } from "@nestjs/common";

describe("PostController", () => {
  let postController: PostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController]
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

    it("should not throw NotImplementedException", () => {
      expect(() => postController.createPost()).not.toThrow(process.env.NOT_IMPLEMENTED_ERROR_TEXT);
    });

  });
});
