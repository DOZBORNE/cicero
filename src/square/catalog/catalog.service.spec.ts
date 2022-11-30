import { Test, TestingModule } from '@nestjs/testing';
import { SquareCatalogService } from './square-catalog.service';

describe('CatalogService', () => {
  let service: SquareCatalogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SquareCatalogService],
    }).compile();

    service = module.get<SquareCatalogService>(SquareCatalogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
