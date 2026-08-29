const{test,expect}= require("@playwright/test")

test("Verify Error Message", async function({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").pressSequentially("aadmin", {delay:500})
    await page.getByPlaceholder("Password").pressSequentially("admin123", {delay:500})
    await page.locator("button[type='submit']").click()
    await page.waitForTimeout(5000)
    const errorMessage = await page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text").textContent()

    console.log("Error message is " + errorMessage)
    
    expect(errorMessage.includes("Invalid")).toBeTruthy()
    expect(errorMessage==="Invalid credentials").toBeTruthy()
})
  