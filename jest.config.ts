import type { Config } from "@jest/types";

export const config: Config.InitialOptions = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    bail: 1,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ["components/**/*.js", "pages/**/*.js"],
    coverageReporters: ["lcov", "text"],
    verbose: true,
};
