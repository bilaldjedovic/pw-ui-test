import { Page, expect } from "playwright/test";
import { faker } from "@faker-js/faker";

export class RegisterPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async registerUserWithFakerJS() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = (firstName + lastName).toLowerCase() + "@gmail.com";
    const password = faker.internet.password();
    const password2 = password;

    await this.page.getByRole("textbox", { name: "Full name" }).click();
    await this.page
      .getByRole("textbox", { name: "Full name" })
      .fill(firstName + " " + lastName);

    await this.page.getByRole("textbox", { name: "Email Address" }).fill(email);

    await this.page
      .getByRole("textbox", { name: "Password" })
      .first()
      .fill(password);

    await this.page
      .getByPlaceholder("Confirm Password")

      .fill(password2);

    await this.page.locator('xpath=//*[@class="custom-checkbox"]').click();

    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "REGISTER" }).click();

    await this.page.waitForTimeout(5000);
    expect(await this.page.url()).toContain("/pages/iot-dashboard");
  }
}
