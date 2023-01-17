import { Test, TestingModule } from '@nestjs/testing';
import { UploadService } from '../../src/upload/upload.service';

describe('UploadService', () => {
  let uploadService: UploadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadService],
    }).compile();

    uploadService = module.get<UploadService>(UploadService);
  });

  it('should be defined', () => {
    expect(uploadService).toBeDefined();
  });
});
