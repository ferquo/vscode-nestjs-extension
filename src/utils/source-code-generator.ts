import { Uri } from "vscode";
import { TextCaseVariants } from "./text-case-variants";
const generator = require("custom-template-generator");

export class SourceCodeGenerator {

    private generatorOptions = {};

    constructor(
        projectName: string,
        destinationFolderPath: Uri
    ) {
        let dataValues = (new TextCaseVariants(projectName)).getAllVariants;
        dataValues.ts = 'ts';

        this.generatorOptions = {
            componentName: dataValues.pascalCaseString,
            customTemplatesUrl: '/templates/',
            templateName: '',
            dest: destinationFolderPath.fsPath,
            showPrompt: false,
            wrapInFolder: false,
            data: dataValues
        };
    }

    public async startScaffolding() {
        return new Promise((resolve, reject) => {
            generator(this.generatorOptions);
            resolve();
        });
    }
}