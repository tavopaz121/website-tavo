import { test, expect } from "@playwright/test";
// @todo: modify tests to check if the post detail is displayed

test.describe("When an user wants to see post detail", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/blog");
  });

  test("And use the post image, Then user is redirect to post detail url", async ({
    page,
  }) => {
    const postThumbnail = await page
      .getByRole("article")
      .first()
      .getByRole("img")
      .first();

    await postThumbnail.click();

    await expect(page).toHaveURL(/\/.*-.*/);
  });

  test("And use the post title, Then user is redirect to post detail url", async ({
    page,
  }) => {
    const postTitle = await page
      .getByRole("article")
      .first()
      .getByRole("heading");

    await postTitle.click();

    await expect(page).toHaveURL(/\/.*-.*/);
  });
});

test.describe("When user visit a post page", () => {
  test("should load a post from database and parse it to html", async ({
    page,
  }) => {
    await page.goto("/introduccion-¿Cómo nació Javascript");
    await expect(page).toHaveURL("/introduccion-javascript");

    const postTitle = await page.getByRole("article").getByRole("heading");
    const subtitulo = await page
      .getByRole("article")
      .getByText("¿Cómo nació Javascript?");

    await expect(postTitle).toHaveText("Introduccion a javascript");
    await expect(subtitulo).toHaveText("¿Cómo nació Javascript");
  });
});
