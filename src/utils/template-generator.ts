import { FileTemplateBase } from "./file-template-base";
import { TestFileTemplate } from "../templates/test-template";
import * as Path from "path";
import * as fs from "fs";

export class TemplateGenerator {
    public templates: Array<FileTemplateBase> = [];

    constructor(private generatorOptions?:any) {
        this.templates.push(new TestFileTemplate());
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
            fs.appendFileSync(path, content, 'utf8');
        });
    }
}