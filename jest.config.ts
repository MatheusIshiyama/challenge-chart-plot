import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    bail: 1,
    clearMocks: true,
    verbose: true,
    moduleNameMapper: {
        "\\.(scss|sass|css)": "identity-obj-proxy",
    },
};

export default config;
