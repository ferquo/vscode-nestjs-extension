import { FileTemplateBase } from "../../../utils/file-template-base";

export class MainHMRTemplate implements FileTemplateBase {
         public filePath: string = "/src/app/main.hmr.ts";
         public fileTemplate: string = `import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
`;
       }