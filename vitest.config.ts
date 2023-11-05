import path from "node:path";
import { defineConfig } from "vitest/config";
import configuration from "./vite.config";

export default defineConfig({
  ...configuration,
  resolve: {
    alias: {
      ...configuration?.resolve?.alias,
      test: path.resolve(__dirname, "./test"),
    },
  },
  test: {
    environmentMatchGlobs: [["**/*.test.tsx", "jsdom"]],
    coverage: {
      statements: 54.92,
      thresholdAutoUpdate: true,
      include: ["src/**/*"],
      exclude: [
        "vite.*.ts",
        "**/*.d.ts",
        "**/*.test.*",
        "**/*.config.*",
        "**/snapshot-tests/**",
        "**/*.solution.tsx",
        "**/coverage/**",
      ],
      all: true,
    },
  },
});
