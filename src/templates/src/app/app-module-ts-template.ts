import { FileTemplateBase } from "../../../utils/file-template-base";

export class AppModuleTemplate implements FileTemplateBase {
         public filePath: string = "/src/app/app.module.ts";
         public fileTemplate: string = `import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}`;
       }