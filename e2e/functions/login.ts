import { expect } from "@playwright/test";
import type { Page } from "@playwright/test";

export async function login(page: Page) {
  await page.goto("/login");
  await page.getByRole("textbox", { name: "Correo" }).fill("user@example.com");
  await page.getByRole("textbox", { name: "Contraseña" }).fill("password");
  await page.getByRole("button", { name: /ingresar/i }).click();

  await expect(page).toHaveURL("/admin");
}
