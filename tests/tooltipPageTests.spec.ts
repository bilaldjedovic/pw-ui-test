import { test } from "playwright/test";
import { NavigationPage } from "../page-objects/navigation-page";
import { ToolTipPage } from "../page-objects/tooltip-page";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
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