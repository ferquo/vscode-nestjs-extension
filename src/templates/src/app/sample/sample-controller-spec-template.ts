import { FileTemplateBase } from "../../../../utils/file-template-base";

export class SampleControllerSpecTemplate implements FileTemplateBase {
         public filePath: string = "/src/app/sample/sample.controller.spec.ts";
         public fileTemplate: string = `import { Test, TestingModule } from '@nestjs/testing';
import { SampleController } from './sample.controller';

describe('Sample Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SampleController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SampleController = module.get<SampleController>(SampleController);
    expect(controller).toBeDefined();
  });
});`;
       }