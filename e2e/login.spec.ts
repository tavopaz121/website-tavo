import { test } from "@playwright/test";
import { login } from "./functions/login";

test("When a user wants to login with email/password", async ({ page }) => {
  await login(page);
});
