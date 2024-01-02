import { Page, expect } from "playwright/test";

export class TablesPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getTheRowByAnyTestInThisRow() {
    await this.page
      .locator(
        "xpath=/html/body/ngx-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/ng2-smart-table/ng2-smart-table-pager/nav/ul/li[3]"
      )
      .click();
    const targetRow = this.page.getByRole("row", {
      name: "twitter@outlook.com",
    });
    await targetRow.locator(".nb-edit").click();

    await this.page.locator("input-editor").getByPlaceholder("Age").clear();
    await this.page.locator("input-editor").getByPlaceholder("Age").fill("35");
    await this.page.locator(".nb-checkmark").click();
  }

  async getRowBasedOnValueInTheSpecificColumn() {
    await this.page.locator(".ng2-smart-pagination-nav").getByText("2").click();
    const targetRowById = this.page
      .getByRole("row", { name: "11" })
      .filter({ has: this.page.locator("td").nth(1).getByText("11") });
    await targetRowById.locator(".nb-edit").click();
    await this.page.locator("input-editor").getByPlaceholder("E-mail").clear();
    await this.page
      .locator("input-editor")
      .getByPlaceholder("E-mail")
      .fill("test@test.com");
    await this.page.locator(".nb-checkmark").click();
    await expect(targetRowById.locator("td").nth(5)).toHaveText(
      "test@test.com"
    );
  }
}
