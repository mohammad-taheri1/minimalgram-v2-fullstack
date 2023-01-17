import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../src/prisma/prisma.service";

describe("PrismaService", () => {
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService]
    }).compile();

    prismaService = module.get<PrismaService>(PrismaService);
  });

  it("should be defined", () => {
    expect(prismaService).toBeDefined();
  });

  describe("onModuleInit", () => {
    it("should be defined", () => {
      expect(prismaService.onModuleInit).toBeDefined();
    });
  });

  describe("onModuleDestroy", () => {
    it("should be defined", () => {
      expect(prismaService.onModuleDestroy).toBeDefined();
    });
  });
});
