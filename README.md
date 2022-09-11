# Steps

1- Create a new project

- Generate package.json

  ```bash
  npm init -y
  ```

2- Setup TypeScript

- Install typescript

  ```bash
  npm install -D typescript
  ```

- Generate a tsconfig.json file

  ```bash
  npx tsc --init
  ```

- Add Build and Watch Script to package.json

  ```json
      "build": "tsc",
      "dev": "tsc -w",
  ```

- TS Config Reference Link - https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

3- Setup ESLint

- Generate .eslintrc.json file and install dependencies

  ```bash
  npx eslint --init
  ```

- Add lint check and fix script to package.json

  ```json
      "lint": "eslint ./src/ts/**/*.ts",
      "lint:fix": "eslint ./src/ts/**/*.ts --fix",
  ```

- ESLint Config Reference Link - https://eslint.org/docs/user-guide/configuring

- airbnb Style Guide Reference Link - https://github.com/airbnb/javascript

- eslint common rules reference link - https://peaku.co/questions/1365-usando-eslint-con-mecanografiado:-no-se-puede-resolver-la-ruta-al-modulo

4- Setup Prettier

- Install Prettier

  ```bash
  npm install -D prettier
  ```

- Add format script to package.json

  ```json
      "format": "prettier --write ./src/ts/**/*.ts",
  ```

- Add Prettier config file (.prettierrc)

  ```json
  {
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all"
  }
  ```

5- Avoiding conflicts when working with ESLint and Prettier

- Install dependencies

  ```bash
  npm install -D eslint-config-prettier eslint-plugin-prettier
  ```

- Setup Reference Links

  - https://dev.to/s2engineers/how-to-make-eslint-work-with-prettier-avoiding-conflicts-and-problems-57pi
  - https://blog.logrocket.com/linting-typescript-using-eslint-and-prettier/
  - https://prettier.io/docs/en/options.html

6- Config VSCode settings

- Add rules to .vscode/settings.json

  ```json
  {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.singleQuote": true,
    "editor.formatOnSave": true,
    "[json]": {
      "editor.tabSize": 2
    },
    "[typescript]": {
      "editor.tabSize": 4,
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    }
  }
  ```

7- Setup Testing Environment

- Install dependencies

  ```bash
  npm install -D chai mocha ts-node @types/chai @types/mocha
  ```

- Add Mocha Test Explorer Config to .vscode/settings.json

  ```json
  {
    "mochaExplorer.require": "ts-node/register",
    "mochaExplorer.files": "tests/*.ts"
  }
  ```

- Add Test Script to package.json

  ```json
      "test": "mocha --require ts-node/register tests/*.ts",
  ```

8- Setup JSDOM

- Install dependencies

  ```bash
  npm install -D jsdom jsdom-global

  ```

- Update Mocha Test Explorer Config in .vscode/settings.json

  ```json
  {
    "mochaExplorer.require": ["ts-node/register", "jsdom-global/register"]
  }
  ```

- Update Test Script in package.json

  ```json
    test": "mocha -r ts-node/register -r jsdom-global/register tests/*test.ts"
  ```

- Setup Reference Links

  - jsdom Reference Link - https://www.npmjs.com/package/jsdom
  - jsdom-global Reference Link - https://www.npmjs.com/package/jsdom-global
