import { FileTemplateBase } from "../../../../utils/file-template-base";

export class SampleControllerTemplate implements FileTemplateBase {
         public filePath: string = "/src/app/sample/sample.controller.ts";
         public fileTemplate: string = `import { Controller, Get } from '@nestjs/common';

@Controller('sample')
export class SampleController {

    @Get('/')
    getData() {
        return { message: 'Hello World' };
    }
}`;
       }