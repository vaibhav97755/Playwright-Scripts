const{test , expect} = require("@playwright/test");

// How to handle iFrames in Playwright


test("iFrame Locator Test", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const frameLocator = page.frameLocator("#courses-iframe");
    await frameLocator.getByRole('link', { name: 'Courses', exact: true }).first().click();
    await expect(frameLocator.locator('h2.BrowseProductsTitle')).toBeVisible({ timeout: 15000 });
});
