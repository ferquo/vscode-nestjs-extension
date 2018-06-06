import { FileTemplateBase } from "../utils/file-template-base";

export class VsCodeLaunchTemplate implements FileTemplateBase {
         public filePath: string = "/.vscode/launch.json";
         public fileTemplate: string = `{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch {pascalCaseString} API",
            "program": "\${workspaceFolder}/dist/main.js",
            "preLaunchTask": "tsc",
            "cwd": "\${workspaceRoot}",
            "outFiles": [
                "\${workspaceFolder}/dist/**/*.js"
            ]
        }
    ]
}`;
       }