import { test } from "playwright/test";
import { NavigationPage } from "../page-objects/navigation-page";
import { FormPage } from "../page-objects/forms-page";


test.beforeEach(async ({ page }) => {
  await page.goto("https://www.akveo.com/ngx-admin/pages/dashboard");
  await page.locator("xpath=/html/body/ngx-app/ngx-starter/nb-layout/div/div/div/div/div/nb-layout-column/nb-card[1]/nb-card-body").click();
});

test("Navigate to form page and subimt grid and inline form", async ({
  page,
}) => {
  const navigateTo = new NavigationPage(page);
  const formPage = new FormPage(page);

  await navigateTo.formLayoutsPage();

  await formPage.submitUsingTheGrigdFormWithCredentialsAndSelectOption(
    "testdt@test.com",
    "Welcome1",
    "Option 2"
  );
  await formPage.sumbitInlineFormWithNameEmailAndCheckbox(
    "John Smith",
    "john@test.com",
    false
  );
});

test.afterEach(async ({ page }) => {

  await page.close();
})
