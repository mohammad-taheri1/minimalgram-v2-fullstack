import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "../../src/auth/auth.service";
import { PrismaService } from "../../src/prisma/prisma.service";

describe("AuthService", () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, PrismaService]
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it("should be defined", () => {
    expect(authService).toBeDefined();
  });

  describe("signup", () => {
    it("should be defined", () => {
      expect(authService.signup).toBeDefined();
    });
  });

  describe("signin", () => {
    it("should be defined", () => {
      expect(authService.signin).toBeDefined();
    });
  });

});
