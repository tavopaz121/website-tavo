import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("When anonymous user wants to sign up with name, email and password", () => {
  test("Then sign up should be successful", async ({ page }) => {
    page.goto("/join");
    const name = faker.person.fullName();
    const userName = faker.internet.userName();
    const password = faker.internet.password();

    await page.getByRole("textbox", { name: /nombre/i }).fill(name);

    await page
      .getByRole("textbox", { name: /e-mail/i })
      .fill(`${userName}@fake.com`);

    await page.getByPlaceholder("Contraseña", { exact: true }).fill(password);
    await page.getByPlaceholder("Repite la Contraseña").fill(password);

    await page.getByRole("button", { name: /registrar/i }).click();

    await expect(page).toHaveURL("/");

    const logoutBtn = await page.getByTestId("nav-logout");

    await expect(logoutBtn).toBeVisible();
  });
});
