import { Test, TestingModule } from "@nestjs/testing";
import { PostService } from "../../src/post/post.service";
import { NotImplementedException } from "@nestjs/common";
import { PrismaService } from "../../src/prisma/prisma.service";

describe("PostService", () => {
  let postService: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostService, PrismaService]
    }).compile();

    postService = module.get<PostService>(PostService);
  });

  it("should be defined", () => {
    expect(postService).toBeDefined();
  });

  describe("createPost", () => {
    it("should be defined", () => {
      expect(postService.createPost).toBeDefined();
    });

    it("should not throw NotImplementedException", () => {
      expect(() => postService.createPost()).not.toThrow(process.env.NOT_IMPLEMENTED_ERROR_TEXT);
    });

  });

});
