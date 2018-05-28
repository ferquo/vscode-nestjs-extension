import * as changeCase from "change-case";

export class TextCaseVariants {
    constructor(private value: string) {

    }

    public get originalValue(): string {
        return this.value;
    }

    public get getAllVariants(): any {
        return { pascalCaseString: changeCase.pascalCase(this.value), kebabCaseString: changeCase.paramCase(this.value) };
    }
}