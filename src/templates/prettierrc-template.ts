import { FileTemplateBase } from "../utils/file-template-base";

export class PrettierTemplate implements FileTemplateBase {
         public filePath: string = "/.prettierrc";
         public fileTemplate: string = `{
  "singleQuote": true,
  "trailingComma": "all"
}`;
       }