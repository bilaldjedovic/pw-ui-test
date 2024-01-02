import { test } from "playwright/test";
import { NavigationPage } from "../page-objects/navigation-page";
import { RegisterPage } from "../page-objects/register-page";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("Register user with fakerJS data", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const registerPage = new RegisterPage(page);

  await navigateTo.authRegisterPage();

  await registerPage.registerUserWithFakerJS();
});
