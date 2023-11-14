import { test, expect } from "@playwright/test";

test("it loaded the page with Patryk Krasuski Frontend Developer heading", async ({
  page,
}) => {
  await page.goto("localhost:3000");

  const navbar = await page.getByTestId("navbar");
  const name = await page.getByTestId("navbar-heading-name");
  const profession = await page.getByTestId("navbar-heading-profession");

  await expect(navbar).toBeVisible();
  await expect(name).toBeVisible();
  await expect(profession).toBeVisible();

  expect(await name.textContent()).toBe("Patryk Krasuski");
  expect(await profession.textContent()).toBe("Frontend Developer");
});

test("it loaded hero section with all elements", async ({ page }) => {
  await page.goto("localhost:3000");

  const hero = await page.getByTestId("hero");
  const contactWithMe = await page.getByTestId("hero-contact-with-me");
  const contactShortcut = await page.getByTestId("hero-contact-shortcut");
  const jobHistory = await page.getByTestId("hero-job-history");
  const technologies = await page.getByTestId("hero-technologies");
  const jobOffers = await page.getByTestId("hero-job-offers");

  await expect(hero).toBeVisible();
  await expect(contactWithMe).toBeVisible();
  await expect(contactShortcut).toBeVisible();
  await expect(jobHistory).toBeVisible();
  await expect(technologies).toBeVisible();
  await expect(jobOffers).toBeVisible();
});

test("it loaded bio section with all elements", async ({ page }) => {
  await page.goto("localhost:3000");

  const bio = await page.getByTestId("bio");
  const image = await page.getByTestId("bio-image");
  const description = await page.getByTestId("bio-description");

  await expect(bio).toBeVisible();
  await expect(image).toBeVisible();
  await expect(description).toBeVisible();
});

test("test command dialog", async ({ page, browserName }) => {
  if (browserName === "firefox") {
    test.skip();
  }

  await page.goto("localhost:3000");

  await expect(page.getByTestId("hero")).toBeVisible();
  await expect(page.getByTestId("command-open-info")).toBeVisible();

  await page.keyboard.down("Control");
  await page.keyboard.press("K");

  const input = await page.waitForSelector(
    'input[placeholder="Type a command or search..."]',
  );
  expect(input.isVisible()).toBeTruthy();
});
