import { FileTemplateBase } from "../utils/file-template-base";

export class PackageJsonTemplate implements FileTemplateBase {
         public filePath: string = "/package.json";
         public fileTemplate: string = `{
  "name": "nest-sample",
  "version": "0.0.0",
  "description": "description",
  "author": "",
  "license": "MIT",
  "scripts": {
    "format": "prettier --write \\"**/*.ts\\"",
    "start": "ts-node -r tsconfig-paths/register src/main.ts",
    "start:dev": "nodemon",
    "prestart:prod": "rm -rf dist && tsc",
    "start:prod": "node dist/main.js",
    "start:hmr": "node dist/server",
    "test": "jest",
    "test:cov": "jest --coverage",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "webpack": "webpack --config webpack.config.js"
  },
  "dependencies": {
    "@nestjs/common": "^5.0.0",
    "@nestjs/core": "^5.0.0",
    "@nestjs/microservices": "^5.0.0",
    "@nestjs/testing": "^5.0.0",
    "@nestjs/websockets": "^5.0.0",
    "fastify-formbody": "^2.0.0",
    "morgan": "^1.9.0",
    "reflect-metadata": "^0.1.12",
    "rxjs": "^6.0.0",
    "typescript": "^2.6.2"
  },
  "devDependencies": {
    "@types/express": "^4.0.39",
    "@types/jest": "^21.1.8",
    "@types/node": "^9.3.0",
    "@types/supertest": "^2.0.4",
    "jest": "^21.2.1",
    "nodemon": "^1.14.1",
    "prettier": "^1.11.1",
    "supertest": "^3.0.0",
    "ts-jest": "^21.2.4",
    "ts-loader": "^4.1.0",
    "ts-node": "^4.1.0",
    "tsconfig-paths": "^3.1.1",
    "tslint": "5.3.2",
    "webpack": "^4.2.0",
    "webpack-cli": "^2.0.13",
    "webpack-node-externals": "^1.6.0"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".spec.ts$",
    "transform": {
      "^.+\\\\.(t|j)s$": "ts-jest"
    },
    "coverageDirectory": "../coverage"
  }
}
`;
       }