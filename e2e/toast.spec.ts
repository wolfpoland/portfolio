import { test, expect } from "@playwright/test";

test("it should rise a toast when copy button is clicked", async ({ page }) => {
  await page.goto("localhost:3000");

  const button = await page.getByTestId("clipboard-button");

  await expect(button).toBeVisible();
  await button.click();

  const toast = await page.getByTestId("toast");
  await expect(toast).toBeVisible();
  await expect(toast).toContainText("krasuskipatryk94@gmail.com");
});
