import { test } from "playwright/test";
import { NavigationPage } from "../page-objects/navigation-page";
import { DatePickerPage } from "../page-objects/datepicker-page";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.akveo.com/ngx-admin/pages/dashboard");

  await page.locator("xpath=/html/body/ngx-app/ngx-starter/nb-layout/div/div/div/div/div/nb-layout-column/nb-card[2]/nb-card-body/img").click();
});

test("Navigate to form page and test datepicker", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const datePicker = new DatePickerPage(page);

  await navigateTo.formDatePickerPage();

  await datePicker.selectCommonDatePickerDateFromToday(4);
});

test.afterEach(async ({ page }) => {

  await page.close();
})