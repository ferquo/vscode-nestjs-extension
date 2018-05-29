import { Uri } from "vscode";
import { TextCaseVariants } from "./text-case-variants";
import * as path from "path";
import { TemplateGenerator } from "./template-generator";
//const generator = require("custom-template-generator");
const copydir = require("copy-dir");

export class SourceCodeGenerator {

    private generatorOptions: any = {};

    constructor(
        projectName: string,
        destinationFolderPath: Uri
    ) {
        let dataValues = (new TextCaseVariants(projectName)).getAllVariants;
        dataValues.ts = 'ts';

        this.generatorOptions = {
            componentName: dataValues.pascalCaseString,
            customTemplatesUrl: '../../templates/',
            templateName: '',
            dest: destinationFolderPath.fsPath,
            showPrompt: false,
            wrapInFolder: false,
            data: dataValues
        };
    }

    public async startScaffolding() {
        let tg = new TemplateGenerator(this.generatorOptions);
        tg.generateFilesFormTemplates();
        //await this.copyTemplatesToDestination();
        // return new Promise((resolve, reject) => {
        //     //generator(this.generatorOptions);
        //     resolve();
        // });
    }

    public async copyTemplatesToDestination() {
        return new Promise((resolve, reject) => {
          copydir(
            path.resolve(this.generatorOptions.customTemplatesUrl),
            this.generatorOptions.dest,
            (err: any) => {
              if (err) {
                reject();
              } else {
                resolve();
              }
            }
          );
        });
    }
}