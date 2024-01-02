import { test } from "playwright/test";
import { NavigationPage } from "../page-objects/navigation-page";
import { LoginPage } from "../page-objects/login-page";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("Login with Bilal credentials", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const loginPage = new LoginPage(page);

  await navigateTo.authLoginPage();

  await loginPage.loginWithBilalCredentials();
});
