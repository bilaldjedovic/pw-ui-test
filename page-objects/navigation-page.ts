import { Page } from "playwright/test";

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async formLayoutsPage() {
    await this.selectGroupItem("Forms");
    await this.page.getByText("Form Layouts").click();
  }

  async formDatePickerPage() {
    await this.selectGroupItem("Forms");
    await this.page.getByText("DatePicker").click();
  }

  async toastrPage() {
    await this.selectGroupItem("Modal & Overlays");
    await this.page.getByText("Toastr").click();
  }

  async tooltipPage() {
    await this.selectGroupItem("Modal & Overlays");
    await this.page.getByText("Tooltip").click();
  }

  async authLoginPage() {
    await this.selectGroupItem("Auth");
    await this.page.getByText("Login").click();
  }

  async authRegisterPage() {
    await this.selectGroupItem("Auth");
    await this.page.getByText("Register").click();
  }

  async tablesAndDataSmartTablePage() {
    await this.selectGroupItem("Tables & Data");
    await this.page.getByText("Smart Table").click();
  }

  private async selectGroupItem(groupItemTitle: string) {
    const groupMenuItem = this.page.getByTitle(groupItemTitle);
    const expandedState = await groupMenuItem.getAttribute("aria-expanded");

    if (expandedState == "false") {
      await groupMenuItem.click();
    }
  }
}
