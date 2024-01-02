import { test } from "playwright/test";
import { NavigationPage } from "../page-objects/navigation-page";
import { TablesPage } from "../page-objects/tables-page";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("Check functionality of tables", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const tablesPage = new TablesPage(page);

  await navigateTo.tablesAndDataSmartTablePage();

  await tablesPage.getRowBasedOnValueInTheSpecificColumn();

  await tablesPage.getTheRowByAnyTestInThisRow();
});
