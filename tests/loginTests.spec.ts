import { test } from "playwright/test";
import { NavigationPage } from "../page-objects/navigation-page";
import { LoginPage } from "../page-objects/login-page";


test.beforeEach(async ({ page }) => {
  await page.goto("https://www.akveo.com/ngx-admin/pages/dashboard");
  await page.locator("xpath=/html/body/ngx-app/ngx-starter/nb-layout/div/div/div/div/div/nb-layout-column/nb-card[1]/nb-card-body").click();
});

test("Login with Bilal credentials", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const loginPage = new LoginPage(page);

  await navigateTo.authLoginPage();

  await loginPage.loginWithBilalCredentials();
});

test.afterEach(async ({ page }) => {

  await page.close();
})