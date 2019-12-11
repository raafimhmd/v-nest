import { Test, TestingModule } from '@nestjs/testing';
import { ContentPageService } from './content-page.service';

describe('ContentPageService', () => {
  let service: ContentPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentPageService],
    }).compile();

    service = module.get<ContentPageService>(ContentPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
