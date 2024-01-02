import { Page, expect } from "playwright/test";

export class ToolTipPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkToolTipsState() {
    const toolTipCard = this.page.locator("nb-card", {
      hasText: "Tooltip Placements",
    });
    await toolTipCard.getByRole("button", { name: "Top" }).hover();
    this.page.getByRole("tooltip"); //if you have a role tooltip created
    const tooltip = await this.page.locator("nb-tooltip").textContent();
    expect(tooltip).toEqual("This is a tooltip");
  }
}
