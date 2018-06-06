import { FileTemplateBase } from "./file-template-base";
import * as Path from "path";
import * as fs from "fs";
import {
    VsCodeLaunchTemplate, VsCodeTasksTemplate,
    AppControllerSpecTemplate, AppControllerTemplate, AppModuleTemplate, AppServiceTemplate,
    MainHMRTemplate, MainTemplate,
    AppE2ESpecTemplate, JestE2ETemplate,
    PrettierTemplate,
    NodemonTemplate,
    PackageLockTemplate,
    PackageJsonTemplate,
    ReadmeMDTemplate,
    TsConfigTemplate,
    TSLintTemplate,
    WebpackConfigTemplate,

} from "../templates/import";
let fx = require("mkdir-recursive");

export class TemplateGenerator {
    public templates: Array<FileTemplateBase> = [];

    constructor(private generatorOptions?:any) {
        //this.templates.push(new TestFileTemplate());

        //VSCode specific files
        this.templates.push(new VsCodeLaunchTemplate());
        this.templates.push(new VsCodeTasksTemplate());

        //sample controller
        //this.templates.push(new SampleControllerSpecTemplate());
        //this.templates.push(new SampleControllerTemplate());

        //main application files
        this.templates.push(new AppControllerSpecTemplate());
        this.templates.push(new AppControllerTemplate());
        this.templates.push(new AppModuleTemplate());
        this.templates.push(new AppServiceTemplate());
        this.templates.push(new MainHMRTemplate());
        this.templates.push(new MainTemplate());

        //test files
        this.templates.push(new AppE2ESpecTemplate());
        this.templates.push(new JestE2ETemplate());

        //root files
        this.templates.push(new PrettierTemplate());
        this.templates.push(new NodemonTemplate());
        this.templates.push(new PackageLockTemplate());
        this.templates.push(new PackageJsonTemplate());
        this.templates.push(new ReadmeMDTemplate());
        this.templates.push(new TsConfigTemplate());
        this.templates.push(new TSLintTemplate());
        this.templates.push(new WebpackConfigTemplate());
    }

    private replaceWildCard(originalString: string, value: string, replacement: string) {
        return originalString.split(`{${value}}`).join(replacement);
    }

    private replaceAllWildCards(text: string) {
        let target = text;
        if (this.generatorOptions && this.generatorOptions.data) {
            for (const key in this.generatorOptions.data) {
                if (this.generatorOptions.data.hasOwnProperty(key)) {
                    const value = this.generatorOptions.data[key];
                    target = this.replaceWildCard(target, key, value);
                }
            }
        }

        return target;
    }

    public generateFilesFormTemplates() {
        this.templates.forEach(template => {
            let path = Path.join(this.generatorOptions.dest, this.replaceAllWildCards(template.filePath));
            let content = this.replaceAllWildCards(template.fileTemplate);
            let parrentDir = Path.dirname(path);
            fx.mkdirSync(parrentDir);
            fs.appendFileSync(path, content, 'utf8');
        });
    }
}