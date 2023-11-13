import { test, expect } from "@playwright/test";

test("it should match bio screenshot", async ({ page }) => {
  await page.goto("localhost:3000");

  const bio = await page.getByTestId("bio-container");
  await expect(bio).toBeVisible();
  await expect(bio).toHaveScreenshot({ maxDiffPixels: 100 });
});
