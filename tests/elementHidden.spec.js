const{test , expect} = require("@playwright/test");

test("Element Hidden Test", async ({ page }) =>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");  



});