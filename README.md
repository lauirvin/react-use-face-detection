<p align="center">
  <a href="https://github.com/lauirvin/react-component-library-typescript-boilerplate">
    <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="150" />
  </a>
</p>
<h1 align="center">
  ReactJS Component Library TypeScript Boilerplate
</h1>

[Powered by Storybook](https://storybook.js.org/)

## 🧰 Prerequisites

1. Install [NodeJS](https://nodejs.org/en/)
2. Install [yarn](https://classic.yarnpkg.com/en/)
3. Install [Prettier ESLint VSCode Extension](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

## 🚀 Development

1. Locate the repository in terminal/bash
2. Install dependencies - `yarn install` in the repository directory
3. Follow the instructions below in order 👇🏻

### 📖 Storybook

1.  Run `yarn storybook` in repository directory
2.  Open browser and navigate to http://localhost:6006/

### 🎨 Import library locally in a project with hot reload

1. In the project that you want to use this library in, run the following in the root folder:

```
cd node_modules/react && yarn link && cd .. && cd react-dom && yarn link && cd ../..
```

2. Run `yarn link:react` in the root of the library directory
3. Run `yarn link` in the root of the library directory
4. In the project, run `yarn link "name-of-library"` in project that want to use this library)

```
import { SampleComponent } from 'name-of-library'
```

### Testing

- Run `yarn test `in the repository directory

### Create new components

- Run `yarn generate "ComponentName" `in the repository directory

## 🎁 Production deployment

### Publishing

- Run `yarn publish` in the repository and follow the CLI instructions

## 👷 Built With

- [ReactJS](https://reactjs.org/) - Frontend Javascript web framework
- [TypeScript](https://www.typescriptlang.org/) - Open-source language which builds on JavaScript
- [Storybook](https://storybook.js.org/) - UI development tool
- [Jest](https://jestjs.io/) - JavaScript testing framework

## 📚 Author

- **Irvin Ives Lau** - [lauirvin](https://github.com/lauirvin)
- https://www.irviniveslau.com
