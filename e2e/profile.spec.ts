import { test, expect } from "@playwright/test";
import { login } from "./functions/login";

test.describe("When the user login wants to look her profile ", () => {
  test.beforeEach(async ({ page }) => {
    await login(page);

    await page.goto("/usuario/example-user-id");
  });

  test("Then there is avatar, user name, email, phone and button 'Cerrar sesión'", async ({ page }) => {
    await expect(await page.getByTestId("icon-avatar")).toBeVisible();
  });
});