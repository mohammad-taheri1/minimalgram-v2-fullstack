import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../src/app.controller';
import { AppService } from '../../src/app.service';
import { PrismaService } from "../../src/prisma/prisma.service";

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, PrismaService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('rootResponse function', () => {
    it("should be defined", () => {
      expect(appController.rootResponse).toBeDefined();
    })


    it('should return "Core Service is up"', () => {
      expect(appController.rootResponse()).toBe( `Core Service is up`);
    });
  });
});
