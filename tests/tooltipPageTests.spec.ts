import { test } from "playwright/test";
import { NavigationPage } from "../page-objects/navigation-page";
import { ToolTipPage } from "../page-objects/tooltip-page";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.akveo.com/ngx-admin/pages/dashboard");
  await page.locator("xpath=/html/body/ngx-app/ngx-starter/nb-layout/div/div/div/div/div/nb-layout-column/nb-card[2]/nb-card-body/img").click();
});

test("Check if the tooltips work fine", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const tooltipPage = new ToolTipPage(page);

  await navigateTo.tooltipPage();

  await tooltipPage.checkToolTipsState();
});

test.afterEach(async ({ page }) => {

  await page.close();
})