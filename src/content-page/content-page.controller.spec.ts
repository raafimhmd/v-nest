import { Test, TestingModule } from '@nestjs/testing';
import { ContentPageController } from './content-page.controller';

describe('ContentPage Controller', () => {
  let controller: ContentPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentPageController],
    }).compile();

    controller = module.get<ContentPageController>(ContentPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
