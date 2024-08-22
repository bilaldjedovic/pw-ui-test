import { test } from "playwright/test";
import { NavigationPage } from "../page-objects/navigation-page";
import { DatePickerPage } from "../page-objects/datepicker-page";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/pages/forms/layouts");
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