import { FileTemplateBase } from "../utils/file-template-base";

export class PackageLockTemplate implements FileTemplateBase {
         public filePath: string = "/package-lock.json";
         public fileTemplate: string = `{
  "name": "nest-sample",
  "version": "0.0.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@mrmlnc/readdir-enhanced": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/@mrmlnc/readdir-enhanced/-/readdir-enhanced-2.2.1.tgz",
      "integrity": "sha512-bPHp6Ji8b41szTOcaP63VlnbbO5Ny6dwAATtY6JTjh5N2OLrb5Qk/Th5cRkRQhkWCt+EJsYrNB0MiL+Gpn6e3g==",
      "dev": true,
      "requires": {
        "call-me-maybe": "1.0.1",
        "glob-to-regexp": "0.3.0"
      }
    },
    "@nestjs/common": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/@nestjs/common/-/common-5.0.1.tgz",
      "integrity": "sha512-DWd/kieJk5zLit9IW02Snc/8tdO8hus+zFqEnHQEFYDh6FJy0hTCSc45AqEXjei1uVrzrncYFZClTstOugs2XQ==",
      "requires": {
        "axios": "0.17.1",
        "cli-color": "1.2.0",
        "deprecate": "1.0.0",
        "multer": "1.3.0"
      }
    },
    "@nestjs/core": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/@nestjs/core/-/core-5.0.1.tgz",
      "integrity": "sha512-QJpT869H8AlxL8P4OnMGZ7DRcbyYt3URhfxZ6agGKohrlqm4nspCHu1eMT3WjzhcobryFtL0/ZZVir18OQ9rgw==",
      "requires": {
        "body-parser": "1.18.2",
        "cors": "2.8.4",
        "express": "4.16.3",
        "iterare": "0.0.8",
        "object-hash": "1.3.0",
        "optional": "0.1.4"
      }
    },
    "@nestjs/microservices": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/@nestjs/microservices/-/microservices-5.0.1.tgz",
      "integrity": "sha512-ph+c4F+lsbzLKPb2EPvxqsovldqD2YAHxhsN80u9fi6+wnnTgq73uSH7CIBKDeCv32hFwphgVmb/gaNZTNI7DA==",
      "requires": {
        "iterare": "0.0.8",
        "json-socket": "0.2.1",
        "optional": "0.1.4"
      }
    },
    "@nestjs/testing": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/@nestjs/testing/-/testing-5.0.1.tgz",
      "integrity": "sha512-BXBem7PzchTPhereHp3HsE2XCHxdi7UfsTdYvXRFj91O9k5dgtXRknXaPLtDEFROIlNnLHY1LE8kamWynerjJQ==",
      "requires": {
        "deprecate": "1.0.0",
        "optional": "0.1.4"
      }
    },
    "@nestjs/websockets": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/@nestjs/websockets/-/websockets-5.0.1.tgz",
      "integrity": "sha512-VeaQPE/V3BKITwP3dm18gY1+r7qFo6D1D6r4XFKngPfxl/tXg0CUTQR9jMf3+1a9jlYo7YRFup8q2MJZYXBE4g==",
      "requires": {
        "iterare": "0.0.8",
        "socket.io": "2.1.1"
      }
    },
    "@nodelib/fs.stat": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-1.1.0.tgz",
      "integrity": "sha512-LAQ1d4OPfSJ/BMbI2DuizmYrrkD9JMaTdi2hQTlI53lQ4kRQPyZQRS4CYQ7O66bnBBnP/oYdRxbk++X0xuFU6A==",
      "dev": true
    },
    "@samverschueren/stream-to-observable": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/@samverschueren/stream-to-observable/-/stream-to-observable-0.3.0.tgz",
      "integrity": "sha512-MI4Xx6LHs4Webyvi6EbspgyAb4D2Q2VtnCQ1blOJcoLS6mVa8lNN2rkIy1CVxfTUpoyIbCTkXES1rLXztFD1lg==",
      "dev": true,
      "requires": {
        "any-observable": "0.3.0"
      }
    },
    "@sindresorhus/is": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-0.7.0.tgz",
      "integrity": "sha512-ONhaKPIufzzrlNbqtWFFd+jlnemX6lJAgq9ZeiZtS7I1PIf/la7CW4m83rTXRnVnsMbW2k56pGYu7AUFJD9Pow==",
      "dev": true
    },
    "@types/body-parser": {
      "version": "1.17.0",
      "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.17.0.tgz",
      "integrity": "sha512-a2+YeUjPkztKJu5aIF2yArYFQQp8d51wZ7DavSHjFuY1mqVgidGyzEQ41JIVNy82fXj8yPgy2vJmfIywgESW6w==",
      "dev": true,
      "requires": {
        "@types/connect": "3.4.32",
        "@types/node": "9.6.20"
      }
    },
    "@types/connect": {
      "version": "3.4.32",
      "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.32.tgz",
      "integrity": "sha512-4r8qa0quOvh7lGD0pre62CAb1oni1OO6ecJLGCezTmhQ8Fz50Arx9RUszryR8KlgK6avuSXvviL6yWyViQABOg==",
      "dev": true,
      "requires": {
        "@types/node": "9.6.20"
      }
    },
    "@types/events": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@types/events/-/events-1.2.0.tgz",
      "integrity": "sha512-KEIlhXnIutzKwRbQkGWb/I4HFqBuUykAdHgDED6xqwXJfONCjF5VoE0cXEiurh3XauygxzeDzgtXUqvLkxFzzA==",
      "dev": true
    },
    "@types/express": {
      "version": "4.16.0",
      "resolved": "https://registry.npmjs.org/@types/express/-/express-4.16.0.tgz",
      "integrity": "sha512-TtPEYumsmSTtTetAPXlJVf3kEqb6wZK0bZojpJQrnD/djV4q1oB6QQ8aKvKqwNPACoe02GNiy5zDzcYivR5Z2w==",
      "dev": true,
      "requires": {
        "@types/body-parser": "1.17.0",
        "@types/express-serve-static-core": "4.16.0",
        "@types/serve-static": "1.13.2"
      }
    },
    "@types/express-serve-static-core": {
      "version": "4.16.0",
      "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-4.16.0.tgz",
      "integrity": "sha512-lTeoCu5NxJU4OD9moCgm0ESZzweAx0YqsAcab6OB0EB3+As1OaHtKnaGJvcngQxYsi9UNv0abn4/DRavrRxt4w==",
      "dev": true,
      "requires": {
        "@types/events": "1.2.0",
        "@types/node": "9.6.20",
        "@types/range-parser": "1.2.2"
      }
    },
    "@types/jest": {
      "version": "21.1.10",
      "resolved": "https://registry.npmjs.org/@types/jest/-/jest-21.1.10.tgz",
      "integrity": "sha512-qDyqzbcyNgW2RgWbl606xCYQ+5fK9khOW5+Hl3wH7RggVES0dB6GcZvpmPs/XIty5qpu1xYCwpiK+iRkJ3xFBw==",
      "dev": true
    },
    "@types/mime": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/@types/mime/-/mime-2.0.0.tgz",
      "integrity": "sha512-A2TAGbTFdBw9azHbpVd+/FkdW2T6msN1uct1O9bH3vTerEHKZhTXJUQXy+hNq1B0RagfU8U+KBdqiZpxjhOUQA==",
      "dev": true
    },
    "@types/node": {
      "version": "9.6.20",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-9.6.20.tgz",
      "integrity": "sha512-mIMXUbH2MmJAQQjzFUIRpxa+FtA27IaHMrIgoJ1fyu/EfpVN/UZw3ISMNnwVec4lau8R8SM4pNFXSCZpJFX2Bw==",
      "dev": true
    },
    "@types/range-parser": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.2.tgz",
      "integrity": "sha512-HtKGu+qG1NPvYe1z7ezLsyIaXYyi8SoAVqWDZgDQ8dLrsZvSzUNCwZyfX33uhWxL/SU0ZDQZ3nwZ0nimt507Kw==",
      "dev": true
    },
    "@types/serve-static": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-1.13.2.tgz",
      "integrity": "sha512-/BZ4QRLpH/bNYgZgwhKEh+5AsboDBcUdlBYgzoLX0fpj3Y2gp6EApyOlM3bK53wQS/OE1SrdSYBAbux2D1528Q==",
      "dev": true,
      "requires": {
        "@types/express-serve-static-core": "4.16.0",
        "@types/mime": "2.0.0"
      }
    },
    "@types/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@types/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha1-FKjsOVbC6B7bdSB5CuzyHCkK69I=",
      "dev": true
    },
    "@types/strip-json-comments": {
      "version": "0.0.30",
      "resolved": "https://registry.npmjs.org/@types/strip-json-comments/-/strip-json-comments-0.0.30.tgz",
      "integrity": "sha512-7NQmHra/JILCd1QqpSzl8+mJRc8ZHz3uDm8YV1Ks9IhK0epEiTw8aIErbvH9PI+6XbqhyIQy3462nEsn7UVzjQ==",
      "dev": true
    },
    "@types/superagent": {
      "version": "3.8.0",
      "resolved": "https://registry.npmjs.org/@types/superagent/-/superagent-3.8.0.tgz",
      "integrity": "sha512-NDR8ieJZfgDjoIE5cQ3bDAwx9bkHoYo33JxolNK7/6RWevHWVkYIniwX0uZG1yWqEbv81bXBdX0v3eAmQ0Hsbw==",
      "dev": true,
      "requires": {
        "@types/node": "9.6.20"
      }
    },
    "@types/supertest": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/@types/supertest/-/supertest-2.0.4.tgz",
      "integrity": "sha512-0TvOJ+6XVMSImgqc2ClNllfVffCxHQhFbsbwOGzGTjdFydoaG052LPqnP8SnmSlnokOcQiPPcbz+Yi30LxWPyA==",
      "dev": true,
      "requires": {
        "@types/superagent": "3.8.0"
      }
    },
    "@webassemblyjs/ast": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.5.9.tgz",
      "integrity": "sha512-xL3hC0TOc4ic1UNG8ZZNeaiPf1klozt6rqajcy7hfO/qqfkEhLff1AFt5g2LJkTjhw+QSEYVMt7qOaaApu7JzA==",
      "dev": true,
      "requires": {
        "@webassemblyjs/helper-module-context": "1.5.9",
        "@webassemblyjs/helper-wasm-bytecode": "1.5.9",
        "@webassemblyjs/wast-parser": "1.5.9",
        "debug": "3.1.0",
        "mamacro": "0.0.3"
      }
    },
    "@webassemblyjs/floating-point-hex-parser": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.5.9.tgz",
      "integrity": "sha512-naMJjuBqDqx4dPSzwpI9pkjdLds4tDTzvsOEzwxPDp655IfgLLP/QEvK/9PQp4p5DExqrR87rk8DWByoqWWlGA==",
      "dev": true
    },
    "@webassemblyjs/helper-api-error": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.5.9.tgz",
      "integrity": "sha512-tzGdqBo7Xf3McJcXbwbwzwElRzF/nELJN+G4MGGfm0DGRQB6UTmMe44jFIOQYT1Za89Aiz5DMQJotdnnLheixw==",
      "dev": true
    },
    "@webassemblyjs/helper-buffer": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.5.9.tgz",
      "integrity": "sha512-WYkys6y33viEY23tHJ+KkSd9yHZBd54Sy6gcSgwLGPP1or9pLqWBrjWWATHuDuIkpvSJSt/+3qjAV6zHd1nS0g==",
      "dev": true,
      "requires": {
        "debug": "3.1.0"
      }
    },
    "@webassemblyjs/helper-code-frame": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-code-frame/-/helper-code-frame-1.5.9.tgz",
      "integrity": "sha512-SYjNAlqcRH+YynslbIhFYOnGvE3WBl82/XlcFXiNkqnWsvHWnNkJbtxAtzrT/dcf69O/2pt8j1Q0+qc/rtacVw==",
      "dev": true,
      "requires": {
        "@webassemblyjs/wast-printer": "1.5.9"
      }
    },
    "@webassemblyjs/helper-fsm": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-fsm/-/helper-fsm-1.5.9.tgz",
      "integrity": "sha512-8D+VVIJTRbsn31zt3eyidYyUkhH1jk2/58mrIPiMarflRsisItJa5WZVu/gw0l+ubFOJf9PivTJB6Kw/Kgxx3g==",
      "dev": true
    },
    "@webassemblyjs/helper-module-context": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-module-context/-/helper-module-context-1.5.9.tgz",
      "integrity": "sha512-DbeLbFOhioEeY7yAff12+n5sf7WP7Fmi0lnhCSzfW4xBsgwXKmRjAx7nVmsUf3z+BDnwHHVKIXBUM+ucccNUsw==",
      "dev": true
    },
    "@webassemblyjs/helper-wasm-bytecode": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.5.9.tgz",
      "integrity": "sha512-zHQuTMMd2nTyEa3fbmGfzlJW305py1sgf1gHNCO/LVN8nWlKysB/+6J68sP1Cd+9USnT1VS2vyD1z+YJPS6GqQ==",
      "dev": true
    },
    "@webassemblyjs/helper-wasm-section": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.5.9.tgz",
      "integrity": "sha512-+ff+8Ju6sLCMFNygcDdLRNRsmuD0PHwq77d2mbfWj5YzUvFaKN2q2kRppJSEAixOnM2xLADuG5y/blpMo5G90A==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.5.9",
        "@webassemblyjs/helper-buffer": "1.5.9",
        "@webassemblyjs/helper-wasm-bytecode": "1.5.9",
        "@webassemblyjs/wasm-gen": "1.5.9",
        "debug": "3.1.0"
      }
    },
    "@webassemblyjs/ieee754": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.5.9.tgz",
      "integrity": "sha512-mhetZBDnpV3VYqZb5Aail9X01VyIqDDZrNYdYj8bfx/PsVPG2znX90wRyVNTeqC5ylqHCgGkJ63bPaPEyINfsw==",
      "dev": true,
      "requires": {
        "ieee754": "1.1.11"
      }
    },
    "@webassemblyjs/leb128": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.5.9.tgz",
      "integrity": "sha512-oZ3eUB9EViUtiuMwW/xeYamXgfFS2cmXl6aUIYBfpXJQ5v5aOC8ZuPpz2/LqlgNlT8ThpyFd6kfgkYVwKwkGvQ==",
      "dev": true,
      "requires": {
        "leb": "0.3.0"
      }
    },
    "@webassemblyjs/wasm-edit": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.5.9.tgz",
      "integrity": "sha512-pMWe3HomnWAMZytJ5sSNBS6qTbSoULUHkvDrtcarmLBTclmupZe25INy1jxbWGKsuFxw6w0xQ+eLRPlC8HPjhg==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.5.9",
        "@webassemblyjs/helper-buffer": "1.5.9",
        "@webassemblyjs/helper-wasm-bytecode": "1.5.9",
        "@webassemblyjs/helper-wasm-section": "1.5.9",
        "@webassemblyjs/wasm-gen": "1.5.9",
        "@webassemblyjs/wasm-opt": "1.5.9",
        "@webassemblyjs/wasm-parser": "1.5.9",
        "@webassemblyjs/wast-printer": "1.5.9",
        "debug": "3.1.0"
      }
    },
    "@webassemblyjs/wasm-gen": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.5.9.tgz",
      "integrity": "sha512-UEhymlxupBUJuwnD2N860MqkpE7LHt0tNKqAgT4YAVjbx+88P6MBBk+q+9wr2FJCXxMgsPTxMWifqC4wd2FzVg==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.5.9",
        "@webassemblyjs/helper-wasm-bytecode": "1.5.9",
        "@webassemblyjs/ieee754": "1.5.9",
        "@webassemblyjs/leb128": "1.5.9"
      }
    },
    "@webassemblyjs/wasm-opt": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.5.9.tgz",
      "integrity": "sha512-oQm84US3e36dPq5bOeybVKA2ZyzeWR4fereg9kJa0Y9XLKxHwlsBa2kFyNXwZNrhMP33iyXAW+ym7om1zPZeAg==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.5.9",
        "@webassemblyjs/helper-buffer": "1.5.9",
        "@webassemblyjs/wasm-gen": "1.5.9",
        "@webassemblyjs/wasm-parser": "1.5.9",
        "debug": "3.1.0"
      }
    },
    "@webassemblyjs/wasm-parser": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.5.9.tgz",
      "integrity": "sha512-jBKBTKE4M/WYCSqLjRvK+/QD55E/HNcQjswbksof3GEXfkq0iMqYxoPfqR7uLAD9/jVf9HpBNW2FJOyfTTlYfw==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.5.9",
        "@webassemblyjs/helper-api-error": "1.5.9",
        "@webassemblyjs/helper-wasm-bytecode": "1.5.9",
        "@webassemblyjs/ieee754": "1.5.9",
        "@webassemblyjs/leb128": "1.5.9",
        "@webassemblyjs/wasm-parser": "1.5.9"
      }
    },
    "@webassemblyjs/wast-parser": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-parser/-/wast-parser-1.5.9.tgz",
      "integrity": "sha512-bDuYH/NR5D+MmwVZdGW2rUvu4UcKGpodiHBSueajon3oNPu+PAKG+7br3BVFKxDUtDoVtuHLUQvkqp1lTrqPCA==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.5.9",
        "@webassemblyjs/floating-point-hex-parser": "1.5.9",
        "@webassemblyjs/helper-api-error": "1.5.9",
        "@webassemblyjs/helper-code-frame": "1.5.9",
        "@webassemblyjs/helper-fsm": "1.5.9",
        "long": "3.2.0",
        "mamacro": "0.0.3"
      }
    },
    "@webassemblyjs/wast-printer": {
      "version": "1.5.9",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.5.9.tgz",
      "integrity": "sha512-04iV32TO69kZChP3DN6W8i6GCa5UtEn1Lnzb4sQGe5YNjIFz2k8+KZLxbovWIZgj9pk06k3Egq/wyD98lSKaLw==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.5.9",
        "@webassemblyjs/wast-parser": "1.5.9",
        "long": "3.2.0"
      }
    },
    "abab": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/abab/-/abab-1.0.4.tgz",
      "integrity": "sha1-X6rZwsB/YN12dw9xzwJbYqY8/U4=",
      "dev": true
    },
    "abbrev": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "dev": true
    },
    "accepts": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.5.tgz",
      "integrity": "sha1-63d99gEXI6OxTopywIBcjoZ0a9I=",
      "requires": {
        "mime-types": "2.1.18",
        "negotiator": "0.6.1"
      }
    },
    "acorn": {
      "version": "4.0.13",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-4.0.13.tgz",
      "integrity": "sha1-EFSVrlNh1pe9GVyCUZLhrX8lN4c=",
      "dev": true
    },
    "acorn-dynamic-import": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/acorn-dynamic-import/-/acorn-dynamic-import-3.0.0.tgz",
      "integrity": "sha512-zVWV8Z8lislJoOKKqdNMOB+s6+XV5WERty8MnKBeFgwA+19XJjJHs2RP5dzM57FftIs+jQnRToLiWazKr6sSWg==",
      "dev": true,
      "requires": {
        "acorn": "5.6.1"
      },
      "dependencies": {
        "acorn": {
          "version": "5.6.1",
          "resolved": "https://registry.npmjs.org/acorn/-/acorn-5.6.1.tgz",
          "integrity": "sha512-XH4o5BK5jmw9PzSGK7mNf+/xV+mPxQxGZoeC36OVsJZYV77JAG9NnI7T90hoUpI/C1TOfXWTvugRdZ9ZR3iE2Q==",
          "dev": true
        }
      }
    },
    "acorn-globals": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-3.1.0.tgz",
      "integrity": "sha1-/YJw9x+7SZawBPqIDuXUZXOnMb8=",
      "dev": true,
      "requires": {
        "acorn": "4.0.13"
      }
    },
    "after": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/after/-/after-0.8.2.tgz",
      "integrity": "sha1-/ts5T58OAqqXaOcCvaI7UF+ufh8="
    },
    "ajv": {
      "version": "5.5.2",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-5.5.2.tgz",
      "integrity": "sha1-c7Xuyj+rZT49P5Qis0GtQiBdyWU=",
      "dev": true,
      "requires": {
        "co": "4.6.0",
        "fast-deep-equal": "1.1.0",
        "fast-json-stable-stringify": "2.0.0",
        "json-schema-traverse": "0.3.1"
      }
    },
    "ajv-keywords": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.2.0.tgz",
      "integrity": "sha1-6GuBnGAs+IIa1jdBNpjx3sAhhHo=",
      "dev": true
    },
    "align-text": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/align-text/-/align-text-0.1.4.tgz",
      "integrity": "sha1-DNkKVhCT810KmSVsIrcGlDP60Rc=",
      "dev": true,
      "requires": {
        "kind-of": "3.2.2",
        "longest": "1.0.1",
        "repeat-string": "1.6.1"
      }
    },
    "amdefine": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/amdefine/-/amdefine-1.0.1.tgz",
      "integrity": "sha1-SlKCrBZHKek2Gbz9OtFR+BfOkfU=",
      "dev": true
    },
    "ansi-align": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-2.0.0.tgz",
      "integrity": "sha1-w2rsy6VjuJzrVW82kPCx2eNUf38=",
      "dev": true,
      "requires": {
        "string-width": "2.1.1"
      }
    },
    "ansi-escapes": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.1.0.tgz",
      "integrity": "sha512-UgAb8H9D41AQnu/PbWlCofQVcnV4Gs2bBJi9eZPxfU/hgglFh3SMDMENRIqdr7H6XFnXdoknctFByVsCOotTVw==",
      "dev": true
    },
    "ansi-regex": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
    },
    "ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "requires": {
        "color-convert": "1.9.1"
      }
    },
    "any-observable": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/any-observable/-/any-observable-0.3.0.tgz",
      "integrity": "sha512-/FQM1EDkTsf63Ub2C6O7GuYFDsSXUwsaZDurV0np41ocwq0jthUAYCmhBX9f+KwlaCgIuWyr/4WlUQUBfKfZog==",
      "dev": true
    },
    "anymatch": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
      "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
      "dev": true,
      "requires": {
        "micromatch": "3.1.10",
        "normalize-path": "2.1.1"
      },
      "dependencies": {
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
          "dev": true
        },
        "array-unique": {
          "version": "0.3.2",
          "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
          "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
          "dev": true
        },
        "braces": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
          "dev": true,
          "requires": {
            "arr-flatten": "1.1.0",
            "array-unique": "0.3.2",
            "extend-shallow": "2.0.1",
            "fill-range": "4.0.0",
            "isobject": "3.0.1",
            "repeat-element": "1.1.2",
            "snapdragon": "0.8.2",
            "snapdragon-node": "2.1.1",
            "split-string": "3.1.0",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "expand-brackets": {
          "version": "2.1.4",
          "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
          "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
          "dev": true,
          "requires": {
            "debug": "2.6.9",
            "define-property": "0.2.5",
            "extend-shallow": "2.0.1",
            "posix-character-classes": "0.1.1",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "define-property": {
              "version": "0.2.5",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
              "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
              "dev": true,
              "requires": {
                "is-descriptor": "0.1.6"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "3.2.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "1.1.6"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "3.2.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "1.1.6"
                  }
                }
              }
            },
            "is-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
              "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
              "dev": true,
              "requires": {
                "is-accessor-descriptor": "0.1.6",
                "is-data-descriptor": "0.1.4",
                "kind-of": "5.1.0"
              }
            },
            "kind-of": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
              "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
              "dev": true
            }
          }
        },
        "extglob": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
          "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
          "dev": true,
          "requires": {
            "array-unique": "0.3.2",
            "define-property": "1.0.0",
            "expand-brackets": "2.1.4",
            "extend-shallow": "2.0.1",
            "fragment-cache": "0.2.1",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "define-property": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
              "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
              "dev": true,
              "requires": {
                "is-descriptor": "1.0.2"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "fill-range": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
          "dev": true,
          "requires": {
            "extend-shallow": "2.0.1",
            "is-number": "3.0.0",
            "repeat-string": "1.6.1",
            "to-regex-range": "2.1.1"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "1.0.0",
            "is-data-descriptor": "1.0.0",
            "kind-of": "6.0.2"
          }
        },
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "dev": true,
          "requires": {
            "kind-of": "3.2.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "dev": true,
              "requires": {
                "is-buffer": "1.1.6"
              }
            }
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
          "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
          "dev": true
        },
        "micromatch": {
          "version": "3.1.10",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
          "dev": true,
          "requires": {
            "arr-diff": "4.0.0",
            "array-unique": "0.3.2",
            "braces": "2.3.2",
            "define-property": "2.0.2",
            "extend-shallow": "3.0.2",
            "extglob": "2.0.4",
            "fragment-cache": "0.2.1",
            "kind-of": "6.0.2",
            "nanomatch": "1.2.9",
            "object.pick": "1.3.0",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          }
        }
      }
    },
    "append-field": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/append-field/-/append-field-0.1.0.tgz",
      "integrity": "sha1-bdxY+gg8e8VF08WZWygwzCNm1Eo="
    },
    "append-transform": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/append-transform/-/append-transform-0.4.0.tgz",
      "integrity": "sha1-126/jKlNJ24keja61EpLdKthGZE=",
      "dev": true,
      "requires": {
        "default-require-extensions": "1.0.0"
      }
    },
    "aproba": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
      "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw==",
      "dev": true
    },
    "argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dev": true,
      "requires": {
        "sprintf-js": "1.0.3"
      }
    },
    "arr-diff": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-2.0.0.tgz",
      "integrity": "sha1-jzuCf5Vai9ZpaX5KQlasPOrjVs8=",
      "dev": true,
      "requires": {
        "arr-flatten": "1.1.0"
      }
    },
    "arr-flatten": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
      "dev": true
    },
    "arr-union": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
      "dev": true
    },
    "array-differ": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/array-differ/-/array-differ-1.0.0.tgz",
      "integrity": "sha1-7/UuN1gknTO+QCuLuOVkuytdQDE=",
      "dev": true
    },
    "array-equal": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/array-equal/-/array-equal-1.0.0.tgz",
      "integrity": "sha1-jCpe8kcv2ep0KwTHenUJO6J1fJM=",
      "dev": true
    },
    "array-filter": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/array-filter/-/array-filter-0.0.1.tgz",
      "integrity": "sha1-fajPLiZijtcygDWB/SH2fKzS7uw=",
      "dev": true
    },
    "array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
    },
    "array-map": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/array-map/-/array-map-0.0.0.tgz",
      "integrity": "sha1-iKK6tz0c97zVwbEYoAP2b2ZfpmI=",
      "dev": true
    },
    "array-reduce": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/array-reduce/-/array-reduce-0.0.0.tgz",
      "integrity": "sha1-FziZ0//Rx9k4PkR5Ul2+J4yrXys=",
      "dev": true
    },
    "array-union": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-1.0.2.tgz",
      "integrity": "sha1-mjRBDk9OPaI96jdb5b5w8kd47Dk=",
      "dev": true,
      "requires": {
        "array-uniq": "1.0.3"
      }
    },
    "array-uniq": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/array-uniq/-/array-uniq-1.0.3.tgz",
      "integrity": "sha1-r2rId6Jcx/dOBYiUdThY39sk/bY=",
      "dev": true
    },
    "array-unique": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.2.1.tgz",
      "integrity": "sha1-odl8yvy8JiXMcPrc6zalDFiwGlM=",
      "dev": true
    },
    "arraybuffer.slice": {
      "version": "0.0.7",
      "resolved": "https://registry.npmjs.org/arraybuffer.slice/-/arraybuffer.slice-0.0.7.tgz",
      "integrity": "sha512-wGUIVQXuehL5TCqQun8OW81jGzAWycqzFF8lFp+GOM5BXLYj3bKNsYC4daB7n6XjCqxQA/qgTJ+8ANR3acjrog=="
    },
    "arrify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
      "integrity": "sha1-iYUI2iIm84DfkEcoRWhJwVAaSw0=",
      "dev": true
    },
    "asn1": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.3.tgz",
      "integrity": "sha1-2sh4dxPJlmhJ/IGAd36+nB3fO4Y=",
      "dev": true
    },
    "asn1.js": {
      "version": "4.10.1",
      "resolved": "https://registry.npmjs.org/asn1.js/-/asn1.js-4.10.1.tgz",
      "integrity": "sha512-p32cOF5q0Zqs9uBiONKYLm6BClCoBCM5O9JfeUSlnQLBTxYdTK+pW+nXflm8UkKd2UYlEbYz5qEi0JuZR9ckSw==",
      "dev": true,
      "requires": {
        "bn.js": "4.11.8",
        "inherits": "2.0.3",
        "minimalistic-assert": "1.0.1"
      }
    },
    "assert": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/assert/-/assert-1.4.1.tgz",
      "integrity": "sha1-mZEtWRg2tab1s0XA8H7vwI/GXZE=",
      "dev": true,
      "requires": {
        "util": "0.10.3"
      },
      "dependencies": {
        "inherits": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.1.tgz",
          "integrity": "sha1-sX0I0ya0Qj5Wjv9xn5GwscvfafE=",
          "dev": true
        },
        "util": {
          "version": "0.10.3",
          "resolved": "https://registry.npmjs.org/util/-/util-0.10.3.tgz",
          "integrity": "sha1-evsa/lCAUkZInj23/g7TeTNqwPk=",
          "dev": true,
          "requires": {
            "inherits": "2.0.1"
          }
        }
      }
    },
    "assert-plus": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
      "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
      "dev": true
    },
    "assign-symbols": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
      "dev": true
    },
    "ast-types": {
      "version": "0.11.5",
      "resolved": "https://registry.npmjs.org/ast-types/-/ast-types-0.11.5.tgz",
      "integrity": "sha512-oJjo+5e7/vEc2FBK8gUalV0pba4L3VdBIs2EKhOLHLcOd2FgQIVQN9xb0eZ9IjEWyAL7vq6fGJxOvVvdCHNyMw==",
      "dev": true
    },
    "astral-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-1.0.0.tgz",
      "integrity": "sha512-+Ryf6g3BKoRc7jfp7ad8tM4TtMiaWvbF/1/sQcZPkkS7ag3D5nMBCe2UfOTONtAkaG0tO0ij3C5Lwmf1EiyjHg==",
      "dev": true
    },
    "async": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/async/-/async-2.6.1.tgz",
      "integrity": "sha512-fNEiL2+AZt6AlAw/29Cr0UDe4sRAHCpEHh54WMz+Bb7QfNcFw4h3loofyJpLeQs4Yx7yuqu/2dLgM5hKOs6HlQ==",
      "dev": true,
      "requires": {
        "lodash": "4.17.10"
      }
    },
    "async-each": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.1.tgz",
      "integrity": "sha1-GdOGodntxufByF04iu28xW0zYC0=",
      "dev": true
    },
    "async-limiter": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.0.tgz",
      "integrity": "sha512-jp/uFnooOiO+L211eZOoSyzpOITMXx1rBITauYykG3BRYPu8h0UcxsPNB04RR5vo4Tyz3+ay17tR6JVf9qzYWg=="
    },
    "asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
      "dev": true
    },
    "atob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.1.tgz",
      "integrity": "sha1-ri1acpR38onWDdf5amMUoi3Wwio=",
      "dev": true
    },
    "aws-sign2": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
      "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
      "dev": true
    },
    "aws4": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.7.0.tgz",
      "integrity": "sha512-32NDda82rhwD9/JBCCkB+MRYDp0oSvlo2IL6rQWA10PQi7tDUM3eqMSltXmY+Oyl/7N3P3qNtAlv7X0d9bI28w==",
      "dev": true
    },
    "axios": {
      "version": "0.17.1",
      "resolved": "https://registry.npmjs.org/axios/-/axios-0.17.1.tgz",
      "integrity": "sha1-LY4+XQvb1zJ/kbyBT1xXZg+Bgk0=",
      "requires": {
        "follow-redirects": "1.5.0",
        "is-buffer": "1.1.6"
      }
    },
    "babel-code-frame": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-code-frame/-/babel-code-frame-6.26.0.tgz",
      "integrity": "sha1-Y/1D99weO7fONZR9uP42mj9Yx0s=",
      "dev": true,
      "requires": {
        "chalk": "1.1.3",
        "esutils": "2.0.2",
        "js-tokens": "3.0.2"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "2.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
          "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
          "dev": true
        },
        "chalk": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
          "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
          "dev": true,
          "requires": {
            "ansi-styles": "2.2.1",
            "escape-string-regexp": "1.0.5",
            "has-ansi": "2.0.0",
            "strip-ansi": "3.0.1",
            "supports-color": "2.0.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "2.1.1"
          }
        },
        "supports-color": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
          "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
          "dev": true
        }
      }
    },
    "babel-core": {
      "version": "6.26.3",
      "resolved": "https://registry.npmjs.org/babel-core/-/babel-core-6.26.3.tgz",
      "integrity": "sha512-6jyFLuDmeidKmUEb3NM+/yawG0M2bDZ9Z1qbZP59cyHLz8kYGKYwpJP0UwUKKUiTRNvxfLesJnTedqczP7cTDA==",
      "dev": true,
      "requires": {
        "babel-code-frame": "6.26.0",
        "babel-generator": "6.26.1",
        "babel-helpers": "6.24.1",
        "babel-messages": "6.23.0",
        "babel-register": "6.26.0",
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0",
        "babel-traverse": "6.26.0",
        "babel-types": "6.26.0",
        "babylon": "6.18.0",
        "convert-source-map": "1.5.1",
        "debug": "2.6.9",
        "json5": "0.5.1",
        "lodash": "4.17.10",
        "minimatch": "3.0.4",
        "path-is-absolute": "1.0.1",
        "private": "0.1.8",
        "slash": "1.0.0",
        "source-map": "0.5.7"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "babel-generator": {
      "version": "6.26.1",
      "resolved": "https://registry.npmjs.org/babel-generator/-/babel-generator-6.26.1.tgz",
      "integrity": "sha512-HyfwY6ApZj7BYTcJURpM5tznulaBvyio7/0d4zFOeMPUmfxkCjHocCuoLa2SAGzBI8AREcH3eP3758F672DppA==",
      "dev": true,
      "requires": {
        "babel-messages": "6.23.0",
        "babel-runtime": "6.26.0",
        "babel-types": "6.26.0",
        "detect-indent": "4.0.0",
        "jsesc": "1.3.0",
        "lodash": "4.17.10",
        "source-map": "0.5.7",
        "trim-right": "1.0.1"
      }
    },
    "babel-helper-bindify-decorators": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-helper-bindify-decorators/-/babel-helper-bindify-decorators-6.24.1.tgz",
      "integrity": "sha1-FMGeXxQte0fxmlJDHlKxzLxAozA=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "babel-traverse": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-helper-builder-binary-assignment-operator-visitor": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-helper-builder-binary-assignment-operator-visitor/-/babel-helper-builder-binary-assignment-operator-visitor-6.24.1.tgz",
      "integrity": "sha1-zORReto1b0IgvK6KAsKzRvmlZmQ=",
      "dev": true,
      "requires": {
        "babel-helper-explode-assignable-expression": "6.24.1",
        "babel-runtime": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-helper-call-delegate": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-helper-call-delegate/-/babel-helper-call-delegate-6.24.1.tgz",
      "integrity": "sha1-7Oaqzdx25Bw0YfiL/Fdb0Nqi340=",
      "dev": true,
      "requires": {
        "babel-helper-hoist-variables": "6.24.1",
        "babel-runtime": "6.26.0",
        "babel-traverse": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-helper-define-map": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-helper-define-map/-/babel-helper-define-map-6.26.0.tgz",
      "integrity": "sha1-pfVtq0GiX5fstJjH66ypgZ+Vvl8=",
      "dev": true,
      "requires": {
        "babel-helper-function-name": "6.24.1",
        "babel-runtime": "6.26.0",
        "babel-types": "6.26.0",
        "lodash": "4.17.10"
      }
    },
    "babel-helper-explode-assignable-expression": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-helper-explode-assignable-expression/-/babel-helper-explode-assignable-expression-6.24.1.tgz",
      "integrity": "sha1-8luCz33BBDPFX3BZLVdGQArCLKo=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "babel-traverse": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-helper-explode-class": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-helper-explode-class/-/babel-helper-explode-class-6.24.1.tgz",
      "integrity": "sha1-fcKjkQ3uAHBW4eMdZAztPVTqqes=",
      "dev": true,
      "requires": {
        "babel-helper-bindify-decorators": "6.24.1",
        "babel-runtime": "6.26.0",
        "babel-traverse": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-helper-function-name": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-helper-function-name/-/babel-helper-function-name-6.24.1.tgz",
      "integrity": "sha1-00dbjAPtmCQqJbSDUasYOZ01gKk=",
      "dev": true,
      "requires": {
        "babel-helper-get-function-arity": "6.24.1",
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0",
        "babel-traverse": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-helper-get-function-arity": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-helper-get-function-arity/-/babel-helper-get-function-arity-6.24.1.tgz",
      "integrity": "sha1-j3eCqpNAfEHTqlCQj4mwMbG2hT0=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-helper-hoist-variables": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-helper-hoist-variables/-/babel-helper-hoist-variables-6.24.1.tgz",
      "integrity": "sha1-HssnaJydJVE+rbyZFKc/VAi+enY=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-helper-optimise-call-expression": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-helper-optimise-call-expression/-/babel-helper-optimise-call-expression-6.24.1.tgz",
      "integrity": "sha1-96E0J7qfc/j0+pk8VKl4gtEkQlc=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-helper-regex": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-helper-regex/-/babel-helper-regex-6.26.0.tgz",
      "integrity": "sha1-MlxZ+QL4LyS3T6zu0DY5VPZJXnI=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "babel-types": "6.26.0",
        "lodash": "4.17.10"
      }
    },
    "babel-helper-remap-async-to-generator": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-helper-remap-async-to-generator/-/babel-helper-remap-async-to-generator-6.24.1.tgz",
      "integrity": "sha1-XsWBgnrXI/7N04HxySg5BnbkVRs=",
      "dev": true,
      "requires": {
        "babel-helper-function-name": "6.24.1",
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0",
        "babel-traverse": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-helper-replace-supers": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-helper-replace-supers/-/babel-helper-replace-supers-6.24.1.tgz",
      "integrity": "sha1-v22/5Dk40XNpohPKiov3S2qQqxo=",
      "dev": true,
      "requires": {
        "babel-helper-optimise-call-expression": "6.24.1",
        "babel-messages": "6.23.0",
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0",
        "babel-traverse": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-helpers": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-helpers/-/babel-helpers-6.24.1.tgz",
      "integrity": "sha1-NHHenK7DiOXIUOWX5Yom3fN2ArI=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0"
      }
    },
    "babel-jest": {
      "version": "21.2.0",
      "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-21.2.0.tgz",
      "integrity": "sha512-O0W2qLoWu1QOoOGgxiR2JID4O6WSpxPiQanrkyi9SSlM0PJ60Ptzlck47lhtnr9YZO3zYOsxHwnyeWJ6AffoBQ==",
      "dev": true,
      "requires": {
        "babel-plugin-istanbul": "4.1.6",
        "babel-preset-jest": "21.2.0"
      }
    },
    "babel-messages": {
      "version": "6.23.0",
      "resolved": "https://registry.npmjs.org/babel-messages/-/babel-messages-6.23.0.tgz",
      "integrity": "sha1-8830cDhYA1sqKVHG7F7fbGLyYw4=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-check-es2015-constants": {
      "version": "6.22.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-check-es2015-constants/-/babel-plugin-check-es2015-constants-6.22.0.tgz",
      "integrity": "sha1-NRV7EBQm/S/9PaP3XH0ekYNbv4o=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-istanbul": {
      "version": "4.1.6",
      "resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-4.1.6.tgz",
      "integrity": "sha512-PWP9FQ1AhZhS01T/4qLSKoHGY/xvkZdVBGlKM/HuxxS3+sC66HhTNR7+MpbO/so/cz/wY94MeSWJuP1hXIPfwQ==",
      "dev": true,
      "requires": {
        "babel-plugin-syntax-object-rest-spread": "6.13.0",
        "find-up": "2.1.0",
        "istanbul-lib-instrument": "1.10.1",
        "test-exclude": "4.2.1"
      }
    },
    "babel-plugin-jest-hoist": {
      "version": "21.2.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-21.2.0.tgz",
      "integrity": "sha512-yi5QuiVyyvhBUDLP4ButAnhYzkdrUwWDtvUJv71hjH3fclhnZg4HkDeqaitcR2dZZx/E67kGkRcPVjtVu+SJfQ==",
      "dev": true
    },
    "babel-plugin-syntax-async-functions": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-async-functions/-/babel-plugin-syntax-async-functions-6.13.0.tgz",
      "integrity": "sha1-ytnK0RkbWtY0vzCuCHI5HgZHvpU=",
      "dev": true
    },
    "babel-plugin-syntax-async-generators": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-async-generators/-/babel-plugin-syntax-async-generators-6.13.0.tgz",
      "integrity": "sha1-a8lj67FuzLrmuStZbrfzXDQqi5o=",
      "dev": true
    },
    "babel-plugin-syntax-class-constructor-call": {
      "version": "6.18.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-class-constructor-call/-/babel-plugin-syntax-class-constructor-call-6.18.0.tgz",
      "integrity": "sha1-nLnTn+Q8hgC+yBRkVt3L1OGnZBY=",
      "dev": true
    },
    "babel-plugin-syntax-class-properties": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-class-properties/-/babel-plugin-syntax-class-properties-6.13.0.tgz",
      "integrity": "sha1-1+sjt5oxf4VDlixQW4J8fWysJ94=",
      "dev": true
    },
    "babel-plugin-syntax-decorators": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-decorators/-/babel-plugin-syntax-decorators-6.13.0.tgz",
      "integrity": "sha1-MSVjtNvePMgGzuPkFszurd0RrAs=",
      "dev": true
    },
    "babel-plugin-syntax-dynamic-import": {
      "version": "6.18.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-dynamic-import/-/babel-plugin-syntax-dynamic-import-6.18.0.tgz",
      "integrity": "sha1-jWomIpyDdFqZgqRBBRVyyqF5sdo=",
      "dev": true
    },
    "babel-plugin-syntax-exponentiation-operator": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-exponentiation-operator/-/babel-plugin-syntax-exponentiation-operator-6.13.0.tgz",
      "integrity": "sha1-nufoM3KQ2pUoggGmpX9BcDF4MN4=",
      "dev": true
    },
    "babel-plugin-syntax-export-extensions": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-export-extensions/-/babel-plugin-syntax-export-extensions-6.13.0.tgz",
      "integrity": "sha1-cKFITw+QiaToStRLrDU8lbmxJyE=",
      "dev": true
    },
    "babel-plugin-syntax-flow": {
      "version": "6.18.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-flow/-/babel-plugin-syntax-flow-6.18.0.tgz",
      "integrity": "sha1-TDqyCiryaqIM0lmVw5jE63AxDI0=",
      "dev": true
    },
    "babel-plugin-syntax-object-rest-spread": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-object-rest-spread/-/babel-plugin-syntax-object-rest-spread-6.13.0.tgz",
      "integrity": "sha1-/WU28rzhODb/o6VFjEkDpZe7O/U=",
      "dev": true
    },
    "babel-plugin-syntax-trailing-function-commas": {
      "version": "6.22.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-trailing-function-commas/-/babel-plugin-syntax-trailing-function-commas-6.22.0.tgz",
      "integrity": "sha1-ugNgk3+NBuQBgKQ/4NVhb/9TLPM=",
      "dev": true
    },
    "babel-plugin-transform-async-generator-functions": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-async-generator-functions/-/babel-plugin-transform-async-generator-functions-6.24.1.tgz",
      "integrity": "sha1-8FiQAUX9PpkHpt3yjaWfIVJYpds=",
      "dev": true,
      "requires": {
        "babel-helper-remap-async-to-generator": "6.24.1",
        "babel-plugin-syntax-async-generators": "6.13.0",
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-async-to-generator": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-async-to-generator/-/babel-plugin-transform-async-to-generator-6.24.1.tgz",
      "integrity": "sha1-ZTbjeK/2yx1VF6wOQOs+n8jQh2E=",
      "dev": true,
      "requires": {
        "babel-helper-remap-async-to-generator": "6.24.1",
        "babel-plugin-syntax-async-functions": "6.13.0",
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-class-constructor-call": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-class-constructor-call/-/babel-plugin-transform-class-constructor-call-6.24.1.tgz",
      "integrity": "sha1-gNwoVQWsBn3LjWxl4vbxGrd2Xvk=",
      "dev": true,
      "requires": {
        "babel-plugin-syntax-class-constructor-call": "6.18.0",
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0"
      }
    },
    "babel-plugin-transform-class-properties": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-class-properties/-/babel-plugin-transform-class-properties-6.24.1.tgz",
      "integrity": "sha1-anl2PqYdM9NvN7YRqp3vgagbRqw=",
      "dev": true,
      "requires": {
        "babel-helper-function-name": "6.24.1",
        "babel-plugin-syntax-class-properties": "6.13.0",
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0"
      }
    },
    "babel-plugin-transform-decorators": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-decorators/-/babel-plugin-transform-decorators-6.24.1.tgz",
      "integrity": "sha1-eIAT2PjGtSIr33s0Q5Df13Vp4k0=",
      "dev": true,
      "requires": {
        "babel-helper-explode-class": "6.24.1",
        "babel-plugin-syntax-decorators": "6.13.0",
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-arrow-functions": {
      "version": "6.22.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-arrow-functions/-/babel-plugin-transform-es2015-arrow-functions-6.22.0.tgz",
      "integrity": "sha1-RSaSy3EdX3ncf4XkQM5BufJE0iE=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-block-scoped-functions": {
      "version": "6.22.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-block-scoped-functions/-/babel-plugin-transform-es2015-block-scoped-functions-6.22.0.tgz",
      "integrity": "sha1-u8UbSflk1wy42OC5ToICRs46YUE=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-block-scoping": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-block-scoping/-/babel-plugin-transform-es2015-block-scoping-6.26.0.tgz",
      "integrity": "sha1-1w9SmcEwjQXBL0Y4E7CgnnOxiV8=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0",
        "babel-traverse": "6.26.0",
        "babel-types": "6.26.0",
        "lodash": "4.17.10"
      }
    },
    "babel-plugin-transform-es2015-classes": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-classes/-/babel-plugin-transform-es2015-classes-6.24.1.tgz",
      "integrity": "sha1-WkxYpQyclGHlZLSyo7+ryXolhNs=",
      "dev": true,
      "requires": {
        "babel-helper-define-map": "6.26.0",
        "babel-helper-function-name": "6.24.1",
        "babel-helper-optimise-call-expression": "6.24.1",
        "babel-helper-replace-supers": "6.24.1",
        "babel-messages": "6.23.0",
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0",
        "babel-traverse": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-computed-properties": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-computed-properties/-/babel-plugin-transform-es2015-computed-properties-6.24.1.tgz",
      "integrity": "sha1-b+Ko0WiV1WNPTNmZttNICjCBWbM=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-destructuring": {
      "version": "6.23.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-destructuring/-/babel-plugin-transform-es2015-destructuring-6.23.0.tgz",
      "integrity": "sha1-mXux8auWf2gtKwh2/jWNYOdlxW0=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-duplicate-keys": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-duplicate-keys/-/babel-plugin-transform-es2015-duplicate-keys-6.24.1.tgz",
      "integrity": "sha1-c+s9MQypaePvnskcU3QabxV2Qj4=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-for-of": {
      "version": "6.23.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-for-of/-/babel-plugin-transform-es2015-for-of-6.23.0.tgz",
      "integrity": "sha1-9HyVsrYT3x0+zC/bdXNiPHUkhpE=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-function-name": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-function-name/-/babel-plugin-transform-es2015-function-name-6.24.1.tgz",
      "integrity": "sha1-g0yJhTvDaxrw86TF26qU/Y6sqos=",
      "dev": true,
      "requires": {
        "babel-helper-function-name": "6.24.1",
        "babel-runtime": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-literals": {
      "version": "6.22.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-literals/-/babel-plugin-transform-es2015-literals-6.22.0.tgz",
      "integrity": "sha1-T1SgLWzWbPkVKAAZox0xklN3yi4=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-modules-amd": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-modules-amd/-/babel-plugin-transform-es2015-modules-amd-6.24.1.tgz",
      "integrity": "sha1-Oz5UAXI5hC1tGcMBHEvS8AoA0VQ=",
      "dev": true,
      "requires": {
        "babel-plugin-transform-es2015-modules-commonjs": "6.26.2",
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-modules-commonjs": {
      "version": "6.26.2",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-modules-commonjs/-/babel-plugin-transform-es2015-modules-commonjs-6.26.2.tgz",
      "integrity": "sha512-CV9ROOHEdrjcwhIaJNBGMBCodN+1cfkwtM1SbUHmvyy35KGT7fohbpOxkE2uLz1o6odKK2Ck/tz47z+VqQfi9Q==",
      "dev": true,
      "requires": {
        "babel-plugin-transform-strict-mode": "6.24.1",
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-modules-systemjs": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-modules-systemjs/-/babel-plugin-transform-es2015-modules-systemjs-6.24.1.tgz",
      "integrity": "sha1-/4mhQrkRmpBhlfXxBuzzBdlAfSM=",
      "dev": true,
      "requires": {
        "babel-helper-hoist-variables": "6.24.1",
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-modules-umd": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-modules-umd/-/babel-plugin-transform-es2015-modules-umd-6.24.1.tgz",
      "integrity": "sha1-rJl+YoXNGO1hdq22B9YCNErThGg=",
      "dev": true,
      "requires": {
        "babel-plugin-transform-es2015-modules-amd": "6.24.1",
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-object-super": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-object-super/-/babel-plugin-transform-es2015-object-super-6.24.1.tgz",
      "integrity": "sha1-JM72muIcuDp/hgPa0CH1cusnj40=",
      "dev": true,
      "requires": {
        "babel-helper-replace-supers": "6.24.1",
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-parameters": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-parameters/-/babel-plugin-transform-es2015-parameters-6.24.1.tgz",
      "integrity": "sha1-V6w1GrScrxSpfNE7CfZv3wpiXys=",
      "dev": true,
      "requires": {
        "babel-helper-call-delegate": "6.24.1",
        "babel-helper-get-function-arity": "6.24.1",
        "babel-runtime": "6.26.0",
        "babel-template": "6.26.0",
        "babel-traverse": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-shorthand-properties": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-shorthand-properties/-/babel-plugin-transform-es2015-shorthand-properties-6.24.1.tgz",
      "integrity": "sha1-JPh11nIch2YbvZmkYi5R8U3jiqA=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-spread": {
      "version": "6.22.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-spread/-/babel-plugin-transform-es2015-spread-6.22.0.tgz",
      "integrity": "sha1-1taKmfia7cRTbIGlQujdnxdG+NE=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-sticky-regex": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-sticky-regex/-/babel-plugin-transform-es2015-sticky-regex-6.24.1.tgz",
      "integrity": "sha1-AMHNsaynERLN8M9hJsLta0V8zbw=",
      "dev": true,
      "requires": {
        "babel-helper-regex": "6.26.0",
        "babel-runtime": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-template-literals": {
      "version": "6.22.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-template-literals/-/babel-plugin-transform-es2015-template-literals-6.22.0.tgz",
      "integrity": "sha1-qEs0UPfp+PH2g51taH2oS7EjbY0=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-typeof-symbol": {
      "version": "6.23.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-typeof-symbol/-/babel-plugin-transform-es2015-typeof-symbol-6.23.0.tgz",
      "integrity": "sha1-3sCfHN3/lLUqxz1QXITfWdzOs3I=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-es2015-unicode-regex": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-es2015-unicode-regex/-/babel-plugin-transform-es2015-unicode-regex-6.24.1.tgz",
      "integrity": "sha1-04sS9C6nMj9yk4fxinxa4frrNek=",
      "dev": true,
      "requires": {
        "babel-helper-regex": "6.26.0",
        "babel-runtime": "6.26.0",
        "regexpu-core": "2.0.0"
      }
    },
    "babel-plugin-transform-exponentiation-operator": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-exponentiation-operator/-/babel-plugin-transform-exponentiation-operator-6.24.1.tgz",
      "integrity": "sha1-KrDJx/MJj6SJB3cruBP+QejeOg4=",
      "dev": true,
      "requires": {
        "babel-helper-builder-binary-assignment-operator-visitor": "6.24.1",
        "babel-plugin-syntax-exponentiation-operator": "6.13.0",
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-export-extensions": {
      "version": "6.22.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-export-extensions/-/babel-plugin-transform-export-extensions-6.22.0.tgz",
      "integrity": "sha1-U3OLR+deghhYnuqUbLvTkQm75lM=",
      "dev": true,
      "requires": {
        "babel-plugin-syntax-export-extensions": "6.13.0",
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-flow-strip-types": {
      "version": "6.22.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-flow-strip-types/-/babel-plugin-transform-flow-strip-types-6.22.0.tgz",
      "integrity": "sha1-hMtnKTXUNxT9wyvOhFaNh0Qc988=",
      "dev": true,
      "requires": {
        "babel-plugin-syntax-flow": "6.18.0",
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-object-rest-spread": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-object-rest-spread/-/babel-plugin-transform-object-rest-spread-6.26.0.tgz",
      "integrity": "sha1-DzZpLVD+9rfi1LOsFHgTepY7ewY=",
      "dev": true,
      "requires": {
        "babel-plugin-syntax-object-rest-spread": "6.13.0",
        "babel-runtime": "6.26.0"
      }
    },
    "babel-plugin-transform-regenerator": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-regenerator/-/babel-plugin-transform-regenerator-6.26.0.tgz",
      "integrity": "sha1-4HA2lvveJ/Cj78rPi03KL3s6jy8=",
      "dev": true,
      "requires": {
        "regenerator-transform": "0.10.1"
      }
    },
    "babel-plugin-transform-strict-mode": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-strict-mode/-/babel-plugin-transform-strict-mode-6.24.1.tgz",
      "integrity": "sha1-1fr3qleKZbvlkc9e2uBKDGcCB1g=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "babel-types": "6.26.0"
      }
    },
    "babel-preset-es2015": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-preset-es2015/-/babel-preset-es2015-6.24.1.tgz",
      "integrity": "sha1-1EBQ1rwsn+6nAqrzjXJ6AhBTiTk=",
      "dev": true,
      "requires": {
        "babel-plugin-check-es2015-constants": "6.22.0",
        "babel-plugin-transform-es2015-arrow-functions": "6.22.0",
        "babel-plugin-transform-es2015-block-scoped-functions": "6.22.0",
        "babel-plugin-transform-es2015-block-scoping": "6.26.0",
        "babel-plugin-transform-es2015-classes": "6.24.1",
        "babel-plugin-transform-es2015-computed-properties": "6.24.1",
        "babel-plugin-transform-es2015-destructuring": "6.23.0",
        "babel-plugin-transform-es2015-duplicate-keys": "6.24.1",
        "babel-plugin-transform-es2015-for-of": "6.23.0",
        "babel-plugin-transform-es2015-function-name": "6.24.1",
        "babel-plugin-transform-es2015-literals": "6.22.0",
        "babel-plugin-transform-es2015-modules-amd": "6.24.1",
        "babel-plugin-transform-es2015-modules-commonjs": "6.26.2",
        "babel-plugin-transform-es2015-modules-systemjs": "6.24.1",
        "babel-plugin-transform-es2015-modules-umd": "6.24.1",
        "babel-plugin-transform-es2015-object-super": "6.24.1",
        "babel-plugin-transform-es2015-parameters": "6.24.1",
        "babel-plugin-transform-es2015-shorthand-properties": "6.24.1",
        "babel-plugin-transform-es2015-spread": "6.22.0",
        "babel-plugin-transform-es2015-sticky-regex": "6.24.1",
        "babel-plugin-transform-es2015-template-literals": "6.22.0",
        "babel-plugin-transform-es2015-typeof-symbol": "6.23.0",
        "babel-plugin-transform-es2015-unicode-regex": "6.24.1",
        "babel-plugin-transform-regenerator": "6.26.0"
      }
    },
    "babel-preset-jest": {
      "version": "21.2.0",
      "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-21.2.0.tgz",
      "integrity": "sha512-hm9cBnr2h3J7yXoTtAVV0zg+3vg0Q/gT2GYuzlreTU0EPkJRtlNgKJJ3tBKEn0+VjAi3JykV6xCJkuUYttEEfA==",
      "dev": true,
      "requires": {
        "babel-plugin-jest-hoist": "21.2.0",
        "babel-plugin-syntax-object-rest-spread": "6.13.0"
      }
    },
    "babel-preset-stage-1": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-preset-stage-1/-/babel-preset-stage-1-6.24.1.tgz",
      "integrity": "sha1-dpLNfc1oSZB+auSgqFWJz7niv7A=",
      "dev": true,
      "requires": {
        "babel-plugin-transform-class-constructor-call": "6.24.1",
        "babel-plugin-transform-export-extensions": "6.22.0",
        "babel-preset-stage-2": "6.24.1"
      }
    },
    "babel-preset-stage-2": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-preset-stage-2/-/babel-preset-stage-2-6.24.1.tgz",
      "integrity": "sha1-2eKWD7PXEYfw5k7sYrwHdnIZvcE=",
      "dev": true,
      "requires": {
        "babel-plugin-syntax-dynamic-import": "6.18.0",
        "babel-plugin-transform-class-properties": "6.24.1",
        "babel-plugin-transform-decorators": "6.24.1",
        "babel-preset-stage-3": "6.24.1"
      }
    },
    "babel-preset-stage-3": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-preset-stage-3/-/babel-preset-stage-3-6.24.1.tgz",
      "integrity": "sha1-g2raCp56f6N8sTj7kyb4eTSkg5U=",
      "dev": true,
      "requires": {
        "babel-plugin-syntax-trailing-function-commas": "6.22.0",
        "babel-plugin-transform-async-generator-functions": "6.24.1",
        "babel-plugin-transform-async-to-generator": "6.24.1",
        "babel-plugin-transform-exponentiation-operator": "6.24.1",
        "babel-plugin-transform-object-rest-spread": "6.26.0"
      }
    },
    "babel-register": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-register/-/babel-register-6.26.0.tgz",
      "integrity": "sha1-btAhFz4vy0htestFxgCahW9kcHE=",
      "dev": true,
      "requires": {
        "babel-core": "6.26.3",
        "babel-runtime": "6.26.0",
        "core-js": "2.5.7",
        "home-or-tmp": "2.0.0",
        "lodash": "4.17.10",
        "mkdirp": "0.5.1",
        "source-map-support": "0.4.18"
      }
    },
    "babel-runtime": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-runtime/-/babel-runtime-6.26.0.tgz",
      "integrity": "sha1-llxwWGaOgrVde/4E/yM3vItWR/4=",
      "dev": true,
      "requires": {
        "core-js": "2.5.7",
        "regenerator-runtime": "0.11.1"
      }
    },
    "babel-template": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-template/-/babel-template-6.26.0.tgz",
      "integrity": "sha1-3gPi0WOWsGn0bdn/+FIfsaDjXgI=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "babel-traverse": "6.26.0",
        "babel-types": "6.26.0",
        "babylon": "6.18.0",
        "lodash": "4.17.10"
      }
    },
    "babel-traverse": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-traverse/-/babel-traverse-6.26.0.tgz",
      "integrity": "sha1-RqnL1+3MYsjlwGTi0tjQ9ANXZu4=",
      "dev": true,
      "requires": {
        "babel-code-frame": "6.26.0",
        "babel-messages": "6.23.0",
        "babel-runtime": "6.26.0",
        "babel-types": "6.26.0",
        "babylon": "6.18.0",
        "debug": "2.6.9",
        "globals": "9.18.0",
        "invariant": "2.2.4",
        "lodash": "4.17.10"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "babel-types": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-types/-/babel-types-6.26.0.tgz",
      "integrity": "sha1-o7Bz+Uq0nrb6Vc1lInozQ4BjJJc=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "esutils": "2.0.2",
        "lodash": "4.17.10",
        "to-fast-properties": "1.0.3"
      }
    },
    "babylon": {
      "version": "6.18.0",
      "resolved": "https://registry.npmjs.org/babylon/-/babylon-6.18.0.tgz",
      "integrity": "sha512-q/UEjfGJ2Cm3oKV71DJz9d25TPnq5rhBVL2Q4fA5wcC3jcrdn7+SssEybFIxwAvvP+YCsCYNKughoF33GxgycQ==",
      "dev": true
    },
    "backo2": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/backo2/-/backo2-1.0.2.tgz",
      "integrity": "sha1-MasayLEpNjRj41s+u2n038+6eUc="
    },
    "balanced-match": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
      "dev": true
    },
    "base": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
      "dev": true,
      "requires": {
        "cache-base": "1.0.1",
        "class-utils": "0.3.6",
        "component-emitter": "1.2.1",
        "define-property": "1.0.0",
        "isobject": "3.0.1",
        "mixin-deep": "1.3.1",
        "pascalcase": "0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "requires": {
            "is-descriptor": "1.0.2"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "1.0.0",
            "is-data-descriptor": "1.0.0",
            "kind-of": "6.0.2"
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
          "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
          "dev": true
        }
      }
    },
    "base64-arraybuffer": {
      "version": "0.1.5",
      "resolved": "https://registry.npmjs.org/base64-arraybuffer/-/base64-arraybuffer-0.1.5.tgz",
      "integrity": "sha1-c5JncZI7Whl0etZmqlzUv5xunOg="
    },
    "base64-js": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.3.0.tgz",
      "integrity": "sha512-ccav/yGvoa80BQDljCxsmmQ3Xvx60/UpBIij5QN21W3wBi/hhIC9OoO+KLpu9IJTS9j4DRVJ3aDDF9cMSoa2lw==",
      "dev": true
    },
    "base64id": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/base64id/-/base64id-1.0.0.tgz",
      "integrity": "sha1-R2iMuZu2gE8OBtPnY7HDLlfY5rY="
    },
    "basic-auth": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/basic-auth/-/basic-auth-2.0.0.tgz",
      "integrity": "sha1-AV2z81PgLlY3d1X5YnQuiYHnu7o=",
      "requires": {
        "safe-buffer": "5.1.1"
      },
      "dependencies": {
        "safe-buffer": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.1.tgz",
          "integrity": "sha512-kKvNJn6Mm93gAczWVJg7wH+wGYWNrDHdWvpUmHyEsgCtIwwo3bqPtV4tR5tuPaUhTOo/kvhVwd8XwwOllGYkbg=="
        }
      }
    },
    "bcrypt-pbkdf": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.1.tgz",
      "integrity": "sha1-Y7xdy2EzG5K8Bf1SiVPDNGKgb40=",
      "dev": true,
      "optional": true,
      "requires": {
        "tweetnacl": "0.14.5"
      }
    },
    "better-assert": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/better-assert/-/better-assert-1.0.2.tgz",
      "integrity": "sha1-QIZrnhueC1W0gYlDEeaPr/rrxSI=",
      "requires": {
        "callsite": "1.0.0"
      }
    },
    "big.js": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/big.js/-/big.js-3.2.0.tgz",
      "integrity": "sha512-+hN/Zh2D08Mx65pZ/4g5bsmNiZUuChDiQfTUQ7qJr4/kuopCr88xZsAXv6mBoZEsUI4OuGHlX59qE94K2mMW8Q==",
      "dev": true
    },
    "binary-extensions": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.11.0.tgz",
      "integrity": "sha1-RqoXUftqL5PuXmibsQh9SxTGwgU=",
      "dev": true
    },
    "binaryextensions": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/binaryextensions/-/binaryextensions-2.1.1.tgz",
      "integrity": "sha512-XBaoWE9RW8pPdPQNibZsW2zh8TW6gcarXp1FZPwT8Uop8ScSNldJEWf2k9l3HeTqdrEwsOsFcq74RiJECW34yA==",
      "dev": true
    },
    "blob": {
      "version": "0.0.4",
      "resolved": "https://registry.npmjs.org/blob/-/blob-0.0.4.tgz",
      "integrity": "sha1-vPEwUspURj8w+fx+lbmkdjCpSSE="
    },
    "bluebird": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.5.1.tgz",
      "integrity": "sha512-MKiLiV+I1AA596t9w1sQJ8jkiSr5+ZKi0WKrYGUn6d1Fx+Ij4tIj+m2WMQSGczs5jZVxV339chE8iwk6F64wjA==",
      "dev": true
    },
    "bn.js": {
      "version": "4.11.8",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.8.tgz",
      "integrity": "sha512-ItfYfPLkWHUjckQCk8xC+LwxgK8NYcXywGigJgSwOP8Y2iyWT4f2vsZnoOXTTbo+o5yXmIUJ4gn5538SO5S3gA==",
      "dev": true
    },
    "body-parser": {
      "version": "1.18.2",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.18.2.tgz",
      "integrity": "sha1-h2eKGdhLR9hZuDGZvVm84iKxBFQ=",
      "requires": {
        "bytes": "3.0.0",
        "content-type": "1.0.4",
        "debug": "2.6.9",
        "depd": "1.1.2",
        "http-errors": "1.6.3",
        "iconv-lite": "0.4.19",
        "on-finished": "2.3.0",
        "qs": "6.5.1",
        "raw-body": "2.3.2",
        "type-is": "1.6.16"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "boxen": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/boxen/-/boxen-1.3.0.tgz",
      "integrity": "sha512-TNPjfTr432qx7yOjQyaXm3dSR0MH9vXp7eT1BFSl/C51g+EFnOR9hTg1IreahGBmDNCehscshe45f+C1TBZbLw==",
      "dev": true,
      "requires": {
        "ansi-align": "2.0.0",
        "camelcase": "4.1.0",
        "chalk": "2.4.1",
        "cli-boxes": "1.0.0",
        "string-width": "2.1.1",
        "term-size": "1.2.0",
        "widest-line": "2.0.0"
      },
      "dependencies": {
        "camelcase": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz",
          "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0=",
          "dev": true
        }
      }
    },
    "brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "requires": {
        "balanced-match": "1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "braces": {
      "version": "1.8.5",
      "resolved": "https://registry.npmjs.org/braces/-/braces-1.8.5.tgz",
      "integrity": "sha1-uneWLhLf+WnWt2cR6RS3N4V79qc=",
      "dev": true,
      "requires": {
        "expand-range": "1.8.2",
        "preserve": "0.2.0",
        "repeat-element": "1.1.2"
      }
    },
    "brorand": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/brorand/-/brorand-1.1.0.tgz",
      "integrity": "sha1-EsJe/kCkXjwyPrhnWgoM5XsiNx8=",
      "dev": true
    },
    "browser-resolve": {
      "version": "1.11.2",
      "resolved": "https://registry.npmjs.org/browser-resolve/-/browser-resolve-1.11.2.tgz",
      "integrity": "sha1-j/CbCixCFxihBRwmCzLkj0QpOM4=",
      "dev": true,
      "requires": {
        "resolve": "1.1.7"
      }
    },
    "browserify-aes": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/browserify-aes/-/browserify-aes-1.2.0.tgz",
      "integrity": "sha512-+7CHXqGuspUn/Sl5aO7Ea0xWGAtETPXNSAjHo48JfLdPWcMng33Xe4znFvQweqc/uzk5zSOI3H52CYnjCfb5hA==",
      "dev": true,
      "requires": {
        "buffer-xor": "1.0.3",
        "cipher-base": "1.0.4",
        "create-hash": "1.2.0",
        "evp_bytestokey": "1.0.3",
        "inherits": "2.0.3",
        "safe-buffer": "5.1.2"
      }
    },
    "browserify-cipher": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/browserify-cipher/-/browserify-cipher-1.0.1.tgz",
      "integrity": "sha512-sPhkz0ARKbf4rRQt2hTpAHqn47X3llLkUGn+xEJzLjwY8LRs2p0v7ljvI5EyoRO/mexrNunNECisZs+gw2zz1w==",
      "dev": true,
      "requires": {
        "browserify-aes": "1.2.0",
        "browserify-des": "1.0.1",
        "evp_bytestokey": "1.0.3"
      }
    },
    "browserify-des": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/browserify-des/-/browserify-des-1.0.1.tgz",
      "integrity": "sha512-zy0Cobe3hhgpiOM32Tj7KQ3Vl91m0njwsjzZQK1L+JDf11dzP9qIvjreVinsvXrgfjhStXwUWAEpB9D7Gwmayw==",
      "dev": true,
      "requires": {
        "cipher-base": "1.0.4",
        "des.js": "1.0.0",
        "inherits": "2.0.3"
      }
    },
    "browserify-rsa": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/browserify-rsa/-/browserify-rsa-4.0.1.tgz",
      "integrity": "sha1-IeCr+vbyApzy+vsTNWenAdQTVSQ=",
      "dev": true,
      "requires": {
        "bn.js": "4.11.8",
        "randombytes": "2.0.6"
      }
    },
    "browserify-sign": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/browserify-sign/-/browserify-sign-4.0.4.tgz",
      "integrity": "sha1-qk62jl17ZYuqa/alfmMMvXqT0pg=",
      "dev": true,
      "requires": {
        "bn.js": "4.11.8",
        "browserify-rsa": "4.0.1",
        "create-hash": "1.2.0",
        "create-hmac": "1.1.7",
        "elliptic": "6.4.0",
        "inherits": "2.0.3",
        "parse-asn1": "5.1.1"
      }
    },
    "browserify-zlib": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/browserify-zlib/-/browserify-zlib-0.2.0.tgz",
      "integrity": "sha512-Z942RysHXmJrhqk88FmKBVq/v5tqmSkDz7p54G/MGyjMnCFFnC79XWNbg+Vta8W6Wb2qtSZTSxIGkJrRpCFEiA==",
      "dev": true,
      "requires": {
        "pako": "1.0.6"
      }
    },
    "bser": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/bser/-/bser-2.0.0.tgz",
      "integrity": "sha1-mseNPtXZFYBP2HrLFYvHlxR6Fxk=",
      "dev": true,
      "requires": {
        "node-int64": "0.4.0"
      }
    },
    "buffer": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-4.9.1.tgz",
      "integrity": "sha1-bRu2AbB6TvztlwlBMgkwJ8lbwpg=",
      "dev": true,
      "requires": {
        "base64-js": "1.3.0",
        "ieee754": "1.1.11",
        "isarray": "1.0.0"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        }
      }
    },
    "buffer-from": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.0.tgz",
      "integrity": "sha512-c5mRlguI/Pe2dSZmpER62rSCu0ryKmWddzRYsuXc50U2/g8jMOulc31VZMa4mYx31U5xsmSOpDCgH88Vl9cDGQ=="
    },
    "buffer-xor": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/buffer-xor/-/buffer-xor-1.0.3.tgz",
      "integrity": "sha1-JuYe0UIvtw3ULm42cp7VHYVf6Nk=",
      "dev": true
    },
    "builtin-modules": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/builtin-modules/-/builtin-modules-1.1.1.tgz",
      "integrity": "sha1-Jw8HbFpywC9bZaR9+Uxf46J4iS8=",
      "dev": true
    },
    "builtin-status-codes": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/builtin-status-codes/-/builtin-status-codes-3.0.0.tgz",
      "integrity": "sha1-hZgoeOIbmOHGZCXgPQF0eI9Wnug=",
      "dev": true
    },
    "busboy": {
      "version": "0.2.14",
      "resolved": "https://registry.npmjs.org/busboy/-/busboy-0.2.14.tgz",
      "integrity": "sha1-bCpiLvz0fFe7vh4qnDetNseSVFM=",
      "requires": {
        "dicer": "0.2.5",
        "readable-stream": "1.1.14"
      }
    },
    "bytes": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
      "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg="
    },
    "cacache": {
      "version": "10.0.4",
      "resolved": "https://registry.npmjs.org/cacache/-/cacache-10.0.4.tgz",
      "integrity": "sha512-Dph0MzuH+rTQzGPNT9fAnrPmMmjKfST6trxJeK7NQuHRaVw24VzPRWTmg9MpcwOVQZO0E1FBICUlFeNaKPIfHA==",
      "dev": true,
      "requires": {
        "bluebird": "3.5.1",
        "chownr": "1.0.1",
        "glob": "7.1.2",
        "graceful-fs": "4.1.11",
        "lru-cache": "4.1.3",
        "mississippi": "2.0.0",
        "mkdirp": "0.5.1",
        "move-concurrently": "1.0.1",
        "promise-inflight": "1.0.1",
        "rimraf": "2.6.2",
        "ssri": "5.3.0",
        "unique-filename": "1.1.0",
        "y18n": "4.0.0"
      },
      "dependencies": {
        "y18n": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.0.tgz",
          "integrity": "sha512-r9S/ZyXu/Xu9q1tYlpsLIsa3EeLXXk0VwlxqTcFRfg9EhMW+17kbt9G0NrgCmhGb5vT2hyhJZLfDGx+7+5Uj/w==",
          "dev": true
        }
      }
    },
    "cache-base": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
      "dev": true,
      "requires": {
        "collection-visit": "1.0.0",
        "component-emitter": "1.2.1",
        "get-value": "2.0.6",
        "has-value": "1.0.0",
        "isobject": "3.0.1",
        "set-value": "2.0.0",
        "to-object-path": "0.3.0",
        "union-value": "1.0.0",
        "unset-value": "1.0.0"
      },
      "dependencies": {
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "cacheable-request": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-2.1.4.tgz",
      "integrity": "sha1-DYCIAbY0KtM8kd+dC0TcCbkeXD0=",
      "dev": true,
      "requires": {
        "clone-response": "1.0.2",
        "get-stream": "3.0.0",
        "http-cache-semantics": "3.8.1",
        "keyv": "3.0.0",
        "lowercase-keys": "1.0.0",
        "normalize-url": "2.0.1",
        "responselike": "1.0.2"
      },
      "dependencies": {
        "lowercase-keys": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.0.tgz",
          "integrity": "sha1-TjNms55/VFfjXxMkvfb4jQv8cwY=",
          "dev": true
        }
      }
    },
    "call-me-maybe": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/call-me-maybe/-/call-me-maybe-1.0.1.tgz",
      "integrity": "sha1-JtII6onje1y95gJQoV8DHBak1ms=",
      "dev": true
    },
    "callsite": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/callsite/-/callsite-1.0.0.tgz",
      "integrity": "sha1-KAOY5dZkvXQDi28JBRU+borxvCA="
    },
    "callsites": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
      "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA=",
      "dev": true
    },
    "camelcase": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-1.2.1.tgz",
      "integrity": "sha1-m7UwTS4LVmmLLHWLCKPqqdqlijk=",
      "dev": true,
      "optional": true
    },
    "capture-exit": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/capture-exit/-/capture-exit-1.2.0.tgz",
      "integrity": "sha1-HF/MSJ/QqwDU8ax64QcuMXP7q28=",
      "dev": true,
      "requires": {
        "rsvp": "3.6.2"
      }
    },
    "capture-stack-trace": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/capture-stack-trace/-/capture-stack-trace-1.0.0.tgz",
      "integrity": "sha1-Sm+gc5nCa7pH8LJJa00PtAjFVQ0=",
      "dev": true
    },
    "caseless": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
      "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
      "dev": true
    },
    "center-align": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/center-align/-/center-align-0.1.3.tgz",
      "integrity": "sha1-qg0yYptu6XIgBBHL1EYckHvCt60=",
      "dev": true,
      "optional": true,
      "requires": {
        "align-text": "0.1.4",
        "lazy-cache": "1.0.4"
      }
    },
    "chalk": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.1.tgz",
      "integrity": "sha512-ObN6h1v2fTJSmUXoS3nMQ92LbDK9be4TV+6G+omQlGJFdcUX5heKi1LZ1YnRMIgwTLEj3E24bT6tYni50rlCfQ==",
      "dev": true,
      "requires": {
        "ansi-styles": "3.2.1",
        "escape-string-regexp": "1.0.5",
        "supports-color": "5.4.0"
      }
    },
    "chardet": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.4.2.tgz",
      "integrity": "sha1-tUc7M9yXxCTl2Y3IfVXU2KKci/I=",
      "dev": true
    },
    "chokidar": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.0.3.tgz",
      "integrity": "sha512-zW8iXYZtXMx4kux/nuZVXjkLP+CyIK5Al5FHnj1OgTKGZfp4Oy6/ymtMSKFv3GD8DviEmUPmJg9eFdJ/JzudMg==",
      "dev": true,
      "requires": {
        "anymatch": "2.0.0",
        "async-each": "1.0.1",
        "braces": "2.3.2",
        "fsevents": "1.2.4",
        "glob-parent": "3.1.0",
        "inherits": "2.0.3",
        "is-binary-path": "1.0.1",
        "is-glob": "4.0.0",
        "normalize-path": "2.1.1",
        "path-is-absolute": "1.0.1",
        "readdirp": "2.1.0",
        "upath": "1.1.0"
      },
      "dependencies": {
        "array-unique": {
          "version": "0.3.2",
          "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
          "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
          "dev": true
        },
        "braces": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
          "dev": true,
          "requires": {
            "arr-flatten": "1.1.0",
            "array-unique": "0.3.2",
            "extend-shallow": "2.0.1",
            "fill-range": "4.0.0",
            "isobject": "3.0.1",
            "repeat-element": "1.1.2",
            "snapdragon": "0.8.2",
            "snapdragon-node": "2.1.1",
            "split-string": "3.1.0",
            "to-regex": "3.0.2"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "0.1.1"
          }
        },
        "fill-range": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
          "dev": true,
          "requires": {
            "extend-shallow": "2.0.1",
            "is-number": "3.0.0",
            "repeat-string": "1.6.1",
            "to-regex-range": "2.1.1"
          }
        },
        "glob-parent": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
          "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
          "dev": true,
          "requires": {
            "is-glob": "3.1.0",
            "path-dirname": "1.0.2"
          },
          "dependencies": {
            "is-glob": {
              "version": "3.1.0",
              "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
              "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
              "dev": true,
              "requires": {
                "is-extglob": "2.1.1"
              }
            }
          }
        },
        "is-extglob": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
          "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
          "dev": true
        },
        "is-glob": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.0.tgz",
          "integrity": "sha1-lSHHaEXMJhCoUgPd8ICpWML/q8A=",
          "dev": true,
          "requires": {
            "is-extglob": "2.1.1"
          }
        },
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "dev": true,
          "requires": {
            "kind-of": "3.2.2"
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "chownr": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.0.1.tgz",
      "integrity": "sha1-4qdQQqlVGQi+vSW4Uj1fl2nXkYE=",
      "dev": true
    },
    "chrome-trace-event": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-0.1.3.tgz",
      "integrity": "sha512-sjndyZHrrWiu4RY7AkHgjn80GfAM2ZSzUkZLV/Js59Ldmh6JDThf0SUmOHU53rFu2rVxxfCzJ30Ukcfch3Gb/A==",
      "dev": true
    },
    "ci-info": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-1.1.3.tgz",
      "integrity": "sha512-SK/846h/Rcy8q9Z9CAwGBLfCJ6EkjJWdpelWDufQpqVDYq2Wnnv8zlSO6AMQap02jvhVruKKpEtQOufo3pFhLg==",
      "dev": true
    },
    "cipher-base": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/cipher-base/-/cipher-base-1.0.4.tgz",
      "integrity": "sha512-Kkht5ye6ZGmwv40uUDZztayT2ThLQGfnj/T71N/XzeZeo3nf8foyW7zGTsPYkEya3m5f3cAypH+qe7YOrM1U2Q==",
      "dev": true,
      "requires": {
        "inherits": "2.0.3",
        "safe-buffer": "5.1.2"
      }
    },
    "class-utils": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
      "dev": true,
      "requires": {
        "arr-union": "3.1.0",
        "define-property": "0.2.5",
        "isobject": "3.0.1",
        "static-extend": "0.1.2"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "0.1.6"
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "cli-boxes": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-1.0.0.tgz",
      "integrity": "sha1-T6kXw+WclKAEzWH47lCdplFocUM=",
      "dev": true
    },
    "cli-color": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/cli-color/-/cli-color-1.2.0.tgz",
      "integrity": "sha1-OlrnT9drYmevZm5p4q+70B3vNNE=",
      "requires": {
        "ansi-regex": "2.1.1",
        "d": "1.0.0",
        "es5-ext": "0.10.45",
        "es6-iterator": "2.0.3",
        "memoizee": "0.4.12",
        "timers-ext": "0.1.5"
      }
    },
    "cli-cursor": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
      "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
      "dev": true,
      "requires": {
        "restore-cursor": "2.0.0"
      }
    },
    "cli-spinners": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-0.1.2.tgz",
      "integrity": "sha1-u3ZNiOGF+54eaiofGXcjGPYF4xw=",
      "dev": true
    },
    "cli-table": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/cli-table/-/cli-table-0.3.1.tgz",
      "integrity": "sha1-9TsFJmqLGguTSz0IIebi3FkUriM=",
      "dev": true,
      "requires": {
        "colors": "1.0.3"
      },
      "dependencies": {
        "colors": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/colors/-/colors-1.0.3.tgz",
          "integrity": "sha1-BDP0TYCWgP3rYO0mDxsMJi6CpAs=",
          "dev": true
        }
      }
    },
    "cli-truncate": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/cli-truncate/-/cli-truncate-0.2.1.tgz",
      "integrity": "sha1-nxXPuwcFAFNpIWxiasfQWrkN1XQ=",
      "dev": true,
      "requires": {
        "slice-ansi": "0.0.4",
        "string-width": "1.0.2"
      },
      "dependencies": {
        "string-width": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
          "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
          "dev": true,
          "requires": {
            "code-point-at": "1.1.0",
            "is-fullwidth-code-point": "1.0.0",
            "strip-ansi": "3.0.1"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "2.1.1"
          }
        }
      }
    },
    "cli-width": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-2.2.0.tgz",
      "integrity": "sha1-/xnt6Kml5XkyQUewwR8PvLq+1jk=",
      "dev": true
    },
    "cliui": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-2.1.0.tgz",
      "integrity": "sha1-S0dXYP+AJkx2LDoXGQMukcf+oNE=",
      "dev": true,
      "optional": true,
      "requires": {
        "center-align": "0.1.3",
        "right-align": "0.1.3",
        "wordwrap": "0.0.2"
      },
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2",
          "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.2.tgz",
          "integrity": "sha1-t5Zpu0LstAn4PVg8rVLKF+qhZD8=",
          "dev": true,
          "optional": true
        }
      }
    },
    "clone": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
      "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4=",
      "dev": true
    },
    "clone-buffer": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/clone-buffer/-/clone-buffer-1.0.0.tgz",
      "integrity": "sha1-4+JbIHrE5wGvch4staFnksrD3Fg=",
      "dev": true
    },
    "clone-response": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.2.tgz",
      "integrity": "sha1-0dyXOSAxTfZ/vrlCI7TuNQI56Ws=",
      "dev": true,
      "requires": {
        "mimic-response": "1.0.0"
      }
    },
    "clone-stats": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/clone-stats/-/clone-stats-0.0.1.tgz",
      "integrity": "sha1-uI+UqCzzi4eR1YBG6kAprYjKmdE=",
      "dev": true
    },
    "cloneable-readable": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/cloneable-readable/-/cloneable-readable-1.1.2.tgz",
      "integrity": "sha512-Bq6+4t+lbM8vhTs/Bef5c5AdEMtapp/iFb6+s4/Hh9MVTt8OLKH7ZOOZSCT+Ys7hsHvqv0GuMPJ1lnQJVHvxpg==",
      "dev": true,
      "requires": {
        "inherits": "2.0.3",
        "process-nextick-args": "2.0.0",
        "readable-stream": "2.3.6"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "dev": true,
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.2",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "dev": true,
          "requires": {
            "safe-buffer": "5.1.2"
          }
        }
      }
    },
    "co": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
      "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ=",
      "dev": true
    },
    "code-point-at": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
      "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c=",
      "dev": true
    },
    "collection-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
      "dev": true,
      "requires": {
        "map-visit": "1.0.0",
        "object-visit": "1.0.1"
      }
    },
    "color-convert": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.1.tgz",
      "integrity": "sha512-mjGanIiwQJskCC18rPR6OmrZ6fm2Lc7PeGFYwCmy5J34wC6F1PzdGL6xeMfmgicfYcNLGuVFA3WzXtIDCQSZxQ==",
      "dev": true,
      "requires": {
        "color-name": "1.1.3"
      }
    },
    "color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "colors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/colors/-/colors-1.3.0.tgz",
      "integrity": "sha512-EDpX3a7wHMWFA7PUHWPHNWqOxIIRSJetuwl0AS5Oi/5FMV8kWm69RTlgm00GKjBO1xFHMtBbL49yRtMMdticBw==",
      "dev": true
    },
    "combined-stream": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.6.tgz",
      "integrity": "sha1-cj599ugBrFYTETp+RFqbactjKBg=",
      "dev": true,
      "requires": {
        "delayed-stream": "1.0.0"
      }
    },
    "commander": {
      "version": "2.13.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.13.0.tgz",
      "integrity": "sha512-MVuS359B+YzaWqjCL/c+22gfryv+mCBPHAv3zyVI2GN8EY6IRP8VwtasXn8jyyhvvq84R4ImN1OKRtcbIasjYA==",
      "dev": true
    },
    "commondir": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
      "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs=",
      "dev": true
    },
    "compare-versions": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/compare-versions/-/compare-versions-3.2.1.tgz",
      "integrity": "sha512-2y2nHcopMG/NAyk6vWXlLs86XeM9sik4jmx1tKIgzMi9/RQ2eo758RGpxQO3ErihHmg0RlQITPqgz73y6s7quA==",
      "dev": true
    },
    "component-bind": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/component-bind/-/component-bind-1.0.0.tgz",
      "integrity": "sha1-AMYIq33Nk4l8AAllGx06jh5zu9E="
    },
    "component-emitter": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.2.1.tgz",
      "integrity": "sha1-E3kY1teCg/ffemt8WmPhQOaUJeY="
    },
    "component-inherit": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/component-inherit/-/component-inherit-0.0.3.tgz",
      "integrity": "sha1-ZF/ErfWLcrZJ1crmUTVhnbJv8UM="
    },
    "concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
      "dev": true
    },
    "concat-stream": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
      "requires": {
        "buffer-from": "1.1.0",
        "inherits": "2.0.3",
        "readable-stream": "2.3.6",
        "typedarray": "0.0.6"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.2",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "requires": {
            "safe-buffer": "5.1.2"
          }
        }
      }
    },
    "configstore": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/configstore/-/configstore-3.1.2.tgz",
      "integrity": "sha512-vtv5HtGjcYUgFrXc6Kx747B83MRRVS5R1VTEQoXvuP+kMI+if6uywV0nDGoiydJRy4yk7h9od5Og0kxx4zUXmw==",
      "dev": true,
      "requires": {
        "dot-prop": "4.2.0",
        "graceful-fs": "4.1.11",
        "make-dir": "1.3.0",
        "unique-string": "1.0.0",
        "write-file-atomic": "2.3.0",
        "xdg-basedir": "3.0.0"
      }
    },
    "console-browserify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/console-browserify/-/console-browserify-1.1.0.tgz",
      "integrity": "sha1-8CQcRXMKn8YyOyBtvzjtx0HQuxA=",
      "dev": true,
      "requires": {
        "date-now": "0.1.4"
      }
    },
    "constants-browserify": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/constants-browserify/-/constants-browserify-1.0.0.tgz",
      "integrity": "sha1-wguW2MYXdIqvHBYCF2DNJ/y4y3U=",
      "dev": true
    },
    "content-disposition": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.2.tgz",
      "integrity": "sha1-DPaLud318r55YcOoUXjLhdunjLQ="
    },
    "content-type": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
      "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
    },
    "content-type-parser": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/content-type-parser/-/content-type-parser-1.0.2.tgz",
      "integrity": "sha512-lM4l4CnMEwOLHAHr/P6MEZwZFPJFtAAKgL6pogbXmVZggIqXhdB6RbBtPOTsw2FcXwYhehRGERJmRrjOiIB8pQ==",
      "dev": true
    },
    "convert-source-map": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.5.1.tgz",
      "integrity": "sha1-uCeAl7m8IpNl3lxiz1/K7YtVmeU=",
      "dev": true
    },
    "cookie": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.3.1.tgz",
      "integrity": "sha1-5+Ch+e9DtMi6klxcWpboBtFoc7s="
    },
    "cookie-signature": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
      "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
    },
    "cookiejar": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/cookiejar/-/cookiejar-2.1.2.tgz",
      "integrity": "sha512-Mw+adcfzPxcPeI+0WlvRrr/3lGVO0bD75SxX6811cxSh1Wbxx7xZBGK1eVtDf6si8rg2lhnUjsVLMFMfbRIuwA==",
      "dev": true
    },
    "copy-concurrently": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/copy-concurrently/-/copy-concurrently-1.0.5.tgz",
      "integrity": "sha512-f2domd9fsVDFtaFcbaRZuYXwtdmnzqbADSwhSWYxYB/Q8zsdUUFMXVRwXGDMWmbEzAn1kdRrtI1T/KTFOL4X2A==",
      "dev": true,
      "requires": {
        "aproba": "1.2.0",
        "fs-write-stream-atomic": "1.0.10",
        "iferr": "0.1.5",
        "mkdirp": "0.5.1",
        "rimraf": "2.6.2",
        "run-queue": "1.0.3"
      }
    },
    "copy-descriptor": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
      "dev": true
    },
    "core-js": {
      "version": "2.5.7",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.5.7.tgz",
      "integrity": "sha512-RszJCAxg/PP6uzXVXL6BsxSXx/B05oJAQ2vkJRjyjrEcNVycaqOmNb5OTxZPE3xa5gwZduqza6L9JOCenh/Ecw==",
      "dev": true
    },
    "core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
    },
    "cors": {
      "version": "2.8.4",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.4.tgz",
      "integrity": "sha1-K9OB8usgECAQXNUOpZ2mMJBpRoY=",
      "requires": {
        "object-assign": "4.1.1",
        "vary": "1.1.2"
      },
      "dependencies": {
        "object-assign": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
          "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
        }
      }
    },
    "cpx": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/cpx/-/cpx-1.5.0.tgz",
      "integrity": "sha1-GFvgGFEdhycN7czCkxceN2VauI8=",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "chokidar": "1.7.0",
        "duplexer": "0.1.1",
        "glob": "7.1.2",
        "glob2base": "0.0.12",
        "minimatch": "3.0.4",
        "mkdirp": "0.5.1",
        "resolve": "1.1.7",
        "safe-buffer": "5.1.2",
        "shell-quote": "1.6.1",
        "subarg": "1.0.0"
      },
      "dependencies": {
        "anymatch": {
          "version": "1.3.2",
          "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-1.3.2.tgz",
          "integrity": "sha512-0XNayC8lTHQ2OI8aljNCN3sSx6hsr/1+rlcDAotXJR7C1oZZHCNsfpbKwMjRA3Uqb5tF1Rae2oloTr4xpq+WjA==",
          "dev": true,
          "requires": {
            "micromatch": "2.3.11",
            "normalize-path": "2.1.1"
          }
        },
        "chokidar": {
          "version": "1.7.0",
          "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-1.7.0.tgz",
          "integrity": "sha1-eY5ol3gVHIB2tLNg5e3SjNortGg=",
          "dev": true,
          "requires": {
            "anymatch": "1.3.2",
            "async-each": "1.0.1",
            "fsevents": "1.2.4",
            "glob-parent": "2.0.0",
            "inherits": "2.0.3",
            "is-binary-path": "1.0.1",
            "is-glob": "2.0.1",
            "path-is-absolute": "1.0.1",
            "readdirp": "2.1.0"
          }
        }
      }
    },
    "create-ecdh": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/create-ecdh/-/create-ecdh-4.0.3.tgz",
      "integrity": "sha512-GbEHQPMOswGpKXM9kCWVrremUcBmjteUaQ01T9rkKCPDXfUHX0IoP9LpHYo2NPFampa4e+/pFDc3jQdxrxQLaw==",
      "dev": true,
      "requires": {
        "bn.js": "4.11.8",
        "elliptic": "6.4.0"
      }
    },
    "create-error-class": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/create-error-class/-/create-error-class-3.0.2.tgz",
      "integrity": "sha1-Br56vvlHo/FKMP1hBnHUAbyot7Y=",
      "dev": true,
      "requires": {
        "capture-stack-trace": "1.0.0"
      }
    },
    "create-hash": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/create-hash/-/create-hash-1.2.0.tgz",
      "integrity": "sha512-z00bCGNHDG8mHAkP7CtT1qVu+bFQUPjYq/4Iv3C3kWjTFV10zIjfSoeqXo9Asws8gwSHDGj/hl2u4OGIjapeCg==",
      "dev": true,
      "requires": {
        "cipher-base": "1.0.4",
        "inherits": "2.0.3",
        "md5.js": "1.3.4",
        "ripemd160": "2.0.2",
        "sha.js": "2.4.11"
      }
    },
    "create-hmac": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/create-hmac/-/create-hmac-1.1.7.tgz",
      "integrity": "sha512-MJG9liiZ+ogc4TzUwuvbER1JRdgvUFSB5+VR/g5h82fGaIRWMWddtKBHi7/sVhfjQZ6SehlyhvQYrcYkaUIpLg==",
      "dev": true,
      "requires": {
        "cipher-base": "1.0.4",
        "create-hash": "1.2.0",
        "inherits": "2.0.3",
        "ripemd160": "2.0.2",
        "safe-buffer": "5.1.2",
        "sha.js": "2.4.11"
      }
    },
    "cross-spawn": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz",
      "integrity": "sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=",
      "dev": true,
      "requires": {
        "lru-cache": "4.1.3",
        "shebang-command": "1.2.0",
        "which": "1.3.1"
      }
    },
    "crypto-browserify": {
      "version": "3.12.0",
      "resolved": "https://registry.npmjs.org/crypto-browserify/-/crypto-browserify-3.12.0.tgz",
      "integrity": "sha512-fz4spIh+znjO2VjL+IdhEpRJ3YN6sMzITSBijk6FK2UvTqruSQW+/cCZTSNsMiZNvUeq0CqurF+dAbyiGOY6Wg==",
      "dev": true,
      "requires": {
        "browserify-cipher": "1.0.1",
        "browserify-sign": "4.0.4",
        "create-ecdh": "4.0.3",
        "create-hash": "1.2.0",
        "create-hmac": "1.1.7",
        "diffie-hellman": "5.0.3",
        "inherits": "2.0.3",
        "pbkdf2": "3.0.16",
        "public-encrypt": "4.0.2",
        "randombytes": "2.0.6",
        "randomfill": "1.0.4"
      }
    },
    "crypto-random-string": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-1.0.0.tgz",
      "integrity": "sha1-ojD2T1aDEOFJgAmUB5DsmVRbyn4=",
      "dev": true
    },
    "cssom": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.2.tgz",
      "integrity": "sha1-uANhcMefB6kP8vFuIihAJ6JDhIs=",
      "dev": true
    },
    "cssstyle": {
      "version": "0.2.37",
      "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-0.2.37.tgz",
      "integrity": "sha1-VBCXI0yyUTyDzu06zdwn/yeYfVQ=",
      "dev": true,
      "requires": {
        "cssom": "0.3.2"
      }
    },
    "cyclist": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/cyclist/-/cyclist-0.2.2.tgz",
      "integrity": "sha1-GzN5LhHpFKL9bW7WRHRkRE5fpkA=",
      "dev": true
    },
    "d": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/d/-/d-1.0.0.tgz",
      "integrity": "sha1-dUu1v+VUUdpppYuU1F9MWwRi1Y8=",
      "requires": {
        "es5-ext": "0.10.45"
      }
    },
    "dargs": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/dargs/-/dargs-5.1.0.tgz",
      "integrity": "sha1-7H6lDHhWTNNsnV7Bj2Yyn63ieCk=",
      "dev": true
    },
    "dashdash": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
      "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
      "dev": true,
      "requires": {
        "assert-plus": "1.0.0"
      }
    },
    "date-fns": {
      "version": "1.29.0",
      "resolved": "https://registry.npmjs.org/date-fns/-/date-fns-1.29.0.tgz",
      "integrity": "sha512-lbTXWZ6M20cWH8N9S6afb0SBm6tMk+uUg6z3MqHPKE9atmsY3kJkTm8vKe93izJ2B2+q5MV990sM2CHgtAZaOw==",
      "dev": true
    },
    "date-now": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/date-now/-/date-now-0.1.4.tgz",
      "integrity": "sha1-6vQ5/U1ISK105cx9vvIAZyueNFs=",
      "dev": true
    },
    "dateformat": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/dateformat/-/dateformat-3.0.3.tgz",
      "integrity": "sha512-jyCETtSl3VMZMWeRo7iY1FL19ges1t55hMo5yaam4Jrsm5EPL89UQkoQRyiI+Yf4k8r2ZpdngkV8hr1lIdjb3Q==",
      "dev": true
    },
    "debug": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
      "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
      "requires": {
        "ms": "2.0.0"
      }
    },
    "decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
      "dev": true
    },
    "decode-uri-component": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
      "dev": true
    },
    "decompress-response": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz",
      "integrity": "sha1-gKTdMjdIOEv6JICDYirt7Jgq3/M=",
      "dev": true,
      "requires": {
        "mimic-response": "1.0.0"
      }
    },
    "deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
      "dev": true
    },
    "deep-is": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
      "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
      "dev": true
    },
    "deepmerge": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-2.1.1.tgz",
      "integrity": "sha512-urQxA1smbLZ2cBbXbaYObM1dJ82aJ2H57A1C/Kklfh/ZN1bgH4G/n5KWhdNfOK11W98gqZfyYj7W4frJJRwA2w==",
      "dev": true
    },
    "default-require-extensions": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/default-require-extensions/-/default-require-extensions-1.0.0.tgz",
      "integrity": "sha1-836hXT4T/9m0N9M+GnW1+5eHTLg=",
      "dev": true,
      "requires": {
        "strip-bom": "2.0.0"
      }
    },
    "define-property": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
      "dev": true,
      "requires": {
        "is-descriptor": "1.0.2",
        "isobject": "3.0.1"
      },
      "dependencies": {
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "1.0.0",
            "is-data-descriptor": "1.0.0",
            "kind-of": "6.0.2"
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
          "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
          "dev": true
        }
      }
    },
    "delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
      "dev": true
    },
    "depd": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
    },
    "deprecate": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/deprecate/-/deprecate-1.0.0.tgz",
      "integrity": "sha1-ZhSQ7SQokWpsiIPYg05WRvTkpKg="
    },
    "des.js": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/des.js/-/des.js-1.0.0.tgz",
      "integrity": "sha1-wHTS4qpqipoH29YfmhXCzYPsjsw=",
      "dev": true,
      "requires": {
        "inherits": "2.0.3",
        "minimalistic-assert": "1.0.1"
      }
    },
    "destroy": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
    },
    "detect-conflict": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/detect-conflict/-/detect-conflict-1.0.1.tgz",
      "integrity": "sha1-CIZXpmqWHAUBnbfEIwiDsca0F24=",
      "dev": true
    },
    "detect-indent": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/detect-indent/-/detect-indent-4.0.0.tgz",
      "integrity": "sha1-920GQ1LN9Docts5hnE7jqUdd4gg=",
      "dev": true,
      "requires": {
        "repeating": "2.0.1"
      }
    },
    "dicer": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/dicer/-/dicer-0.2.5.tgz",
      "integrity": "sha1-WZbAhrszIYyBLAkL3cCc0S+stw8=",
      "requires": {
        "readable-stream": "1.1.14",
        "streamsearch": "0.1.2"
      }
    },
    "diff": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/diff/-/diff-3.5.0.tgz",
      "integrity": "sha512-A46qtFgd+g7pDZinpnwiRJtxbC1hpgf0uzP3iG89scHk0AUC7A1TGxf5OiiOUv/JMZR8GOt8hL900hV0bOy5xA==",
      "dev": true
    },
    "diffie-hellman": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/diffie-hellman/-/diffie-hellman-5.0.3.tgz",
      "integrity": "sha512-kqag/Nl+f3GwyK25fhUMYj81BUOrZ9IuJsjIcDE5icNM9FJHAVm3VcUDxdLPoQtTuUylWm6ZIknYJwwaPxsUzg==",
      "dev": true,
      "requires": {
        "bn.js": "4.11.8",
        "miller-rabin": "4.0.1",
        "randombytes": "2.0.6"
      }
    },
    "dir-glob": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-2.0.0.tgz",
      "integrity": "sha512-37qirFDz8cA5fimp9feo43fSuRo2gHwaIn6dXL8Ber1dGwUosDrGZeCCXq57WnIqE4aQ+u3eQZzsk1yOzhdwag==",
      "dev": true,
      "requires": {
        "arrify": "1.0.1",
        "path-type": "3.0.0"
      },
      "dependencies": {
        "path-type": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
          "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
          "dev": true,
          "requires": {
            "pify": "3.0.0"
          }
        }
      }
    },
    "domain-browser": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/domain-browser/-/domain-browser-1.2.0.tgz",
      "integrity": "sha512-jnjyiM6eRyZl2H+W8Q/zLMA481hzi0eszAaBUzIVnmYVDBbnLxVNnfu1HgEBvCbL+71FrxMl3E6lpKH7Ge3OXA==",
      "dev": true
    },
    "dot-prop": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-4.2.0.tgz",
      "integrity": "sha512-tUMXrxlExSW6U2EXiiKGSBVdYgtV8qlHL+C10TsW4PURY/ic+eaysnSkwB4kA/mBlCyy/IKDJ+Lc3wbWeaXtuQ==",
      "dev": true,
      "requires": {
        "is-obj": "1.0.1"
      }
    },
    "duplexer": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/duplexer/-/duplexer-0.1.1.tgz",
      "integrity": "sha1-rOb/gIwc5mtX0ev5eXessCM0z8E=",
      "dev": true
    },
    "duplexer3": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
      "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI=",
      "dev": true
    },
    "duplexify": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.6.0.tgz",
      "integrity": "sha512-fO3Di4tBKJpYTFHAxTU00BcfWMY9w24r/x21a6rZRbsD/ToUgGxsMbiGRmB7uVAXeGKXD9MwiLZa5E97EVgIRQ==",
      "dev": true,
      "requires": {
        "end-of-stream": "1.4.1",
        "inherits": "2.0.3",
        "readable-stream": "2.3.6",
        "stream-shift": "1.0.0"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "dev": true,
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.2",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "dev": true,
          "requires": {
            "safe-buffer": "5.1.2"
          }
        }
      }
    },
    "ecc-jsbn": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.1.tgz",
      "integrity": "sha1-D8c6ntXw1Tw4GTOYUj735UN3dQU=",
      "dev": true,
      "optional": true,
      "requires": {
        "jsbn": "0.1.1"
      }
    },
    "editions": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/editions/-/editions-1.3.4.tgz",
      "integrity": "sha512-gzao+mxnYDzIysXKMQi/+M1mjy/rjestjg6OPoYTtI+3Izp23oiGZitsl9lPDPiTGXbcSIk1iJWhliSaglxnUg==",
      "dev": true
    },
    "ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
    },
    "ejs": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/ejs/-/ejs-2.6.1.tgz",
      "integrity": "sha512-0xy4A/twfrRCnkhfk8ErDi5DqdAsAqeGxht4xkCUrsvhhbQNs7E+4jV0CN7+NKIY0aHE72+XvqtBIXzD31ZbXQ==",
      "dev": true
    },
    "elegant-spinner": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/elegant-spinner/-/elegant-spinner-1.0.1.tgz",
      "integrity": "sha1-2wQ1IcldfjA/2PNFvtwzSc+wcp4=",
      "dev": true
    },
    "elliptic": {
      "version": "6.4.0",
      "resolved": "https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz",
      "integrity": "sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=",
      "dev": true,
      "requires": {
        "bn.js": "4.11.8",
        "brorand": "1.1.0",
        "hash.js": "1.1.3",
        "hmac-drbg": "1.0.1",
        "inherits": "2.0.3",
        "minimalistic-assert": "1.0.1",
        "minimalistic-crypto-utils": "1.0.1"
      }
    },
    "emojis-list": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-2.1.0.tgz",
      "integrity": "sha1-TapNnbAPmBmIDHn6RXrlsJof04k=",
      "dev": true
    },
    "encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
    },
    "end-of-stream": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.1.tgz",
      "integrity": "sha512-1MkrZNvWTKCaigbn+W15elq2BB/L22nqrSY5DKlo3X6+vclJm8Bb5djXJBmEX6fS3+zCh/F4VBK5Z2KxJt4s2Q==",
      "dev": true,
      "requires": {
        "once": "1.4.0"
      }
    },
    "engine.io": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/engine.io/-/engine.io-3.2.0.tgz",
      "integrity": "sha512-mRbgmAtQ4GAlKwuPnnAvXXwdPhEx+jkc0OBCLrXuD/CRvwNK3AxRSnqK4FSqmAMRRHryVJP8TopOvmEaA64fKw==",
      "requires": {
        "accepts": "1.3.5",
        "base64id": "1.0.0",
        "cookie": "0.3.1",
        "debug": "3.1.0",
        "engine.io-parser": "2.1.2",
        "ws": "3.3.3"
      }
    },
    "engine.io-client": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/engine.io-client/-/engine.io-client-3.2.1.tgz",
      "integrity": "sha512-y5AbkytWeM4jQr7m/koQLc5AxpRKC1hEVUb/s1FUAWEJq5AzJJ4NLvzuKPuxtDi5Mq755WuDvZ6Iv2rXj4PTzw==",
      "requires": {
        "component-emitter": "1.2.1",
        "component-inherit": "0.0.3",
        "debug": "3.1.0",
        "engine.io-parser": "2.1.2",
        "has-cors": "1.1.0",
        "indexof": "0.0.1",
        "parseqs": "0.0.5",
        "parseuri": "0.0.5",
        "ws": "3.3.3",
        "xmlhttprequest-ssl": "1.5.5",
        "yeast": "0.1.2"
      }
    },
    "engine.io-parser": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/engine.io-parser/-/engine.io-parser-2.1.2.tgz",
      "integrity": "sha512-dInLFzr80RijZ1rGpx1+56/uFoH7/7InhH3kZt+Ms6hT8tNx3NGW/WNSA/f8As1WkOfkuyb3tnRyuXGxusclMw==",
      "requires": {
        "after": "0.8.2",
        "arraybuffer.slice": "0.0.7",
        "base64-arraybuffer": "0.1.5",
        "blob": "0.0.4",
        "has-binary2": "1.0.3"
      }
    },
    "enhanced-resolve": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-4.0.0.tgz",
      "integrity": "sha512-jox/62b2GofV1qTUQTMPEJSDIGycS43evqYzD/KVtEb9OCoki9cnacUPxCrZa7JfPzZSYOCZhu9O9luaMxAX8g==",
      "dev": true,
      "requires": {
        "graceful-fs": "4.1.11",
        "memory-fs": "0.4.1",
        "tapable": "1.0.0"
      }
    },
    "envinfo": {
      "version": "5.10.0",
      "resolved": "https://registry.npmjs.org/envinfo/-/envinfo-5.10.0.tgz",
      "integrity": "sha512-rXbzXWvnQxy+TcqZlARbWVQwgGVVouVJgFZhLVN5htjLxl1thstrP2ZGi0pXC309AbK7gVOPU+ulz/tmpCI7iw==",
      "dev": true
    },
    "errno": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/errno/-/errno-0.1.7.tgz",
      "integrity": "sha512-MfrRBDWzIWifgq6tJj60gkAwtLNb6sQPlcFrSOflcP1aFmmruKQ2wRnze/8V6kgyz7H3FF8Npzv78mZ7XLLflg==",
      "dev": true,
      "requires": {
        "prr": "1.0.1"
      }
    },
    "error": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/error/-/error-7.0.2.tgz",
      "integrity": "sha1-pfdf/02ZJhJt2sDqXcOOaJFTywI=",
      "dev": true,
      "requires": {
        "string-template": "0.2.1",
        "xtend": "4.0.1"
      }
    },
    "error-ex": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.1.tgz",
      "integrity": "sha1-+FWobOYa3E6GIcPNoh56dhLDqNw=",
      "dev": true,
      "requires": {
        "is-arrayish": "0.2.1"
      }
    },
    "es5-ext": {
      "version": "0.10.45",
      "resolved": "https://registry.npmjs.org/es5-ext/-/es5-ext-0.10.45.tgz",
      "integrity": "sha512-FkfM6Vxxfmztilbxxz5UKSD4ICMf5tSpRFtDNtkAhOxZ0EKtX6qwmXNyH/sFyIbX2P/nU5AMiA9jilWsUGJzCQ==",
      "requires": {
        "es6-iterator": "2.0.3",
        "es6-symbol": "3.1.1",
        "next-tick": "1.0.0"
      }
    },
    "es6-iterator": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/es6-iterator/-/es6-iterator-2.0.3.tgz",
      "integrity": "sha1-p96IkUGgWpSwhUQDstCg+/qY87c=",
      "requires": {
        "d": "1.0.0",
        "es5-ext": "0.10.45",
        "es6-symbol": "3.1.1"
      }
    },
    "es6-symbol": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/es6-symbol/-/es6-symbol-3.1.1.tgz",
      "integrity": "sha1-vwDvT9q2uhtG7Le2KbTH7VcVzHc=",
      "requires": {
        "d": "1.0.0",
        "es5-ext": "0.10.45"
      }
    },
    "es6-weak-map": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/es6-weak-map/-/es6-weak-map-2.0.2.tgz",
      "integrity": "sha1-XjqzIlH/0VOKH45f+hNXdy+S2W8=",
      "requires": {
        "d": "1.0.0",
        "es5-ext": "0.10.45",
        "es6-iterator": "2.0.3",
        "es6-symbol": "3.1.1"
      }
    },
    "escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
    },
    "escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true
    },
    "escodegen": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.9.1.tgz",
      "integrity": "sha512-6hTjO1NAWkHnDk3OqQ4YrCuwwmGHL9S3nPlzBOUG/R44rda3wLNrfvQ5fkSGjyhHFKM7ALPKcKGrwvCLe0lC7Q==",
      "dev": true,
      "requires": {
        "esprima": "3.1.3",
        "estraverse": "4.2.0",
        "esutils": "2.0.2",
        "optionator": "0.8.2",
        "source-map": "0.6.1"
      },
      "dependencies": {
        "esprima": {
          "version": "3.1.3",
          "resolved": "https://registry.npmjs.org/esprima/-/esprima-3.1.3.tgz",
          "integrity": "sha1-/cpRzuYTOJXjyI1TXOSdv/YqRjM=",
          "dev": true
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true,
          "optional": true
        }
      }
    },
    "eslint-scope": {
      "version": "3.7.1",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-3.7.1.tgz",
      "integrity": "sha1-PWPD7f2gLgbgGkUq2IyqzHzctug=",
      "dev": true,
      "requires": {
        "esrecurse": "4.2.1",
        "estraverse": "4.2.0"
      }
    },
    "esprima": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.0.tgz",
      "integrity": "sha512-oftTcaMu/EGrEIu904mWteKIv8vMuOgGYo7EhVJJN00R/EED9DCua/xxHRdYnKtcECzVg7xOWhflvJMnqcFZjw==",
      "dev": true
    },
    "esrecurse": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.2.1.tgz",
      "integrity": "sha512-64RBB++fIOAXPw3P9cy89qfMlvZEXZkqqJkjqqXIvzP5ezRZjW+lPWjw35UX/3EhUPFYbg5ER4JYgDw4007/DQ==",
      "dev": true,
      "requires": {
        "estraverse": "4.2.0"
      }
    },
    "estraverse": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.2.0.tgz",
      "integrity": "sha1-De4/7TH81GlhjOc0IJn8GvoL2xM=",
      "dev": true
    },
    "esutils": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.2.tgz",
      "integrity": "sha1-Cr9PHKpbyx96nYrMbepPqqBLrJs=",
      "dev": true
    },
    "etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
    },
    "event-emitter": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/event-emitter/-/event-emitter-0.3.5.tgz",
      "integrity": "sha1-34xp7vFkeSPHFXuc6DhAYQsCzDk=",
      "requires": {
        "d": "1.0.0",
        "es5-ext": "0.10.45"
      }
    },
    "event-stream": {
      "version": "3.3.4",
      "resolved": "http://registry.npmjs.org/event-stream/-/event-stream-3.3.4.tgz",
      "integrity": "sha1-SrTJoPWlTbkzi0w02Gv86PSzVXE=",
      "dev": true,
      "requires": {
        "duplexer": "0.1.1",
        "from": "0.1.7",
        "map-stream": "0.1.0",
        "pause-stream": "0.0.11",
        "split": "0.3.3",
        "stream-combiner": "0.0.4",
        "through": "2.3.8"
      }
    },
    "events": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/events/-/events-1.1.1.tgz",
      "integrity": "sha1-nr23Y1rQmccNzEwqH1AEKI6L2SQ=",
      "dev": true
    },
    "evp_bytestokey": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/evp_bytestokey/-/evp_bytestokey-1.0.3.tgz",
      "integrity": "sha512-/f2Go4TognH/KvCISP7OUsHn85hT9nUkxxA9BEWxFn+Oj9o8ZNLm/40hdlgSLyuOimsrTKLUMEorQexp/aPQeA==",
      "dev": true,
      "requires": {
        "md5.js": "1.3.4",
        "safe-buffer": "5.1.2"
      }
    },
    "exec-sh": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/exec-sh/-/exec-sh-0.2.1.tgz",
      "integrity": "sha512-aLt95pexaugVtQerpmE51+4QfWrNc304uez7jvj6fWnN8GeEHpttB8F36n8N7uVhUMbH/1enbxQ9HImZ4w/9qg==",
      "dev": true,
      "requires": {
        "merge": "1.2.0"
      }
    },
    "execa": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/execa/-/execa-0.7.0.tgz",
      "integrity": "sha1-lEvs00zEHuMqY6n68nrVpl/Fl3c=",
      "dev": true,
      "requires": {
        "cross-spawn": "5.1.0",
        "get-stream": "3.0.0",
        "is-stream": "1.1.0",
        "npm-run-path": "2.0.2",
        "p-finally": "1.0.0",
        "signal-exit": "3.0.2",
        "strip-eof": "1.0.0"
      }
    },
    "exit-hook": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/exit-hook/-/exit-hook-1.1.1.tgz",
      "integrity": "sha1-8FyiM7SMBdVP/wd2XfhQfpXAL/g=",
      "dev": true
    },
    "expand-brackets": {
      "version": "0.1.5",
      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-0.1.5.tgz",
      "integrity": "sha1-3wcoTjQqgHzXM6xa9yQR5YHRF3s=",
      "dev": true,
      "requires": {
        "is-posix-bracket": "0.1.1"
      }
    },
    "expand-range": {
      "version": "1.8.2",
      "resolved": "https://registry.npmjs.org/expand-range/-/expand-range-1.8.2.tgz",
      "integrity": "sha1-opnv/TNf4nIeuujiV+x5ZE/IUzc=",
      "dev": true,
      "requires": {
        "fill-range": "2.2.4"
      }
    },
    "expand-tilde": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/expand-tilde/-/expand-tilde-2.0.2.tgz",
      "integrity": "sha1-l+gBqgUt8CRU3kawK/YhZCzchQI=",
      "dev": true,
      "requires": {
        "homedir-polyfill": "1.0.1"
      }
    },
    "expect": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/expect/-/expect-21.2.1.tgz",
      "integrity": "sha512-orfQQqFRTX0jH7znRIGi8ZMR8kTNpXklTTz8+HGTpmTKZo3Occ6JNB5FXMb8cRuiiC/GyDqsr30zUa66ACYlYw==",
      "dev": true,
      "requires": {
        "ansi-styles": "3.2.1",
        "jest-diff": "21.2.1",
        "jest-get-type": "21.2.0",
        "jest-matcher-utils": "21.2.1",
        "jest-message-util": "21.2.1",
        "jest-regex-util": "21.2.0"
      }
    },
    "express": {
      "version": "4.16.3",
      "resolved": "https://registry.npmjs.org/express/-/express-4.16.3.tgz",
      "integrity": "sha1-avilAjUNsyRuzEvs9rWjTSL37VM=",
      "requires": {
        "accepts": "1.3.5",
        "array-flatten": "1.1.1",
        "body-parser": "1.18.2",
        "content-disposition": "0.5.2",
        "content-type": "1.0.4",
        "cookie": "0.3.1",
        "cookie-signature": "1.0.6",
        "debug": "2.6.9",
        "depd": "1.1.2",
        "encodeurl": "1.0.2",
        "escape-html": "1.0.3",
        "etag": "1.8.1",
        "finalhandler": "1.1.1",
        "fresh": "0.5.2",
        "merge-descriptors": "1.0.1",
        "methods": "1.1.2",
        "on-finished": "2.3.0",
        "parseurl": "1.3.2",
        "path-to-regexp": "0.1.7",
        "proxy-addr": "2.0.3",
        "qs": "6.5.1",
        "range-parser": "1.2.0",
        "safe-buffer": "5.1.1",
        "send": "0.16.2",
        "serve-static": "1.13.2",
        "setprototypeof": "1.1.0",
        "statuses": "1.4.0",
        "type-is": "1.6.16",
        "utils-merge": "1.0.1",
        "vary": "1.1.2"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "safe-buffer": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.1.tgz",
          "integrity": "sha512-kKvNJn6Mm93gAczWVJg7wH+wGYWNrDHdWvpUmHyEsgCtIwwo3bqPtV4tR5tuPaUhTOo/kvhVwd8XwwOllGYkbg=="
        },
        "statuses": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.4.0.tgz",
          "integrity": "sha512-zhSCtt8v2NDrRlPQpCNtw/heZLtfUDqxBM1udqikb/Hbk52LK4nQSwr10u77iopCW5LsyHpuXS0GnEc48mLeew=="
        }
      }
    },
    "extend": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.1.tgz",
      "integrity": "sha1-p1Xqe8Gt/MWjHOfnYtuq3F5jZEQ=",
      "dev": true
    },
    "extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dev": true,
      "requires": {
        "assign-symbols": "1.0.0",
        "is-extendable": "1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "dev": true,
          "requires": {
            "is-plain-object": "2.0.4"
          }
        }
      }
    },
    "external-editor": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-2.2.0.tgz",
      "integrity": "sha512-bSn6gvGxKt+b7+6TKEv1ZycHleA7aHhRHyAqJyp5pbUFuYYNIzpZnQDk7AsYckyWdEnTeAnay0aCy2aV6iTk9A==",
      "dev": true,
      "requires": {
        "chardet": "0.4.2",
        "iconv-lite": "0.4.19",
        "tmp": "0.0.33"
      }
    },
    "extglob": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/extglob/-/extglob-0.3.2.tgz",
      "integrity": "sha1-Lhj/PS9JqydlzskCPwEdqo2DSaE=",
      "dev": true,
      "requires": {
        "is-extglob": "1.0.0"
      }
    },
    "extsprintf": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
      "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
      "dev": true
    },
    "fast-deep-equal": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-1.1.0.tgz",
      "integrity": "sha1-wFNHeBfIa1HaqFPIHgWbcz0CNhQ=",
      "dev": true
    },
    "fast-glob": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-2.2.2.tgz",
      "integrity": "sha512-TR6zxCKftDQnUAPvkrCWdBgDq/gbqx8A3ApnBrR5rMvpp6+KMJI0Igw7fkWPgeVK0uhRXTXdvO3O+YP0CaUX2g==",
      "dev": true,
      "requires": {
        "@mrmlnc/readdir-enhanced": "2.2.1",
        "@nodelib/fs.stat": "1.1.0",
        "glob-parent": "3.1.0",
        "is-glob": "4.0.0",
        "merge2": "1.2.2",
        "micromatch": "3.1.10"
      },
      "dependencies": {
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
          "dev": true
        },
        "array-unique": {
          "version": "0.3.2",
          "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
          "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
          "dev": true
        },
        "braces": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
          "dev": true,
          "requires": {
            "arr-flatten": "1.1.0",
            "array-unique": "0.3.2",
            "extend-shallow": "2.0.1",
            "fill-range": "4.0.0",
            "isobject": "3.0.1",
            "repeat-element": "1.1.2",
            "snapdragon": "0.8.2",
            "snapdragon-node": "2.1.1",
            "split-string": "3.1.0",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "expand-brackets": {
          "version": "2.1.4",
          "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
          "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
          "dev": true,
          "requires": {
            "debug": "2.6.9",
            "define-property": "0.2.5",
            "extend-shallow": "2.0.1",
            "posix-character-classes": "0.1.1",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "define-property": {
              "version": "0.2.5",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
              "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
              "dev": true,
              "requires": {
                "is-descriptor": "0.1.6"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "3.2.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "1.1.6"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "3.2.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "1.1.6"
                  }
                }
              }
            },
            "is-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
              "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
              "dev": true,
              "requires": {
                "is-accessor-descriptor": "0.1.6",
                "is-data-descriptor": "0.1.4",
                "kind-of": "5.1.0"
              }
            },
            "kind-of": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
              "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
              "dev": true
            }
          }
        },
        "extglob": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
          "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
          "dev": true,
          "requires": {
            "array-unique": "0.3.2",
            "define-property": "1.0.0",
            "expand-brackets": "2.1.4",
            "extend-shallow": "2.0.1",
            "fragment-cache": "0.2.1",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "define-property": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
              "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
              "dev": true,
              "requires": {
                "is-descriptor": "1.0.2"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "fill-range": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
          "dev": true,
          "requires": {
            "extend-shallow": "2.0.1",
            "is-number": "3.0.0",
            "repeat-string": "1.6.1",
            "to-regex-range": "2.1.1"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "glob-parent": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
          "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
          "dev": true,
          "requires": {
            "is-glob": "3.1.0",
            "path-dirname": "1.0.2"
          },
          "dependencies": {
            "is-glob": {
              "version": "3.1.0",
              "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
              "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
              "dev": true,
              "requires": {
                "is-extglob": "2.1.1"
              }
            }
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "1.0.0",
            "is-data-descriptor": "1.0.0",
            "kind-of": "6.0.2"
          }
        },
        "is-extglob": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
          "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
          "dev": true
        },
        "is-glob": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.0.tgz",
          "integrity": "sha1-lSHHaEXMJhCoUgPd8ICpWML/q8A=",
          "dev": true,
          "requires": {
            "is-extglob": "2.1.1"
          }
        },
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "dev": true,
          "requires": {
            "kind-of": "3.2.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "dev": true,
              "requires": {
                "is-buffer": "1.1.6"
              }
            }
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
          "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
          "dev": true
        },
        "micromatch": {
          "version": "3.1.10",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
          "dev": true,
          "requires": {
            "arr-diff": "4.0.0",
            "array-unique": "0.3.2",
            "braces": "2.3.2",
            "define-property": "2.0.2",
            "extend-shallow": "3.0.2",
            "extglob": "2.0.4",
            "fragment-cache": "0.2.1",
            "kind-of": "6.0.2",
            "nanomatch": "1.2.9",
            "object.pick": "1.3.0",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          }
        }
      }
    },
    "fast-json-stable-stringify": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.0.0.tgz",
      "integrity": "sha1-1RQsDK7msRifh9OnYREGT4bIu/I=",
      "dev": true
    },
    "fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
      "dev": true
    },
    "fastify-formbody": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fastify-formbody/-/fastify-formbody-2.0.0.tgz",
      "integrity": "sha512-gdkxctHX4Iptvcto9+FOZ1hXCgbaWI1x4Yc+I8lNa7Q7gBpTl/eEvEOsJG8o/DvcsUc+gnGlsTXxbC4xXgcdSg==",
      "requires": {
        "fastify-plugin": "0.2.2",
        "qs": "6.5.1"
      }
    },
    "fastify-plugin": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/fastify-plugin/-/fastify-plugin-0.2.2.tgz",
      "integrity": "sha512-oRJdjdudgCkQQUARNeh2rkbxFAmj2OhCJSVBNBLUbhS0orF+IMQ4u/bc661N1jh/wDI2J+YKmXmmHSVFQI4e7A==",
      "requires": {
        "semver": "5.5.0"
      }
    },
    "fb-watchman": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.0.tgz",
      "integrity": "sha1-VOmr99+i8mzZsWNsWIwa/AXeXVg=",
      "dev": true,
      "requires": {
        "bser": "2.0.0"
      }
    },
    "figures": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/figures/-/figures-2.0.0.tgz",
      "integrity": "sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=",
      "dev": true,
      "requires": {
        "escape-string-regexp": "1.0.5"
      }
    },
    "filename-regex": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/filename-regex/-/filename-regex-2.0.1.tgz",
      "integrity": "sha1-wcS5vuPglyXdsQa3XB4wH+LxiyY=",
      "dev": true
    },
    "fileset": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/fileset/-/fileset-2.0.3.tgz",
      "integrity": "sha1-jnVIqW08wjJ+5eZ0FocjozO7oqA=",
      "dev": true,
      "requires": {
        "glob": "7.1.2",
        "minimatch": "3.0.4"
      }
    },
    "fill-range": {
      "version": "2.2.4",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-2.2.4.tgz",
      "integrity": "sha512-cnrcCbj01+j2gTG921VZPnHbjmdAf8oQV/iGeV2kZxGSyfYjjTyY79ErsK1WJWMpw6DaApEX72binqJE+/d+5Q==",
      "dev": true,
      "requires": {
        "is-number": "2.1.0",
        "isobject": "2.1.0",
        "randomatic": "3.0.0",
        "repeat-element": "1.1.2",
        "repeat-string": "1.6.1"
      }
    },
    "finalhandler": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.1.tgz",
      "integrity": "sha512-Y1GUDo39ez4aHAw7MysnUD5JzYX+WaIj8I57kO3aEPT1fFRL4sr7mjei97FgnwhAyyzRYmQZaTHb2+9uZ1dPtg==",
      "requires": {
        "debug": "2.6.9",
        "encodeurl": "1.0.2",
        "escape-html": "1.0.3",
        "on-finished": "2.3.0",
        "parseurl": "1.3.2",
        "statuses": "1.4.0",
        "unpipe": "1.0.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "statuses": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.4.0.tgz",
          "integrity": "sha512-zhSCtt8v2NDrRlPQpCNtw/heZLtfUDqxBM1udqikb/Hbk52LK4nQSwr10u77iopCW5LsyHpuXS0GnEc48mLeew=="
        }
      }
    },
    "find-cache-dir": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-1.0.0.tgz",
      "integrity": "sha1-kojj6ePMN0hxfTnq3hfPcfww7m8=",
      "dev": true,
      "requires": {
        "commondir": "1.0.1",
        "make-dir": "1.3.0",
        "pkg-dir": "2.0.0"
      }
    },
    "find-index": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/find-index/-/find-index-0.1.1.tgz",
      "integrity": "sha1-Z101iyyjiS15Whq0cjL4tuLg3eQ=",
      "dev": true
    },
    "find-up": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
      "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
      "dev": true,
      "requires": {
        "locate-path": "2.0.0"
      }
    },
    "first-chunk-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/first-chunk-stream/-/first-chunk-stream-2.0.0.tgz",
      "integrity": "sha1-G97NuOCDwGZLkZRVgVd6Q6nzHXA=",
      "dev": true,
      "requires": {
        "readable-stream": "2.3.6"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "dev": true,
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.2",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "dev": true,
          "requires": {
            "safe-buffer": "5.1.2"
          }
        }
      }
    },
    "flow-parser": {
      "version": "0.73.0",
      "resolved": "https://registry.npmjs.org/flow-parser/-/flow-parser-0.73.0.tgz",
      "integrity": "sha512-9JB+2hrKJ+S1OZ+upIwNTGlaLDRga2iC9KvpqWVFEVNlCxc51pkhNJRmA0PmUcLcEtFAW6IGBmVi70r+j+Qp9A==",
      "dev": true
    },
    "flush-write-stream": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/flush-write-stream/-/flush-write-stream-1.0.3.tgz",
      "integrity": "sha512-calZMC10u0FMUqoiunI2AiGIIUtUIvifNwkHhNupZH4cbNnW1Itkoh/Nf5HFYmDrwWPjrUxpkZT0KhuCq0jmGw==",
      "dev": true,
      "requires": {
        "inherits": "2.0.3",
        "readable-stream": "2.3.6"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "dev": true,
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.2",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "dev": true,
          "requires": {
            "safe-buffer": "5.1.2"
          }
        }
      }
    },
    "follow-redirects": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.5.0.tgz",
      "integrity": "sha512-fdrt472/9qQ6Kgjvb935ig6vJCuofpBUD14f9Vb+SLlm7xIe4Qva5gey8EKtv8lp7ahE1wilg3xL1znpVGtZIA==",
      "requires": {
        "debug": "3.1.0"
      }
    },
    "for-in": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
      "dev": true
    },
    "for-own": {
      "version": "0.1.5",
      "resolved": "https://registry.npmjs.org/for-own/-/for-own-0.1.5.tgz",
      "integrity": "sha1-UmXGgaTylNq78XyVCbZ2OqhFEM4=",
      "dev": true,
      "requires": {
        "for-in": "1.0.2"
      }
    },
    "forever-agent": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
      "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
      "dev": true
    },
    "form-data": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.2.tgz",
      "integrity": "sha1-SXBJi+YEwgwAXU9cI67NIda0kJk=",
      "dev": true,
      "requires": {
        "asynckit": "0.4.0",
        "combined-stream": "1.0.6",
        "mime-types": "2.1.18"
      }
    },
    "formidable": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/formidable/-/formidable-1.2.1.tgz",
      "integrity": "sha512-Fs9VRguL0gqGHkXS5GQiMCr1VhZBxz0JnJs4JmMp/2jL18Fmbzvv7vOFRU+U8TBkHEE/CX1qDXzJplVULgsLeg==",
      "dev": true
    },
    "forwarded": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
      "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ="
    },
    "fragment-cache": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
      "dev": true,
      "requires": {
        "map-cache": "0.2.2"
      }
    },
    "fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
    },
    "from": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/from/-/from-0.1.7.tgz",
      "integrity": "sha1-g8YK/Fi5xWmXAH7Rp2izqzA6RP4=",
      "dev": true
    },
    "from2": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/from2/-/from2-2.3.0.tgz",
      "integrity": "sha1-i/tVAr3kpNNs/e6gB/zKIdfjgq8=",
      "dev": true,
      "requires": {
        "inherits": "2.0.3",
        "readable-stream": "2.3.6"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "dev": true,
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.2",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "dev": true,
          "requires": {
            "safe-buffer": "5.1.2"
          }
        }
      }
    },
    "fs-extra": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-4.0.3.tgz",
      "integrity": "sha512-q6rbdDd1o2mAnQreO7YADIxf/Whx4AHBiRf6d+/cVT8h44ss+lHgxf1FemcqDnQt9X3ct4McHr+JMGlYSsK7Cg==",
      "dev": true,
      "requires": {
        "graceful-fs": "4.1.11",
        "jsonfile": "4.0.0",
        "universalify": "0.1.1"
      }
    },
    "fs-write-stream-atomic": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/fs-write-stream-atomic/-/fs-write-stream-atomic-1.0.10.tgz",
      "integrity": "sha1-tH31NJPvkR33VzHnCp3tAYnbQMk=",
      "dev": true,
      "requires": {
        "graceful-fs": "4.1.11",
        "iferr": "0.1.5",
        "imurmurhash": "0.1.4",
        "readable-stream": "1.1.14"
      }
    },
    "fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
      "dev": true
    },
    "fsevents": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.4.tgz",
      "integrity": "sha512-z8H8/diyk76B7q5wg+Ud0+CqzcAF3mBBI/bA5ne5zrRUUIvNkJY//D3BqyH571KuAC4Nr7Rw7CjWX4r0y9DvNg==",
      "dev": true,
      "optional": true,
      "requires": {
        "nan": "2.10.0",
        "node-pre-gyp": "0.10.0"
      },
      "dependencies": {
        "abbrev": {
          "version": "1.1.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "ansi-regex": {
          "version": "2.1.1",
          "bundled": true,
          "dev": true
        },
        "aproba": {
          "version": "1.2.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "are-we-there-yet": {
          "version": "1.1.4",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "delegates": "1.0.0",
            "readable-stream": "2.3.6"
          }
        },
        "balanced-match": {
          "version": "1.0.0",
          "bundled": true,
          "dev": true
        },
        "brace-expansion": {
          "version": "1.1.11",
          "bundled": true,
          "dev": true,
          "requires": {
            "balanced-match": "1.0.0",
            "concat-map": "0.0.1"
          }
        },
        "chownr": {
          "version": "1.0.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "code-point-at": {
          "version": "1.1.0",
          "bundled": true,
          "dev": true
        },
        "concat-map": {
          "version": "0.0.1",
          "bundled": true,
          "dev": true
        },
        "console-control-strings": {
          "version": "1.1.0",
          "bundled": true,
          "dev": true
        },
        "core-util-is": {
          "version": "1.0.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "debug": {
          "version": "2.6.9",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "deep-extend": {
          "version": "0.5.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "delegates": {
          "version": "1.0.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "detect-libc": {
          "version": "1.0.3",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "fs-minipass": {
          "version": "1.2.5",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "minipass": "2.2.4"
          }
        },
        "fs.realpath": {
          "version": "1.0.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "gauge": {
          "version": "2.7.4",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "aproba": "1.2.0",
            "console-control-strings": "1.1.0",
            "has-unicode": "2.0.1",
            "object-assign": "4.1.1",
            "signal-exit": "3.0.2",
            "string-width": "1.0.2",
            "strip-ansi": "3.0.1",
            "wide-align": "1.1.2"
          }
        },
        "glob": {
          "version": "7.1.2",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "fs.realpath": "1.0.0",
            "inflight": "1.0.6",
            "inherits": "2.0.3",
            "minimatch": "3.0.4",
            "once": "1.4.0",
            "path-is-absolute": "1.0.1"
          }
        },
        "has-unicode": {
          "version": "2.0.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "iconv-lite": {
          "version": "0.4.21",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "safer-buffer": "2.1.2"
          }
        },
        "ignore-walk": {
          "version": "3.0.1",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "minimatch": "3.0.4"
          }
        },
        "inflight": {
          "version": "1.0.6",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "once": "1.4.0",
            "wrappy": "1.0.2"
          }
        },
        "inherits": {
          "version": "2.0.3",
          "bundled": true,
          "dev": true
        },
        "ini": {
          "version": "1.3.5",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "is-fullwidth-code-point": {
          "version": "1.0.0",
          "bundled": true,
          "dev": true,
          "requires": {
            "number-is-nan": "1.0.1"
          }
        },
        "isarray": {
          "version": "1.0.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "minimatch": {
          "version": "3.0.4",
          "bundled": true,
          "dev": true,
          "requires": {
            "brace-expansion": "1.1.11"
          }
        },
        "minimist": {
          "version": "0.0.8",
          "bundled": true,
          "dev": true
        },
        "minipass": {
          "version": "2.2.4",
          "bundled": true,
          "dev": true,
          "requires": {
            "safe-buffer": "5.1.1",
            "yallist": "3.0.2"
          }
        },
        "minizlib": {
          "version": "1.1.0",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "minipass": "2.2.4"
          }
        },
        "mkdirp": {
          "version": "0.5.1",
          "bundled": true,
          "dev": true,
          "requires": {
            "minimist": "0.0.8"
          }
        },
        "ms": {
          "version": "2.0.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "needle": {
          "version": "2.2.0",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "debug": "2.6.9",
            "iconv-lite": "0.4.21",
            "sax": "1.2.4"
          }
        },
        "node-pre-gyp": {
          "version": "0.10.0",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "detect-libc": "1.0.3",
            "mkdirp": "0.5.1",
            "needle": "2.2.0",
            "nopt": "4.0.1",
            "npm-packlist": "1.1.10",
            "npmlog": "4.1.2",
            "rc": "1.2.7",
            "rimraf": "2.6.2",
            "semver": "5.5.0",
            "tar": "4.4.1"
          }
        },
        "nopt": {
          "version": "4.0.1",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "abbrev": "1.1.1",
            "osenv": "0.1.5"
          }
        },
        "npm-bundled": {
          "version": "1.0.3",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "npm-packlist": {
          "version": "1.1.10",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "ignore-walk": "3.0.1",
            "npm-bundled": "1.0.3"
          }
        },
        "npmlog": {
          "version": "4.1.2",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "are-we-there-yet": "1.1.4",
            "console-control-strings": "1.1.0",
            "gauge": "2.7.4",
            "set-blocking": "2.0.0"
          }
        },
        "number-is-nan": {
          "version": "1.0.1",
          "bundled": true,
          "dev": true
        },
        "object-assign": {
          "version": "4.1.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "once": {
          "version": "1.4.0",
          "bundled": true,
          "dev": true,
          "requires": {
            "wrappy": "1.0.2"
          }
        },
        "os-homedir": {
          "version": "1.0.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "os-tmpdir": {
          "version": "1.0.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "osenv": {
          "version": "0.1.5",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "os-homedir": "1.0.2",
            "os-tmpdir": "1.0.2"
          }
        },
        "path-is-absolute": {
          "version": "1.0.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "process-nextick-args": {
          "version": "2.0.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "rc": {
          "version": "1.2.7",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "deep-extend": "0.5.1",
            "ini": "1.3.5",
            "minimist": "1.2.0",
            "strip-json-comments": "2.0.1"
          },
          "dependencies": {
            "minimist": {
              "version": "1.2.0",
              "bundled": true,
              "dev": true,
              "optional": true
            }
          }
        },
        "readable-stream": {
          "version": "2.3.6",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.1",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "rimraf": {
          "version": "2.6.2",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "glob": "7.1.2"
          }
        },
        "safe-buffer": {
          "version": "5.1.1",
          "bundled": true,
          "dev": true
        },
        "safer-buffer": {
          "version": "2.1.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "sax": {
          "version": "1.2.4",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "semver": {
          "version": "5.5.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "set-blocking": {
          "version": "2.0.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "signal-exit": {
          "version": "3.0.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "string-width": {
          "version": "1.0.2",
          "bundled": true,
          "dev": true,
          "requires": {
            "code-point-at": "1.1.0",
            "is-fullwidth-code-point": "1.0.0",
            "strip-ansi": "3.0.1"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "safe-buffer": "5.1.1"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "bundled": true,
          "dev": true,
          "requires": {
            "ansi-regex": "2.1.1"
          }
        },
        "strip-json-comments": {
          "version": "2.0.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "tar": {
          "version": "4.4.1",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "chownr": "1.0.1",
            "fs-minipass": "1.2.5",
            "minipass": "2.2.4",
            "minizlib": "1.1.0",
            "mkdirp": "0.5.1",
            "safe-buffer": "5.1.1",
            "yallist": "3.0.2"
          }
        },
        "util-deprecate": {
          "version": "1.0.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "wide-align": {
          "version": "1.1.2",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "string-width": "1.0.2"
          }
        },
        "wrappy": {
          "version": "1.0.2",
          "bundled": true,
          "dev": true
        },
        "yallist": {
          "version": "3.0.2",
          "bundled": true,
          "dev": true
        }
      }
    },
    "get-caller-file": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-1.0.2.tgz",
      "integrity": "sha1-9wLmMSfn4jHBYKgMFVSstw1QR+U=",
      "dev": true
    },
    "get-stream": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-3.0.0.tgz",
      "integrity": "sha1-jpQ9E1jcN1VQVOy+LtsFqhdO3hQ=",
      "dev": true
    },
    "get-value": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
      "dev": true
    },
    "getpass": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
      "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
      "dev": true,
      "requires": {
        "assert-plus": "1.0.0"
      }
    },
    "gh-got": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/gh-got/-/gh-got-6.0.0.tgz",
      "integrity": "sha512-F/mS+fsWQMo1zfgG9MD8KWvTWPPzzhuVwY++fhQ5Ggd+0P+CAMHtzMZhNxG+TqGfHDChJKsbh6otfMGqO2AKBw==",
      "dev": true,
      "requires": {
        "got": "7.1.0",
        "is-plain-obj": "1.1.0"
      },
      "dependencies": {
        "got": {
          "version": "7.1.0",
          "resolved": "https://registry.npmjs.org/got/-/got-7.1.0.tgz",
          "integrity": "sha512-Y5WMo7xKKq1muPsxD+KmrR8DH5auG7fBdDVueZwETwV6VytKyU9OX/ddpq2/1hp1vIPvVb4T81dKQz3BivkNLw==",
          "dev": true,
          "requires": {
            "decompress-response": "3.3.0",
            "duplexer3": "0.1.4",
            "get-stream": "3.0.0",
            "is-plain-obj": "1.1.0",
            "is-retry-allowed": "1.1.0",
            "is-stream": "1.1.0",
            "isurl": "1.0.0",
            "lowercase-keys": "1.0.1",
            "p-cancelable": "0.3.0",
            "p-timeout": "1.2.1",
            "safe-buffer": "5.1.2",
            "timed-out": "4.0.1",
            "url-parse-lax": "1.0.0",
            "url-to-options": "1.0.1"
          }
        },
        "p-timeout": {
          "version": "1.2.1",
          "resolved": "https://registry.npmjs.org/p-timeout/-/p-timeout-1.2.1.tgz",
          "integrity": "sha1-XrOzU7f86Z8QGhA4iAuwVOu+o4Y=",
          "dev": true,
          "requires": {
            "p-finally": "1.0.0"
          }
        }
      }
    },
    "github-username": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/github-username/-/github-username-4.1.0.tgz",
      "integrity": "sha1-y+KABBiDIG2kISrp5LXxacML9Bc=",
      "dev": true,
      "requires": {
        "gh-got": "6.0.0"
      }
    },
    "glob": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.2.tgz",
      "integrity": "sha512-MJTUg1kjuLeQCJ+ccE4Vpa6kKVXkPYJ2mOCQyUuKLcLQsdrMCpBPUi8qVE6+YuaJkozeA9NusTAw3hLr8Xe5EQ==",
      "dev": true,
      "requires": {
        "fs.realpath": "1.0.0",
        "inflight": "1.0.6",
        "inherits": "2.0.3",
        "minimatch": "3.0.4",
        "once": "1.4.0",
        "path-is-absolute": "1.0.1"
      }
    },
    "glob-all": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/glob-all/-/glob-all-3.1.0.tgz",
      "integrity": "sha1-iRPd+17hrHgSZWJBsD1SF8ZLAqs=",
      "dev": true,
      "requires": {
        "glob": "7.1.2",
        "yargs": "1.2.6"
      },
      "dependencies": {
        "minimist": {
          "version": "0.1.0",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.1.0.tgz",
          "integrity": "sha1-md9lelJXTCHJBXSX33QnkLK0wN4=",
          "dev": true
        },
        "yargs": {
          "version": "1.2.6",
          "resolved": "https://registry.npmjs.org/yargs/-/yargs-1.2.6.tgz",
          "integrity": "sha1-nHtKgv1dWVsr8Xq23MQxNUMv40s=",
          "dev": true,
          "requires": {
            "minimist": "0.1.0"
          }
        }
      }
    },
    "glob-base": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/glob-base/-/glob-base-0.3.0.tgz",
      "integrity": "sha1-27Fk9iIbHAscz4Kuoyi0l98Oo8Q=",
      "dev": true,
      "requires": {
        "glob-parent": "2.0.0",
        "is-glob": "2.0.1"
      }
    },
    "glob-parent": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-2.0.0.tgz",
      "integrity": "sha1-gTg9ctsFT8zPUzbaqQLxgvbtuyg=",
      "dev": true,
      "requires": {
        "is-glob": "2.0.1"
      }
    },
    "glob-to-regexp": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.3.0.tgz",
      "integrity": "sha1-jFoUlNIGbFcMw7/kSWF1rMTVAqs=",
      "dev": true
    },
    "glob2base": {
      "version": "0.0.12",
      "resolved": "https://registry.npmjs.org/glob2base/-/glob2base-0.0.12.tgz",
      "integrity": "sha1-nUGbPijxLoOjYhZKJ3BVkiycDVY=",
      "dev": true,
      "requires": {
        "find-index": "0.1.1"
      }
    },
    "global-dirs": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-0.1.1.tgz",
      "integrity": "sha1-sxnA3UYH81PzvpzKTHL8FIxJ9EU=",
      "dev": true,
      "requires": {
        "ini": "1.3.5"
      }
    },
    "global-modules": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/global-modules/-/global-modules-1.0.0.tgz",
      "integrity": "sha512-sKzpEkf11GpOFuw0Zzjzmt4B4UZwjOcG757PPvrfhxcLFbq0wpsgpOqxpxtxFiCG4DtG93M6XRVbF2oGdev7bg==",
      "dev": true,
      "requires": {
        "global-prefix": "1.0.2",
        "is-windows": "1.0.2",
        "resolve-dir": "1.0.1"
      }
    },
    "global-prefix": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/global-prefix/-/global-prefix-1.0.2.tgz",
      "integrity": "sha1-2/dDxsFJklk8ZVVoy2btMsASLr4=",
      "dev": true,
      "requires": {
        "expand-tilde": "2.0.2",
        "homedir-polyfill": "1.0.1",
        "ini": "1.3.5",
        "is-windows": "1.0.2",
        "which": "1.3.1"
      }
    },
    "globals": {
      "version": "9.18.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-9.18.0.tgz",
      "integrity": "sha512-S0nG3CLEQiY/ILxqtztTWH/3iRRdyBLw6KMDxnKMchrtbj2OFmehVh0WUCfW3DUrIgx/qFrJPICrq4Z4sTR9UQ==",
      "dev": true
    },
    "globby": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/globby/-/globby-8.0.1.tgz",
      "integrity": "sha512-oMrYrJERnKBLXNLVTqhm3vPEdJ/b2ZE28xN4YARiix1NOIOBPEpOUnm844K1iu/BkphCaf2WNFwMszv8Soi1pw==",
      "dev": true,
      "requires": {
        "array-union": "1.0.2",
        "dir-glob": "2.0.0",
        "fast-glob": "2.2.2",
        "glob": "7.1.2",
        "ignore": "3.3.8",
        "pify": "3.0.0",
        "slash": "1.0.0"
      }
    },
    "got": {
      "version": "6.7.1",
      "resolved": "https://registry.npmjs.org/got/-/got-6.7.1.tgz",
      "integrity": "sha1-JAzQV4WpoY5WHcG0S0HHY+8ejbA=",
      "dev": true,
      "requires": {
        "create-error-class": "3.0.2",
        "duplexer3": "0.1.4",
        "get-stream": "3.0.0",
        "is-redirect": "1.0.0",
        "is-retry-allowed": "1.1.0",
        "is-stream": "1.1.0",
        "lowercase-keys": "1.0.1",
        "safe-buffer": "5.1.2",
        "timed-out": "4.0.1",
        "unzip-response": "2.0.1",
        "url-parse-lax": "1.0.0"
      }
    },
    "graceful-fs": {
      "version": "4.1.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.1.11.tgz",
      "integrity": "sha1-Dovf5NHduIVNZOBOp8AOKgJuVlg=",
      "dev": true
    },
    "grouped-queue": {
      "version": "0.3.3",
      "resolved": "https://registry.npmjs.org/grouped-queue/-/grouped-queue-0.3.3.tgz",
      "integrity": "sha1-wWfSpTGcWg4JZO9qJbfC34mWyFw=",
      "dev": true,
      "requires": {
        "lodash": "4.17.10"
      }
    },
    "growly": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/growly/-/growly-1.3.0.tgz",
      "integrity": "sha1-8QdIy+dq+WS3yWyTxrzCivEgwIE=",
      "dev": true
    },
    "handlebars": {
      "version": "4.0.11",
      "resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.0.11.tgz",
      "integrity": "sha1-Ywo13+ApS8KB7a5v/F0yn8eYLcw=",
      "dev": true,
      "requires": {
        "async": "1.5.2",
        "optimist": "0.6.1",
        "source-map": "0.4.4",
        "uglify-js": "2.8.29"
      },
      "dependencies": {
        "async": {
          "version": "1.5.2",
          "resolved": "https://registry.npmjs.org/async/-/async-1.5.2.tgz",
          "integrity": "sha1-7GphrlZIDAw8skHJVhjiCJL5Zyo=",
          "dev": true
        },
        "source-map": {
          "version": "0.4.4",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.4.4.tgz",
          "integrity": "sha1-66T12pwNyZneaAMti092FzZSA2s=",
          "dev": true,
          "requires": {
            "amdefine": "1.0.1"
          }
        }
      }
    },
    "har-schema": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
      "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
      "dev": true
    },
    "har-validator": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.0.3.tgz",
      "integrity": "sha1-ukAsJmGU8VlW7xXg/PJCmT9qff0=",
      "dev": true,
      "requires": {
        "ajv": "5.5.2",
        "har-schema": "2.0.0"
      }
    },
    "has-ansi": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
      "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
      "dev": true,
      "requires": {
        "ansi-regex": "2.1.1"
      }
    },
    "has-binary2": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has-binary2/-/has-binary2-1.0.3.tgz",
      "integrity": "sha512-G1LWKhDSvhGeAQ8mPVQlqNcOB2sJdwATtZKl2pDKKHfpf/rYj24lkinxf69blJbnsvtqqNU+L3SL50vzZhXOnw==",
      "requires": {
        "isarray": "2.0.1"
      },
      "dependencies": {
        "isarray": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.1.tgz",
          "integrity": "sha1-o32U7ZzaLVmGXJ92/llu4fM4dB4="
        }
      }
    },
    "has-color": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/has-color/-/has-color-0.1.7.tgz",
      "integrity": "sha1-ZxRKUmDDT8PMpnfQQdr1L+e3iy8=",
      "dev": true
    },
    "has-cors": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-cors/-/has-cors-1.1.0.tgz",
      "integrity": "sha1-XkdHk/fqmEPRu5nCPu9J/xJv/zk="
    },
    "has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "dev": true
    },
    "has-symbol-support-x": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/has-symbol-support-x/-/has-symbol-support-x-1.4.2.tgz",
      "integrity": "sha512-3ToOva++HaW+eCpgqZrCfN51IPB+7bJNVT6CUATzueB5Heb8o6Nam0V3HG5dlDvZU1Gn5QLcbahiKw/XVk5JJw==",
      "dev": true
    },
    "has-to-string-tag-x": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/has-to-string-tag-x/-/has-to-string-tag-x-1.4.1.tgz",
      "integrity": "sha512-vdbKfmw+3LoOYVr+mtxHaX5a96+0f3DljYd8JOqvOLsf5mw2Otda2qCDT9qRqLAhrjyQ0h7ual5nOiASpsGNFw==",
      "dev": true,
      "requires": {
        "has-symbol-support-x": "1.4.2"
      }
    },
    "has-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
      "dev": true,
      "requires": {
        "get-value": "2.0.6",
        "has-values": "1.0.0",
        "isobject": "3.0.1"
      },
      "dependencies": {
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "has-values": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
      "dev": true,
      "requires": {
        "is-number": "3.0.0",
        "kind-of": "4.0.0"
      },
      "dependencies": {
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "dev": true,
          "requires": {
            "kind-of": "3.2.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "dev": true,
              "requires": {
                "is-buffer": "1.1.6"
              }
            }
          }
        },
        "kind-of": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
          "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
          "dev": true,
          "requires": {
            "is-buffer": "1.1.6"
          }
        }
      }
    },
    "hash-base": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/hash-base/-/hash-base-3.0.4.tgz",
      "integrity": "sha1-X8hoaEfs1zSZQDMZprCj8/auSRg=",
      "dev": true,
      "requires": {
        "inherits": "2.0.3",
        "safe-buffer": "5.1.2"
      }
    },
    "hash.js": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/hash.js/-/hash.js-1.1.3.tgz",
      "integrity": "sha512-/UETyP0W22QILqS+6HowevwhEFJ3MBJnwTf75Qob9Wz9t0DPuisL8kW8YZMK62dHAKE1c1p+gY1TtOLY+USEHA==",
      "dev": true,
      "requires": {
        "inherits": "2.0.3",
        "minimalistic-assert": "1.0.1"
      }
    },
    "hmac-drbg": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/hmac-drbg/-/hmac-drbg-1.0.1.tgz",
      "integrity": "sha1-0nRXAQJabHdabFRXk+1QL8DGSaE=",
      "dev": true,
      "requires": {
        "hash.js": "1.1.3",
        "minimalistic-assert": "1.0.1",
        "minimalistic-crypto-utils": "1.0.1"
      }
    },
    "home-or-tmp": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/home-or-tmp/-/home-or-tmp-2.0.0.tgz",
      "integrity": "sha1-42w/LSyufXRqhX440Y1fMqeILbg=",
      "dev": true,
      "requires": {
        "os-homedir": "1.0.2",
        "os-tmpdir": "1.0.2"
      }
    },
    "homedir-polyfill": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/homedir-polyfill/-/homedir-polyfill-1.0.1.tgz",
      "integrity": "sha1-TCu8inWJmP7r9e1oWA921GdotLw=",
      "dev": true,
      "requires": {
        "parse-passwd": "1.0.0"
      }
    },
    "hosted-git-info": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.6.0.tgz",
      "integrity": "sha512-lIbgIIQA3lz5XaB6vxakj6sDHADJiZadYEJB+FgA+C4nubM1NwcuvUr9EJPmnH1skZqpqUzWborWo8EIUi0Sdw==",
      "dev": true
    },
    "html-encoding-sniffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-1.0.2.tgz",
      "integrity": "sha512-71lZziiDnsuabfdYiUeWdCVyKuqwWi23L8YeIgV9jSSZHCtb6wB1BKWooH7L3tn4/FuZJMVWyNaIDr4RGmaSYw==",
      "dev": true,
      "requires": {
        "whatwg-encoding": "1.0.3"
      }
    },
    "http-cache-semantics": {
      "version": "3.8.1",
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-3.8.1.tgz",
      "integrity": "sha512-5ai2iksyV8ZXmnZhHH4rWPoxxistEexSi5936zIQ1bnNTW5VnA85B6P/VpXiRM017IgRvb2kKo1a//y+0wSp3w==",
      "dev": true
    },
    "http-errors": {
      "version": "1.6.3",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",
      "integrity": "sha1-i1VoC7S+KDoLW/TqLjhYC+HZMg0=",
      "requires": {
        "depd": "1.1.2",
        "inherits": "2.0.3",
        "setprototypeof": "1.1.0",
        "statuses": "1.5.0"
      }
    },
    "http-signature": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
      "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
      "dev": true,
      "requires": {
        "assert-plus": "1.0.0",
        "jsprim": "1.4.1",
        "sshpk": "1.14.1"
      }
    },
    "https-browserify": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/https-browserify/-/https-browserify-1.0.0.tgz",
      "integrity": "sha1-7AbBDgo0wPL68Zn3/X/Hj//QPHM=",
      "dev": true
    },
    "iconv-lite": {
      "version": "0.4.19",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.19.tgz",
      "integrity": "sha512-oTZqweIP51xaGPI4uPa56/Pri/480R+mo7SeU+YETByQNhDG55ycFyNLIgta9vXhILrxXDmF7ZGhqZIcuN0gJQ=="
    },
    "ieee754": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.1.11.tgz",
      "integrity": "sha512-VhDzCKN7K8ufStx/CLj5/PDTMgph+qwN5Pkd5i0sGnVwk56zJ0lkT8Qzi1xqWLS0Wp29DgDtNeS7v8/wMoZeHg==",
      "dev": true
    },
    "iferr": {
      "version": "0.1.5",
      "resolved": "https://registry.npmjs.org/iferr/-/iferr-0.1.5.tgz",
      "integrity": "sha1-xg7taebY/bazEEofy8ocGS3FtQE=",
      "dev": true
    },
    "ignore": {
      "version": "3.3.8",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-3.3.8.tgz",
      "integrity": "sha512-pUh+xUQQhQzevjRHHFqqcTy0/dP/kS9I8HSrUydhihjuD09W6ldVWFtIrwhXdUJHis3i2rZNqEHpZH/cbinFbg==",
      "dev": true
    },
    "ignore-by-default": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
      "integrity": "sha1-SMptcvbGo68Aqa1K5odr44ieKwk=",
      "dev": true
    },
    "import-lazy": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/import-lazy/-/import-lazy-2.1.0.tgz",
      "integrity": "sha1-BWmOPUXIjo1+nZLLBYTnfwlvPkM=",
      "dev": true
    },
    "import-local": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/import-local/-/import-local-1.0.0.tgz",
      "integrity": "sha512-vAaZHieK9qjGo58agRBg+bhHX3hoTZU/Oa3GESWLz7t1U62fk63aHuDJJEteXoDeTCcPmUT+z38gkHPZkkmpmQ==",
      "dev": true,
      "requires": {
        "pkg-dir": "2.0.0",
        "resolve-cwd": "2.0.0"
      }
    },
    "imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
      "dev": true
    },
    "indent-string": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-2.1.0.tgz",
      "integrity": "sha1-ji1INIdCEhtKghi3oTfppSBJ3IA=",
      "dev": true,
      "requires": {
        "repeating": "2.0.1"
      }
    },
    "indexof": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/indexof/-/indexof-0.0.1.tgz",
      "integrity": "sha1-gtwzbSMrkGIXnQWrMpOmYFn9Q10="
    },
    "inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "dev": true,
      "requires": {
        "once": "1.4.0",
        "wrappy": "1.0.2"
      }
    },
    "inherits": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
      "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
    },
    "ini": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.5.tgz",
      "integrity": "sha512-RZY5huIKCMRWDUqZlEi72f/lmXKMvuszcMBduliQ3nnWbx9X/ZBQO7DijMEYS9EhHBb2qacRUMtC7svLwe0lcw==",
      "dev": true
    },
    "inquirer": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-5.2.0.tgz",
      "integrity": "sha512-E9BmnJbAKLPGonz0HeWHtbKf+EeSP93paWO3ZYoUpq/aowXvYGjjCSuashhXPpzbArIjBbji39THkxTz9ZeEUQ==",
      "dev": true,
      "requires": {
        "ansi-escapes": "3.1.0",
        "chalk": "2.4.1",
        "cli-cursor": "2.1.0",
        "cli-width": "2.2.0",
        "external-editor": "2.2.0",
        "figures": "2.0.0",
        "lodash": "4.17.10",
        "mute-stream": "0.0.7",
        "run-async": "2.3.0",
        "rxjs": "5.5.11",
        "string-width": "2.1.1",
        "strip-ansi": "4.0.0",
        "through": "2.3.8"
      },
      "dependencies": {
        "rxjs": {
          "version": "5.5.11",
          "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-5.5.11.tgz",
          "integrity": "sha512-3bjO7UwWfA2CV7lmwYMBzj4fQ6Cq+ftHc2MvUe+WMS7wcdJ1LosDWmdjPQanYp2dBRj572p7PeU81JUxHKOcBA==",
          "dev": true,
          "requires": {
            "symbol-observable": "1.0.1"
          }
        }
      }
    },
    "interpret": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/interpret/-/interpret-1.1.0.tgz",
      "integrity": "sha1-ftGxQQxqDg94z5XTuEQMY/eLhhQ=",
      "dev": true
    },
    "into-stream": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/into-stream/-/into-stream-3.1.0.tgz",
      "integrity": "sha1-lvsKk2wSur1v8XUqF9BWFqvQlMY=",
      "dev": true,
      "requires": {
        "from2": "2.3.0",
        "p-is-promise": "1.1.0"
      }
    },
    "invariant": {
      "version": "2.2.4",
      "resolved": "https://registry.npmjs.org/invariant/-/invariant-2.2.4.tgz",
      "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
      "dev": true,
      "requires": {
        "loose-envify": "1.3.1"
      }
    },
    "invert-kv": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-1.0.0.tgz",
      "integrity": "sha1-EEqOSqym09jNFXqO+L+rLXo//bY=",
      "dev": true
    },
    "ipaddr.js": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.6.0.tgz",
      "integrity": "sha1-4/o1e3c9phnybpXwSdBVxyeW+Gs="
    },
    "is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dev": true,
      "requires": {
        "kind-of": "3.2.2"
      }
    },
    "is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
      "dev": true
    },
    "is-binary-path": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",
      "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
      "dev": true,
      "requires": {
        "binary-extensions": "1.11.0"
      }
    },
    "is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w=="
    },
    "is-builtin-module": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-builtin-module/-/is-builtin-module-1.0.0.tgz",
      "integrity": "sha1-VAVy0096wxGfj3bDDLwbHgN6/74=",
      "dev": true,
      "requires": {
        "builtin-modules": "1.1.1"
      }
    },
    "is-ci": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-1.1.0.tgz",
      "integrity": "sha512-c7TnwxLePuqIlxHgr7xtxzycJPegNHFuIrBkwbf8hc58//+Op1CqFkyS+xnIMkwn9UsJIwc174BIjkyBmSpjKg==",
      "dev": true,
      "requires": {
        "ci-info": "1.1.3"
      }
    },
    "is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dev": true,
      "requires": {
        "kind-of": "3.2.2"
      }
    },
    "is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dev": true,
      "requires": {
        "is-accessor-descriptor": "0.1.6",
        "is-data-descriptor": "0.1.4",
        "kind-of": "5.1.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
          "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
          "dev": true
        }
      }
    },
    "is-dotfile": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/is-dotfile/-/is-dotfile-1.0.3.tgz",
      "integrity": "sha1-pqLzL/0t+wT1yiXs0Pa4PPeYoeE=",
      "dev": true
    },
    "is-equal-shallow": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/is-equal-shallow/-/is-equal-shallow-0.1.3.tgz",
      "integrity": "sha1-IjgJj8Ih3gvPpdnqxMRdY4qhxTQ=",
      "dev": true,
      "requires": {
        "is-primitive": "2.0.0"
      }
    },
    "is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "dev": true
    },
    "is-extglob": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz",
      "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
      "dev": true
    },
    "is-finite": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-finite/-/is-finite-1.0.2.tgz",
      "integrity": "sha1-zGZ3aVYCvlUO8R6LSqYwU0K20Ko=",
      "dev": true,
      "requires": {
        "number-is-nan": "1.0.1"
      }
    },
    "is-fullwidth-code-point": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
      "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
      "dev": true,
      "requires": {
        "number-is-nan": "1.0.1"
      }
    },
    "is-glob": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz",
      "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
      "dev": true,
      "requires": {
        "is-extglob": "1.0.0"
      }
    },
    "is-installed-globally": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/is-installed-globally/-/is-installed-globally-0.1.0.tgz",
      "integrity": "sha1-Df2Y9akRFxbdU13aZJL2e/PSWoA=",
      "dev": true,
      "requires": {
        "global-dirs": "0.1.1",
        "is-path-inside": "1.0.1"
      }
    },
    "is-npm": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-npm/-/is-npm-1.0.0.tgz",
      "integrity": "sha1-8vtjpl5JBbQGyGBydloaTceTufQ=",
      "dev": true
    },
    "is-number": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-2.1.0.tgz",
      "integrity": "sha1-Afy7s5NGOlSPL0ZszhbezknbkI8=",
      "dev": true,
      "requires": {
        "kind-of": "3.2.2"
      }
    },
    "is-obj": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-1.0.1.tgz",
      "integrity": "sha1-PkcprB9f3gJc19g6iW2rn09n2w8=",
      "dev": true
    },
    "is-object": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-object/-/is-object-1.0.1.tgz",
      "integrity": "sha1-iVJojF7C/9awPsyF52ngKQMINHA=",
      "dev": true
    },
    "is-observable": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-observable/-/is-observable-1.1.0.tgz",
      "integrity": "sha512-NqCa4Sa2d+u7BWc6CukaObG3Fh+CU9bvixbpcXYhy2VvYS7vVGIdAgnIS5Ks3A/cqk4rebLJ9s8zBstT2aKnIA==",
      "dev": true,
      "requires": {
        "symbol-observable": "1.2.0"
      },
      "dependencies": {
        "symbol-observable": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-1.2.0.tgz",
          "integrity": "sha512-e900nM8RRtGhlV36KGEU9k65K3mPb1WV70OdjfxlG2EAuM1noi/E/BaW/uMhL7bPEssK8QV57vN3esixjUvcXQ==",
          "dev": true
        }
      }
    },
    "is-odd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-odd/-/is-odd-2.0.0.tgz",
      "integrity": "sha512-OTiixgpZAT1M4NHgS5IguFp/Vz2VI3U7Goh4/HA1adtwyLtSBrxYlcSYkhpAE07s4fKEcjrFxyvtQBND4vFQyQ==",
      "dev": true,
      "requires": {
        "is-number": "4.0.0"
      },
      "dependencies": {
        "is-number": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-4.0.0.tgz",
          "integrity": "sha512-rSklcAIlf1OmFdyAqbnWTLVelsQ58uvZ66S/ZyawjWqIviTWCjg2PzVGw8WUA+nNuPTqb4wgA+NszrJ+08LlgQ==",
          "dev": true
        }
      }
    },
    "is-path-inside": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-1.0.1.tgz",
      "integrity": "sha1-jvW33lBDej/cprToZe96pVy0gDY=",
      "dev": true,
      "requires": {
        "path-is-inside": "1.0.2"
      }
    },
    "is-plain-obj": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
      "integrity": "sha1-caUMhCnfync8kqOQpKA7OfzVHT4=",
      "dev": true
    },
    "is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "dev": true,
      "requires": {
        "isobject": "3.0.1"
      },
      "dependencies": {
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "is-posix-bracket": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-posix-bracket/-/is-posix-bracket-0.1.1.tgz",
      "integrity": "sha1-MzTceXdDaOkvAW5vvAqI9c1ua8Q=",
      "dev": true
    },
    "is-primitive": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-primitive/-/is-primitive-2.0.0.tgz",
      "integrity": "sha1-IHurkWOEmcB7Kt8kCkGochADRXU=",
      "dev": true
    },
    "is-promise": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-2.1.0.tgz",
      "integrity": "sha1-eaKp7OfwlugPNtKy87wWwf9L8/o="
    },
    "is-redirect": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-redirect/-/is-redirect-1.0.0.tgz",
      "integrity": "sha1-HQPd7VO9jbDzDCbk+V02/HyH3CQ=",
      "dev": true
    },
    "is-retry-allowed": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-retry-allowed/-/is-retry-allowed-1.1.0.tgz",
      "integrity": "sha1-EaBgVotnM5REAz0BJaYaINVk+zQ=",
      "dev": true
    },
    "is-scoped": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-scoped/-/is-scoped-1.0.0.tgz",
      "integrity": "sha1-RJypgpnnEwOCViieyytUDcQ3yzA=",
      "dev": true,
      "requires": {
        "scoped-regex": "1.0.0"
      }
    },
    "is-stream": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
      "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ=",
      "dev": true
    },
    "is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
      "dev": true
    },
    "is-utf8": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",
      "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI=",
      "dev": true
    },
    "is-windows": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
      "dev": true
    },
    "isarray": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
      "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
    },
    "isbinaryfile": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/isbinaryfile/-/isbinaryfile-3.0.2.tgz",
      "integrity": "sha1-Sj6XTsDLqQBNP8bN5yCeppNopiE=",
      "dev": true
    },
    "isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
      "dev": true
    },
    "isobject": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
      "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
      "dev": true,
      "requires": {
        "isarray": "1.0.0"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        }
      }
    },
    "isstream": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
      "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
      "dev": true
    },
    "istanbul-api": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/istanbul-api/-/istanbul-api-1.3.1.tgz",
      "integrity": "sha512-duj6AlLcsWNwUpfyfHt0nWIeRiZpuShnP40YTxOGQgtaN8fd6JYSxsvxUphTDy8V5MfDXo4s/xVCIIvVCO808g==",
      "dev": true,
      "requires": {
        "async": "2.6.1",
        "compare-versions": "3.2.1",
        "fileset": "2.0.3",
        "istanbul-lib-coverage": "1.2.0",
        "istanbul-lib-hook": "1.2.0",
        "istanbul-lib-instrument": "1.10.1",
        "istanbul-lib-report": "1.1.4",
        "istanbul-lib-source-maps": "1.2.5",
        "istanbul-reports": "1.3.0",
        "js-yaml": "3.12.0",
        "mkdirp": "0.5.1",
        "once": "1.4.0"
      },
      "dependencies": {
        "istanbul-lib-source-maps": {
          "version": "1.2.5",
          "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-1.2.5.tgz",
          "integrity": "sha512-8O2T/3VhrQHn0XcJbP1/GN7kXMiRAlPi+fj3uEHrjBD8Oz7Py0prSC25C09NuAZS6bgW1NNKAvCSHZXB0irSGA==",
          "dev": true,
          "requires": {
            "debug": "3.1.0",
            "istanbul-lib-coverage": "1.2.0",
            "mkdirp": "0.5.1",
            "rimraf": "2.6.2",
            "source-map": "0.5.7"
          }
        }
      }
    },
    "istanbul-lib-coverage": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-1.2.0.tgz",
      "integrity": "sha512-GvgM/uXRwm+gLlvkWHTjDAvwynZkL9ns15calTrmhGgowlwJBbWMYzWbKqE2DT6JDP1AFXKa+Zi0EkqNCUqY0A==",
      "dev": true
    },
    "istanbul-lib-hook": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-hook/-/istanbul-lib-hook-1.2.0.tgz",
      "integrity": "sha512-p3En6/oGkFQV55Up8ZPC2oLxvgSxD8CzA0yBrhRZSh3pfv3OFj9aSGVC0yoerAi/O4u7jUVnOGVX1eVFM+0tmQ==",
      "dev": true,
      "requires": {
        "append-transform": "0.4.0"
      }
    },
    "istanbul-lib-instrument": {
      "version": "1.10.1",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-1.10.1.tgz",
      "integrity": "sha512-1dYuzkOCbuR5GRJqySuZdsmsNKPL3PTuyPevQfoCXJePT9C8y1ga75neU+Tuy9+yS3G/dgx8wgOmp2KLpgdoeQ==",
      "dev": true,
      "requires": {
        "babel-generator": "6.26.1",
        "babel-template": "6.26.0",
        "babel-traverse": "6.26.0",
        "babel-types": "6.26.0",
        "babylon": "6.18.0",
        "istanbul-lib-coverage": "1.2.0",
        "semver": "5.5.0"
      }
    },
    "istanbul-lib-report": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-1.1.4.tgz",
      "integrity": "sha512-Azqvq5tT0U09nrncK3q82e/Zjkxa4tkFZv7E6VcqP0QCPn6oNljDPfrZEC/umNXds2t7b8sRJfs6Kmpzt8m2kA==",
      "dev": true,
      "requires": {
        "istanbul-lib-coverage": "1.2.0",
        "mkdirp": "0.5.1",
        "path-parse": "1.0.5",
        "supports-color": "3.2.3"
      },
      "dependencies": {
        "has-flag": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-1.0.0.tgz",
          "integrity": "sha1-nZ55MWXOAXoA8AQYxD+UKnsdEfo=",
          "dev": true
        },
        "supports-color": {
          "version": "3.2.3",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-3.2.3.tgz",
          "integrity": "sha1-ZawFBLOVQXHYpklGsq48u4pfVPY=",
          "dev": true,
          "requires": {
            "has-flag": "1.0.0"
          }
        }
      }
    },
    "istanbul-lib-source-maps": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-1.2.3.tgz",
      "integrity": "sha512-fDa0hwU/5sDXwAklXgAoCJCOsFsBplVQ6WBldz5UwaqOzmDhUK4nfuR7/G//G2lERlblUNJB8P6e8cXq3a7MlA==",
      "dev": true,
      "requires": {
        "debug": "3.1.0",
        "istanbul-lib-coverage": "1.2.0",
        "mkdirp": "0.5.1",
        "rimraf": "2.6.2",
        "source-map": "0.5.7"
      }
    },
    "istanbul-reports": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-1.3.0.tgz",
      "integrity": "sha512-y2Z2IMqE1gefWUaVjrBm0mSKvUkaBy9Vqz8iwr/r40Y9hBbIteH5wqHG/9DLTfJ9xUnUT2j7A3+VVJ6EaYBllA==",
      "dev": true,
      "requires": {
        "handlebars": "4.0.11"
      }
    },
    "istextorbinary": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/istextorbinary/-/istextorbinary-2.2.1.tgz",
      "integrity": "sha512-TS+hoFl8Z5FAFMK38nhBkdLt44CclNRgDHWeMgsV8ko3nDlr/9UI2Sf839sW7enijf8oKsZYXRvM8g0it9Zmcw==",
      "dev": true,
      "requires": {
        "binaryextensions": "2.1.1",
        "editions": "1.3.4",
        "textextensions": "2.2.0"
      }
    },
    "isurl": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isurl/-/isurl-1.0.0.tgz",
      "integrity": "sha512-1P/yWsxPlDtn7QeRD+ULKQPaIaN6yF368GZ2vDfv0AL0NwpStafjWCDDdn0k8wgFMWpVAqG7oJhxHnlud42i9w==",
      "dev": true,
      "requires": {
        "has-to-string-tag-x": "1.4.1",
        "is-object": "1.0.1"
      }
    },
    "iterare": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/iterare/-/iterare-0.0.8.tgz",
      "integrity": "sha1-qWmoCh+/9rePKHdllNe8K9+raq0="
    },
    "jest": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/jest/-/jest-21.2.1.tgz",
      "integrity": "sha512-mXN0ppPvWYoIcC+R+ctKxAJ28xkt/Z5Js875padm4GbgUn6baeR5N4Ng6LjatIRpUQDZVJABT7Y4gucFjPryfw==",
      "dev": true,
      "requires": {
        "jest-cli": "21.2.1"
      },
      "dependencies": {
        "jest-cli": {
          "version": "21.2.1",
          "resolved": "https://registry.npmjs.org/jest-cli/-/jest-cli-21.2.1.tgz",
          "integrity": "sha512-T1BzrbFxDIW/LLYQqVfo94y/hhaj1NzVQkZgBumAC+sxbjMROI7VkihOdxNR758iYbQykL2ZOWUBurFgkQrzdg==",
          "dev": true,
          "requires": {
            "ansi-escapes": "3.1.0",
            "chalk": "2.4.1",
            "glob": "7.1.2",
            "graceful-fs": "4.1.11",
            "is-ci": "1.1.0",
            "istanbul-api": "1.3.1",
            "istanbul-lib-coverage": "1.2.0",
            "istanbul-lib-instrument": "1.10.1",
            "istanbul-lib-source-maps": "1.2.3",
            "jest-changed-files": "21.2.0",
            "jest-config": "21.2.1",
            "jest-environment-jsdom": "21.2.1",
            "jest-haste-map": "21.2.0",
            "jest-message-util": "21.2.1",
            "jest-regex-util": "21.2.0",
            "jest-resolve-dependencies": "21.2.0",
            "jest-runner": "21.2.1",
            "jest-runtime": "21.2.1",
            "jest-snapshot": "21.2.1",
            "jest-util": "21.2.1",
            "micromatch": "2.3.11",
            "node-notifier": "5.2.1",
            "pify": "3.0.0",
            "slash": "1.0.0",
            "string-length": "2.0.0",
            "strip-ansi": "4.0.0",
            "which": "1.3.1",
            "worker-farm": "1.6.0",
            "yargs": "9.0.1"
          }
        }
      }
    },
    "jest-changed-files": {
      "version": "21.2.0",
      "resolved": "https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-21.2.0.tgz",
      "integrity": "sha512-+lCNP1IZLwN1NOIvBcV5zEL6GENK6TXrDj4UxWIeLvIsIDa+gf6J7hkqsW2qVVt/wvH65rVvcPwqXdps5eclTQ==",
      "dev": true,
      "requires": {
        "throat": "4.1.0"
      }
    },
    "jest-config": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/jest-config/-/jest-config-21.2.1.tgz",
      "integrity": "sha512-fJru5HtlD/5l2o25eY9xT0doK3t2dlglrqoGpbktduyoI0T5CwuB++2YfoNZCrgZipTwPuAGonYv0q7+8yDc/A==",
      "dev": true,
      "requires": {
        "chalk": "2.4.1",
        "glob": "7.1.2",
        "jest-environment-jsdom": "21.2.1",
        "jest-environment-node": "21.2.1",
        "jest-get-type": "21.2.0",
        "jest-jasmine2": "21.2.1",
        "jest-regex-util": "21.2.0",
        "jest-resolve": "21.2.0",
        "jest-util": "21.2.1",
        "jest-validate": "21.2.1",
        "pretty-format": "21.2.1"
      }
    },
    "jest-diff": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-21.2.1.tgz",
      "integrity": "sha512-E5fu6r7PvvPr5qAWE1RaUwIh/k6Zx/3OOkZ4rk5dBJkEWRrUuSgbMt2EO8IUTPTd6DOqU3LW6uTIwX5FRvXoFA==",
      "dev": true,
      "requires": {
        "chalk": "2.4.1",
        "diff": "3.5.0",
        "jest-get-type": "21.2.0",
        "pretty-format": "21.2.1"
      }
    },
    "jest-docblock": {
      "version": "21.2.0",
      "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-21.2.0.tgz",
      "integrity": "sha512-5IZ7sY9dBAYSV+YjQ0Ovb540Ku7AO9Z5o2Cg789xj167iQuZ2cG+z0f3Uct6WeYLbU6aQiM2pCs7sZ+4dotydw==",
      "dev": true
    },
    "jest-environment-jsdom": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/jest-environment-jsdom/-/jest-environment-jsdom-21.2.1.tgz",
      "integrity": "sha512-mecaeNh0eWmzNrUNMWARysc0E9R96UPBamNiOCYL28k7mksb1d0q6DD38WKP7ABffjnXyUWJPVaWRgUOivwXwg==",
      "dev": true,
      "requires": {
        "jest-mock": "21.2.0",
        "jest-util": "21.2.1",
        "jsdom": "9.12.0"
      }
    },
    "jest-environment-node": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-21.2.1.tgz",
      "integrity": "sha512-R211867wx9mVBVHzrjGRGTy5cd05K7eqzQl/WyZixR/VkJ4FayS8qkKXZyYnwZi6Rxo6WEV81cDbiUx/GfuLNw==",
      "dev": true,
      "requires": {
        "jest-mock": "21.2.0",
        "jest-util": "21.2.1"
      }
    },
    "jest-get-type": {
      "version": "21.2.0",
      "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-21.2.0.tgz",
      "integrity": "sha512-y2fFw3C+D0yjNSDp7ab1kcd6NUYfy3waPTlD8yWkAtiocJdBRQqNoRqVfMNxgj+IjT0V5cBIHJO0z9vuSSZ43Q==",
      "dev": true
    },
    "jest-haste-map": {
      "version": "21.2.0",
      "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-21.2.0.tgz",
      "integrity": "sha512-5LhsY/loPH7wwOFRMs+PT4aIAORJ2qwgbpMFlbWbxfN0bk3ZCwxJ530vrbSiTstMkYLao6JwBkLhCJ5XbY7ZHw==",
      "dev": true,
      "requires": {
        "fb-watchman": "2.0.0",
        "graceful-fs": "4.1.11",
        "jest-docblock": "21.2.0",
        "micromatch": "2.3.11",
        "sane": "2.5.2",
        "worker-farm": "1.6.0"
      }
    },
    "jest-jasmine2": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/jest-jasmine2/-/jest-jasmine2-21.2.1.tgz",
      "integrity": "sha512-lw8FXXIEekD+jYNlStfgNsUHpfMWhWWCgHV7n0B7mA/vendH7vBFs8xybjQsDzJSduptBZJHqQX9SMssya9+3A==",
      "dev": true,
      "requires": {
        "chalk": "2.4.1",
        "expect": "21.2.1",
        "graceful-fs": "4.1.11",
        "jest-diff": "21.2.1",
        "jest-matcher-utils": "21.2.1",
        "jest-message-util": "21.2.1",
        "jest-snapshot": "21.2.1",
        "p-cancelable": "0.3.0"
      }
    },
    "jest-matcher-utils": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-21.2.1.tgz",
      "integrity": "sha512-kn56My+sekD43dwQPrXBl9Zn9tAqwoy25xxe7/iY4u+mG8P3ALj5IK7MLHZ4Mi3xW7uWVCjGY8cm4PqgbsqMCg==",
      "dev": true,
      "requires": {
        "chalk": "2.4.1",
        "jest-get-type": "21.2.0",
        "pretty-format": "21.2.1"
      }
    },
    "jest-message-util": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-21.2.1.tgz",
      "integrity": "sha512-EbC1X2n0t9IdeMECJn2BOg7buOGivCvVNjqKMXTzQOu7uIfLml+keUfCALDh8o4rbtndIeyGU8/BKfoTr/LVDQ==",
      "dev": true,
      "requires": {
        "chalk": "2.4.1",
        "micromatch": "2.3.11",
        "slash": "1.0.0"
      }
    },
    "jest-mock": {
      "version": "21.2.0",
      "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-21.2.0.tgz",
      "integrity": "sha512-aZDfyVf0LEoABWiY6N0d+O963dUQSyUa4qgzurHR3TBDPen0YxKCJ6l2i7lQGh1tVdsuvdrCZ4qPj+A7PievCw==",
      "dev": true
    },
    "jest-regex-util": {
      "version": "21.2.0",
      "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-21.2.0.tgz",
      "integrity": "sha512-BKQ1F83EQy0d9Jen/mcVX7D+lUt2tthhK/2gDWRgLDJRNOdRgSp1iVqFxP8EN1ARuypvDflRfPzYT8fQnoBQFQ==",
      "dev": true
    },
    "jest-resolve": {
      "version": "21.2.0",
      "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-21.2.0.tgz",
      "integrity": "sha512-vefQ/Lr+VdNvHUZFQXWtOqHX3HEdOc2MtSahBO89qXywEbUxGPB9ZLP9+BHinkxb60UT2Q/tTDOS6rYc6Mwigw==",
      "dev": true,
      "requires": {
        "browser-resolve": "1.11.2",
        "chalk": "2.4.1",
        "is-builtin-module": "1.0.0"
      }
    },
    "jest-resolve-dependencies": {
      "version": "21.2.0",
      "resolved": "https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-21.2.0.tgz",
      "integrity": "sha512-ok8ybRFU5ScaAcfufIQrCbdNJSRZ85mkxJ1EhUp8Bhav1W1/jv/rl1Q6QoVQHObNxmKnbHVKrfLZbCbOsXQ+bQ==",
      "dev": true,
      "requires": {
        "jest-regex-util": "21.2.0"
      }
    },
    "jest-runner": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/jest-runner/-/jest-runner-21.2.1.tgz",
      "integrity": "sha512-Anb72BOQlHqF/zETqZ2K20dbYsnqW/nZO7jV8BYENl+3c44JhMrA8zd1lt52+N7ErnsQMd2HHKiVwN9GYSXmrg==",
      "dev": true,
      "requires": {
        "jest-config": "21.2.1",
        "jest-docblock": "21.2.0",
        "jest-haste-map": "21.2.0",
        "jest-jasmine2": "21.2.1",
        "jest-message-util": "21.2.1",
        "jest-runtime": "21.2.1",
        "jest-util": "21.2.1",
        "pify": "3.0.0",
        "throat": "4.1.0",
        "worker-farm": "1.6.0"
      }
    },
    "jest-runtime": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/jest-runtime/-/jest-runtime-21.2.1.tgz",
      "integrity": "sha512-6omlpA3+NSE+rHwD0PQjNEjZeb2z+oRmuehMfM1tWQVum+E0WV3pFt26Am0DUfQkkPyTABvxITRjCUclYgSOsA==",
      "dev": true,
      "requires": {
        "babel-core": "6.26.3",
        "babel-jest": "21.2.0",
        "babel-plugin-istanbul": "4.1.6",
        "chalk": "2.4.1",
        "convert-source-map": "1.5.1",
        "graceful-fs": "4.1.11",
        "jest-config": "21.2.1",
        "jest-haste-map": "21.2.0",
        "jest-regex-util": "21.2.0",
        "jest-resolve": "21.2.0",
        "jest-util": "21.2.1",
        "json-stable-stringify": "1.0.1",
        "micromatch": "2.3.11",
        "slash": "1.0.0",
        "strip-bom": "3.0.0",
        "write-file-atomic": "2.3.0",
        "yargs": "9.0.1"
      },
      "dependencies": {
        "strip-bom": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
          "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
          "dev": true
        }
      }
    },
    "jest-snapshot": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-21.2.1.tgz",
      "integrity": "sha512-bpaeBnDpdqaRTzN8tWg0DqOTo2DvD3StOemxn67CUd1p1Po+BUpvePAp44jdJ7Pxcjfg+42o4NHw1SxdCA2rvg==",
      "dev": true,
      "requires": {
        "chalk": "2.4.1",
        "jest-diff": "21.2.1",
        "jest-matcher-utils": "21.2.1",
        "mkdirp": "0.5.1",
        "natural-compare": "1.4.0",
        "pretty-format": "21.2.1"
      }
    },
    "jest-util": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-21.2.1.tgz",
      "integrity": "sha512-r20W91rmHY3fnCoO7aOAlyfC51x2yeV3xF+prGsJAUsYhKeV670ZB8NO88Lwm7ASu8SdH0S+U+eFf498kjhA4g==",
      "dev": true,
      "requires": {
        "callsites": "2.0.0",
        "chalk": "2.4.1",
        "graceful-fs": "4.1.11",
        "jest-message-util": "21.2.1",
        "jest-mock": "21.2.0",
        "jest-validate": "21.2.1",
        "mkdirp": "0.5.1"
      }
    },
    "jest-validate": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-21.2.1.tgz",
      "integrity": "sha512-k4HLI1rZQjlU+EC682RlQ6oZvLrE5SCh3brseQc24vbZTxzT/k/3urar5QMCVgjadmSO7lECeGdc6YxnM3yEGg==",
      "dev": true,
      "requires": {
        "chalk": "2.4.1",
        "jest-get-type": "21.2.0",
        "leven": "2.1.0",
        "pretty-format": "21.2.1"
      }
    },
    "js-tokens": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-3.0.2.tgz",
      "integrity": "sha1-mGbfOVECEw449/mWvOtlRDIJwls=",
      "dev": true
    },
    "js-yaml": {
      "version": "3.12.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.12.0.tgz",
      "integrity": "sha512-PIt2cnwmPfL4hKNwqeiuz4bKfnzHTBv6HyVgjahA6mPLwPDzjDWrplJBMjHUFxku/N3FlmrbyPclad+I+4mJ3A==",
      "dev": true,
      "requires": {
        "argparse": "1.0.10",
        "esprima": "4.0.0"
      }
    },
    "jsbn": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
      "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
      "dev": true,
      "optional": true
    },
    "jscodeshift": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/jscodeshift/-/jscodeshift-0.5.1.tgz",
      "integrity": "sha512-sRMollbhbmSDrR79JMAnhEjyZJlQQVozeeY9A6/KNuV26DNcuB3mGSCWXp0hks9dcwRNOELbNOiwraZaXXRk5Q==",
      "dev": true,
      "requires": {
        "babel-plugin-transform-flow-strip-types": "6.22.0",
        "babel-preset-es2015": "6.24.1",
        "babel-preset-stage-1": "6.24.1",
        "babel-register": "6.26.0",
        "babylon": "7.0.0-beta.47",
        "colors": "1.3.0",
        "flow-parser": "0.73.0",
        "lodash": "4.17.10",
        "micromatch": "2.3.11",
        "neo-async": "2.5.1",
        "node-dir": "0.1.8",
        "nomnom": "1.8.1",
        "recast": "0.15.0",
        "temp": "0.8.3",
        "write-file-atomic": "1.3.4"
      },
      "dependencies": {
        "babylon": {
          "version": "7.0.0-beta.47",
          "resolved": "https://registry.npmjs.org/babylon/-/babylon-7.0.0-beta.47.tgz",
          "integrity": "sha512-+rq2cr4GDhtToEzKFD6KZZMDBXhjFAr9JjPw9pAppZACeEWqNM294j+NdBzkSHYXwzzBmVjZ3nEVJlOhbR2gOQ==",
          "dev": true
        },
        "write-file-atomic": {
          "version": "1.3.4",
          "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-1.3.4.tgz",
          "integrity": "sha1-+Aek8LHZ6ROuekgRLmzDrxmRtF8=",
          "dev": true,
          "requires": {
            "graceful-fs": "4.1.11",
            "imurmurhash": "0.1.4",
            "slide": "1.1.6"
          }
        }
      }
    },
    "jsdom": {
      "version": "9.12.0",
      "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-9.12.0.tgz",
      "integrity": "sha1-6MVG//ywbADUgzyoRBD+1/igl9Q=",
      "dev": true,
      "requires": {
        "abab": "1.0.4",
        "acorn": "4.0.13",
        "acorn-globals": "3.1.0",
        "array-equal": "1.0.0",
        "content-type-parser": "1.0.2",
        "cssom": "0.3.2",
        "cssstyle": "0.2.37",
        "escodegen": "1.9.1",
        "html-encoding-sniffer": "1.0.2",
        "nwmatcher": "1.4.4",
        "parse5": "1.5.1",
        "request": "2.87.0",
        "sax": "1.2.4",
        "symbol-tree": "3.2.2",
        "tough-cookie": "2.4.2",
        "webidl-conversions": "4.0.2",
        "whatwg-encoding": "1.0.3",
        "whatwg-url": "4.8.0",
        "xml-name-validator": "2.0.1"
      }
    },
    "jsesc": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-1.3.0.tgz",
      "integrity": "sha1-RsP+yMGJKxKwgz25vHYiF226s0s=",
      "dev": true
    },
    "json-buffer": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.0.tgz",
      "integrity": "sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg=",
      "dev": true
    },
    "json-parse-better-errors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
      "dev": true
    },
    "json-schema": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
      "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
      "dev": true
    },
    "json-schema-traverse": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.3.1.tgz",
      "integrity": "sha1-NJptRMU6Ud6JtAgFxdXlm0F9M0A=",
      "dev": true
    },
    "json-socket": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/json-socket/-/json-socket-0.2.1.tgz",
      "integrity": "sha1-JuftjMEx8XqgE2wyBo9HO12++yI="
    },
    "json-stable-stringify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify/-/json-stable-stringify-1.0.1.tgz",
      "integrity": "sha1-mnWdOcXy/1A/1TAGRu1EX4jE+a8=",
      "dev": true,
      "requires": {
        "jsonify": "0.0.0"
      }
    },
    "json-stringify-safe": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
      "dev": true
    },
    "json5": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/json5/-/json5-0.5.1.tgz",
      "integrity": "sha1-Hq3nrMASA0rYTiOWdn6tn6VJWCE=",
      "dev": true
    },
    "jsonfile": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
      "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
      "dev": true,
      "requires": {
        "graceful-fs": "4.1.11"
      }
    },
    "jsonify": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/jsonify/-/jsonify-0.0.0.tgz",
      "integrity": "sha1-LHS27kHZPKUbe1qu6PUDYx0lKnM=",
      "dev": true
    },
    "jsprim": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
      "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
      "dev": true,
      "requires": {
        "assert-plus": "1.0.0",
        "extsprintf": "1.3.0",
        "json-schema": "0.2.3",
        "verror": "1.10.0"
      }
    },
    "keyv": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-3.0.0.tgz",
      "integrity": "sha512-eguHnq22OE3uVoSYG0LVWNP+4ppamWr9+zWBe1bsNcovIMy6huUJFPgy4mGwCd/rnl3vOLGW1MTlu4c57CT1xA==",
      "dev": true,
      "requires": {
        "json-buffer": "3.0.0"
      }
    },
    "kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "requires": {
        "is-buffer": "1.1.6"
      }
    },
    "latest-version": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/latest-version/-/latest-version-3.1.0.tgz",
      "integrity": "sha1-ogU4P+oyKzO1rjsYq+4NwvNW7hU=",
      "dev": true,
      "requires": {
        "package-json": "4.0.1"
      }
    },
    "lazy-cache": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/lazy-cache/-/lazy-cache-1.0.4.tgz",
      "integrity": "sha1-odePw6UEdMuAhF07O24dpJpEbo4=",
      "dev": true,
      "optional": true
    },
    "lcid": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz",
      "integrity": "sha1-MIrMr6C8SDo4Z7S28rlQYlHRuDU=",
      "dev": true,
      "requires": {
        "invert-kv": "1.0.0"
      }
    },
    "leb": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/leb/-/leb-0.3.0.tgz",
      "integrity": "sha1-Mr7p+tFoMo1q6oUi2DP0GA7tHaM=",
      "dev": true
    },
    "leven": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/leven/-/leven-2.1.0.tgz",
      "integrity": "sha1-wuep93IJTe6dNCAq6KzORoeHVYA=",
      "dev": true
    },
    "levn": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
      "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
      "dev": true,
      "requires": {
        "prelude-ls": "1.1.2",
        "type-check": "0.3.2"
      }
    },
    "listr": {
      "version": "0.14.1",
      "resolved": "https://registry.npmjs.org/listr/-/listr-0.14.1.tgz",
      "integrity": "sha512-MSMUUVN1f8aRnPi4034RkOqdiUlpYW+FqwFE3aL0uYNPRavkt2S2SsSpDDofn8BDpqv2RNnsdOcCHWsChcq77A==",
      "dev": true,
      "requires": {
        "@samverschueren/stream-to-observable": "0.3.0",
        "cli-truncate": "0.2.1",
        "figures": "1.7.0",
        "indent-string": "2.1.0",
        "is-observable": "1.1.0",
        "is-promise": "2.1.0",
        "is-stream": "1.1.0",
        "listr-silent-renderer": "1.1.1",
        "listr-update-renderer": "0.4.0",
        "listr-verbose-renderer": "0.4.1",
        "log-symbols": "1.0.2",
        "log-update": "1.0.2",
        "ora": "0.2.3",
        "p-map": "1.2.0",
        "rxjs": "6.2.0",
        "strip-ansi": "3.0.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "2.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
          "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
          "dev": true
        },
        "chalk": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
          "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
          "dev": true,
          "requires": {
            "ansi-styles": "2.2.1",
            "escape-string-regexp": "1.0.5",
            "has-ansi": "2.0.0",
            "strip-ansi": "3.0.1",
            "supports-color": "2.0.0"
          }
        },
        "figures": {
          "version": "1.7.0",
          "resolved": "https://registry.npmjs.org/figures/-/figures-1.7.0.tgz",
          "integrity": "sha1-y+Hjr/zxzUS4DK3+0o3Hk6lwHS4=",
          "dev": true,
          "requires": {
            "escape-string-regexp": "1.0.5",
            "object-assign": "4.1.1"
          }
        },
        "log-symbols": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-1.0.2.tgz",
          "integrity": "sha1-N2/3tY6jCGoPCfrMdGF+ylAeGhg=",
          "dev": true,
          "requires": {
            "chalk": "1.1.3"
          }
        },
        "object-assign": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
          "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
          "dev": true
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "2.1.1"
          }
        },
        "supports-color": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
          "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
          "dev": true
        }
      }
    },
    "listr-silent-renderer": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/listr-silent-renderer/-/listr-silent-renderer-1.1.1.tgz",
      "integrity": "sha1-kktaN1cVN3C/Go4/v3S4u/P5JC4=",
      "dev": true
    },
    "listr-update-renderer": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/listr-update-renderer/-/listr-update-renderer-0.4.0.tgz",
      "integrity": "sha1-NE2YDaLKLosUW6MFkI8yrj9MyKc=",
      "dev": true,
      "requires": {
        "chalk": "1.1.3",
        "cli-truncate": "0.2.1",
        "elegant-spinner": "1.0.1",
        "figures": "1.7.0",
        "indent-string": "3.2.0",
        "log-symbols": "1.0.2",
        "log-update": "1.0.2",
        "strip-ansi": "3.0.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "2.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
          "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
          "dev": true
        },
        "chalk": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
          "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
          "dev": true,
          "requires": {
            "ansi-styles": "2.2.1",
            "escape-string-regexp": "1.0.5",
            "has-ansi": "2.0.0",
            "strip-ansi": "3.0.1",
            "supports-color": "2.0.0"
          }
        },
        "figures": {
          "version": "1.7.0",
          "resolved": "https://registry.npmjs.org/figures/-/figures-1.7.0.tgz",
          "integrity": "sha1-y+Hjr/zxzUS4DK3+0o3Hk6lwHS4=",
          "dev": true,
          "requires": {
            "escape-string-regexp": "1.0.5",
            "object-assign": "4.1.1"
          }
        },
        "indent-string": {
          "version": "3.2.0",
          "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-3.2.0.tgz",
          "integrity": "sha1-Sl/W0nzDMvN+VBmlBNu4NxBckok=",
          "dev": true
        },
        "log-symbols": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-1.0.2.tgz",
          "integrity": "sha1-N2/3tY6jCGoPCfrMdGF+ylAeGhg=",
          "dev": true,
          "requires": {
            "chalk": "1.1.3"
          }
        },
        "object-assign": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
          "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
          "dev": true
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "2.1.1"
          }
        },
        "supports-color": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
          "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
          "dev": true
        }
      }
    },
    "listr-verbose-renderer": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/listr-verbose-renderer/-/listr-verbose-renderer-0.4.1.tgz",
      "integrity": "sha1-ggb0z21S3cWCfl/RSYng6WWTOjU=",
      "dev": true,
      "requires": {
        "chalk": "1.1.3",
        "cli-cursor": "1.0.2",
        "date-fns": "1.29.0",
        "figures": "1.7.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "2.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
          "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
          "dev": true
        },
        "chalk": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
          "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
          "dev": true,
          "requires": {
            "ansi-styles": "2.2.1",
            "escape-string-regexp": "1.0.5",
            "has-ansi": "2.0.0",
            "strip-ansi": "3.0.1",
            "supports-color": "2.0.0"
          }
        },
        "cli-cursor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-1.0.2.tgz",
          "integrity": "sha1-ZNo/fValRBLll5S9Ytw1KV6PKYc=",
          "dev": true,
          "requires": {
            "restore-cursor": "1.0.1"
          }
        },
        "figures": {
          "version": "1.7.0",
          "resolved": "https://registry.npmjs.org/figures/-/figures-1.7.0.tgz",
          "integrity": "sha1-y+Hjr/zxzUS4DK3+0o3Hk6lwHS4=",
          "dev": true,
          "requires": {
            "escape-string-regexp": "1.0.5",
            "object-assign": "4.1.1"
          }
        },
        "object-assign": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
          "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
          "dev": true
        },
        "onetime": {
          "version": "1.1.0",
          "resolved": "http://registry.npmjs.org/onetime/-/onetime-1.1.0.tgz",
          "integrity": "sha1-ofeDj4MUxRbwXs78vEzP4EtO14k=",
          "dev": true
        },
        "restore-cursor": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-1.0.1.tgz",
          "integrity": "sha1-NGYfRohjJ/7SmRR5FSJS35LapUE=",
          "dev": true,
          "requires": {
            "exit-hook": "1.1.1",
            "onetime": "1.1.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "2.1.1"
          }
        },
        "supports-color": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
          "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
          "dev": true
        }
      }
    },
    "load-json-file": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz",
      "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",
      "dev": true,
      "requires": {
        "graceful-fs": "4.1.11",
        "parse-json": "2.2.0",
        "pify": "2.3.0",
        "pinkie-promise": "2.0.1",
        "strip-bom": "2.0.0"
      },
      "dependencies": {
        "pify": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
          "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
          "dev": true
        }
      }
    },
    "loader-runner": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-2.3.0.tgz",
      "integrity": "sha1-9IKuqC1UPgeSFwDVpG7yb9rGuKI=",
      "dev": true
    },
    "loader-utils": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.1.0.tgz",
      "integrity": "sha1-yYrvSIvM7aL/teLeZG1qdUQp9c0=",
      "dev": true,
      "requires": {
        "big.js": "3.2.0",
        "emojis-list": "2.1.0",
        "json5": "0.5.1"
      }
    },
    "locate-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
      "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
      "dev": true,
      "requires": {
        "p-locate": "2.0.0",
        "path-exists": "3.0.0"
      }
    },
    "lodash": {
      "version": "4.17.10",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.10.tgz",
      "integrity": "sha512-UejweD1pDoXu+AD825lWwp4ZGtSwgnpZxb3JDViD7StjQz+Nb/6l093lx4OQ0foGWNRoc19mWy7BzL+UAK2iVg==",
      "dev": true
    },
    "log-symbols": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-2.2.0.tgz",
      "integrity": "sha512-VeIAFslyIerEJLXHziedo2basKbMKtTw3vfn5IzG0XTjhAVEJyNHnL2p7vc+wBDSdQuUpNw3M2u6xb9QsAY5Eg==",
      "dev": true,
      "requires": {
        "chalk": "2.4.1"
      }
    },
    "log-update": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/log-update/-/log-update-1.0.2.tgz",
      "integrity": "sha1-GZKfZMQJPS0ucHWh2tivWcKWuNE=",
      "dev": true,
      "requires": {
        "ansi-escapes": "1.4.0",
        "cli-cursor": "1.0.2"
      },
      "dependencies": {
        "ansi-escapes": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-1.4.0.tgz",
          "integrity": "sha1-06ioOzGapneTZisT52HHkRQiMG4=",
          "dev": true
        },
        "cli-cursor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-1.0.2.tgz",
          "integrity": "sha1-ZNo/fValRBLll5S9Ytw1KV6PKYc=",
          "dev": true,
          "requires": {
            "restore-cursor": "1.0.1"
          }
        },
        "onetime": {
          "version": "1.1.0",
          "resolved": "http://registry.npmjs.org/onetime/-/onetime-1.1.0.tgz",
          "integrity": "sha1-ofeDj4MUxRbwXs78vEzP4EtO14k=",
          "dev": true
        },
        "restore-cursor": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-1.0.1.tgz",
          "integrity": "sha1-NGYfRohjJ/7SmRR5FSJS35LapUE=",
          "dev": true,
          "requires": {
            "exit-hook": "1.1.1",
            "onetime": "1.1.0"
          }
        }
      }
    },
    "long": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/long/-/long-3.2.0.tgz",
      "integrity": "sha1-2CG3E4yhy1gcFymQ7xTbIAtcR0s=",
      "dev": true
    },
    "longest": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/longest/-/longest-1.0.1.tgz",
      "integrity": "sha1-MKCy2jj3N3DoKUoNIuZiXtd9AJc=",
      "dev": true
    },
    "loose-envify": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.3.1.tgz",
      "integrity": "sha1-0aitM/qc4OcT1l/dCsi3SNR4yEg=",
      "dev": true,
      "requires": {
        "js-tokens": "3.0.2"
      }
    },
    "lowercase-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
      "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA==",
      "dev": true
    },
    "lru-cache": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.3.tgz",
      "integrity": "sha512-fFEhvcgzuIoJVUF8fYr5KR0YqxD238zgObTps31YdADwPPAp82a4M8TrckkWyx7ekNlf9aBcVn81cFwwXngrJA==",
      "dev": true,
      "requires": {
        "pseudomap": "1.0.2",
        "yallist": "2.1.2"
      }
    },
    "lru-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/lru-queue/-/lru-queue-0.1.0.tgz",
      "integrity": "sha1-Jzi9nw089PhEkMVzbEhpmsYyzaM=",
      "requires": {
        "es5-ext": "0.10.45"
      }
    },
    "make-dir": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-1.3.0.tgz",
      "integrity": "sha512-2w31R7SJtieJJnQtGc7RVL2StM2vGYVfqUOvUDxH6bC6aJTxPxTF0GnIgCyu7tjockiUWAYQRbxa7vKn34s5sQ==",
      "dev": true,
      "requires": {
        "pify": "3.0.0"
      }
    },
    "make-error": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.4.tgz",
      "integrity": "sha512-0Dab5btKVPhibSalc9QGXb559ED7G7iLjFXBaj9Wq8O3vorueR5K5jaE3hkG6ZQINyhA/JgG6Qk4qdFQjsYV6g==",
      "dev": true
    },
    "makeerror": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.11.tgz",
      "integrity": "sha1-4BpckQnyr3lmDk6LlYd5AYT1qWw=",
      "dev": true,
      "requires": {
        "tmpl": "1.0.4"
      }
    },
    "mamacro": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/mamacro/-/mamacro-0.0.3.tgz",
      "integrity": "sha512-qMEwh+UujcQ+kbz3T6V+wAmO2U8veoq2w+3wY8MquqwVA3jChfwY+Tk52GZKDfACEPjuZ7r2oJLejwpt8jtwTA==",
      "dev": true
    },
    "map-cache": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
      "dev": true
    },
    "map-stream": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/map-stream/-/map-stream-0.1.0.tgz",
      "integrity": "sha1-5WqpTEyAVaFkBKBnS3jyFffI4ZQ=",
      "dev": true
    },
    "map-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
      "dev": true,
      "requires": {
        "object-visit": "1.0.1"
      }
    },
    "math-random": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/math-random/-/math-random-1.0.1.tgz",
      "integrity": "sha1-izqsWIuKZuSXXjzepn97sylgH6w=",
      "dev": true
    },
    "md5.js": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/md5.js/-/md5.js-1.3.4.tgz",
      "integrity": "sha1-6b296UogpawYsENA/Fdk1bCdkB0=",
      "dev": true,
      "requires": {
        "hash-base": "3.0.4",
        "inherits": "2.0.3"
      }
    },
    "media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
    },
    "mem": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/mem/-/mem-1.1.0.tgz",
      "integrity": "sha1-Xt1StIXKHZAP5kiVUFOZoN+kX3Y=",
      "dev": true,
      "requires": {
        "mimic-fn": "1.2.0"
      }
    },
    "mem-fs": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/mem-fs/-/mem-fs-1.1.3.tgz",
      "integrity": "sha1-uK6NLj/Lb10/kWXBLUVRoGXZicw=",
      "dev": true,
      "requires": {
        "through2": "2.0.3",
        "vinyl": "1.2.0",
        "vinyl-file": "2.0.0"
      }
    },
    "mem-fs-editor": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/mem-fs-editor/-/mem-fs-editor-4.0.2.tgz",
      "integrity": "sha512-QHvdXLLNmwJXxKdf7x27aNUren6IoPxwcM8Sfd+S6/ddQQMcYdEtVKsh6ilpqMrU18VQuKZEaH0aCGt3JDbA0g==",
      "dev": true,
      "requires": {
        "commondir": "1.0.1",
        "deep-extend": "0.5.1",
        "ejs": "2.6.1",
        "glob": "7.1.2",
        "globby": "8.0.1",
        "isbinaryfile": "3.0.2",
        "mkdirp": "0.5.1",
        "multimatch": "2.1.0",
        "rimraf": "2.6.2",
        "through2": "2.0.3",
        "vinyl": "2.1.0"
      },
      "dependencies": {
        "clone": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/clone/-/clone-2.1.1.tgz",
          "integrity": "sha1-0hfR6WERjjrJpLi7oyhVU79kfNs=",
          "dev": true
        },
        "clone-stats": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/clone-stats/-/clone-stats-1.0.0.tgz",
          "integrity": "sha1-s3gt/4u1R04Yuba/D9/ngvh3doA=",
          "dev": true
        },
        "deep-extend": {
          "version": "0.5.1",
          "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.5.1.tgz",
          "integrity": "sha512-N8vBdOa+DF7zkRrDCsaOXoCs/E2fJfx9B9MrKnnSiHNh4ws7eSys6YQE4KvT1cecKmOASYQBhbKjeuDD9lT81w==",
          "dev": true
        },
        "replace-ext": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/replace-ext/-/replace-ext-1.0.0.tgz",
          "integrity": "sha1-3mMSg3P8v3w8z6TeWkgMRaZ5WOs=",
          "dev": true
        },
        "vinyl": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/vinyl/-/vinyl-2.1.0.tgz",
          "integrity": "sha1-Ah+cLPlR1rk5lDyJ617lrdT9kkw=",
          "dev": true,
          "requires": {
            "clone": "2.1.1",
            "clone-buffer": "1.0.0",
            "clone-stats": "1.0.0",
            "cloneable-readable": "1.1.2",
            "remove-trailing-separator": "1.1.0",
            "replace-ext": "1.0.0"
          }
        }
      }
    },
    "memoizee": {
      "version": "0.4.12",
      "resolved": "https://registry.npmjs.org/memoizee/-/memoizee-0.4.12.tgz",
      "integrity": "sha512-sprBu6nwxBWBvBOh5v2jcsGqiGLlL2xr2dLub3vR8dnE8YB17omwtm/0NSHl8jjNbcsJd5GMWJAnTSVe/O0Wfg==",
      "requires": {
        "d": "1.0.0",
        "es5-ext": "0.10.45",
        "es6-weak-map": "2.0.2",
        "event-emitter": "0.3.5",
        "is-promise": "2.1.0",
        "lru-queue": "0.1.0",
        "next-tick": "1.0.0",
        "timers-ext": "0.1.5"
      }
    },
    "memory-fs": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/memory-fs/-/memory-fs-0.4.1.tgz",
      "integrity": "sha1-OpoguEYlI+RHz7x+i7gO1me/xVI=",
      "dev": true,
      "requires": {
        "errno": "0.1.7",
        "readable-stream": "2.3.6"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "dev": true,
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.2",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "dev": true,
          "requires": {
            "safe-buffer": "5.1.2"
          }
        }
      }
    },
    "merge": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/merge/-/merge-1.2.0.tgz",
      "integrity": "sha1-dTHjnUlJwoGma4xabgJl6LBYlNo=",
      "dev": true
    },
    "merge-descriptors": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
      "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
    },
    "merge2": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.2.2.tgz",
      "integrity": "sha512-bgM8twH86rWni21thii6WCMQMRMmwqqdW3sGWi9IipnVAszdLXRjwDwAnyrVXo6DuP3AjRMMttZKUB48QWIFGg==",
      "dev": true
    },
    "methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
    },
    "micromatch": {
      "version": "2.3.11",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-2.3.11.tgz",
      "integrity": "sha1-hmd8l9FyCzY0MdBNDRUpO9OMFWU=",
      "dev": true,
      "requires": {
        "arr-diff": "2.0.0",
        "array-unique": "0.2.1",
        "braces": "1.8.5",
        "expand-brackets": "0.1.5",
        "extglob": "0.3.2",
        "filename-regex": "2.0.1",
        "is-extglob": "1.0.0",
        "is-glob": "2.0.1",
        "kind-of": "3.2.2",
        "normalize-path": "2.1.1",
        "object.omit": "2.0.1",
        "parse-glob": "3.0.4",
        "regex-cache": "0.4.4"
      }
    },
    "miller-rabin": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/miller-rabin/-/miller-rabin-4.0.1.tgz",
      "integrity": "sha512-115fLhvZVqWwHPbClyntxEVfVDfl9DLLTuJvq3g2O/Oxi8AiNouAHvDSzHS0viUJc+V5vm3eq91Xwqn9dp4jRA==",
      "dev": true,
      "requires": {
        "bn.js": "4.11.8",
        "brorand": "1.1.0"
      }
    },
    "mime": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.4.1.tgz",
      "integrity": "sha512-KI1+qOZu5DcW6wayYHSzR/tXKCDC5Om4s1z2QJjDULzLcmf3DvzS7oluY4HCTrc+9FiKmWUgeNLg7W3uIQvxtQ=="
    },
    "mime-db": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.33.0.tgz",
      "integrity": "sha512-BHJ/EKruNIqJf/QahvxwQZXKygOQ256myeN/Ew+THcAa5q+PjyTTMMeNQC4DZw5AwfvelsUrA6B67NKMqXDbzQ=="
    },
    "mime-types": {
      "version": "2.1.18",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.18.tgz",
      "integrity": "sha512-lc/aahn+t4/SWV/qcmumYjymLsWfN3ELhpmVuUFjgsORruuZPVSwAQryq+HHGvO/SI2KVX26bx+En+zhM8g8hQ==",
      "requires": {
        "mime-db": "1.33.0"
      }
    },
    "mimic-fn": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
      "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
      "dev": true
    },
    "mimic-response": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.0.tgz",
      "integrity": "sha1-3z02Uqc/3ta5sLJBRub9BSNTRY4=",
      "dev": true
    },
    "minimalistic-assert": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
      "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==",
      "dev": true
    },
    "minimalistic-crypto-utils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/minimalistic-crypto-utils/-/minimalistic-crypto-utils-1.0.1.tgz",
      "integrity": "sha1-9sAMHAsIIkblxNmd+4x8CDsrWCo=",
      "dev": true
    },
    "minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "dev": true,
      "requires": {
        "brace-expansion": "1.1.11"
      }
    },
    "minimist": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
      "integrity": "sha1-hX/Kv8M5fSYluCKCYuhqp6ARsF0="
    },
    "mississippi": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mississippi/-/mississippi-2.0.0.tgz",
      "integrity": "sha512-zHo8v+otD1J10j/tC+VNoGK9keCuByhKovAvdn74dmxJl9+mWHnx6EMsDN4lgRoMI/eYo2nchAxniIbUPb5onw==",
      "dev": true,
      "requires": {
        "concat-stream": "1.6.2",
        "duplexify": "3.6.0",
        "end-of-stream": "1.4.1",
        "flush-write-stream": "1.0.3",
        "from2": "2.3.0",
        "parallel-transform": "1.1.0",
        "pump": "2.0.1",
        "pumpify": "1.5.1",
        "stream-each": "1.2.2",
        "through2": "2.0.3"
      }
    },
    "mixin-deep": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.1.tgz",
      "integrity": "sha512-8ZItLHeEgaqEvd5lYBXfm4EZSFCX29Jb9K+lAHhDKzReKBQKj3R+7NOF6tjqYi9t4oI8VUfaWITJQm86wnXGNQ==",
      "dev": true,
      "requires": {
        "for-in": "1.0.2",
        "is-extendable": "1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "dev": true,
          "requires": {
            "is-plain-object": "2.0.4"
          }
        }
      }
    },
    "mkdirp": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
      "integrity": "sha1-MAV0OOrGz3+MR2fzhkjWaX11yQM=",
      "requires": {
        "minimist": "0.0.8"
      }
    },
    "morgan": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/morgan/-/morgan-1.9.0.tgz",
      "integrity": "sha1-0B+mxlhZt2/PMbPLU6OCGjEdgFE=",
      "requires": {
        "basic-auth": "2.0.0",
        "debug": "2.6.9",
        "depd": "1.1.2",
        "on-finished": "2.3.0",
        "on-headers": "1.0.1"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "move-concurrently": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/move-concurrently/-/move-concurrently-1.0.1.tgz",
      "integrity": "sha1-viwAX9oy4LKa8fBdfEszIUxwH5I=",
      "dev": true,
      "requires": {
        "aproba": "1.2.0",
        "copy-concurrently": "1.0.5",
        "fs-write-stream-atomic": "1.0.10",
        "mkdirp": "0.5.1",
        "rimraf": "2.6.2",
        "run-queue": "1.0.3"
      }
    },
    "ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "multer": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/multer/-/multer-1.3.0.tgz",
      "integrity": "sha1-CSsmcPaEb6SRSWXvyM+Uwg/sbNI=",
      "requires": {
        "append-field": "0.1.0",
        "busboy": "0.2.14",
        "concat-stream": "1.6.2",
        "mkdirp": "0.5.1",
        "object-assign": "3.0.0",
        "on-finished": "2.3.0",
        "type-is": "1.6.16",
        "xtend": "4.0.1"
      }
    },
    "multimatch": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/multimatch/-/multimatch-2.1.0.tgz",
      "integrity": "sha1-nHkGoi+0wCkZ4vX3UWG0zb1LKis=",
      "dev": true,
      "requires": {
        "array-differ": "1.0.0",
        "array-union": "1.0.2",
        "arrify": "1.0.1",
        "minimatch": "3.0.4"
      }
    },
    "mute-stream": {
      "version": "0.0.7",
      "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.7.tgz",
      "integrity": "sha1-MHXOk7whuPq0PhvE2n6BFe0ee6s=",
      "dev": true
    },
    "nan": {
      "version": "2.10.0",
      "resolved": "https://registry.npmjs.org/nan/-/nan-2.10.0.tgz",
      "integrity": "sha512-bAdJv7fBLhWC+/Bls0Oza+mvTaNQtP+1RyhhhvD95pgUJz6XM5IzgmxOkItJ9tkoCiplvAnXI1tNmmUD/eScyA==",
      "dev": true,
      "optional": true
    },
    "nanomatch": {
      "version": "1.2.9",
      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.9.tgz",
      "integrity": "sha512-n8R9bS8yQ6eSXaV6jHUpKzD8gLsin02w1HSFiegwrs9E098Ylhw5jdyKPaYqvHknHaSCKTPp7C8dGCQ0q9koXA==",
      "dev": true,
      "requires": {
        "arr-diff": "4.0.0",
        "array-unique": "0.3.2",
        "define-property": "2.0.2",
        "extend-shallow": "3.0.2",
        "fragment-cache": "0.2.1",
        "is-odd": "2.0.0",
        "is-windows": "1.0.2",
        "kind-of": "6.0.2",
        "object.pick": "1.3.0",
        "regex-not": "1.0.2",
        "snapdragon": "0.8.2",
        "to-regex": "3.0.2"
      },
      "dependencies": {
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
          "dev": true
        },
        "array-unique": {
          "version": "0.3.2",
          "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
          "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
          "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
          "dev": true
        }
      }
    },
    "natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=",
      "dev": true
    },
    "negotiator": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.1.tgz",
      "integrity": "sha1-KzJxhOiZIQEXeyhWP7XnECrNDKk="
    },
    "neo-async": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.5.1.tgz",
      "integrity": "sha512-3KL3fvuRkZ7s4IFOMfztb7zJp3QaVWnBeGoJlgB38XnCRPj/0tLzzLG5IB8NYOHbJ8g8UGrgZv44GLDk6CxTxA==",
      "dev": true
    },
    "next-tick": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/next-tick/-/next-tick-1.0.0.tgz",
      "integrity": "sha1-yobR/ogoFpsBICCOPchCS524NCw="
    },
    "nice-try": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.4.tgz",
      "integrity": "sha512-2NpiFHqC87y/zFke0fC0spBXL3bBsoh/p5H1EFhshxjCR5+0g2d6BiXbUFz9v1sAcxsk2htp2eQnNIci2dIYcA==",
      "dev": true
    },
    "node-dir": {
      "version": "0.1.8",
      "resolved": "https://registry.npmjs.org/node-dir/-/node-dir-0.1.8.tgz",
      "integrity": "sha1-VfuN62mQcHB/tn+RpGDwRIKUx30=",
      "dev": true
    },
    "node-int64": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
      "integrity": "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs=",
      "dev": true
    },
    "node-libs-browser": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/node-libs-browser/-/node-libs-browser-2.1.0.tgz",
      "integrity": "sha512-5AzFzdoIMb89hBGMZglEegffzgRg+ZFoUmisQ8HI4j1KDdpx13J0taNp2y9xPbur6W61gepGDDotGBVQ7mfUCg==",
      "dev": true,
      "requires": {
        "assert": "1.4.1",
        "browserify-zlib": "0.2.0",
        "buffer": "4.9.1",
        "console-browserify": "1.1.0",
        "constants-browserify": "1.0.0",
        "crypto-browserify": "3.12.0",
        "domain-browser": "1.2.0",
        "events": "1.1.1",
        "https-browserify": "1.0.0",
        "os-browserify": "0.3.0",
        "path-browserify": "0.0.0",
        "process": "0.11.10",
        "punycode": "1.4.1",
        "querystring-es3": "0.2.1",
        "readable-stream": "2.3.6",
        "stream-browserify": "2.0.1",
        "stream-http": "2.8.3",
        "string_decoder": "1.1.1",
        "timers-browserify": "2.0.10",
        "tty-browserify": "0.0.0",
        "url": "0.11.0",
        "util": "0.10.4",
        "vm-browserify": "0.0.4"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "dev": true,
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.2",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "dev": true,
          "requires": {
            "safe-buffer": "5.1.2"
          }
        }
      }
    },
    "node-notifier": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/node-notifier/-/node-notifier-5.2.1.tgz",
      "integrity": "sha512-MIBs+AAd6dJ2SklbbE8RUDRlIVhU8MaNLh1A9SUZDUHPiZkWLFde6UNwG41yQHZEToHgJMXqyVZ9UcS/ReOVTg==",
      "dev": true,
      "requires": {
        "growly": "1.3.0",
        "semver": "5.5.0",
        "shellwords": "0.1.1",
        "which": "1.3.1"
      }
    },
    "nodemon": {
      "version": "1.17.5",
      "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-1.17.5.tgz",
      "integrity": "sha512-FG2mWJU1Y58a9ktgMJ/RZpsiPz3b7ge77t/okZHEa4NbrlXGKZ8s1A6Q+C7+JPXohAfcPALRwvxcAn8S874pmw==",
      "dev": true,
      "requires": {
        "chokidar": "2.0.3",
        "debug": "3.1.0",
        "ignore-by-default": "1.0.1",
        "minimatch": "3.0.4",
        "pstree.remy": "1.1.0",
        "semver": "5.5.0",
        "supports-color": "5.4.0",
        "touch": "3.1.0",
        "undefsafe": "2.0.2",
        "update-notifier": "2.5.0"
      }
    },
    "nomnom": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/nomnom/-/nomnom-1.8.1.tgz",
      "integrity": "sha1-IVH3Ikcrp55Qp2/BJbuMjy5Nwqc=",
      "dev": true,
      "requires": {
        "chalk": "0.4.0",
        "underscore": "1.6.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-1.0.0.tgz",
          "integrity": "sha1-yxAt8cVvUSPquLZ817mAJ6AnkXg=",
          "dev": true
        },
        "chalk": {
          "version": "0.4.0",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-0.4.0.tgz",
          "integrity": "sha1-UZmj3c0MHv4jvAjBsCewYXbgxk8=",
          "dev": true,
          "requires": {
            "ansi-styles": "1.0.0",
            "has-color": "0.1.7",
            "strip-ansi": "0.1.1"
          }
        },
        "strip-ansi": {
          "version": "0.1.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-0.1.1.tgz",
          "integrity": "sha1-OeipjQRNFQZgq+SmgIrPcLt7yZE=",
          "dev": true
        }
      }
    },
    "nopt": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-1.0.10.tgz",
      "integrity": "sha1-bd0hvSoxQXuScn3Vhfim83YI6+4=",
      "dev": true,
      "requires": {
        "abbrev": "1.1.1"
      }
    },
    "normalize-package-data": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.4.0.tgz",
      "integrity": "sha512-9jjUFbTPfEy3R/ad/2oNbKtW9Hgovl5O1FvFWKkKblNXoN/Oou6+9+KKohPK13Yc3/TyunyWhJp6gvRNR/PPAw==",
      "dev": true,
      "requires": {
        "hosted-git-info": "2.6.0",
        "is-builtin-module": "1.0.0",
        "semver": "5.5.0",
        "validate-npm-package-license": "3.0.3"
      }
    },
    "normalize-path": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
      "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
      "dev": true,
      "requires": {
        "remove-trailing-separator": "1.1.0"
      }
    },
    "normalize-url": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-2.0.1.tgz",
      "integrity": "sha512-D6MUW4K/VzoJ4rJ01JFKxDrtY1v9wrgzCX5f2qj/lzH1m/lW6MhUZFKerVsnyjOhOsYzI9Kqqak+10l4LvLpMw==",
      "dev": true,
      "requires": {
        "prepend-http": "2.0.0",
        "query-string": "5.1.1",
        "sort-keys": "2.0.0"
      },
      "dependencies": {
        "prepend-http": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-2.0.0.tgz",
          "integrity": "sha1-6SQ0v6XqjBn0HN/UAddBo8gZ2Jc=",
          "dev": true
        }
      }
    },
    "npm-run-path": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
      "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
      "dev": true,
      "requires": {
        "path-key": "2.0.1"
      }
    },
    "number-is-nan": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
      "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",
      "dev": true
    },
    "nwmatcher": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/nwmatcher/-/nwmatcher-1.4.4.tgz",
      "integrity": "sha512-3iuY4N5dhgMpCUrOVnuAdGrgxVqV2cJpM+XNccjR2DKOB1RUP0aA+wGXEiNziG/UKboFyGBIoKOaNlJxx8bciQ==",
      "dev": true
    },
    "oauth-sign": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.8.2.tgz",
      "integrity": "sha1-Rqarfwrq2N6unsBWV4C31O/rnUM=",
      "dev": true
    },
    "object-assign": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-3.0.0.tgz",
      "integrity": "sha1-m+3VygiXlJvKR+f/QIBi1Un1h/I="
    },
    "object-component": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/object-component/-/object-component-0.0.3.tgz",
      "integrity": "sha1-8MaapQ78lbhmwYb0AKM3acsvEpE="
    },
    "object-copy": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
      "dev": true,
      "requires": {
        "copy-descriptor": "0.1.1",
        "define-property": "0.2.5",
        "kind-of": "3.2.2"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "0.1.6"
          }
        }
      }
    },
    "object-hash": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-1.3.0.tgz",
      "integrity": "sha512-05KzQ70lSeGSrZJQXE5wNDiTkBJDlUT/myi6RX9dVIvz7a7Qh4oH93BQdiPMn27nldYvVQCKMUaM83AfizZlsQ=="
    },
    "object-visit": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
      "dev": true,
      "requires": {
        "isobject": "3.0.1"
      },
      "dependencies": {
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "object.omit": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/object.omit/-/object.omit-2.0.1.tgz",
      "integrity": "sha1-Gpx0SCnznbuFjHbKNXmuKlTr0fo=",
      "dev": true,
      "requires": {
        "for-own": "0.1.5",
        "is-extendable": "0.1.1"
      }
    },
    "object.pick": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
      "dev": true,
      "requires": {
        "isobject": "3.0.1"
      },
      "dependencies": {
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "on-finished": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "requires": {
        "ee-first": "1.1.1"
      }
    },
    "on-headers": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.1.tgz",
      "integrity": "sha1-ko9dD0cNSTQmUepnlLCFfBAGk/c="
    },
    "once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "dev": true,
      "requires": {
        "wrappy": "1.0.2"
      }
    },
    "onetime": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
      "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
      "dev": true,
      "requires": {
        "mimic-fn": "1.2.0"
      }
    },
    "optimist": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.6.1.tgz",
      "integrity": "sha1-2j6nRob6IaGaERwybpDrFaAZZoY=",
      "dev": true,
      "requires": {
        "minimist": "0.0.8",
        "wordwrap": "0.0.3"
      }
    },
    "optional": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/optional/-/optional-0.1.4.tgz",
      "integrity": "sha512-gtvrrCfkE08wKcgXaVwQVgwEQ8vel2dc5DDBn9RLQZ3YtmtkBss6A2HY6BnJH4N/4Ku97Ri/SF8sNWE2225WJw=="
    },
    "optionator": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.2.tgz",
      "integrity": "sha1-NkxeQJ0/TWMB1sC0wFu6UBgK62Q=",
      "dev": true,
      "requires": {
        "deep-is": "0.1.3",
        "fast-levenshtein": "2.0.6",
        "levn": "0.3.0",
        "prelude-ls": "1.1.2",
        "type-check": "0.3.2",
        "wordwrap": "1.0.0"
      },
      "dependencies": {
        "wordwrap": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
          "integrity": "sha1-J1hIEIkUVqQXHI0CJkQa3pDLyus=",
          "dev": true
        }
      }
    },
    "ora": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/ora/-/ora-0.2.3.tgz",
      "integrity": "sha1-N1J9Igrc1Tw5tzVx11QVbV22V6Q=",
      "dev": true,
      "requires": {
        "chalk": "1.1.3",
        "cli-cursor": "1.0.2",
        "cli-spinners": "0.1.2",
        "object-assign": "4.1.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "2.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
          "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
          "dev": true
        },
        "chalk": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
          "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
          "dev": true,
          "requires": {
            "ansi-styles": "2.2.1",
            "escape-string-regexp": "1.0.5",
            "has-ansi": "2.0.0",
            "strip-ansi": "3.0.1",
            "supports-color": "2.0.0"
          }
        },
        "cli-cursor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-1.0.2.tgz",
          "integrity": "sha1-ZNo/fValRBLll5S9Ytw1KV6PKYc=",
          "dev": true,
          "requires": {
            "restore-cursor": "1.0.1"
          }
        },
        "object-assign": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
          "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
          "dev": true
        },
        "onetime": {
          "version": "1.1.0",
          "resolved": "http://registry.npmjs.org/onetime/-/onetime-1.1.0.tgz",
          "integrity": "sha1-ofeDj4MUxRbwXs78vEzP4EtO14k=",
          "dev": true
        },
        "restore-cursor": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-1.0.1.tgz",
          "integrity": "sha1-NGYfRohjJ/7SmRR5FSJS35LapUE=",
          "dev": true,
          "requires": {
            "exit-hook": "1.1.1",
            "onetime": "1.1.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "2.1.1"
          }
        },
        "supports-color": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
          "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
          "dev": true
        }
      }
    },
    "os-browserify": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/os-browserify/-/os-browserify-0.3.0.tgz",
      "integrity": "sha1-hUNzx/XCMVkU/Jv8a9gjj92h7Cc=",
      "dev": true
    },
    "os-homedir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
      "integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M=",
      "dev": true
    },
    "os-locale": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-2.1.0.tgz",
      "integrity": "sha512-3sslG3zJbEYcaC4YVAvDorjGxc7tv6KVATnLPZONiljsUncvihe9BQoVCEs0RZ1kmf4Hk9OBqlZfJZWI4GanKA==",
      "dev": true,
      "requires": {
        "execa": "0.7.0",
        "lcid": "1.0.0",
        "mem": "1.1.0"
      }
    },
    "os-tmpdir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=",
      "dev": true
    },
    "p-cancelable": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-0.3.0.tgz",
      "integrity": "sha512-RVbZPLso8+jFeq1MfNvgXtCRED2raz/dKpacfTNxsx6pLEpEomM7gah6VeHSYV3+vo0OAi4MkArtQcWWXuQoyw==",
      "dev": true
    },
    "p-each-series": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-each-series/-/p-each-series-1.0.0.tgz",
      "integrity": "sha1-kw89Et0fUOdDRFeiLNbwSsatf3E=",
      "dev": true,
      "requires": {
        "p-reduce": "1.0.0"
      }
    },
    "p-finally": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
      "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=",
      "dev": true
    },
    "p-is-promise": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/p-is-promise/-/p-is-promise-1.1.0.tgz",
      "integrity": "sha1-nJRWmJ6fZYgBewQ01WCXZ1w9oF4=",
      "dev": true
    },
    "p-lazy": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-lazy/-/p-lazy-1.0.0.tgz",
      "integrity": "sha1-7FPIAvLuOsKPFmzILQsrAt4nqDU=",
      "dev": true
    },
    "p-limit": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.2.0.tgz",
      "integrity": "sha512-Y/OtIaXtUPr4/YpMv1pCL5L5ed0rumAaAeBSj12F+bSlMdys7i8oQF/GUJmfpTS/QoaRrS/k6pma29haJpsMng==",
      "dev": true,
      "requires": {
        "p-try": "1.0.0"
      }
    },
    "p-locate": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
      "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
      "dev": true,
      "requires": {
        "p-limit": "1.2.0"
      }
    },
    "p-map": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-1.2.0.tgz",
      "integrity": "sha512-r6zKACMNhjPJMTl8KcFH4li//gkrXWfbD6feV8l6doRHlzljFWGJ2AP6iKaCJXyZmAUMOPtvbW7EXkbWO/pLEA==",
      "dev": true
    },
    "p-reduce": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-reduce/-/p-reduce-1.0.0.tgz",
      "integrity": "sha1-GMKw3ZNqRpClKfgjH1ig/bakffo=",
      "dev": true
    },
    "p-timeout": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/p-timeout/-/p-timeout-2.0.1.tgz",
      "integrity": "sha512-88em58dDVB/KzPEx1X0N3LwFfYZPyDc4B6eF38M1rk9VTZMbxXXgjugz8mmwpS9Ox4BDZ+t6t3QP5+/gazweIA==",
      "dev": true,
      "requires": {
        "p-finally": "1.0.0"
      }
    },
    "p-try": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
      "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
      "dev": true
    },
    "package-json": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/package-json/-/package-json-4.0.1.tgz",
      "integrity": "sha1-iGmgQBJTZhxMTKPabCEh7VVfXu0=",
      "dev": true,
      "requires": {
        "got": "6.7.1",
        "registry-auth-token": "3.3.2",
        "registry-url": "3.1.0",
        "semver": "5.5.0"
      }
    },
    "pako": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.6.tgz",
      "integrity": "sha512-lQe48YPsMJAig+yngZ87Lus+NF+3mtu7DVOBu6b/gHO1YpKwIj5AWjZ/TOS7i46HD/UixzWb1zeWDZfGZ3iYcg==",
      "dev": true
    },
    "parallel-transform": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/parallel-transform/-/parallel-transform-1.1.0.tgz",
      "integrity": "sha1-1BDwZbBdojCB/NEPKIVMKb2jOwY=",
      "dev": true,
      "requires": {
        "cyclist": "0.2.2",
        "inherits": "2.0.3",
        "readable-stream": "2.3.6"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "dev": true,
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.2",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "dev": true,
          "requires": {
            "safe-buffer": "5.1.2"
          }
        }
      }
    },
    "parse-asn1": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/parse-asn1/-/parse-asn1-5.1.1.tgz",
      "integrity": "sha512-KPx7flKXg775zZpnp9SxJlz00gTd4BmJ2yJufSc44gMCRrRQ7NSzAcSJQfifuOLgW6bEi+ftrALtsgALeB2Adw==",
      "dev": true,
      "requires": {
        "asn1.js": "4.10.1",
        "browserify-aes": "1.2.0",
        "create-hash": "1.2.0",
        "evp_bytestokey": "1.0.3",
        "pbkdf2": "3.0.16"
      }
    },
    "parse-glob": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/parse-glob/-/parse-glob-3.0.4.tgz",
      "integrity": "sha1-ssN2z7EfNVE7rdFz7wu246OIORw=",
      "dev": true,
      "requires": {
        "glob-base": "0.3.0",
        "is-dotfile": "1.0.3",
        "is-extglob": "1.0.0",
        "is-glob": "2.0.1"
      }
    },
    "parse-json": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
      "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
      "dev": true,
      "requires": {
        "error-ex": "1.3.1"
      }
    },
    "parse-passwd": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/parse-passwd/-/parse-passwd-1.0.0.tgz",
      "integrity": "sha1-bVuTSkVpk7I9N/QKOC1vFmao5cY=",
      "dev": true
    },
    "parse5": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-1.5.1.tgz",
      "integrity": "sha1-m387DeMr543CQBsXVzzK8Pb1nZQ=",
      "dev": true
    },
    "parseqs": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/parseqs/-/parseqs-0.0.5.tgz",
      "integrity": "sha1-1SCKNzjkZ2bikbouoXNoSSGouJ0=",
      "requires": {
        "better-assert": "1.0.2"
      }
    },
    "parseuri": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/parseuri/-/parseuri-0.0.5.tgz",
      "integrity": "sha1-gCBKUNTbt3m/3G6+J3jZDkvOMgo=",
      "requires": {
        "better-assert": "1.0.2"
      }
    },
    "parseurl": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.2.tgz",
      "integrity": "sha1-/CidTtiZMRlGDBViUyYs3I3mW/M="
    },
    "pascalcase": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
      "dev": true
    },
    "path-browserify": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-0.0.0.tgz",
      "integrity": "sha1-oLhwcpquIUAFt9UDLsLLuw+0RRo=",
      "dev": true
    },
    "path-dirname": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",
      "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA=",
      "dev": true
    },
    "path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
      "dev": true
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
      "dev": true
    },
    "path-is-inside": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/path-is-inside/-/path-is-inside-1.0.2.tgz",
      "integrity": "sha1-NlQX3t5EQw0cEa9hAn+s8HS9/FM=",
      "dev": true
    },
    "path-key": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
      "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
      "dev": true
    },
    "path-parse": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.5.tgz",
      "integrity": "sha1-PBrfhx6pzWyUMbbqK9dKD/BVxME=",
      "dev": true
    },
    "path-to-regexp": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
      "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
    },
    "path-type": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz",
      "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",
      "dev": true,
      "requires": {
        "graceful-fs": "4.1.11",
        "pify": "2.3.0",
        "pinkie-promise": "2.0.1"
      },
      "dependencies": {
        "pify": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
          "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
          "dev": true
        }
      }
    },
    "pause-stream": {
      "version": "0.0.11",
      "resolved": "https://registry.npmjs.org/pause-stream/-/pause-stream-0.0.11.tgz",
      "integrity": "sha1-/lo0sMvOErWqaitAPuLnO2AvFEU=",
      "dev": true,
      "requires": {
        "through": "2.3.8"
      }
    },
    "pbkdf2": {
      "version": "3.0.16",
      "resolved": "https://registry.npmjs.org/pbkdf2/-/pbkdf2-3.0.16.tgz",
      "integrity": "sha512-y4CXP3thSxqf7c0qmOF+9UeOTrifiVTIM+u7NWlq+PRsHbr7r7dpCmvzrZxa96JJUNi0Y5w9VqG5ZNeCVMoDcA==",
      "dev": true,
      "requires": {
        "create-hash": "1.2.0",
        "create-hmac": "1.1.7",
        "ripemd160": "2.0.2",
        "safe-buffer": "5.1.2",
        "sha.js": "2.4.11"
      }
    },
    "performance-now": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
      "dev": true
    },
    "pify": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
      "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
      "dev": true
    },
    "pinkie": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
      "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
      "dev": true
    },
    "pinkie-promise": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
      "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
      "dev": true,
      "requires": {
        "pinkie": "2.0.4"
      }
    },
    "pkg-dir": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-2.0.0.tgz",
      "integrity": "sha1-9tXREJ4Z1j7fQo4L1X4Sd3YVM0s=",
      "dev": true,
      "requires": {
        "find-up": "2.1.0"
      }
    },
    "posix-character-classes": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
      "dev": true
    },
    "prelude-ls": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
      "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ=",
      "dev": true
    },
    "prepend-http": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-1.0.4.tgz",
      "integrity": "sha1-1PRWKwzjaW5BrFLQ4ALlemNdxtw=",
      "dev": true
    },
    "preserve": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/preserve/-/preserve-0.2.0.tgz",
      "integrity": "sha1-gV7R9uvGWSb4ZbMQwHE7yzMVzks=",
      "dev": true
    },
    "prettier": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-1.13.4.tgz",
      "integrity": "sha512-emsEZ2bAigL1lq6ssgkpPm1MIBqgeTvcp90NxOP5XDqprub/V/WS2Hfgih3mS7/1dqTUvhG+sxx1Dv8crnVexA==",
      "dev": true
    },
    "pretty-bytes": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/pretty-bytes/-/pretty-bytes-4.0.2.tgz",
      "integrity": "sha1-sr+C5zUNZcbDOqlaqlpPYyf2HNk=",
      "dev": true
    },
    "pretty-format": {
      "version": "21.2.1",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-21.2.1.tgz",
      "integrity": "sha512-ZdWPGYAnYfcVP8yKA3zFjCn8s4/17TeYH28MXuC8vTp0o21eXjbFGcOAXZEaDaOFJjc3h2qa7HQNHNshhvoh2A==",
      "dev": true,
      "requires": {
        "ansi-regex": "3.0.0",
        "ansi-styles": "3.2.1"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        }
      }
    },
    "private": {
      "version": "0.1.8",
      "resolved": "https://registry.npmjs.org/private/-/private-0.1.8.tgz",
      "integrity": "sha512-VvivMrbvd2nKkiG38qjULzlc+4Vx4wm/whI9pQD35YrARNnhxeiRktSOhSukRLFNlzg6Br/cJPet5J/u19r/mg==",
      "dev": true
    },
    "process": {
      "version": "0.11.10",
      "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
      "integrity": "sha1-czIwDoQBYb2j5podHZGn1LwW8YI=",
      "dev": true
    },
    "process-nextick-args": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.0.tgz",
      "integrity": "sha512-MtEC1TqN0EU5nephaJ4rAtThHtC86dNN9qCuEhtshvpVBkAW5ZO7BASN9REnF9eoXGcRub+pFuKEpOHE+HbEMw=="
    },
    "promise-inflight": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/promise-inflight/-/promise-inflight-1.0.1.tgz",
      "integrity": "sha1-mEcocL8igTL8vdhoEputEsPAKeM=",
      "dev": true
    },
    "proxy-addr": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.3.tgz",
      "integrity": "sha512-jQTChiCJteusULxjBp8+jftSQE5Obdl3k4cnmLA6WXtK6XFuWRnvVL7aCiBqaLPM8c4ph0S4tKna8XvmIwEnXQ==",
      "requires": {
        "forwarded": "0.1.2",
        "ipaddr.js": "1.6.0"
      }
    },
    "prr": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/prr/-/prr-1.0.1.tgz",
      "integrity": "sha1-0/wRS6BplaRexok/SEzrHXj19HY=",
      "dev": true
    },
    "ps-tree": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/ps-tree/-/ps-tree-1.1.0.tgz",
      "integrity": "sha1-tCGyQUDWID8e08dplrRCewjowBQ=",
      "dev": true,
      "requires": {
        "event-stream": "3.3.4"
      }
    },
    "pseudomap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
      "integrity": "sha1-8FKijacOYYkX7wqKw0wa5aaChrM=",
      "dev": true
    },
    "psl": {
      "version": "1.1.27",
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.1.27.tgz",
      "integrity": "sha512-J8tJX5tAeEp9tQTI2w2aMZ6V1INuU4JmNaNPRuHAqjjVq3ZJ+jV3+tcT3ncgTnBxvwJy740IB/WZrxFus2VdMA==",
      "dev": true
    },
    "pstree.remy": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.0.tgz",
      "integrity": "sha512-q5I5vLRMVtdWa8n/3UEzZX7Lfghzrg9eG2IKk2ENLSofKRCXVqMvMUHxCKgXNaqH/8ebhBxrqftHWnyTFweJ5Q==",
      "dev": true,
      "requires": {
        "ps-tree": "1.1.0"
      }
    },
    "public-encrypt": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/public-encrypt/-/public-encrypt-4.0.2.tgz",
      "integrity": "sha512-4kJ5Esocg8X3h8YgJsKAuoesBgB7mqH3eowiDzMUPKiRDDE7E/BqqZD1hnTByIaAFiwAw246YEltSq7tdrOH0Q==",
      "dev": true,
      "requires": {
        "bn.js": "4.11.8",
        "browserify-rsa": "4.0.1",
        "create-hash": "1.2.0",
        "parse-asn1": "5.1.1",
        "randombytes": "2.0.6"
      }
    },
    "pump": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pump/-/pump-2.0.1.tgz",
      "integrity": "sha512-ruPMNRkN3MHP1cWJc9OWr+T/xDP0jhXYCLfJcBuX54hhfIBnaQmAUMfDcG4DM5UMWByBbJY69QSphm3jtDKIkA==",
      "dev": true,
      "requires": {
        "end-of-stream": "1.4.1",
        "once": "1.4.0"
      }
    },
    "pumpify": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/pumpify/-/pumpify-1.5.1.tgz",
      "integrity": "sha512-oClZI37HvuUJJxSKKrC17bZ9Cu0ZYhEAGPsPUy9KlMUmv9dKX2o77RUmq7f3XjIxbwyGwYzbzQ1L2Ks8sIradQ==",
      "dev": true,
      "requires": {
        "duplexify": "3.6.0",
        "inherits": "2.0.3",
        "pump": "2.0.1"
      }
    },
    "punycode": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
      "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
      "dev": true
    },
    "qs": {
      "version": "6.5.1",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.1.tgz",
      "integrity": "sha512-eRzhrN1WSINYCDCbrz796z37LOe3m5tmW7RQf6oBntukAG1nmovJvhnwHHRMAfeoItc1m2Hk02WER2aQ/iqs+A=="
    },
    "query-string": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/query-string/-/query-string-5.1.1.tgz",
      "integrity": "sha512-gjWOsm2SoGlgLEdAGt7a6slVOk9mGiXmPFMqrEhLQ68rhQuBnpfs3+EmlvqKyxnCo9/PPlF+9MtY02S1aFg+Jw==",
      "dev": true,
      "requires": {
        "decode-uri-component": "0.2.0",
        "object-assign": "4.1.1",
        "strict-uri-encode": "1.1.0"
      },
      "dependencies": {
        "object-assign": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
          "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
          "dev": true
        }
      }
    },
    "querystring": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz",
      "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA=",
      "dev": true
    },
    "querystring-es3": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/querystring-es3/-/querystring-es3-0.2.1.tgz",
      "integrity": "sha1-nsYfeQSYdXB9aUFFlv2Qek1xHnM=",
      "dev": true
    },
    "randomatic": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/randomatic/-/randomatic-3.0.0.tgz",
      "integrity": "sha512-VdxFOIEY3mNO5PtSRkkle/hPJDHvQhK21oa73K4yAc9qmp6N429gAyF1gZMOTMeS0/AYzaV/2Trcef+NaIonSA==",
      "dev": true,
      "requires": {
        "is-number": "4.0.0",
        "kind-of": "6.0.2",
        "math-random": "1.0.1"
      },
      "dependencies": {
        "is-number": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-4.0.0.tgz",
          "integrity": "sha512-rSklcAIlf1OmFdyAqbnWTLVelsQ58uvZ66S/ZyawjWqIviTWCjg2PzVGw8WUA+nNuPTqb4wgA+NszrJ+08LlgQ==",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
          "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
          "dev": true
        }
      }
    },
    "randombytes": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.0.6.tgz",
      "integrity": "sha512-CIQ5OFxf4Jou6uOKe9t1AOgqpeU5fd70A8NPdHSGeYXqXsPe6peOwI0cUl88RWZ6sP1vPMV3avd/R6cZ5/sP1A==",
      "dev": true,
      "requires": {
        "safe-buffer": "5.1.2"
      }
    },
    "randomfill": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/randomfill/-/randomfill-1.0.4.tgz",
      "integrity": "sha512-87lcbR8+MhcWcUiQ+9e+Rwx8MyR2P7qnt15ynUlbm3TU/fjbgz4GsvfSUDTemtCCtVCqb4ZcEFlyPNTh9bBTLw==",
      "dev": true,
      "requires": {
        "randombytes": "2.0.6",
        "safe-buffer": "5.1.2"
      }
    },
    "range-parser": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.0.tgz",
      "integrity": "sha1-9JvmtIeJTdxA3MlKMi9hEJLgDV4="
    },
    "raw-body": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.3.2.tgz",
      "integrity": "sha1-vNYMd9Prk83gBQKVw/N5OJvIj4k=",
      "requires": {
        "bytes": "3.0.0",
        "http-errors": "1.6.2",
        "iconv-lite": "0.4.19",
        "unpipe": "1.0.0"
      },
      "dependencies": {
        "depd": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.1.tgz",
          "integrity": "sha1-V4O04cRZ8G+lyif5kfPQbnoxA1k="
        },
        "http-errors": {
          "version": "1.6.2",
          "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.2.tgz",
          "integrity": "sha1-CgAsyFcHGSp+eUbO7cERVfYOxzY=",
          "requires": {
            "depd": "1.1.1",
            "inherits": "2.0.3",
            "setprototypeof": "1.0.3",
            "statuses": "1.5.0"
          }
        },
        "setprototypeof": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.0.3.tgz",
          "integrity": "sha1-ZlZ+NwQ+608E2RvWWMDL77VbjgQ="
        }
      }
    },
    "rc": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
      "dev": true,
      "requires": {
        "deep-extend": "0.6.0",
        "ini": "1.3.5",
        "minimist": "1.2.0",
        "strip-json-comments": "2.0.1"
      },
      "dependencies": {
        "minimist": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
          "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ=",
          "dev": true
        }
      }
    },
    "read-chunk": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/read-chunk/-/read-chunk-2.1.0.tgz",
      "integrity": "sha1-agTAkoAF7Z1C4aasVgDhnLx/9lU=",
      "dev": true,
      "requires": {
        "pify": "3.0.0",
        "safe-buffer": "5.1.2"
      }
    },
    "read-pkg": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz",
      "integrity": "sha1-9f+qXs0pyzHAR0vKfXVra7KePyg=",
      "dev": true,
      "requires": {
        "load-json-file": "1.1.0",
        "normalize-package-data": "2.4.0",
        "path-type": "1.1.0"
      }
    },
    "read-pkg-up": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz",
      "integrity": "sha1-nWPBMnbAZZGNV/ACpX9AobZD+wI=",
      "dev": true,
      "requires": {
        "find-up": "1.1.2",
        "read-pkg": "1.1.0"
      },
      "dependencies": {
        "find-up": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",
          "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
          "dev": true,
          "requires": {
            "path-exists": "2.1.0",
            "pinkie-promise": "2.0.1"
          }
        },
        "path-exists": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",
          "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
          "dev": true,
          "requires": {
            "pinkie-promise": "2.0.1"
          }
        }
      }
    },
    "readable-stream": {
      "version": "1.1.14",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
      "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
      "requires": {
        "core-util-is": "1.0.2",
        "inherits": "2.0.3",
        "isarray": "0.0.1",
        "string_decoder": "0.10.31"
      }
    },
    "readdirp": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.1.0.tgz",
      "integrity": "sha1-TtCtBg3zBzMAxIRANz9y0cxkLXg=",
      "dev": true,
      "requires": {
        "graceful-fs": "4.1.11",
        "minimatch": "3.0.4",
        "readable-stream": "2.3.6",
        "set-immediate-shim": "1.0.1"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "dev": true,
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.2",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "dev": true,
          "requires": {
            "safe-buffer": "5.1.2"
          }
        }
      }
    },
    "recast": {
      "version": "0.15.0",
      "resolved": "https://registry.npmjs.org/recast/-/recast-0.15.0.tgz",
      "integrity": "sha512-47C2mIxQYvFICrTNuV4+xGgBa1nAoq42ANN5oDTSBIJ50NX7jcki7gAC6HWYptnQgHmqIRTHJq8OKdi3fwgyNQ==",
      "dev": true,
      "requires": {
        "ast-types": "0.11.5",
        "esprima": "4.0.0",
        "private": "0.1.8",
        "source-map": "0.6.1"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "rechoir": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/rechoir/-/rechoir-0.6.2.tgz",
      "integrity": "sha1-hSBLVNuoLVdC4oyWdW70OvUOM4Q=",
      "dev": true,
      "requires": {
        "resolve": "1.1.7"
      }
    },
    "reflect-metadata": {
      "version": "0.1.12",
      "resolved": "https://registry.npmjs.org/reflect-metadata/-/reflect-metadata-0.1.12.tgz",
      "integrity": "sha512-n+IyV+nGz3+0q3/Yf1ra12KpCyi001bi4XFxSjbiWWjfqb52iTTtpGXmCCAOWWIAn9KEuFZKGqBERHmrtScZ3A=="
    },
    "regenerate": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.0.tgz",
      "integrity": "sha512-1G6jJVDWrt0rK99kBjvEtziZNCICAuvIPkSiUFIQxVP06RCVpq3dmDo2oi6ABpYaDYaTRr67BEhL8r1wgEZZKg==",
      "dev": true
    },
    "regenerator-runtime": {
      "version": "0.11.1",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.11.1.tgz",
      "integrity": "sha512-MguG95oij0fC3QV3URf4V2SDYGJhJnJGqvIIgdECeODCT98wSWDAJ94SSuVpYQUoTcGUIL6L4yNB7j1DFFHSBg==",
      "dev": true
    },
    "regenerator-transform": {
      "version": "0.10.1",
      "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.10.1.tgz",
      "integrity": "sha512-PJepbvDbuK1xgIgnau7Y90cwaAmO/LCLMI2mPvaXq2heGMR3aWW5/BQvYrhJ8jgmQjXewXvBjzfqKcVOmhjZ6Q==",
      "dev": true,
      "requires": {
        "babel-runtime": "6.26.0",
        "babel-types": "6.26.0",
        "private": "0.1.8"
      }
    },
    "regex-cache": {
      "version": "0.4.4",
      "resolved": "https://registry.npmjs.org/regex-cache/-/regex-cache-0.4.4.tgz",
      "integrity": "sha512-nVIZwtCjkC9YgvWkpM55B5rBhBYRZhAaJbgcFYXXsHnbZ9UZI9nnVWYZpBlCqv9ho2eZryPnWrZGsOdPwVWXWQ==",
      "dev": true,
      "requires": {
        "is-equal-shallow": "0.1.3"
      }
    },
    "regex-not": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
      "dev": true,
      "requires": {
        "extend-shallow": "3.0.2",
        "safe-regex": "1.1.0"
      }
    },
    "regexpu-core": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-2.0.0.tgz",
      "integrity": "sha1-SdA4g3uNz4v6W5pCE5k45uoq4kA=",
      "dev": true,
      "requires": {
        "regenerate": "1.4.0",
        "regjsgen": "0.2.0",
        "regjsparser": "0.1.5"
      }
    },
    "registry-auth-token": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-3.3.2.tgz",
      "integrity": "sha512-JL39c60XlzCVgNrO+qq68FoNb56w/m7JYvGR2jT5iR1xBrUA3Mfx5Twk5rqTThPmQKMWydGmq8oFtDlxfrmxnQ==",
      "dev": true,
      "requires": {
        "rc": "1.2.8",
        "safe-buffer": "5.1.2"
      }
    },
    "registry-url": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/registry-url/-/registry-url-3.1.0.tgz",
      "integrity": "sha1-PU74cPc93h138M+aOBQyRE4XSUI=",
      "dev": true,
      "requires": {
        "rc": "1.2.8"
      }
    },
    "regjsgen": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.2.0.tgz",
      "integrity": "sha1-bAFq3qxVT3WCP+N6wFuS1aTtsfc=",
      "dev": true
    },
    "regjsparser": {
      "version": "0.1.5",
      "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.1.5.tgz",
      "integrity": "sha1-fuj4Tcb6eS0/0K4ijSS9lJ6tIFw=",
      "dev": true,
      "requires": {
        "jsesc": "0.5.0"
      },
      "dependencies": {
        "jsesc": {
          "version": "0.5.0",
          "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
          "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0=",
          "dev": true
        }
      }
    },
    "remove-trailing-separator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
      "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8=",
      "dev": true
    },
    "repeat-element": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.2.tgz",
      "integrity": "sha1-7wiaF40Ug7quTZPrmLT55OEdmQo=",
      "dev": true
    },
    "repeat-string": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
      "dev": true
    },
    "repeating": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/repeating/-/repeating-2.0.1.tgz",
      "integrity": "sha1-UhTFOpJtNVJwdSf7q0FdvAjQbdo=",
      "dev": true,
      "requires": {
        "is-finite": "1.0.2"
      }
    },
    "replace-ext": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/replace-ext/-/replace-ext-0.0.1.tgz",
      "integrity": "sha1-KbvZIHinOfC8zitO5B6DeVNSKSQ=",
      "dev": true
    },
    "request": {
      "version": "2.87.0",
      "resolved": "https://registry.npmjs.org/request/-/request-2.87.0.tgz",
      "integrity": "sha512-fcogkm7Az5bsS6Sl0sibkbhcKsnyon/jV1kF3ajGmF0c8HrttdKTPRT9hieOaQHA5HEq6r8OyWOo/o781C1tNw==",
      "dev": true,
      "requires": {
        "aws-sign2": "0.7.0",
        "aws4": "1.7.0",
        "caseless": "0.12.0",
        "combined-stream": "1.0.6",
        "extend": "3.0.1",
        "forever-agent": "0.6.1",
        "form-data": "2.3.2",
        "har-validator": "5.0.3",
        "http-signature": "1.2.0",
        "is-typedarray": "1.0.0",
        "isstream": "0.1.2",
        "json-stringify-safe": "5.0.1",
        "mime-types": "2.1.18",
        "oauth-sign": "0.8.2",
        "performance-now": "2.1.0",
        "qs": "6.5.1",
        "safe-buffer": "5.1.2",
        "tough-cookie": "2.3.4",
        "tunnel-agent": "0.6.0",
        "uuid": "3.2.1"
      },
      "dependencies": {
        "tough-cookie": {
          "version": "2.3.4",
          "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.3.4.tgz",
          "integrity": "sha512-TZ6TTfI5NtZnuyy/Kecv+CnoROnyXn2DN97LontgQpCwsX2XyLYCC0ENhYkehSOwAp8rTQKc/NUIF7BkQ5rKLA==",
          "dev": true,
          "requires": {
            "punycode": "1.4.1"
          }
        }
      }
    },
    "require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
      "dev": true
    },
    "require-main-filename": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz",
      "integrity": "sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE=",
      "dev": true
    },
    "resolve": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.1.7.tgz",
      "integrity": "sha1-IDEU2CrSxe2ejgQRs5ModeiJ6Xs=",
      "dev": true
    },
    "resolve-cwd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-2.0.0.tgz",
      "integrity": "sha1-AKn3OHVW4nA46uIyyqNypqWbZlo=",
      "dev": true,
      "requires": {
        "resolve-from": "3.0.0"
      }
    },
    "resolve-dir": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/resolve-dir/-/resolve-dir-1.0.1.tgz",
      "integrity": "sha1-eaQGRMNivoLybv/nOcm7U4IEb0M=",
      "dev": true,
      "requires": {
        "expand-tilde": "2.0.2",
        "global-modules": "1.0.0"
      }
    },
    "resolve-from": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
      "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g=",
      "dev": true
    },
    "resolve-url": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
      "dev": true
    },
    "responselike": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/responselike/-/responselike-1.0.2.tgz",
      "integrity": "sha1-kYcg7ztjHFZCvgaPFa3lpG9Loec=",
      "dev": true,
      "requires": {
        "lowercase-keys": "1.0.1"
      }
    },
    "restore-cursor": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
      "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
      "dev": true,
      "requires": {
        "onetime": "2.0.1",
        "signal-exit": "3.0.2"
      }
    },
    "ret": {
      "version": "0.1.15",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
      "dev": true
    },
    "right-align": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/right-align/-/right-align-0.1.3.tgz",
      "integrity": "sha1-YTObci/mo1FWiSENJOFMlhSGE+8=",
      "dev": true,
      "optional": true,
      "requires": {
        "align-text": "0.1.4"
      }
    },
    "rimraf": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.6.2.tgz",
      "integrity": "sha512-lreewLK/BlghmxtfH36YYVg1i8IAce4TI7oao75I1g245+6BctqTVQiBP3YUJ9C6DQOXJmkYR9X9fCLtCOJc5w==",
      "dev": true,
      "requires": {
        "glob": "7.1.2"
      }
    },
    "ripemd160": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/ripemd160/-/ripemd160-2.0.2.tgz",
      "integrity": "sha512-ii4iagi25WusVoiC4B4lq7pbXfAp3D9v5CwfkY33vffw2+pkDjY1D8GaN7spsxvCSx8dkPqOZCEZyfxcmJG2IA==",
      "dev": true,
      "requires": {
        "hash-base": "3.0.4",
        "inherits": "2.0.3"
      }
    },
    "rsvp": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/rsvp/-/rsvp-3.6.2.tgz",
      "integrity": "sha512-OfWGQTb9vnwRjwtA2QwpG2ICclHC3pgXZO5xt8H2EfgDquO0qVdSb5T88L4qJVAEugbS56pAuV4XZM58UX8ulw==",
      "dev": true
    },
    "run-async": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.3.0.tgz",
      "integrity": "sha1-A3GrSuC91yDUFm19/aZP96RFpsA=",
      "dev": true,
      "requires": {
        "is-promise": "2.1.0"
      }
    },
    "run-queue": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/run-queue/-/run-queue-1.0.3.tgz",
      "integrity": "sha1-6Eg5bwV9Ij8kOGkkYY4laUFh7Ec=",
      "dev": true,
      "requires": {
        "aproba": "1.2.0"
      }
    },
    "rxjs": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.2.0.tgz",
      "integrity": "sha512-qBzf5uu6eOKiCZuAE0SgZ0/Qp+l54oeVxFfC2t+mJ2SFI6IB8gmMdJHs5DUMu5kqifqcCtsKS2XHjhZu6RKvAw==",
      "requires": {
        "tslib": "1.9.2"
      }
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
    "safe-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
      "dev": true,
      "requires": {
        "ret": "0.1.15"
      }
    },
    "sane": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/sane/-/sane-2.5.2.tgz",
      "integrity": "sha1-tNwYYcIbQn6SlQej51HiosuKs/o=",
      "dev": true,
      "requires": {
        "anymatch": "2.0.0",
        "capture-exit": "1.2.0",
        "exec-sh": "0.2.1",
        "fb-watchman": "2.0.0",
        "fsevents": "1.2.4",
        "micromatch": "3.1.10",
        "minimist": "1.2.0",
        "walker": "1.0.7",
        "watch": "0.18.0"
      },
      "dependencies": {
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
          "dev": true
        },
        "array-unique": {
          "version": "0.3.2",
          "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
          "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
          "dev": true
        },
        "braces": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
          "dev": true,
          "requires": {
            "arr-flatten": "1.1.0",
            "array-unique": "0.3.2",
            "extend-shallow": "2.0.1",
            "fill-range": "4.0.0",
            "isobject": "3.0.1",
            "repeat-element": "1.1.2",
            "snapdragon": "0.8.2",
            "snapdragon-node": "2.1.1",
            "split-string": "3.1.0",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "expand-brackets": {
          "version": "2.1.4",
          "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
          "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
          "dev": true,
          "requires": {
            "debug": "2.6.9",
            "define-property": "0.2.5",
            "extend-shallow": "2.0.1",
            "posix-character-classes": "0.1.1",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "define-property": {
              "version": "0.2.5",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
              "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
              "dev": true,
              "requires": {
                "is-descriptor": "0.1.6"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "3.2.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "1.1.6"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "3.2.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "1.1.6"
                  }
                }
              }
            },
            "is-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
              "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
              "dev": true,
              "requires": {
                "is-accessor-descriptor": "0.1.6",
                "is-data-descriptor": "0.1.4",
                "kind-of": "5.1.0"
              }
            },
            "kind-of": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
              "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
              "dev": true
            }
          }
        },
        "extglob": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
          "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
          "dev": true,
          "requires": {
            "array-unique": "0.3.2",
            "define-property": "1.0.0",
            "expand-brackets": "2.1.4",
            "extend-shallow": "2.0.1",
            "fragment-cache": "0.2.1",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "define-property": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
              "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
              "dev": true,
              "requires": {
                "is-descriptor": "1.0.2"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "fill-range": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
          "dev": true,
          "requires": {
            "extend-shallow": "2.0.1",
            "is-number": "3.0.0",
            "repeat-string": "1.6.1",
            "to-regex-range": "2.1.1"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "1.0.0",
            "is-data-descriptor": "1.0.0",
            "kind-of": "6.0.2"
          }
        },
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "dev": true,
          "requires": {
            "kind-of": "3.2.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "dev": true,
              "requires": {
                "is-buffer": "1.1.6"
              }
            }
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
          "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
          "dev": true
        },
        "micromatch": {
          "version": "3.1.10",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
          "dev": true,
          "requires": {
            "arr-diff": "4.0.0",
            "array-unique": "0.3.2",
            "braces": "2.3.2",
            "define-property": "2.0.2",
            "extend-shallow": "3.0.2",
            "extglob": "2.0.4",
            "fragment-cache": "0.2.1",
            "kind-of": "6.0.2",
            "nanomatch": "1.2.9",
            "object.pick": "1.3.0",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          }
        },
        "minimist": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
          "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ=",
          "dev": true
        }
      }
    },
    "sax": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
      "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw==",
      "dev": true
    },
    "schema-utils": {
      "version": "0.4.5",
      "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-0.4.5.tgz",
      "integrity": "sha512-yYrjb9TX2k/J1Y5UNy3KYdZq10xhYcF8nMpAW6o3hy6Q8WSIEf9lJHG/ePnOBfziPM3fvQwfOwa13U/Fh8qTfA==",
      "dev": true,
      "requires": {
        "ajv": "6.5.0",
        "ajv-keywords": "3.2.0"
      },
      "dependencies": {
        "ajv": {
          "version": "6.5.0",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.5.0.tgz",
          "integrity": "sha512-VDUX1oSajablmiyFyED9L1DFndg0P9h7p1F+NO8FkIzei6EPrR6Zu1n18rd5P8PqaSRd/FrWv3G1TVBqpM83gA==",
          "dev": true,
          "requires": {
            "fast-deep-equal": "2.0.1",
            "fast-json-stable-stringify": "2.0.0",
            "json-schema-traverse": "0.3.1",
            "uri-js": "4.2.2"
          }
        },
        "fast-deep-equal": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
          "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
          "dev": true
        }
      }
    },
    "scoped-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/scoped-regex/-/scoped-regex-1.0.0.tgz",
      "integrity": "sha1-o0a7Gs1CB65wvXwMfKnlZra63bg=",
      "dev": true
    },
    "semver": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.5.0.tgz",
      "integrity": "sha512-4SJ3dm0WAwWy/NVeioZh5AntkdJoWKxHxcmyP622fOkgHa4z3R0TdBJICINyaSDE6uNwVc8gZr+ZinwZAH4xIA=="
    },
    "semver-diff": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/semver-diff/-/semver-diff-2.1.0.tgz",
      "integrity": "sha1-S7uEN8jTfksM8aaP1ybsbWRdbTY=",
      "dev": true,
      "requires": {
        "semver": "5.5.0"
      }
    },
    "send": {
      "version": "0.16.2",
      "resolved": "https://registry.npmjs.org/send/-/send-0.16.2.tgz",
      "integrity": "sha512-E64YFPUssFHEFBvpbbjr44NCLtI1AohxQ8ZSiJjQLskAdKuriYEP6VyGEsRDH8ScozGpkaX1BGvhanqCwkcEZw==",
      "requires": {
        "debug": "2.6.9",
        "depd": "1.1.2",
        "destroy": "1.0.4",
        "encodeurl": "1.0.2",
        "escape-html": "1.0.3",
        "etag": "1.8.1",
        "fresh": "0.5.2",
        "http-errors": "1.6.3",
        "mime": "1.4.1",
        "ms": "2.0.0",
        "on-finished": "2.3.0",
        "range-parser": "1.2.0",
        "statuses": "1.4.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "statuses": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.4.0.tgz",
          "integrity": "sha512-zhSCtt8v2NDrRlPQpCNtw/heZLtfUDqxBM1udqikb/Hbk52LK4nQSwr10u77iopCW5LsyHpuXS0GnEc48mLeew=="
        }
      }
    },
    "serialize-javascript": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-1.5.0.tgz",
      "integrity": "sha512-Ga8c8NjAAp46Br4+0oZ2WxJCwIzwP60Gq1YPgU+39PiTVxyed/iKE/zyZI6+UlVYH5Q4PaQdHhcegIFPZTUfoQ==",
      "dev": true
    },
    "serve-static": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.13.2.tgz",
      "integrity": "sha512-p/tdJrO4U387R9oMjb1oj7qSMaMfmOyd4j9hOFoxZe2baQszgHcSWjuya/CiT5kgZZKRudHNOA0pYXOl8rQ5nw==",
      "requires": {
        "encodeurl": "1.0.2",
        "escape-html": "1.0.3",
        "parseurl": "1.3.2",
        "send": "0.16.2"
      }
    },
    "set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",
      "dev": true
    },
    "set-immediate-shim": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/set-immediate-shim/-/set-immediate-shim-1.0.1.tgz",
      "integrity": "sha1-SysbJ+uAip+NzEgaWOXlb1mfP2E=",
      "dev": true
    },
    "set-value": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.0.tgz",
      "integrity": "sha512-hw0yxk9GT/Hr5yJEYnHNKYXkIA8mVJgd9ditYZCe16ZczcaELYYcfvaXesNACk2O8O0nTiPQcQhGUQj8JLzeeg==",
      "dev": true,
      "requires": {
        "extend-shallow": "2.0.1",
        "is-extendable": "0.1.1",
        "is-plain-object": "2.0.4",
        "split-string": "3.1.0"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "0.1.1"
          }
        }
      }
    },
    "setimmediate": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
      "integrity": "sha1-KQy7Iy4waULX1+qbg3Mqt4VvgoU=",
      "dev": true
    },
    "setprototypeof": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz",
      "integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ=="
    },
    "sha.js": {
      "version": "2.4.11",
      "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
      "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
      "dev": true,
      "requires": {
        "inherits": "2.0.3",
        "safe-buffer": "5.1.2"
      }
    },
    "shebang-command": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
      "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
      "dev": true,
      "requires": {
        "shebang-regex": "1.0.0"
      }
    },
    "shebang-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
      "dev": true
    },
    "shell-quote": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.6.1.tgz",
      "integrity": "sha1-9HgZSczkAmlxJ0MOo7PFR29IF2c=",
      "dev": true,
      "requires": {
        "array-filter": "0.0.1",
        "array-map": "0.0.0",
        "array-reduce": "0.0.0",
        "jsonify": "0.0.0"
      }
    },
    "shelljs": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/shelljs/-/shelljs-0.8.2.tgz",
      "integrity": "sha512-pRXeNrCA2Wd9itwhvLp5LZQvPJ0wU6bcjaTMywHHGX5XWhVN2nzSu7WV0q+oUY7mGK3mgSkDDzP3MgjqdyIgbQ==",
      "dev": true,
      "requires": {
        "glob": "7.1.2",
        "interpret": "1.1.0",
        "rechoir": "0.6.2"
      }
    },
    "shellwords": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/shellwords/-/shellwords-0.1.1.tgz",
      "integrity": "sha512-vFwSUfQvqybiICwZY5+DAWIPLKsWO31Q91JSKl3UYv+K5c2QRPzn0qzec6QPu1Qc9eHYItiP3NdJqNVqetYAww==",
      "dev": true
    },
    "signal-exit": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
      "integrity": "sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0=",
      "dev": true
    },
    "slash": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-1.0.0.tgz",
      "integrity": "sha1-xB8vbDn8FtHNF61LXYlhFK5HDVU=",
      "dev": true
    },
    "slice-ansi": {
      "version": "0.0.4",
      "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-0.0.4.tgz",
      "integrity": "sha1-7b+JA/ZvfOL46v1s7tZeJkyDGzU=",
      "dev": true
    },
    "slide": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/slide/-/slide-1.1.6.tgz",
      "integrity": "sha1-VusCfWW00tzmyy4tMsTUr8nh1wc=",
      "dev": true
    },
    "snapdragon": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
      "dev": true,
      "requires": {
        "base": "0.11.2",
        "debug": "2.6.9",
        "define-property": "0.2.5",
        "extend-shallow": "2.0.1",
        "map-cache": "0.2.2",
        "source-map": "0.5.7",
        "source-map-resolve": "0.5.2",
        "use": "3.1.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "0.1.6"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "0.1.1"
          }
        }
      }
    },
    "snapdragon-node": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
      "dev": true,
      "requires": {
        "define-property": "1.0.0",
        "isobject": "3.0.1",
        "snapdragon-util": "3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "requires": {
            "is-descriptor": "1.0.2"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "1.0.0",
            "is-data-descriptor": "1.0.0",
            "kind-of": "6.0.2"
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
          "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
          "dev": true
        }
      }
    },
    "snapdragon-util": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
      "dev": true,
      "requires": {
        "kind-of": "3.2.2"
      }
    },
    "socket.io": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/socket.io/-/socket.io-2.1.1.tgz",
      "integrity": "sha512-rORqq9c+7W0DAK3cleWNSyfv/qKXV99hV4tZe+gGLfBECw3XEhBy7x85F3wypA9688LKjtwO9pX9L33/xQI8yA==",
      "requires": {
        "debug": "3.1.0",
        "engine.io": "3.2.0",
        "has-binary2": "1.0.3",
        "socket.io-adapter": "1.1.1",
        "socket.io-client": "2.1.1",
        "socket.io-parser": "3.2.0"
      }
    },
    "socket.io-adapter": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/socket.io-adapter/-/socket.io-adapter-1.1.1.tgz",
      "integrity": "sha1-KoBeihTWNyEk3ZFZrUUC+MsH8Gs="
    },
    "socket.io-client": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/socket.io-client/-/socket.io-client-2.1.1.tgz",
      "integrity": "sha512-jxnFyhAuFxYfjqIgduQlhzqTcOEQSn+OHKVfAxWaNWa7ecP7xSNk2Dx/3UEsDcY7NcFafxvNvKPmmO7HTwTxGQ==",
      "requires": {
        "backo2": "1.0.2",
        "base64-arraybuffer": "0.1.5",
        "component-bind": "1.0.0",
        "component-emitter": "1.2.1",
        "debug": "3.1.0",
        "engine.io-client": "3.2.1",
        "has-binary2": "1.0.3",
        "has-cors": "1.1.0",
        "indexof": "0.0.1",
        "object-component": "0.0.3",
        "parseqs": "0.0.5",
        "parseuri": "0.0.5",
        "socket.io-parser": "3.2.0",
        "to-array": "0.1.4"
      }
    },
    "socket.io-parser": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/socket.io-parser/-/socket.io-parser-3.2.0.tgz",
      "integrity": "sha512-FYiBx7rc/KORMJlgsXysflWx/RIvtqZbyGLlHZvjfmPTPeuD/I8MaW7cfFrj5tRltICJdgwflhfZ3NVVbVLFQA==",
      "requires": {
        "component-emitter": "1.2.1",
        "debug": "3.1.0",
        "isarray": "2.0.1"
      },
      "dependencies": {
        "isarray": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.1.tgz",
          "integrity": "sha1-o32U7ZzaLVmGXJ92/llu4fM4dB4="
        }
      }
    },
    "sort-keys": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/sort-keys/-/sort-keys-2.0.0.tgz",
      "integrity": "sha1-ZYU1WEhh7JfXMNbPQYIuH1ZoQSg=",
      "dev": true,
      "requires": {
        "is-plain-obj": "1.1.0"
      }
    },
    "source-list-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/source-list-map/-/source-list-map-2.0.0.tgz",
      "integrity": "sha512-I2UmuJSRr/T8jisiROLU3A3ltr+swpniSmNPI4Ml3ZCX6tVnDsuZzK7F2hl5jTqbZBWCEKlj5HRQiPExXLgE8A==",
      "dev": true
    },
    "source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true
    },
    "source-map-resolve": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.2.tgz",
      "integrity": "sha512-MjqsvNwyz1s0k81Goz/9vRBe9SZdB09Bdw+/zYyO+3CuPk6fouTaxscHkgtE8jKvf01kVfl8riHzERQ/kefaSA==",
      "dev": true,
      "requires": {
        "atob": "2.1.1",
        "decode-uri-component": "0.2.0",
        "resolve-url": "0.2.1",
        "source-map-url": "0.4.0",
        "urix": "0.1.0"
      }
    },
    "source-map-support": {
      "version": "0.4.18",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.4.18.tgz",
      "integrity": "sha512-try0/JqxPLF9nOjvSta7tVondkP5dwgyLDjVoyMDlmjugT2lRZ1OfsrYTkCd2hkDnJTKRbO/Rl3orm8vlsUzbA==",
      "dev": true,
      "requires": {
        "source-map": "0.5.7"
      }
    },
    "source-map-url": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.0.tgz",
      "integrity": "sha1-PpNdfd1zYxuXZZlW1VEo6HtQhKM=",
      "dev": true
    },
    "spdx-correct": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.0.0.tgz",
      "integrity": "sha512-N19o9z5cEyc8yQQPukRCZ9EUmb4HUpnrmaL/fxS2pBo2jbfcFRVuFZ/oFC+vZz0MNNk0h80iMn5/S6qGZOL5+g==",
      "dev": true,
      "requires": {
        "spdx-expression-parse": "3.0.0",
        "spdx-license-ids": "3.0.0"
      }
    },
    "spdx-exceptions": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.1.0.tgz",
      "integrity": "sha512-4K1NsmrlCU1JJgUrtgEeTVyfx8VaYea9J9LvARxhbHtVtohPs/gFGG5yy49beySjlIMhhXZ4QqujIZEfS4l6Cg==",
      "dev": true
    },
    "spdx-expression-parse": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz",
      "integrity": "sha512-Yg6D3XpRD4kkOmTpdgbUiEJFKghJH03fiC1OPll5h/0sO6neh2jqRDVHOQ4o/LMea0tgCkbMgea5ip/e+MkWyg==",
      "dev": true,
      "requires": {
        "spdx-exceptions": "2.1.0",
        "spdx-license-ids": "3.0.0"
      }
    },
    "spdx-license-ids": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.0.tgz",
      "integrity": "sha512-2+EPwgbnmOIl8HjGBXXMd9NAu02vLjOO1nWw4kmeRDFyHn+M/ETfHxQUK0oXg8ctgVnl9t3rosNVsZ1jG61nDA==",
      "dev": true
    },
    "split": {
      "version": "0.3.3",
      "resolved": "https://registry.npmjs.org/split/-/split-0.3.3.tgz",
      "integrity": "sha1-zQ7qXmOiEd//frDwkcQTPi0N0o8=",
      "dev": true,
      "requires": {
        "through": "2.3.8"
      }
    },
    "split-string": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
      "dev": true,
      "requires": {
        "extend-shallow": "3.0.2"
      }
    },
    "sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
      "dev": true
    },
    "sshpk": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.14.1.tgz",
      "integrity": "sha1-Ew9Zde3a2WPx1W+SuaxsUfqfg+s=",
      "dev": true,
      "requires": {
        "asn1": "0.2.3",
        "assert-plus": "1.0.0",
        "bcrypt-pbkdf": "1.0.1",
        "dashdash": "1.14.1",
        "ecc-jsbn": "0.1.1",
        "getpass": "0.1.7",
        "jsbn": "0.1.1",
        "tweetnacl": "0.14.5"
      }
    },
    "ssri": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/ssri/-/ssri-5.3.0.tgz",
      "integrity": "sha512-XRSIPqLij52MtgoQavH/x/dU1qVKtWUAAZeOHsR9c2Ddi4XerFy3mc1alf+dLJKl9EUIm/Ht+EowFkTUOA6GAQ==",
      "dev": true,
      "requires": {
        "safe-buffer": "5.1.2"
      }
    },
    "static-extend": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
      "dev": true,
      "requires": {
        "define-property": "0.2.5",
        "object-copy": "0.1.0"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "0.1.6"
          }
        }
      }
    },
    "statuses": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
    },
    "stream-browserify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/stream-browserify/-/stream-browserify-2.0.1.tgz",
      "integrity": "sha1-ZiZu5fm9uZQKTkUUyvtDu3Hlyds=",
      "dev": true,
      "requires": {
        "inherits": "2.0.3",
        "readable-stream": "2.3.6"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "dev": true,
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.2",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "dev": true,
          "requires": {
            "safe-buffer": "5.1.2"
          }
        }
      }
    },
    "stream-combiner": {
      "version": "0.0.4",
      "resolved": "https://registry.npmjs.org/stream-combiner/-/stream-combiner-0.0.4.tgz",
      "integrity": "sha1-TV5DPBhSYd3mI8o/RMWGvPXErRQ=",
      "dev": true,
      "requires": {
        "duplexer": "0.1.1"
      }
    },
    "stream-each": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/stream-each/-/stream-each-1.2.2.tgz",
      "integrity": "sha512-mc1dbFhGBxvTM3bIWmAAINbqiuAk9TATcfIQC8P+/+HJefgaiTlMn2dHvkX8qlI12KeYKSQ1Ua9RrIqrn1VPoA==",
      "dev": true,
      "requires": {
        "end-of-stream": "1.4.1",
        "stream-shift": "1.0.0"
      }
    },
    "stream-http": {
      "version": "2.8.3",
      "resolved": "https://registry.npmjs.org/stream-http/-/stream-http-2.8.3.tgz",
      "integrity": "sha512-+TSkfINHDo4J+ZobQLWiMouQYB+UVYFttRA94FpEzzJ7ZdqcL4uUUQ7WkdkI4DSozGmgBUE/a47L+38PenXhUw==",
      "dev": true,
      "requires": {
        "builtin-status-codes": "3.0.0",
        "inherits": "2.0.3",
        "readable-stream": "2.3.6",
        "to-arraybuffer": "1.0.1",
        "xtend": "4.0.1"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "dev": true,
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.2",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "dev": true,
          "requires": {
            "safe-buffer": "5.1.2"
          }
        }
      }
    },
    "stream-shift": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/stream-shift/-/stream-shift-1.0.0.tgz",
      "integrity": "sha1-1cdSgl5TZ+eG944Y5EXqIjoVWVI=",
      "dev": true
    },
    "streamsearch": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-0.1.2.tgz",
      "integrity": "sha1-gIudDlb8Jz2Am6VzOOkpkZoanxo="
    },
    "strict-uri-encode": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/strict-uri-encode/-/strict-uri-encode-1.1.0.tgz",
      "integrity": "sha1-J5siXfHVgrH1TmWt3UNS4Y+qBxM=",
      "dev": true
    },
    "string-length": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/string-length/-/string-length-2.0.0.tgz",
      "integrity": "sha1-1A27aGo6zpYMHP/KVivyxF+DY+0=",
      "dev": true,
      "requires": {
        "astral-regex": "1.0.0",
        "strip-ansi": "4.0.0"
      }
    },
    "string-template": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/string-template/-/string-template-0.2.1.tgz",
      "integrity": "sha1-QpMuWYo1LQH8IuwzZ9nYTuxsmt0=",
      "dev": true
    },
    "string-width": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
      "dev": true,
      "requires": {
        "is-fullwidth-code-point": "2.0.0",
        "strip-ansi": "4.0.0"
      },
      "dependencies": {
        "is-fullwidth-code-point": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
          "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
          "dev": true
        }
      }
    },
    "string_decoder": {
      "version": "0.10.31",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
      "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ="
    },
    "strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
      "dev": true,
      "requires": {
        "ansi-regex": "3.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        }
      }
    },
    "strip-bom": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz",
      "integrity": "sha1-YhmoVhZSBJHzV4i9vxRHqZx+aw4=",
      "dev": true,
      "requires": {
        "is-utf8": "0.2.1"
      }
    },
    "strip-bom-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom-stream/-/strip-bom-stream-2.0.0.tgz",
      "integrity": "sha1-+H217yYT9paKpUWr/h7HKLaoKco=",
      "dev": true,
      "requires": {
        "first-chunk-stream": "2.0.0",
        "strip-bom": "2.0.0"
      }
    },
    "strip-eof": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
      "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8=",
      "dev": true
    },
    "strip-json-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
      "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo=",
      "dev": true
    },
    "subarg": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/subarg/-/subarg-1.0.0.tgz",
      "integrity": "sha1-9izxdYHplrSPyWVpn1TAauJouNI=",
      "dev": true,
      "requires": {
        "minimist": "1.2.0"
      },
      "dependencies": {
        "minimist": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
          "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ=",
          "dev": true
        }
      }
    },
    "superagent": {
      "version": "3.8.2",
      "resolved": "https://registry.npmjs.org/superagent/-/superagent-3.8.2.tgz",
      "integrity": "sha512-gVH4QfYHcY3P0f/BZzavLreHW3T1v7hG9B+hpMQotGQqurOvhv87GcMCd6LWySmBuf+BDR44TQd0aISjVHLeNQ==",
      "dev": true,
      "requires": {
        "component-emitter": "1.2.1",
        "cookiejar": "2.1.2",
        "debug": "3.1.0",
        "extend": "3.0.1",
        "form-data": "2.3.2",
        "formidable": "1.2.1",
        "methods": "1.1.2",
        "mime": "1.4.1",
        "qs": "6.5.1",
        "readable-stream": "2.3.6"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "dev": true,
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.2",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "dev": true,
          "requires": {
            "safe-buffer": "5.1.2"
          }
        }
      }
    },
    "supertest": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/supertest/-/supertest-3.1.0.tgz",
      "integrity": "sha512-O44AMnmJqx294uJQjfUmEyYOg7d9mylNFsMw/Wkz4evKd1njyPrtCN+U6ZIC7sKtfEVQhfTqFFijlXx8KP/Czw==",
      "dev": true,
      "requires": {
        "methods": "1.1.2",
        "superagent": "3.8.2"
      }
    },
    "supports-color": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.4.0.tgz",
      "integrity": "sha512-zjaXglF5nnWpsq470jSv6P9DwPvgLkuapYmfDm3JWOm0vkNTVF2tI4UrN2r6jH1qM/uc/WtxYY1hYoA2dOKj5w==",
      "dev": true,
      "requires": {
        "has-flag": "3.0.0"
      }
    },
    "symbol-observable": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-1.0.1.tgz",
      "integrity": "sha1-g0D8RwLDEi310iKI+IKD9RPT/dQ=",
      "dev": true
    },
    "symbol-tree": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.2.tgz",
      "integrity": "sha1-rifbOPZgp64uHDt9G8KQgZuFGeY=",
      "dev": true
    },
    "tapable": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-1.0.0.tgz",
      "integrity": "sha512-dQRhbNQkRnaqauC7WqSJ21EEksgT0fYZX2lqXzGkpo8JNig9zGZTYoMGvyI2nWmXlE2VSVXVDu7wLVGu/mQEsg==",
      "dev": true
    },
    "temp": {
      "version": "0.8.3",
      "resolved": "https://registry.npmjs.org/temp/-/temp-0.8.3.tgz",
      "integrity": "sha1-4Ma8TSa5AxJEEOT+2BEDAU38H1k=",
      "dev": true,
      "requires": {
        "os-tmpdir": "1.0.2",
        "rimraf": "2.2.8"
      },
      "dependencies": {
        "rimraf": {
          "version": "2.2.8",
          "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.2.8.tgz",
          "integrity": "sha1-5Dm+Kq7jJzIZUnMPmaiSnk/FBYI=",
          "dev": true
        }
      }
    },
    "term-size": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/term-size/-/term-size-1.2.0.tgz",
      "integrity": "sha1-RYuDiH8oj8Vtb/+/rSYuJmOO+mk=",
      "dev": true,
      "requires": {
        "execa": "0.7.0"
      }
    },
    "test-exclude": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-4.2.1.tgz",
      "integrity": "sha512-qpqlP/8Zl+sosLxBcVKl9vYy26T9NPalxSzzCP/OY6K7j938ui2oKgo+kRZYfxAeIpLqpbVnsHq1tyV70E4lWQ==",
      "dev": true,
      "requires": {
        "arrify": "1.0.1",
        "micromatch": "3.1.10",
        "object-assign": "4.1.1",
        "read-pkg-up": "1.0.1",
        "require-main-filename": "1.0.1"
      },
      "dependencies": {
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
          "dev": true
        },
        "array-unique": {
          "version": "0.3.2",
          "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
          "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
          "dev": true
        },
        "braces": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
          "dev": true,
          "requires": {
            "arr-flatten": "1.1.0",
            "array-unique": "0.3.2",
            "extend-shallow": "2.0.1",
            "fill-range": "4.0.0",
            "isobject": "3.0.1",
            "repeat-element": "1.1.2",
            "snapdragon": "0.8.2",
            "snapdragon-node": "2.1.1",
            "split-string": "3.1.0",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "expand-brackets": {
          "version": "2.1.4",
          "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
          "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
          "dev": true,
          "requires": {
            "debug": "2.6.9",
            "define-property": "0.2.5",
            "extend-shallow": "2.0.1",
            "posix-character-classes": "0.1.1",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "define-property": {
              "version": "0.2.5",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
              "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
              "dev": true,
              "requires": {
                "is-descriptor": "0.1.6"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "3.2.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "1.1.6"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "3.2.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "1.1.6"
                  }
                }
              }
            },
            "is-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
              "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
              "dev": true,
              "requires": {
                "is-accessor-descriptor": "0.1.6",
                "is-data-descriptor": "0.1.4",
                "kind-of": "5.1.0"
              }
            },
            "kind-of": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
              "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
              "dev": true
            }
          }
        },
        "extglob": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
          "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
          "dev": true,
          "requires": {
            "array-unique": "0.3.2",
            "define-property": "1.0.0",
            "expand-brackets": "2.1.4",
            "extend-shallow": "2.0.1",
            "fragment-cache": "0.2.1",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "define-property": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
              "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
              "dev": true,
              "requires": {
                "is-descriptor": "1.0.2"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "fill-range": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
          "dev": true,
          "requires": {
            "extend-shallow": "2.0.1",
            "is-number": "3.0.0",
            "repeat-string": "1.6.1",
            "to-regex-range": "2.1.1"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "1.0.0",
            "is-data-descriptor": "1.0.0",
            "kind-of": "6.0.2"
          }
        },
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "dev": true,
          "requires": {
            "kind-of": "3.2.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "dev": true,
              "requires": {
                "is-buffer": "1.1.6"
              }
            }
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
          "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
          "dev": true
        },
        "micromatch": {
          "version": "3.1.10",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
          "dev": true,
          "requires": {
            "arr-diff": "4.0.0",
            "array-unique": "0.3.2",
            "braces": "2.3.2",
            "define-property": "2.0.2",
            "extend-shallow": "3.0.2",
            "extglob": "2.0.4",
            "fragment-cache": "0.2.1",
            "kind-of": "6.0.2",
            "nanomatch": "1.2.9",
            "object.pick": "1.3.0",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          }
        },
        "object-assign": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
          "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
          "dev": true
        }
      }
    },
    "text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha1-f17oI66AUgfACvLfSoTsP8+lcLQ=",
      "dev": true
    },
    "textextensions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/textextensions/-/textextensions-2.2.0.tgz",
      "integrity": "sha512-j5EMxnryTvKxwH2Cq+Pb43tsf6sdEgw6Pdwxk83mPaq0ToeFJt6WE4J3s5BqY7vmjlLgkgXvhtXUxo80FyBhCA==",
      "dev": true
    },
    "throat": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/throat/-/throat-4.1.0.tgz",
      "integrity": "sha1-iQN8vJLFarGJJua6TLsgDhVnKmo=",
      "dev": true
    },
    "through": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
      "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU=",
      "dev": true
    },
    "through2": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.3.tgz",
      "integrity": "sha1-AARWmzfHx0ujnEPzzteNGtlBQL4=",
      "dev": true,
      "requires": {
        "readable-stream": "2.3.6",
        "xtend": "4.0.1"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "dev": true,
          "requires": {
            "core-util-is": "1.0.2",
            "inherits": "2.0.3",
            "isarray": "1.0.0",
            "process-nextick-args": "2.0.0",
            "safe-buffer": "5.1.2",
            "string_decoder": "1.1.1",
            "util-deprecate": "1.0.2"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "dev": true,
          "requires": {
            "safe-buffer": "5.1.2"
          }
        }
      }
    },
    "timed-out": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/timed-out/-/timed-out-4.0.1.tgz",
      "integrity": "sha1-8y6srFoXW+ol1/q1Zas+2HQe9W8=",
      "dev": true
    },
    "timers-browserify": {
      "version": "2.0.10",
      "resolved": "https://registry.npmjs.org/timers-browserify/-/timers-browserify-2.0.10.tgz",
      "integrity": "sha512-YvC1SV1XdOUaL6gx5CoGroT3Gu49pK9+TZ38ErPldOWW4j49GI1HKs9DV+KGq/w6y+LZ72W1c8cKz2vzY+qpzg==",
      "dev": true,
      "requires": {
        "setimmediate": "1.0.5"
      }
    },
    "timers-ext": {
      "version": "0.1.5",
      "resolved": "https://registry.npmjs.org/timers-ext/-/timers-ext-0.1.5.tgz",
      "integrity": "sha512-tsEStd7kmACHENhsUPaxb8Jf8/+GZZxyNFQbZD07HQOyooOa6At1rQqjffgvg7n+dxscQa9cjjMdWhJtsP2sxg==",
      "requires": {
        "es5-ext": "0.10.45",
        "next-tick": "1.0.0"
      }
    },
    "tmp": {
      "version": "0.0.33",
      "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
      "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
      "dev": true,
      "requires": {
        "os-tmpdir": "1.0.2"
      }
    },
    "tmpl": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.4.tgz",
      "integrity": "sha1-I2QN17QtAEM5ERQIIOXPRA5SHdE=",
      "dev": true
    },
    "to-array": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/to-array/-/to-array-0.1.4.tgz",
      "integrity": "sha1-F+bBH3PdTz10zaek/zI46a2b+JA="
    },
    "to-arraybuffer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/to-arraybuffer/-/to-arraybuffer-1.0.1.tgz",
      "integrity": "sha1-fSKbH8xjfkZsoIEYCDanqr/4P0M=",
      "dev": true
    },
    "to-fast-properties": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-1.0.3.tgz",
      "integrity": "sha1-uDVx+k2MJbguIxsG46MFXeTKGkc=",
      "dev": true
    },
    "to-object-path": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
      "dev": true,
      "requires": {
        "kind-of": "3.2.2"
      }
    },
    "to-regex": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
      "dev": true,
      "requires": {
        "define-property": "2.0.2",
        "extend-shallow": "3.0.2",
        "regex-not": "1.0.2",
        "safe-regex": "1.1.0"
      }
    },
    "to-regex-range": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
      "dev": true,
      "requires": {
        "is-number": "3.0.0",
        "repeat-string": "1.6.1"
      },
      "dependencies": {
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "dev": true,
          "requires": {
            "kind-of": "3.2.2"
          }
        }
      }
    },
    "touch": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.0.tgz",
      "integrity": "sha512-WBx8Uy5TLtOSRtIq+M03/sKDrXCLHxwDcquSP2c43Le03/9serjQBIztjRz6FkJez9D/hleyAXTBGLwwZUw9lA==",
      "dev": true,
      "requires": {
        "nopt": "1.0.10"
      }
    },
    "tough-cookie": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.4.2.tgz",
      "integrity": "sha512-vahm+X8lSV/KjXziec8x5Vp0OTC9mq8EVCOApIsRAooeuMPSO8aT7PFACYkaL0yZ/3hVqw+8DzhCJwl8H2Ad6w==",
      "dev": true,
      "requires": {
        "psl": "1.1.27",
        "punycode": "1.4.1"
      }
    },
    "tr46": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
      "integrity": "sha1-gYT9NH2snNwYWZLzpmIuFLnZq2o=",
      "dev": true
    },
    "trim-right": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/trim-right/-/trim-right-1.0.1.tgz",
      "integrity": "sha1-yy4SAwZ+DI3h9hQJS5/kVwTqYAM=",
      "dev": true
    },
    "ts-jest": {
      "version": "21.2.4",
      "resolved": "https://registry.npmjs.org/ts-jest/-/ts-jest-21.2.4.tgz",
      "integrity": "sha512-Plk49Us+DcncpQcC8fhYwDUdhW96QB0Dv02etOLhzq+2HAvXfrEUys3teZ/BeyQ+r1rHxfGdNj4dB0Q5msZR3g==",
      "dev": true,
      "requires": {
        "babel-core": "6.26.3",
        "babel-plugin-istanbul": "4.1.6",
        "babel-plugin-transform-es2015-modules-commonjs": "6.26.2",
        "babel-preset-jest": "21.2.0",
        "cpx": "1.5.0",
        "fs-extra": "4.0.3",
        "jest-config": "21.2.1",
        "pkg-dir": "2.0.0",
        "source-map-support": "0.5.6",
        "yargs": "10.1.2"
      },
      "dependencies": {
        "camelcase": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz",
          "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0=",
          "dev": true
        },
        "cliui": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-4.1.0.tgz",
          "integrity": "sha512-4FG+RSG9DL7uEwRUZXZn3SS34DiDPfzP0VOiEwtUWlE+AR2EIg+hSyvrIgUUfhdgR/UkAeW2QHgeP+hWrXs7jQ==",
          "dev": true,
          "requires": {
            "string-width": "2.1.1",
            "strip-ansi": "4.0.0",
            "wrap-ansi": "2.1.0"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        },
        "source-map-support": {
          "version": "0.5.6",
          "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.6.tgz",
          "integrity": "sha512-N4KXEz7jcKqPf2b2vZF11lQIz9W5ZMuUcIOGj243lduidkf2fjkVKJS9vNxVWn3u/uxX38AcE8U9nnH9FPcq+g==",
          "dev": true,
          "requires": {
            "buffer-from": "1.1.0",
            "source-map": "0.6.1"
          }
        },
        "yargs": {
          "version": "10.1.2",
          "resolved": "https://registry.npmjs.org/yargs/-/yargs-10.1.2.tgz",
          "integrity": "sha512-ivSoxqBGYOqQVruxD35+EyCFDYNEFL/Uo6FcOnz+9xZdZzK0Zzw4r4KhbrME1Oo2gOggwJod2MnsdamSG7H9ig==",
          "dev": true,
          "requires": {
            "cliui": "4.1.0",
            "decamelize": "1.2.0",
            "find-up": "2.1.0",
            "get-caller-file": "1.0.2",
            "os-locale": "2.1.0",
            "require-directory": "2.1.1",
            "require-main-filename": "1.0.1",
            "set-blocking": "2.0.0",
            "string-width": "2.1.1",
            "which-module": "2.0.0",
            "y18n": "3.2.1",
            "yargs-parser": "8.1.0"
          }
        },
        "yargs-parser": {
          "version": "8.1.0",
          "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-8.1.0.tgz",
          "integrity": "sha512-yP+6QqN8BmrgW2ggLtTbdrOyBNSI7zBa4IykmiV5R1wl1JWNxQvWhMfMdmzIYtKU7oP3OOInY/tl2ov3BDjnJQ==",
          "dev": true,
          "requires": {
            "camelcase": "4.1.0"
          }
        }
      }
    },
    "ts-loader": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/ts-loader/-/ts-loader-4.3.1.tgz",
      "integrity": "sha512-ra304bebnyxd9nIJoKjQoeQLOENqrDG7vfppS+DkCnqOEv29GuiiWMvgebuCqFko0AkMFpoubRLeFM7YmlkL3w==",
      "dev": true,
      "requires": {
        "chalk": "2.4.1",
        "enhanced-resolve": "4.0.0",
        "loader-utils": "1.1.0",
        "micromatch": "3.1.10",
        "semver": "5.5.0"
      },
      "dependencies": {
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
          "dev": true
        },
        "array-unique": {
          "version": "0.3.2",
          "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
          "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
          "dev": true
        },
        "braces": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
          "dev": true,
          "requires": {
            "arr-flatten": "1.1.0",
            "array-unique": "0.3.2",
            "extend-shallow": "2.0.1",
            "fill-range": "4.0.0",
            "isobject": "3.0.1",
            "repeat-element": "1.1.2",
            "snapdragon": "0.8.2",
            "snapdragon-node": "2.1.1",
            "split-string": "3.1.0",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "expand-brackets": {
          "version": "2.1.4",
          "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
          "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
          "dev": true,
          "requires": {
            "debug": "2.6.9",
            "define-property": "0.2.5",
            "extend-shallow": "2.0.1",
            "posix-character-classes": "0.1.1",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "define-property": {
              "version": "0.2.5",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
              "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
              "dev": true,
              "requires": {
                "is-descriptor": "0.1.6"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "3.2.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "1.1.6"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "3.2.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "1.1.6"
                  }
                }
              }
            },
            "is-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
              "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
              "dev": true,
              "requires": {
                "is-accessor-descriptor": "0.1.6",
                "is-data-descriptor": "0.1.4",
                "kind-of": "5.1.0"
              }
            },
            "kind-of": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
              "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
              "dev": true
            }
          }
        },
        "extglob": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
          "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
          "dev": true,
          "requires": {
            "array-unique": "0.3.2",
            "define-property": "1.0.0",
            "expand-brackets": "2.1.4",
            "extend-shallow": "2.0.1",
            "fragment-cache": "0.2.1",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "define-property": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
              "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
              "dev": true,
              "requires": {
                "is-descriptor": "1.0.2"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "fill-range": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
          "dev": true,
          "requires": {
            "extend-shallow": "2.0.1",
            "is-number": "3.0.0",
            "repeat-string": "1.6.1",
            "to-regex-range": "2.1.1"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "1.0.0",
            "is-data-descriptor": "1.0.0",
            "kind-of": "6.0.2"
          }
        },
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "dev": true,
          "requires": {
            "kind-of": "3.2.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "dev": true,
              "requires": {
                "is-buffer": "1.1.6"
              }
            }
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
          "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
          "dev": true
        },
        "micromatch": {
          "version": "3.1.10",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
          "dev": true,
          "requires": {
            "arr-diff": "4.0.0",
            "array-unique": "0.3.2",
            "braces": "2.3.2",
            "define-property": "2.0.2",
            "extend-shallow": "3.0.2",
            "extglob": "2.0.4",
            "fragment-cache": "0.2.1",
            "kind-of": "6.0.2",
            "nanomatch": "1.2.9",
            "object.pick": "1.3.0",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          }
        }
      }
    },
    "ts-node": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-4.1.0.tgz",
      "integrity": "sha512-xcZH12oVg9PShKhy3UHyDmuDLV3y7iKwX25aMVPt1SIXSuAfWkFiGPEkg+th8R4YKW/QCxDoW7lJdb15lx6QWg==",
      "dev": true,
      "requires": {
        "arrify": "1.0.1",
        "chalk": "2.4.1",
        "diff": "3.5.0",
        "make-error": "1.3.4",
        "minimist": "1.2.0",
        "mkdirp": "0.5.1",
        "source-map-support": "0.5.6",
        "tsconfig": "7.0.0",
        "v8flags": "3.1.1",
        "yn": "2.0.0"
      },
      "dependencies": {
        "minimist": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
          "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ=",
          "dev": true
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        },
        "source-map-support": {
          "version": "0.5.6",
          "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.6.tgz",
          "integrity": "sha512-N4KXEz7jcKqPf2b2vZF11lQIz9W5ZMuUcIOGj243lduidkf2fjkVKJS9vNxVWn3u/uxX38AcE8U9nnH9FPcq+g==",
          "dev": true,
          "requires": {
            "buffer-from": "1.1.0",
            "source-map": "0.6.1"
          }
        }
      }
    },
    "tsconfig": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/tsconfig/-/tsconfig-7.0.0.tgz",
      "integrity": "sha512-vZXmzPrL+EmC4T/4rVlT2jNVMWCi/O4DIiSj3UHg1OE5kCKbk4mfrXc6dZksLgRM/TZlKnousKH9bbTazUWRRw==",
      "dev": true,
      "requires": {
        "@types/strip-bom": "3.0.0",
        "@types/strip-json-comments": "0.0.30",
        "strip-bom": "3.0.0",
        "strip-json-comments": "2.0.1"
      },
      "dependencies": {
        "strip-bom": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
          "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
          "dev": true
        }
      }
    },
    "tsconfig-paths": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.3.2.tgz",
      "integrity": "sha512-21VLRJIXGZDaZ0YVml12IXwSyEcluxvBZjS9xY5ZiKle0iF9NmNg7Hatb77FDg5Ahkas3dfvST8IDldMYpCH0g==",
      "dev": true,
      "requires": {
        "deepmerge": "2.1.1",
        "minimist": "1.2.0",
        "strip-bom": "3.0.0",
        "strip-json-comments": "2.0.1"
      },
      "dependencies": {
        "minimist": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
          "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ=",
          "dev": true
        },
        "strip-bom": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
          "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
          "dev": true
        }
      }
    },
    "tslib": {
      "version": "1.9.2",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.9.2.tgz",
      "integrity": "sha512-AVP5Xol3WivEr7hnssHDsaM+lVrVXWUvd1cfXTRkTj80b//6g2wIFEH6hZG0muGZRnHGrfttpdzRk3YlBkWjKw=="
    },
    "tslint": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/tslint/-/tslint-5.3.2.tgz",
      "integrity": "sha1-5WRZ+wlacwfxA7hAUhdPXju+9u0=",
      "dev": true,
      "requires": {
        "babel-code-frame": "6.26.0",
        "colors": "1.3.0",
        "diff": "3.5.0",
        "glob": "7.1.2",
        "optimist": "0.6.1",
        "resolve": "1.7.1",
        "semver": "5.5.0",
        "tslib": "1.9.2",
        "tsutils": "2.27.1"
      },
      "dependencies": {
        "resolve": {
          "version": "1.7.1",
          "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.7.1.tgz",
          "integrity": "sha512-c7rwLofp8g1U+h1KNyHL/jicrKg1Ek4q+Lr33AL65uZTinUZHe30D5HlyN5V9NW0JX1D5dXQ4jqW5l7Sy/kGfw==",
          "dev": true,
          "requires": {
            "path-parse": "1.0.5"
          }
        }
      }
    },
    "tsutils": {
      "version": "2.27.1",
      "resolved": "https://registry.npmjs.org/tsutils/-/tsutils-2.27.1.tgz",
      "integrity": "sha512-AE/7uzp32MmaHvNNFES85hhUDHFdFZp6OAiZcd6y4ZKKIg6orJTm8keYWBhIhrJQH3a4LzNKat7ZPXZt5aTf6w==",
      "dev": true,
      "requires": {
        "tslib": "1.9.2"
      }
    },
    "tty-browserify": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/tty-browserify/-/tty-browserify-0.0.0.tgz",
      "integrity": "sha1-oVe6QC2iTpv5V/mqadUk7tQpAaY=",
      "dev": true
    },
    "tunnel-agent": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
      "dev": true,
      "requires": {
        "safe-buffer": "5.1.2"
      }
    },
    "tweetnacl": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
      "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
      "dev": true,
      "optional": true
    },
    "type-check": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
      "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
      "dev": true,
      "requires": {
        "prelude-ls": "1.1.2"
      }
    },
    "type-is": {
      "version": "1.6.16",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.16.tgz",
      "integrity": "sha512-HRkVv/5qY2G6I8iab9cI7v1bOIdhm94dVjQCPFElW9W+3GeDOSHmy2EBYe4VTApuzolPcmgFTN3ftVJRKR2J9Q==",
      "requires": {
        "media-typer": "0.3.0",
        "mime-types": "2.1.18"
      }
    },
    "typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c="
    },
    "typescript": {
      "version": "2.9.1",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-2.9.1.tgz",
      "integrity": "sha512-h6pM2f/GDchCFlldnriOhs1QHuwbnmj6/v7499eMHqPeW4V2G0elua2eIc2nu8v2NdHV0Gm+tzX83Hr6nUFjQA=="
    },
    "uglify-js": {
      "version": "2.8.29",
      "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-2.8.29.tgz",
      "integrity": "sha1-KcVzMUgFe7Th913zW3qcty5qWd0=",
      "dev": true,
      "optional": true,
      "requires": {
        "source-map": "0.5.7",
        "uglify-to-browserify": "1.0.2",
        "yargs": "3.10.0"
      },
      "dependencies": {
        "yargs": {
          "version": "3.10.0",
          "resolved": "https://registry.npmjs.org/yargs/-/yargs-3.10.0.tgz",
          "integrity": "sha1-9+572FfdfB0tOMDnTvvWgdFDH9E=",
          "dev": true,
          "optional": true,
          "requires": {
            "camelcase": "1.2.1",
            "cliui": "2.1.0",
            "decamelize": "1.2.0",
            "window-size": "0.1.0"
          }
        }
      }
    },
    "uglify-to-browserify": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/uglify-to-browserify/-/uglify-to-browserify-1.0.2.tgz",
      "integrity": "sha1-bgkk1r2mta/jSeOabWMoUKD4grc=",
      "dev": true,
      "optional": true
    },
    "uglifyjs-webpack-plugin": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/uglifyjs-webpack-plugin/-/uglifyjs-webpack-plugin-1.2.5.tgz",
      "integrity": "sha512-hIQJ1yxAPhEA2yW/i7Fr+SXZVMp+VEI3d42RTHBgQd2yhp/1UdBcR3QEWPV5ahBxlqQDMEMTuTEvDHSFINfwSw==",
      "dev": true,
      "requires": {
        "cacache": "10.0.4",
        "find-cache-dir": "1.0.0",
        "schema-utils": "0.4.5",
        "serialize-javascript": "1.5.0",
        "source-map": "0.6.1",
        "uglify-es": "3.3.9",
        "webpack-sources": "1.1.0",
        "worker-farm": "1.6.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        },
        "uglify-es": {
          "version": "3.3.9",
          "resolved": "https://registry.npmjs.org/uglify-es/-/uglify-es-3.3.9.tgz",
          "integrity": "sha512-r+MU0rfv4L/0eeW3xZrd16t4NZfK8Ld4SWVglYBb7ez5uXFWHuVRs6xCTrf1yirs9a4j4Y27nn7SRfO6v67XsQ==",
          "dev": true,
          "requires": {
            "commander": "2.13.0",
            "source-map": "0.6.1"
          }
        }
      }
    },
    "ultron": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ultron/-/ultron-1.1.1.tgz",
      "integrity": "sha512-UIEXBNeYmKptWH6z8ZnqTeS8fV74zG0/eRU9VGkpzz+LIJNs8W/zM/L+7ctCkRrgbNnnR0xxw4bKOr0cW0N0Og=="
    },
    "undefsafe": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.2.tgz",
      "integrity": "sha1-Il9rngM3Zj4Njnz9aG/Cg2zKznY=",
      "dev": true,
      "requires": {
        "debug": "2.6.9"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "underscore": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/underscore/-/underscore-1.6.0.tgz",
      "integrity": "sha1-izixDKze9jM3uLJOT/htRa6lKag=",
      "dev": true
    },
    "union-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.0.tgz",
      "integrity": "sha1-XHHDTLW61dzr4+oM0IIHulqhrqQ=",
      "dev": true,
      "requires": {
        "arr-union": "3.1.0",
        "get-value": "2.0.6",
        "is-extendable": "0.1.1",
        "set-value": "0.4.3"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "0.1.1"
          }
        },
        "set-value": {
          "version": "0.4.3",
          "resolved": "https://registry.npmjs.org/set-value/-/set-value-0.4.3.tgz",
          "integrity": "sha1-fbCPnT0i3H945Trzw79GZuzfzPE=",
          "dev": true,
          "requires": {
            "extend-shallow": "2.0.1",
            "is-extendable": "0.1.1",
            "is-plain-object": "2.0.4",
            "to-object-path": "0.3.0"
          }
        }
      }
    },
    "unique-filename": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-1.1.0.tgz",
      "integrity": "sha1-0F8v5AMlYIcfMOk8vnNe6iAVFPM=",
      "dev": true,
      "requires": {
        "unique-slug": "2.0.0"
      }
    },
    "unique-slug": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unique-slug/-/unique-slug-2.0.0.tgz",
      "integrity": "sha1-22Z258fMBimHj/GWCXx4hVrp9Ks=",
      "dev": true,
      "requires": {
        "imurmurhash": "0.1.4"
      }
    },
    "unique-string": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-1.0.0.tgz",
      "integrity": "sha1-nhBXzKhRq7kzmPizOuGHuZyuwRo=",
      "dev": true,
      "requires": {
        "crypto-random-string": "1.0.0"
      }
    },
    "universalify": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.1.tgz",
      "integrity": "sha1-+nG63UQ3r0wUiEHjs7Fl+enlkLc=",
      "dev": true
    },
    "unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
    },
    "unset-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
      "dev": true,
      "requires": {
        "has-value": "0.3.1",
        "isobject": "3.0.1"
      },
      "dependencies": {
        "has-value": {
          "version": "0.3.1",
          "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
          "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
          "dev": true,
          "requires": {
            "get-value": "2.0.6",
            "has-values": "0.1.4",
            "isobject": "2.1.0"
          },
          "dependencies": {
            "isobject": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
              "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
              "dev": true,
              "requires": {
                "isarray": "1.0.0"
              }
            }
          }
        },
        "has-values": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
          "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
          "dev": true
        },
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "untildify": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/untildify/-/untildify-3.0.3.tgz",
      "integrity": "sha512-iSk/J8efr8uPT/Z4eSUywnqyrQU7DSdMfdqK4iWEaUVVmcP5JcnpRqmVMwcwcnmI1ATFNgC5V90u09tBynNFKA==",
      "dev": true
    },
    "unzip-response": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/unzip-response/-/unzip-response-2.0.1.tgz",
      "integrity": "sha1-0vD3N9FrBhXnKmk17QQhRXLVb5c=",
      "dev": true
    },
    "upath": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/upath/-/upath-1.1.0.tgz",
      "integrity": "sha512-bzpH/oBhoS/QI/YtbkqCg6VEiPYjSZtrHQM6/QnJS6OL9pKUFLqb3aFh4Scvwm45+7iAgiMkLhSbaZxUqmrprw==",
      "dev": true
    },
    "update-notifier": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/update-notifier/-/update-notifier-2.5.0.tgz",
      "integrity": "sha512-gwMdhgJHGuj/+wHJJs9e6PcCszpxR1b236igrOkUofGhqJuG+amlIKwApH1IW1WWl7ovZxsX49lMBWLxSdm5Dw==",
      "dev": true,
      "requires": {
        "boxen": "1.3.0",
        "chalk": "2.4.1",
        "configstore": "3.1.2",
        "import-lazy": "2.1.0",
        "is-ci": "1.1.0",
        "is-installed-globally": "0.1.0",
        "is-npm": "1.0.0",
        "latest-version": "3.1.0",
        "semver-diff": "2.1.0",
        "xdg-basedir": "3.0.0"
      }
    },
    "uri-js": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
      "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
      "dev": true,
      "requires": {
        "punycode": "2.1.1"
      },
      "dependencies": {
        "punycode": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
          "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
          "dev": true
        }
      }
    },
    "urix": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
      "dev": true
    },
    "url": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/url/-/url-0.11.0.tgz",
      "integrity": "sha1-ODjpfPxgUh63PFJajlW/3Z4uKPE=",
      "dev": true,
      "requires": {
        "punycode": "1.3.2",
        "querystring": "0.2.0"
      },
      "dependencies": {
        "punycode": {
          "version": "1.3.2",
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz",
          "integrity": "sha1-llOgNvt8HuQjQvIyXM7v6jkmxI0=",
          "dev": true
        }
      }
    },
    "url-parse-lax": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-1.0.0.tgz",
      "integrity": "sha1-evjzA2Rem9eaJy56FKxovAYJ2nM=",
      "dev": true,
      "requires": {
        "prepend-http": "1.0.4"
      }
    },
    "url-to-options": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/url-to-options/-/url-to-options-1.0.1.tgz",
      "integrity": "sha1-FQWgOiiaSMvXpDTvuu7FBV9WM6k=",
      "dev": true
    },
    "use": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/use/-/use-3.1.0.tgz",
      "integrity": "sha512-6UJEQM/L+mzC3ZJNM56Q4DFGLX/evKGRg15UJHGB9X5j5Z3AFbgZvjUh2yq/UJUY4U5dh7Fal++XbNg1uzpRAw==",
      "dev": true,
      "requires": {
        "kind-of": "6.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "6.0.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
          "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
          "dev": true
        }
      }
    },
    "util": {
      "version": "0.10.4",
      "resolved": "https://registry.npmjs.org/util/-/util-0.10.4.tgz",
      "integrity": "sha512-0Pm9hTQ3se5ll1XihRic3FDIku70C+iHUdT/W926rSgHV5QgXsYbKZN8MSC3tJtSkhuROzvsQjAaFENRXr+19A==",
      "dev": true,
      "requires": {
        "inherits": "2.0.3"
      }
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
    },
    "utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
    },
    "uuid": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.2.1.tgz",
      "integrity": "sha512-jZnMwlb9Iku/O3smGWvZhauCf6cvvpKi4BKRiliS3cxnI+Gz9j5MEpTz2UFuXiKPJocb7gnsLHwiS05ige5BEA==",
      "dev": true
    },
    "v8-compile-cache": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.0.0.tgz",
      "integrity": "sha512-qNdTUMaCjPs4eEnM3W9H94R3sU70YCuT+/ST7nUf+id1bVOrdjrpUaeZLqPBPRph3hsgn4a4BvwpxhHZx+oSDg==",
      "dev": true
    },
    "v8flags": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/v8flags/-/v8flags-3.1.1.tgz",
      "integrity": "sha512-iw/1ViSEaff8NJ3HLyEjawk/8hjJib3E7pvG4pddVXfUg1983s3VGsiClDjhK64MQVDGqc1Q8r18S4VKQZS9EQ==",
      "dev": true,
      "requires": {
        "homedir-polyfill": "1.0.1"
      }
    },
    "validate-npm-package-license": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.3.tgz",
      "integrity": "sha512-63ZOUnL4SIXj4L0NixR3L1lcjO38crAbgrTpl28t8jjrfuiOBL5Iygm+60qPs/KsZGzPNg6Smnc/oY16QTjF0g==",
      "dev": true,
      "requires": {
        "spdx-correct": "3.0.0",
        "spdx-expression-parse": "3.0.0"
      }
    },
    "vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
    },
    "verror": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
      "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
      "dev": true,
      "requires": {
        "assert-plus": "1.0.0",
        "core-util-is": "1.0.2",
        "extsprintf": "1.3.0"
      }
    },
    "vinyl": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/vinyl/-/vinyl-1.2.0.tgz",
      "integrity": "sha1-XIgDbPVl5d8FVYv8kR+GVt8hiIQ=",
      "dev": true,
      "requires": {
        "clone": "1.0.4",
        "clone-stats": "0.0.1",
        "replace-ext": "0.0.1"
      }
    },
    "vinyl-file": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/vinyl-file/-/vinyl-file-2.0.0.tgz",
      "integrity": "sha1-p+v1/779obfRjRQPyweyI++2dRo=",
      "dev": true,
      "requires": {
        "graceful-fs": "4.1.11",
        "pify": "2.3.0",
        "pinkie-promise": "2.0.1",
        "strip-bom": "2.0.0",
        "strip-bom-stream": "2.0.0",
        "vinyl": "1.2.0"
      },
      "dependencies": {
        "pify": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
          "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
          "dev": true
        }
      }
    },
    "vm-browserify": {
      "version": "0.0.4",
      "resolved": "https://registry.npmjs.org/vm-browserify/-/vm-browserify-0.0.4.tgz",
      "integrity": "sha1-XX6kW7755Kb/ZflUOOCofDV9WnM=",
      "dev": true,
      "requires": {
        "indexof": "0.0.1"
      }
    },
    "walker": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.7.tgz",
      "integrity": "sha1-L3+bj9ENZ3JisYqITijRlhjgKPs=",
      "dev": true,
      "requires": {
        "makeerror": "1.0.11"
      }
    },
    "watch": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/watch/-/watch-0.18.0.tgz",
      "integrity": "sha1-KAlUdsbffJDJYxOJkMClQj60uYY=",
      "dev": true,
      "requires": {
        "exec-sh": "0.2.1",
        "minimist": "1.2.0"
      },
      "dependencies": {
        "minimist": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
          "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ=",
          "dev": true
        }
      }
    },
    "watchpack": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-1.6.0.tgz",
      "integrity": "sha512-i6dHe3EyLjMmDlU1/bGQpEw25XSjkJULPuAVKCbNRefQVq48yXKUpwg538F7AZTf9kyr57zj++pQFltUa5H7yA==",
      "dev": true,
      "requires": {
        "chokidar": "2.0.3",
        "graceful-fs": "4.1.11",
        "neo-async": "2.5.1"
      }
    },
    "webidl-conversions": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-4.0.2.tgz",
      "integrity": "sha512-YQ+BmxuTgd6UXZW3+ICGfyqRyHXVlD5GtQr5+qjiNW7bF0cqrzX500HVXPBOvgXb5YnzDd+h0zqyv61KUD7+Sg==",
      "dev": true
    },
    "webpack": {
      "version": "4.10.2",
      "resolved": "https://registry.npmjs.org/webpack/-/webpack-4.10.2.tgz",
      "integrity": "sha512-S4yIBevM7DFSAOAvWSBgvuH5mtJ3HgjAS6tCGsTxxHtrVdbntdRVaPey2u9sCns6KV859Vwd2DwkvBLTcs6t6g==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.5.9",
        "@webassemblyjs/wasm-edit": "1.5.9",
        "@webassemblyjs/wasm-opt": "1.5.9",
        "@webassemblyjs/wasm-parser": "1.5.9",
        "acorn": "5.6.1",
        "acorn-dynamic-import": "3.0.0",
        "ajv": "6.5.0",
        "ajv-keywords": "3.2.0",
        "chrome-trace-event": "0.1.3",
        "enhanced-resolve": "4.0.0",
        "eslint-scope": "3.7.1",
        "json-parse-better-errors": "1.0.2",
        "loader-runner": "2.3.0",
        "loader-utils": "1.1.0",
        "memory-fs": "0.4.1",
        "micromatch": "3.1.10",
        "mkdirp": "0.5.1",
        "neo-async": "2.5.1",
        "node-libs-browser": "2.1.0",
        "schema-utils": "0.4.5",
        "tapable": "1.0.0",
        "uglifyjs-webpack-plugin": "1.2.5",
        "watchpack": "1.6.0",
        "webpack-sources": "1.1.0"
      },
      "dependencies": {
        "acorn": {
          "version": "5.6.1",
          "resolved": "https://registry.npmjs.org/acorn/-/acorn-5.6.1.tgz",
          "integrity": "sha512-XH4o5BK5jmw9PzSGK7mNf+/xV+mPxQxGZoeC36OVsJZYV77JAG9NnI7T90hoUpI/C1TOfXWTvugRdZ9ZR3iE2Q==",
          "dev": true
        },
        "ajv": {
          "version": "6.5.0",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.5.0.tgz",
          "integrity": "sha512-VDUX1oSajablmiyFyED9L1DFndg0P9h7p1F+NO8FkIzei6EPrR6Zu1n18rd5P8PqaSRd/FrWv3G1TVBqpM83gA==",
          "dev": true,
          "requires": {
            "fast-deep-equal": "2.0.1",
            "fast-json-stable-stringify": "2.0.0",
            "json-schema-traverse": "0.3.1",
            "uri-js": "4.2.2"
          }
        },
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
          "dev": true
        },
        "array-unique": {
          "version": "0.3.2",
          "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
          "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
          "dev": true
        },
        "braces": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
          "dev": true,
          "requires": {
            "arr-flatten": "1.1.0",
            "array-unique": "0.3.2",
            "extend-shallow": "2.0.1",
            "fill-range": "4.0.0",
            "isobject": "3.0.1",
            "repeat-element": "1.1.2",
            "snapdragon": "0.8.2",
            "snapdragon-node": "2.1.1",
            "split-string": "3.1.0",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "expand-brackets": {
          "version": "2.1.4",
          "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
          "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
          "dev": true,
          "requires": {
            "debug": "2.6.9",
            "define-property": "0.2.5",
            "extend-shallow": "2.0.1",
            "posix-character-classes": "0.1.1",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "define-property": {
              "version": "0.2.5",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
              "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
              "dev": true,
              "requires": {
                "is-descriptor": "0.1.6"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "3.2.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "1.1.6"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "3.2.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "1.1.6"
                  }
                }
              }
            },
            "is-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
              "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
              "dev": true,
              "requires": {
                "is-accessor-descriptor": "0.1.6",
                "is-data-descriptor": "0.1.4",
                "kind-of": "5.1.0"
              }
            },
            "kind-of": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
              "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
              "dev": true
            }
          }
        },
        "extglob": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
          "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
          "dev": true,
          "requires": {
            "array-unique": "0.3.2",
            "define-property": "1.0.0",
            "expand-brackets": "2.1.4",
            "extend-shallow": "2.0.1",
            "fragment-cache": "0.2.1",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          },
          "dependencies": {
            "define-property": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
              "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
              "dev": true,
              "requires": {
                "is-descriptor": "1.0.2"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "fast-deep-equal": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
          "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
          "dev": true
        },
        "fill-range": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
          "dev": true,
          "requires": {
            "extend-shallow": "2.0.1",
            "is-number": "3.0.0",
            "repeat-string": "1.6.1",
            "to-regex-range": "2.1.1"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "0.1.1"
              }
            }
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "6.0.2"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "1.0.0",
            "is-data-descriptor": "1.0.0",
            "kind-of": "6.0.2"
          }
        },
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "dev": true,
          "requires": {
            "kind-of": "3.2.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "dev": true,
              "requires": {
                "is-buffer": "1.1.6"
              }
            }
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
          "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
          "dev": true
        },
        "micromatch": {
          "version": "3.1.10",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
          "dev": true,
          "requires": {
            "arr-diff": "4.0.0",
            "array-unique": "0.3.2",
            "braces": "2.3.2",
            "define-property": "2.0.2",
            "extend-shallow": "3.0.2",
            "extglob": "2.0.4",
            "fragment-cache": "0.2.1",
            "kind-of": "6.0.2",
            "nanomatch": "1.2.9",
            "object.pick": "1.3.0",
            "regex-not": "1.0.2",
            "snapdragon": "0.8.2",
            "to-regex": "3.0.2"
          }
        }
      }
    },
    "webpack-addons": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/webpack-addons/-/webpack-addons-1.1.5.tgz",
      "integrity": "sha512-MGO0nVniCLFAQz1qv22zM02QPjcpAoJdy7ED0i3Zy7SY1IecgXCm460ib7H/Wq7e9oL5VL6S2BxaObxwIcag0g==",
      "dev": true,
      "requires": {
        "jscodeshift": "0.4.1"
      },
      "dependencies": {
        "ast-types": {
          "version": "0.10.1",
          "resolved": "https://registry.npmjs.org/ast-types/-/ast-types-0.10.1.tgz",
          "integrity": "sha512-UY7+9DPzlJ9VM8eY0b2TUZcZvF+1pO0hzMtAyjBYKhOmnvRlqYNYnWdtsMj0V16CGaMlpL0G1jnLbLo4AyotuQ==",
          "dev": true
        },
        "async": {
          "version": "1.5.2",
          "resolved": "https://registry.npmjs.org/async/-/async-1.5.2.tgz",
          "integrity": "sha1-7GphrlZIDAw8skHJVhjiCJL5Zyo=",
          "dev": true
        },
        "jscodeshift": {
          "version": "0.4.1",
          "resolved": "https://registry.npmjs.org/jscodeshift/-/jscodeshift-0.4.1.tgz",
          "integrity": "sha512-iOX6If+hsw0q99V3n31t4f5VlD1TQZddH08xbT65ZqA7T4Vkx68emrDZMUOLVvCEAJ6NpAk7DECe3fjC/t52AQ==",
          "dev": true,
          "requires": {
            "async": "1.5.2",
            "babel-plugin-transform-flow-strip-types": "6.22.0",
            "babel-preset-es2015": "6.24.1",
            "babel-preset-stage-1": "6.24.1",
            "babel-register": "6.26.0",
            "babylon": "6.18.0",
            "colors": "1.3.0",
            "flow-parser": "0.73.0",
            "lodash": "4.17.10",
            "micromatch": "2.3.11",
            "node-dir": "0.1.8",
            "nomnom": "1.8.1",
            "recast": "0.12.9",
            "temp": "0.8.3",
            "write-file-atomic": "1.3.4"
          }
        },
        "recast": {
          "version": "0.12.9",
          "resolved": "https://registry.npmjs.org/recast/-/recast-0.12.9.tgz",
          "integrity": "sha512-y7ANxCWmMW8xLOaiopiRDlyjQ9ajKRENBH+2wjntIbk3A6ZR1+BLQttkmSHMY7Arl+AAZFwJ10grg2T6f1WI8A==",
          "dev": true,
          "requires": {
            "ast-types": "0.10.1",
            "core-js": "2.5.7",
            "esprima": "4.0.0",
            "private": "0.1.8",
            "source-map": "0.6.1"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        },
        "write-file-atomic": {
          "version": "1.3.4",
          "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-1.3.4.tgz",
          "integrity": "sha1-+Aek8LHZ6ROuekgRLmzDrxmRtF8=",
          "dev": true,
          "requires": {
            "graceful-fs": "4.1.11",
            "imurmurhash": "0.1.4",
            "slide": "1.1.6"
          }
        }
      }
    },
    "webpack-cli": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/webpack-cli/-/webpack-cli-2.1.5.tgz",
      "integrity": "sha512-CiWQR+1JS77rmyiO6y1q8Kt/O+e8nUUC9YfJ25JtSmzDwbqJV7vIsh3+QKRHVTbTCa0DaVh8iY1LBiagUIDB3g==",
      "dev": true,
      "requires": {
        "chalk": "2.4.1",
        "cross-spawn": "6.0.5",
        "diff": "3.5.0",
        "enhanced-resolve": "4.0.0",
        "envinfo": "5.10.0",
        "glob-all": "3.1.0",
        "global-modules": "1.0.0",
        "got": "8.3.1",
        "import-local": "1.0.0",
        "inquirer": "5.2.0",
        "interpret": "1.1.0",
        "jscodeshift": "0.5.1",
        "listr": "0.14.1",
        "loader-utils": "1.1.0",
        "lodash": "4.17.10",
        "log-symbols": "2.2.0",
        "mkdirp": "0.5.1",
        "p-each-series": "1.0.0",
        "p-lazy": "1.0.0",
        "prettier": "1.13.4",
        "supports-color": "5.4.0",
        "v8-compile-cache": "2.0.0",
        "webpack-addons": "1.1.5",
        "yargs": "11.1.0",
        "yeoman-environment": "2.2.0",
        "yeoman-generator": "2.0.5"
      },
      "dependencies": {
        "camelcase": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz",
          "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0=",
          "dev": true
        },
        "cliui": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-4.1.0.tgz",
          "integrity": "sha512-4FG+RSG9DL7uEwRUZXZn3SS34DiDPfzP0VOiEwtUWlE+AR2EIg+hSyvrIgUUfhdgR/UkAeW2QHgeP+hWrXs7jQ==",
          "dev": true,
          "requires": {
            "string-width": "2.1.1",
            "strip-ansi": "4.0.0",
            "wrap-ansi": "2.1.0"
          }
        },
        "cross-spawn": {
          "version": "6.0.5",
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
          "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
          "dev": true,
          "requires": {
            "nice-try": "1.0.4",
            "path-key": "2.0.1",
            "semver": "5.5.0",
            "shebang-command": "1.2.0",
            "which": "1.3.1"
          }
        },
        "got": {
          "version": "8.3.1",
          "resolved": "https://registry.npmjs.org/got/-/got-8.3.1.tgz",
          "integrity": "sha512-tiLX+bnYm5A56T5N/n9Xo89vMaO1mrS9qoDqj3u/anVooqGozvY/HbXzEpDfbNeKsHCBpK40gSbz8wGYSp3i1w==",
          "dev": true,
          "requires": {
            "@sindresorhus/is": "0.7.0",
            "cacheable-request": "2.1.4",
            "decompress-response": "3.3.0",
            "duplexer3": "0.1.4",
            "get-stream": "3.0.0",
            "into-stream": "3.1.0",
            "is-retry-allowed": "1.1.0",
            "isurl": "1.0.0",
            "lowercase-keys": "1.0.1",
            "mimic-response": "1.0.0",
            "p-cancelable": "0.4.1",
            "p-timeout": "2.0.1",
            "pify": "3.0.0",
            "safe-buffer": "5.1.2",
            "timed-out": "4.0.1",
            "url-parse-lax": "3.0.0",
            "url-to-options": "1.0.1"
          }
        },
        "p-cancelable": {
          "version": "0.4.1",
          "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-0.4.1.tgz",
          "integrity": "sha512-HNa1A8LvB1kie7cERyy21VNeHb2CWJJYqyyC2o3klWFfMGlFmWv2Z7sFgZH8ZiaYL95ydToKTFVXgMV/Os0bBQ==",
          "dev": true
        },
        "prepend-http": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-2.0.0.tgz",
          "integrity": "sha1-6SQ0v6XqjBn0HN/UAddBo8gZ2Jc=",
          "dev": true
        },
        "url-parse-lax": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-3.0.0.tgz",
          "integrity": "sha1-FrXK/Afb42dsGxmZF3gj1lA6yww=",
          "dev": true,
          "requires": {
            "prepend-http": "2.0.0"
          }
        },
        "yargs": {
          "version": "11.1.0",
          "resolved": "https://registry.npmjs.org/yargs/-/yargs-11.1.0.tgz",
          "integrity": "sha512-NwW69J42EsCSanF8kyn5upxvjp5ds+t3+udGBeTbFnERA+lF541DDpMawzo4z6W/QrzNM18D+BPMiOBibnFV5A==",
          "dev": true,
          "requires": {
            "cliui": "4.1.0",
            "decamelize": "1.2.0",
            "find-up": "2.1.0",
            "get-caller-file": "1.0.2",
            "os-locale": "2.1.0",
            "require-directory": "2.1.1",
            "require-main-filename": "1.0.1",
            "set-blocking": "2.0.0",
            "string-width": "2.1.1",
            "which-module": "2.0.0",
            "y18n": "3.2.1",
            "yargs-parser": "9.0.2"
          }
        },
        "yargs-parser": {
          "version": "9.0.2",
          "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-9.0.2.tgz",
          "integrity": "sha1-nM9qQ0YP5O1Aqbto9I1DuKaMwHc=",
          "dev": true,
          "requires": {
            "camelcase": "4.1.0"
          }
        }
      }
    },
    "webpack-node-externals": {
      "version": "1.7.2",
      "resolved": "https://registry.npmjs.org/webpack-node-externals/-/webpack-node-externals-1.7.2.tgz",
      "integrity": "sha512-ajerHZ+BJKeCLviLUUmnyd5B4RavLF76uv3cs6KNuO8W+HuQaEs0y0L7o40NQxdPy5w0pcv8Ew7yPUAQG0UdCg==",
      "dev": true
    },
    "webpack-sources": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-1.1.0.tgz",
      "integrity": "sha512-aqYp18kPphgoO5c/+NaUvEeACtZjMESmDChuD3NBciVpah3XpMEU9VAAtIaB1BsfJWWTSdv8Vv1m3T0aRk2dUw==",
      "dev": true,
      "requires": {
        "source-list-map": "2.0.0",
        "source-map": "0.6.1"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "whatwg-encoding": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.3.tgz",
      "integrity": "sha512-jLBwwKUhi8WtBfsMQlL4bUUcT8sMkAtQinscJAe/M4KHCkHuUJAF6vuB0tueNIw4c8ziO6AkRmgY+jL3a0iiPw==",
      "dev": true,
      "requires": {
        "iconv-lite": "0.4.19"
      }
    },
    "whatwg-url": {
      "version": "4.8.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-4.8.0.tgz",
      "integrity": "sha1-0pgaqRSMHgCkHFphMRZqtGg7vMA=",
      "dev": true,
      "requires": {
        "tr46": "0.0.3",
        "webidl-conversions": "3.0.1"
      },
      "dependencies": {
        "webidl-conversions": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
          "integrity": "sha1-JFNCdeKnvGvnvIZhHMFq4KVlSHE=",
          "dev": true
        }
      }
    },
    "which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "dev": true,
      "requires": {
        "isexe": "2.0.0"
      }
    },
    "which-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
      "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=",
      "dev": true
    },
    "widest-line": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-2.0.0.tgz",
      "integrity": "sha1-AUKk6KJD+IgsAjOqDgKBqnYVInM=",
      "dev": true,
      "requires": {
        "string-width": "2.1.1"
      }
    },
    "window-size": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/window-size/-/window-size-0.1.0.tgz",
      "integrity": "sha1-VDjNLqk7IC76Ohn+iIeu58lPnJ0=",
      "dev": true,
      "optional": true
    },
    "wordwrap": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.3.tgz",
      "integrity": "sha1-o9XabNXAvAAI03I0u68b7WMFkQc=",
      "dev": true
    },
    "worker-farm": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/worker-farm/-/worker-farm-1.6.0.tgz",
      "integrity": "sha512-6w+3tHbM87WnSWnENBUvA2pxJPLhQUg5LKwUQHq3r+XPhIM+Gh2R5ycbwPCyuGbNg+lPgdcnQUhuC02kJCvffQ==",
      "dev": true,
      "requires": {
        "errno": "0.1.7"
      }
    },
    "wrap-ansi": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
      "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",
      "dev": true,
      "requires": {
        "string-width": "1.0.2",
        "strip-ansi": "3.0.1"
      },
      "dependencies": {
        "string-width": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
          "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
          "dev": true,
          "requires": {
            "code-point-at": "1.1.0",
            "is-fullwidth-code-point": "1.0.0",
            "strip-ansi": "3.0.1"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "2.1.1"
          }
        }
      }
    },
    "wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
      "dev": true
    },
    "write-file-atomic": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.3.0.tgz",
      "integrity": "sha512-xuPeK4OdjWqtfi59ylvVL0Yn35SF3zgcAcv7rBPFHVaEapaDr4GdGgm3j7ckTwH9wHL7fGmgfAnb0+THrHb8tA==",
      "dev": true,
      "requires": {
        "graceful-fs": "4.1.11",
        "imurmurhash": "0.1.4",
        "signal-exit": "3.0.2"
      }
    },
    "ws": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/ws/-/ws-3.3.3.tgz",
      "integrity": "sha512-nnWLa/NwZSt4KQJu51MYlCcSQ5g7INpOrOMt4XV8j4dqTXdmlUmSHQ8/oLC069ckre0fRsgfvsKwbTdtKLCDkA==",
      "requires": {
        "async-limiter": "1.0.0",
        "safe-buffer": "5.1.2",
        "ultron": "1.1.1"
      }
    },
    "xdg-basedir": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/xdg-basedir/-/xdg-basedir-3.0.0.tgz",
      "integrity": "sha1-SWsswQnsqNus/i3HK2A8F8WHCtQ=",
      "dev": true
    },
    "xml-name-validator": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-2.0.1.tgz",
      "integrity": "sha1-TYuPHszTQZqjYgYb7O9RXh5VljU=",
      "dev": true
    },
    "xmlhttprequest-ssl": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/xmlhttprequest-ssl/-/xmlhttprequest-ssl-1.5.5.tgz",
      "integrity": "sha1-wodrBhaKrcQOV9l+gRkayPQ5iz4="
    },
    "xtend": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.1.tgz",
      "integrity": "sha1-pcbVMr5lbiPbgg77lDofBJmNY68="
    },
    "y18n": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-3.2.1.tgz",
      "integrity": "sha1-bRX7qITAhnnA136I53WegR4H+kE=",
      "dev": true
    },
    "yallist": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
      "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI=",
      "dev": true
    },
    "yargs": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-9.0.1.tgz",
      "integrity": "sha1-UqzCP+7Kw0BCB47njAwAf1CF20w=",
      "dev": true,
      "requires": {
        "camelcase": "4.1.0",
        "cliui": "3.2.0",
        "decamelize": "1.2.0",
        "get-caller-file": "1.0.2",
        "os-locale": "2.1.0",
        "read-pkg-up": "2.0.0",
        "require-directory": "2.1.1",
        "require-main-filename": "1.0.1",
        "set-blocking": "2.0.0",
        "string-width": "2.1.1",
        "which-module": "2.0.0",
        "y18n": "3.2.1",
        "yargs-parser": "7.0.0"
      },
      "dependencies": {
        "camelcase": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz",
          "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0=",
          "dev": true
        },
        "cliui": {
          "version": "3.2.0",
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-3.2.0.tgz",
          "integrity": "sha1-EgYBU3qRbSmUD5NNo7SNWFo5IT0=",
          "dev": true,
          "requires": {
            "string-width": "1.0.2",
            "strip-ansi": "3.0.1",
            "wrap-ansi": "2.1.0"
          },
          "dependencies": {
            "string-width": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
              "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
              "dev": true,
              "requires": {
                "code-point-at": "1.1.0",
                "is-fullwidth-code-point": "1.0.0",
                "strip-ansi": "3.0.1"
              }
            }
          }
        },
        "load-json-file": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-2.0.0.tgz",
          "integrity": "sha1-eUfkIUmvgNaWy/eXvKq8/h/inKg=",
          "dev": true,
          "requires": {
            "graceful-fs": "4.1.11",
            "parse-json": "2.2.0",
            "pify": "2.3.0",
            "strip-bom": "3.0.0"
          }
        },
        "path-type": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/path-type/-/path-type-2.0.0.tgz",
          "integrity": "sha1-8BLMuEFbcJb8LaoQVMPXI4lZTHM=",
          "dev": true,
          "requires": {
            "pify": "2.3.0"
          }
        },
        "pify": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
          "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
          "dev": true
        },
        "read-pkg": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-2.0.0.tgz",
          "integrity": "sha1-jvHAYjxqbbDcZxPEv6xGMysjaPg=",
          "dev": true,
          "requires": {
            "load-json-file": "2.0.0",
            "normalize-package-data": "2.4.0",
            "path-type": "2.0.0"
          }
        },
        "read-pkg-up": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-2.0.0.tgz",
          "integrity": "sha1-a3KoBImE4MQeeVEP1en6mbO1Sb4=",
          "dev": true,
          "requires": {
            "find-up": "2.1.0",
            "read-pkg": "2.0.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "2.1.1"
          }
        },
        "strip-bom": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
          "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
          "dev": true
        }
      }
    },
    "yargs-parser": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-7.0.0.tgz",
      "integrity": "sha1-jQrELxbqVd69MyyvTEA4s+P139k=",
      "dev": true,
      "requires": {
        "camelcase": "4.1.0"
      },
      "dependencies": {
        "camelcase": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz",
          "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0=",
          "dev": true
        }
      }
    },
    "yeast": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/yeast/-/yeast-0.1.2.tgz",
      "integrity": "sha1-AI4G2AlDIMNy28L47XagymyKxBk="
    },
    "yeoman-environment": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/yeoman-environment/-/yeoman-environment-2.2.0.tgz",
      "integrity": "sha512-gQ+hIW8QRlUo4jGBDCm++qg01SXaIVJ7VyLrtSwk2jQG4vtvluWpsGIl7V8DqT2jGiqukdec0uEyffVEyQgaZA==",
      "dev": true,
      "requires": {
        "chalk": "2.4.1",
        "cross-spawn": "6.0.5",
        "debug": "3.1.0",
        "diff": "3.5.0",
        "escape-string-regexp": "1.0.5",
        "globby": "8.0.1",
        "grouped-queue": "0.3.3",
        "inquirer": "5.2.0",
        "is-scoped": "1.0.0",
        "lodash": "4.17.10",
        "log-symbols": "2.2.0",
        "mem-fs": "1.1.3",
        "strip-ansi": "4.0.0",
        "text-table": "0.2.0",
        "untildify": "3.0.3"
      },
      "dependencies": {
        "cross-spawn": {
          "version": "6.0.5",
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
          "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
          "dev": true,
          "requires": {
            "nice-try": "1.0.4",
            "path-key": "2.0.1",
            "semver": "5.5.0",
            "shebang-command": "1.2.0",
            "which": "1.3.1"
          }
        }
      }
    },
    "yeoman-generator": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/yeoman-generator/-/yeoman-generator-2.0.5.tgz",
      "integrity": "sha512-rV6tJ8oYzm4mmdF2T3wjY+Q42jKF2YiiD0VKfJ8/0ZYwmhCKC9Xs2346HVLPj/xE13i68psnFJv7iS6gWRkeAg==",
      "dev": true,
      "requires": {
        "async": "2.6.1",
        "chalk": "2.4.1",
        "cli-table": "0.3.1",
        "cross-spawn": "6.0.5",
        "dargs": "5.1.0",
        "dateformat": "3.0.3",
        "debug": "3.1.0",
        "detect-conflict": "1.0.1",
        "error": "7.0.2",
        "find-up": "2.1.0",
        "github-username": "4.1.0",
        "istextorbinary": "2.2.1",
        "lodash": "4.17.10",
        "make-dir": "1.3.0",
        "mem-fs-editor": "4.0.2",
        "minimist": "1.2.0",
        "pretty-bytes": "4.0.2",
        "read-chunk": "2.1.0",
        "read-pkg-up": "3.0.0",
        "rimraf": "2.6.2",
        "run-async": "2.3.0",
        "shelljs": "0.8.2",
        "text-table": "0.2.0",
        "through2": "2.0.3",
        "yeoman-environment": "2.2.0"
      },
      "dependencies": {
        "cross-spawn": {
          "version": "6.0.5",
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
          "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
          "dev": true,
          "requires": {
            "nice-try": "1.0.4",
            "path-key": "2.0.1",
            "semver": "5.5.0",
            "shebang-command": "1.2.0",
            "which": "1.3.1"
          }
        },
        "load-json-file": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
          "integrity": "sha1-L19Fq5HjMhYjT9U62rZo607AmTs=",
          "dev": true,
          "requires": {
            "graceful-fs": "4.1.11",
            "parse-json": "4.0.0",
            "pify": "3.0.0",
            "strip-bom": "3.0.0"
          }
        },
        "minimist": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
          "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ=",
          "dev": true
        },
        "parse-json": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
          "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
          "dev": true,
          "requires": {
            "error-ex": "1.3.1",
            "json-parse-better-errors": "1.0.2"
          }
        },
        "path-type": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
          "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
          "dev": true,
          "requires": {
            "pify": "3.0.0"
          }
        },
        "read-pkg": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
          "integrity": "sha1-nLxoaXj+5l0WwA4rGcI3/Pbjg4k=",
          "dev": true,
          "requires": {
            "load-json-file": "4.0.0",
            "normalize-package-data": "2.4.0",
            "path-type": "3.0.0"
          }
        },
        "read-pkg-up": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-3.0.0.tgz",
          "integrity": "sha1-PtSWaF26D4/hGNBpHcUfSh/5bwc=",
          "dev": true,
          "requires": {
            "find-up": "2.1.0",
            "read-pkg": "3.0.0"
          }
        },
        "strip-bom": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
          "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
          "dev": true
        }
      }
    },
    "yn": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/yn/-/yn-2.0.0.tgz",
      "integrity": "sha1-5a2ryKz0CPY4X8dklWhMiOavaJo=",
      "dev": true
    }
  }
}
`;
       }