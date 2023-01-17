import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "../../src/auth/auth.controller";
import { AuthService } from "../../src/auth/auth.service";
import { PrismaService } from "../../src/prisma/prisma.service";

describe("AuthController", () => {
  let authcontroller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, PrismaService]
    }).compile();

    authcontroller = module.get<AuthController>(AuthController);
  });

  it("should be defined", () => {
    expect(authcontroller).toBeDefined();
  });

  describe("signup", () => {
    it("should be defined", () => {
      expect(authcontroller.signup).toBeDefined();
    });
  });

  describe("signin", () => {
    it("should be defined", () => {
      expect(authcontroller.signin).toBeDefined();
    });
  });
});
