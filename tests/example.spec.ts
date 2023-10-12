import { test, expect } from '@playwright/test';

test("Acessando a pagina do PlayWrite", async ({ page }) => {

     // actions
     await page.goto("https://playwright.dev/");

     // Locator
     const botaoGetStarted = page.getByText("Get started");
     await botaoGetStarted.click();

     // expect / verificações
     await expect(page).toHaveURL("https://playwright.dev/docs/intro")

})