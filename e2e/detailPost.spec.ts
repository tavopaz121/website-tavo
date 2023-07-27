import { expect, test } from "@playwright/test";

test.describe("When a user wants see details of a publication", () => {
  test("Then the details should be shown", async ({ page }) => {
    await page.goto("/papas-fritas-4545");

    const img = await page.getByTestId("image-food");

    await expect(img).toBeVisible();
  });
});
