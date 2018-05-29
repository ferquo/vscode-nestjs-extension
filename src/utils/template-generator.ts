import { FileTemplateBase } from "./file-template-base";
import { TestFileTemplate } from "../templates/test-template";

export class TemplateGenerator {
    public templates: Array<FileTemplateBase> = [];

    constructor(private generatorOptions?:any) {
        this.templates.push(new TestFileTemplate());
    }

    private replaceWildCard(originalString: string, value: string, replacement: string) {
        return originalString.split(`{${value}}`).join(replacement);
    }

    private replaceAllWildCards(text: string) {
        if (this.generatorOptions && this.generatorOptions.data) {
            for (const key in this.generatorOptions.data) {
                if (this.generatorOptions.data.hasOwnProperty(key)) {
                    const value = this.generatorOptions.data[key];
                    this.replaceWildCard(text, key, value);
                }
            }
        }
    }

    public async generateFilesFormTemplates() {

    }
}