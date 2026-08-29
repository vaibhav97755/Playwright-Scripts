const{test,expect} = require("@playwright/test")
// test.use({viewport: {width:600,height:300}})

test("Valid Login", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await Promise.all([
        page.waitForURL(/dashboard/, { timeout: 10000 }),
        page.locator("button[type='submit']").click(),
    ])
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
    await page.getByAltText("profile picture").first().click()
    await page.getByText("Logout").click()
    await page.waitForURL(/login/, { timeout: 10000 })
    await expect(page).toHaveURL(/login/, { timeout: 10000 })


})