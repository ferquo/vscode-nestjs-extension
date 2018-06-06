import { FileTemplateBase } from "../utils/file-template-base";

export class NodemonTemplate implements FileTemplateBase {
         public filePath: string = "/nodemon.json";
         public fileTemplate: string = `{
  "watch": [
    "src"
  ],
  "ext": "ts",
  "ignore": [
    "src/**/*.spec.ts"
  ],
  "exec": "ts-node -r tsconfig-paths/register src/main.ts"
}`;
       }