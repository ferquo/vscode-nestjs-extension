import { FileTemplateBase } from "../../../utils/file-template-base";

export class AppServiceTemplate implements FileTemplateBase {
         public filePath: string = "/src/app/app.service.ts";
         public fileTemplate: string = `import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }
}`;
       }