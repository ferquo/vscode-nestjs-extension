import { FileTemplateBase } from "../../../utils/file-template-base";

export class AppControllerTemplate implements FileTemplateBase {
         public filePath: string = "/src/app/app.controller.ts";
         public fileTemplate: string = `import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }
}`;
       }