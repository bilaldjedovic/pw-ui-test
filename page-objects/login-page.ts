import { Page, expect } from "playwright/test";
import loginCredentials from "../data/loginCredentials.json";

export class LoginPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async loginWithBilalCredentials() {
    await this.page.getByRole("textbox", { name: "Email address" }).click();
    await this.page
      .getByRole("textbox", { name: "Email address" })
      .fill(loginCredentials.email);

    await this.page.getByRole("textbox", { name: "Password" }).click();
    await this.page.getByRole("textbox", { name: "Password" }).fill(loginCredentials.password);

    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "LOG IN" }).click();

    await this.page.waitForTimeout(5000);

    expect(await this.page.url()).toContain("/ngx-admin/pages/dashboard");
  }
}
