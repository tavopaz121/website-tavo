import { test, expect } from "@playwright/test";

test.describe("When user visit the page Pensemos web", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("Then there must be Servicios, Nosotros, Equipo, Blog and Contacnos", async ({
    page,
  }) => {
    await page.screenshot({ animations: "allow", fullPage: true });
    await page.keyboard.press("End");

    await expect(page.getByTestId("servicios")).toBeVisible();
    await expect(page.getByTestId("title-servicios")).toBeVisible();
    await expect(page.getByTestId("list-services")).toBeVisible();

    await expect(page.getByText("Nosotros")).toBeVisible();
    await expect(page.getByText("🌟 Adapta/mejora")).toBeVisible();
    await expect(page.getByRole("link", { name: "Conocenos" })).toBeVisible();

    await expect(page.getByText("¿Listo")).toBeVisible();
    await expect(page.getByText("equipo de trabajo")).toBeVisible();
    await expect(page.getByRole("link", { name: "Vamos" })).toBeVisible();

    await expect(page.getByText("NUESTRO BLOG")).toBeVisible();
    await expect(page.getByText("Algunos Articulos")).toBeVisible();

    await expect(page.getByText("¿Alguna duda o")).toBeVisible();
    await expect(page.getByText("Envía un correo")).toBeVisible();
    await expect(page.getByText("Puedes marcar a")).toBeVisible();
  });

  test("Then the user must click on diferents buttons and they will be in the diferents routes", async ({
    page,
  }) => {
    await page.screenshot({ animations: "allow", fullPage: true });
    await page.keyboard.press("End");

    await page.getByRole("link", { name: "Servicios" }).click();
    await expect(page).toHaveURL("servicios");
    await page.goto("./");

    await page.keyboard.press("End");

    await page.getByRole("link", { name: "Conocenos" }).click();
    await expect(page).toHaveURL("nosotros");
    await page.goto("./");

    await page.keyboard.press("End");

    await page.getByRole("link", { name: "¡Vamos!" }).click();
    await expect(page).toHaveURL("equipo");
    await page.goto("./");
  });
});
