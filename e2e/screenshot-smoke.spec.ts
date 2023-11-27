import { test, expect } from "@playwright/test";

test("it should match bio screenshot", async ({ page }) => {
  await page.goto("localhost:3000");

  const bio = await page.getByTestId("bio-container");
  await expect(bio).toBeVisible();
  await expect(bio).toHaveScreenshot({ maxDiffPixels: 200 });
});

test("it should match guest book screenshot", async ({ page }) => {
  await page.goto("localhost:3000");

  const guestBook = await page.getByTestId("guestbook-container");
  await expect(guestBook).toBeVisible();
  await expect(guestBook).toHaveScreenshot({ maxDiffPixels: 100, omitBackground: true });
});