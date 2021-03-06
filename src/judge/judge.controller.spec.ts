import { Test, TestingModule } from '@nestjs/testing';
import { JudgeController } from './judge.controller';

describe('Judge Controller', () => {
  let controller: JudgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JudgeController],
    }).compile();

    controller = module.get<JudgeController>(JudgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
