import { FileTemplateBase } from "../utils/file-template-base";

export class TsConfigTemplate implements FileTemplateBase {
         public filePath: string = "/tsconfig.json";
         public fileTemplate: string = `{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": false,
    "noImplicitAny": false,
    "removeComments": true,
    "noLib": false,
    "allowSyntheticDefaultImports": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es6",
    "sourceMap": true,
    "allowJs": true,
    "outDir": "./dist",
    "baseUrl": "./src"
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}`;
       }