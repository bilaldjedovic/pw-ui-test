import { test } from "playwright/test";
import { NavigationPage } from "../page-objects/navigation-page";
import { TablesPage } from "../page-objects/tables-page";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.akveo.com/ngx-admin/pages/dashboard");
  await page.locator("xpath=/html/body/ngx-app/ngx-starter/nb-layout/div/div/div/div/div/nb-layout-column/nb-card[2]/nb-card-body/img").click();
});

test("Check functionality of tables", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const tablesPage = new TablesPage(page);

  await navigateTo.tablesAndDataSmartTablePage();

  await tablesPage.getRowBasedOnValueInTheSpecificColumn();

  await tablesPage.getTheRowByAnyTestInThisRow();
});

test.afterEach(async ({ page }) => {

  await page.close();
})