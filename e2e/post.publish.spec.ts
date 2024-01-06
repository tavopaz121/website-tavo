import { test, expect } from "@playwright/test";
import { login } from "./functions/login";

test.describe("When an user visits /admin/publicar", () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto("/admin/publicar");
  });

  test("Then the user should see the form to create a new post", async ({
    page,
  }) => {
    const form = await page.getByTestId("publish-form");

    await expect(form).toBeVisible();
  });
});
