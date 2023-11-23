import { expect, test } from "@playwright/test";

test("it should rise a toast when copy button is clicked", async ({ page }) => {
  await page.goto("localhost:3000");

  const button = await page.getByTestId("clipboard-button");

  await expect(button).toBeVisible();
  await button.click();

  const toast = await page.getByTestId("toast");
  await expect(toast).toBeVisible();
  await expect(toast).toContainText("krasuskipatryk94@gmail.com");
});

test("it should rise a toast when add entry to guest book", async ({
  page,
}) => {
  await page.goto("localhost:3000");

  const questBook = await page.getByTestId("guestbook-container");
  const textArea = await page.getByTestId("guestbook-textarea");
  const button = await page.getByTestId("guestbook-send-button");
  const authorInput = await page.getByTestId("guestbook-author");

  await expect(questBook).toBeVisible();
  await expect(textArea).toBeVisible();
  await expect(button).toBeVisible();
  await expect(authorInput).toBeVisible();

  await authorInput.fill("test");
  await textArea.fill("test");
  await button.click();

  const toast = await page.getByTestId("toast");
  await expect(toast).toBeVisible();
  await expect(toast).toContainText("test");
});
