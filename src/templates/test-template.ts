import { FileTemplateBase } from "../utils/file-template-base";

export class TestFileTemplate implements FileTemplateBase {
    public filePath: string = '/randomFolderName/{kebabCaseString}.ts';
    public fileTemplate: string = `export class {pascalCaseString} {
    constructor() {};
}`;
}