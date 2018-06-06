import { FileTemplateBase } from "../../utils/file-template-base";

export class JestE2ETemplate implements FileTemplateBase {
         public filePath: string = "/test/jest-e2e.json";
         public fileTemplate: string = `{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  }
}`;
       }