import { test, expect } from "@playwright/test";
// @todo: modify tests to check if the post detail is displayed

test.describe("When an user wants to see post detail", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/blog");
  });

  test("And use the post image, Then user should be redirected to post detail url", async ({
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

  test("And use the post title, Then user should be redirected to post detail url", async ({
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
    const route = "/introduccion-javascript";
    const title = "Introducción a Javascript";

    await page.goto(route);
    await expect(page).toHaveURL(route);

    const postTitle = await page
      .getByRole("article")
      .getByRole("heading", { name: title });

    const subtitle = "¿Cómo nació Javascript?";
    const subtitulo = await page
      .getByRole("article")
      .getByRole("heading", { name: subtitle });

    await expect(postTitle).toHaveText(title);
    await expect(subtitulo).toHaveText(subtitle);
  });
});
