import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesMongoController } from './coffees-mongo.controller';

describe('CoffeesMongoController', () => {
  let controller: CoffeesMongoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeesMongoController],
    }).compile();

    controller = module.get<CoffeesMongoController>(CoffeesMongoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
