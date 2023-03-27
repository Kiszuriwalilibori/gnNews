// import type { Config } from "@jest/types";

// const config: Config.InitialOptions = {
//     roots: ["<rootDir>/test", "<rootDir>/", "<rootDir>/src"],
//     transform: {
//         "^.+\\.tsx?$": "ts-jest",
//         "^.+\\.css$": "<rootDir>/jest-config/style-mock.js",
//         "^.+\\.(js|jsx)$": "babel-jest",
//     },
//     setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
//     testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
//     moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
//     testEnvironment: "jsdom",
//     collectCoverage: true,
//     moduleDirectories: ["node_modules", "src"],
//     collectCoverageFrom: ["src/**/*.{ts,tsx}"],
//     moduleNameMapper: {
//         "^.+\\.(css|sass|scss)$": "identity-obj-proxy",
//     },
// };

// export default config;

import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.css$": "<rootDir>/jest-config/style-mock.js",
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testEnvironment: "jsdom",
    collectCoverage: true,
    moduleDirectories: ["node_modules", "src"],
    collectCoverageFrom: ["src/**/*.{ts,tsx}"],
    moduleNameMapper: {
        "^.+\\.(css|sass|scss)$": "identity-obj-proxy",
    },
};

export default config;
