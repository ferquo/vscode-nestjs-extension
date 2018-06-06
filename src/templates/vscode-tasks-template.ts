import { FileTemplateBase } from "../utils/file-template-base";

export class VsCodeTasksTemplate implements FileTemplateBase {
         public filePath: string = "/.vscode/tasks.json";
         public fileTemplate: string = `{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "0.1.0",
    "isShellCommand": true,
    "args": [],
    "tasks": [
        {
            "command": "tsc",
            "taskName": "tsc",
            "isShellCommand": true,
            "args": [
                "-p",
                "."
            ],
            "showOutput": "silent",
            "problemMatcher": "$tsc"
        }
    ]
}`;
       }