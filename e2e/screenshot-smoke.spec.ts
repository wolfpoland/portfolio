import { expect, test } from "@playwright/test";

test("it should match navbar screenshot", async ({ page }) => {
  await page.goto("localhost:3000");

  const navbar = await page.getByTestId("navbar");
  const name = await page.getByTestId("navbar-heading-name");
  const profession = await page.getByTestId("navbar-heading-profession");

  await expect(navbar).toBeVisible();
  await expect(name).toBeVisible();
  await expect(profession).toBeVisible();
  await expect(navbar).toHaveScreenshot({
    maxDiffPixels: 100,
    omitBackground: true,
  });
});

// test("it should match hero screenshot", async ({ page }) => {
//   await page.goto("localhost:3000");
//
//   const hero = await page.getByTestId("hero");
//   await expect(hero).toBeVisible();
//
//   await expect(hero).toHaveScreenshot({
//     maxDiffPixels: 100,
//     omitBackground: true,
//   });
// });

test("it should match bio screenshot", async ({ page }) => {
  await page.goto("localhost:3000");

  const bio = await page.getByTestId("bio-container");
  await expect(bio).toBeVisible();
  await expect(bio).toHaveScreenshot();
});

test("it should match guest book screenshot", async ({ page }) => {
  await page.goto("localhost:3000");

  const guestBook = await page.getByTestId("guestbook-container");
  await expect(guestBook).toBeVisible();
  await expect(guestBook).toHaveScreenshot({
    maxDiffPixels: 100,
    omitBackground: true,
  });
});
