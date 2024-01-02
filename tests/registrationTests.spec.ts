import { test } from "playwright/test";
import { NavigationPage } from "../page-objects/navigation-page";
import { RegisterPage } from "../page-objects/register-page";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.akveo.com/ngx-admin/pages/dashboard");
  await page.locator("xpath=/html/body/ngx-app/ngx-starter/nb-layout/div/div/div/div/div/nb-layout-column/nb-card[2]/nb-card-body/img").click();
});

test("Register user with fakerJS data", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const registerPage = new RegisterPage(page);

  await navigateTo.authRegisterPage();

  await registerPage.registerUserWithFakerJS();
});

test.afterEach(async ({ page }) => {

  await page.close();
})