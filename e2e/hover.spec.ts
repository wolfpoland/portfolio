import { test, expect } from "@playwright/test";

test("it should change background when hover over button", async ({ page }) => {
  await page.goto("localhost:3000");

  const button = await page.getByTestId("clipboard-button");

  await expect(button).toBeVisible();
  await button.hover();
  await expect(button).toHaveScreenshot();
});

test("it should scale technology entry with dialog appearance", async ({ page }) => {
    await page.goto("localhost:3000");
  
    const icon = await page.getByTestId("technologies-angular-icon");
  
    await expect(icon).toBeVisible();
    await icon.hover();

    const hoverCard = await page.getByTestId("hover-card");
    await expect(hoverCard).toBeVisible();
    await expect(hoverCard).toHaveScreenshot({ maxDiffPixels: 100});
  });