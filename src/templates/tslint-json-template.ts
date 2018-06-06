import { FileTemplateBase } from "../utils/file-template-base";

export class TSLintTemplate implements FileTemplateBase {
         public filePath: string = "/tslint.json";
         public fileTemplate: string = `{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended"
  ],
  "jsRules": {
    "no-unused-expression": true
  },
  "rules": {
    "eofline": false,
    "quotemark": [
      true,
      "single"
    ],
    "indent": false,
    "member-access": [
      false
    ],
    "ordered-imports": [
      false
    ],
    "max-line-length": [
      true,
      150
    ],
    "member-ordering": [
      false
    ],
    "curly": false,
    "interface-name": [
      false
    ],
    "array-type": [
      false
    ],
    "no-empty-interface": false,
    "no-empty": false,
    "arrow-parens": false,
    "object-literal-sort-keys": false,
    "no-unused-expression": false,
    "max-classes-per-file": [
      false
    ],
    "variable-name": [
      false
    ],
    "one-line": [
      false
    ],
    "one-variable-per-declaration": [
      false
    ]
  },
  "rulesDirectory": []
}`;
       }