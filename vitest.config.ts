import { mergeConfig } from "vite";
import { defaultExclude, defineConfig } from "vitest/config";
import configuration from "./vite.config";

export default mergeConfig(
  configuration,
  defineConfig({
    test: {
      environmentMatchGlobs: [["**/*.test.tsx", "happy-dom"]],
      exclude: [...defaultExclude, "**/e2e/**"],
      coverage: {
        statements: 54.92,
        thresholdAutoUpdate: true,
        include: ["src/**/*"],
        exclude: [
          "vite.*.ts",
          "**/*.d.ts",
          "**/*.test.*",
          "**/*.config.*",
          "**/*.spec.*",
          "**/e2e/**",
          "**/snapshot-tests/**",
          "**/*.solution.tsx",
          "**/coverage/**",
        ],
        all: true,
      },
    },
  }),
);
