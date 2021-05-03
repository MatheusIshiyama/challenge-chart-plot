# Documentation

Documentation to **Challenge chart plot** developed by _Matheus Ishiyama_.

This application is developed using `Next.js` and `React`.

## Page & Components

This application is a SPA (Single Page Application), the main page is the _index.tsx_.

### Components

-   Header
-   Console
    -   ConsoleLog
    -   ChartTypes
        -   ChartTypeStart
        -   ChartTypeSpan
        -   ChartTypeData
        -   ChartTypeStop
-   Graphic
-   Footer
    -   Button

#### Header

This the Header of the page, just to show `User's challenge`

#### Console

That's show all logs have been send to frontend

**ConsoleLog**

Is a single line in the `Console` component.

**ChartTypes**

Is the format of text will be appear in the `ConsoleLog` component.

The ChartTypes is:

-   ChartTypeStart
-   ChartTypeSpan
-   ChartTypeData
-   ChartTypeStop

#### Graphic

Show the plot charts in the graphic.

#### Footer

The footer of the page, it have buttons and inputs to controll all data will be used in the application.

### Context

`Context` allow us to use some data and/or functions between components.

The application has `ChartContext`, to share _chart_ data between `Console`, `Graphic` and `Footer` component.

## Tests

To test the application, we'll use `Jest` and `Babel`.

### Setup

To setup `Jest` and `Babel`, we need to install some _dev dependencies_

#### We need to install:

**Jest dependencies:**

-   jest
-   @jest/types
-   @types/jest
-   ts-jest
-   ts-node
-   @testing-library/jest-dom
-   @testing-library/react
-   identity-obj-proxy

```bash
yarn add jest @jest/types @types/jest ts-jest ts-node @testing-library/jest-dom @testing-library/react identity-obj-proxy -D
```

**Babel dependencies:**

-   @babel/core
-   @babel/plugin-proposal-class-properties
-   babel-jest

```bash
yarn add @babel/core @babel/preset-env @babel/preset-react @babel-typescript @babel/plugin-proposal-class-properties babel-jest -D
```

#### Jest and Babel Config files

At the root of project, we'll create `jest.config.ts`, `jest.setup.ts` and `.babelrc`.

**jest.config.ts**

```ts
// jest.config.ts

// import Config interface from @jest/types
import type { Config } from "@jest/types";

// create config
const config: Config.InitialOptions = {
    // use files to setup after env
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

    // ignore paths to test
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],

    // setting to stop running tests after an error
    bail: 1,

    // automatically clear mock calls and instancies before every test
    clearMocks: true,

    // indicates whether each individual test should be reported during the run
    verbose: true,

    // identify styles from scss|sass|css files
    moduleNameMapper: {
        "\\.(scss|sass|css)": "identity-obj-proxy",
    },
};

// export default jest configs
export default config;
```

**jest.setup.ts**

```ts
// jest.setup.ts

// import test library to get some functions to test render
import "@testing-library/jest-dom";
```

**.babelrc**

```json
// .babelrc
{
    // set presets
    "presets": ["next/babel"],

    // set plugins
    "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

### Create test

To create test, we need to create a file ends with `test.tsx`.

Example: If we'll test a page named as `Home`, we can create `Home.test.tsx`, this is the usually and more easier to find what we wanna test in each file, but you can change to _any_ name.

The tests are written like this.

```tsx
// any.test.tsx

// import React to create a React component
import React from "react";

// import function render to render React component
import { render } from "@testing-library/react";

// we need to import component from the project
import Component from "<component path>";

/* 
describe and test receives string and callback
string = test title
callback = run test
*/
describe("Test Component", () => {
    test("Render Component", () => {
        // let's dismantle render function and get 'getByText'
        const { getByText } = render(<Component />);

        // 'getByText' allow us to get some text from element
        const textElement = getByText("<Something you wanna check in '<Component />' >");

        /*
        expect receives the variable you wanna test
        expect has alot of functions, but we just wanna check if it's in the 'Component'.
        If returns 'false', the test fail, otherwise it's fine and test's checked
        */
        expect(textElement).toBeInTheDocument();
    });
});
```

### Run tests

To run tests, we can run this command

```bash
yarn jest
```

If you are developing tests, you can run

```bash
yarn jest --watch
```

In the `package.json`, I created the script _test_, so you just need to run

```bash
yarn test
```

### Setup and Run

To run the application we need the dependencies, so you can install it, using a `bash` command.

```bash
yarn
    or
yarn install
```

After that, we need to `build` and `start` the application.

```bash
yarn build
    or
yarn run build
```

And then

```bash
yarn start
    or
yarn run start
```

To run as development, use

```bash
yarn dev
    or
yarn run dev
```

---

_by Matheus Ishiyama_
