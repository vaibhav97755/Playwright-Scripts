const{test , expect} = require("@playwright/test"); 

// test("Browser Context Playwright Test", async ({ browser }) => 
// {
//     // chrome - plugins / cookies / cache / local storage / session storage
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

// });


// test("Page Playwright Test", async ({ page }) => 
// {
//   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

// });



test("Login With Invalid Username & Invalid Password", async ({ page }) => 
{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");  
  
  // using a locator (attribute) to fill the username and password fields and click the submit button  
  await page.locator("[name='username']").fill("Admin1");    
  await page.locator("[name='password']").fill("admin1234");
  await page.locator("[type='submit']").click();
  console.log(await page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text").textContent());
  await expect(page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")).toHaveText("Invalid credentials");

});


test("Login With Valid Username & Valid Password", async ({ page }) => 
{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");  
  
  // using a locator (attribute) to fill the username and password fields and click the submit button  
  await page.locator("[name='username']").fill("Admin");    
  await page.locator("[name='password']").fill("admin123");
  await page.locator("[type='submit']").click();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
});


test("Login With Valid Credentials After Clearing The Invalid Ones", async ({ page }) =>
{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator("[name='username']").pressSequentially("Admin1" , {delay: 400});
  await page.locator("[name='password']").pressSequentially("admin123" , {delay: 400});
  await page.locator("[type='submit']").click();
  await page.waitForTimeout(5000);
  await page.locator("[name='username']").clear();
  await page.locator("[name='username']").pressSequentially("Admin" , {delay: 400});
  await page.locator("[name='password']").clear();
  await page.locator("[name='password']").pressSequentially("admin123" , {delay: 400});
  await page.locator("[type='submit']").click();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");


});


test("Login With Invalid Username But Valid Password", async ({ page }) => 
{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");  
  
  // using a locator (attribute) to fill the username and password fields and click the submit button  
  await page.locator("[name='username']").fill("Admin1");    
  await page.locator("[name='password']").fill("admin123");
  await page.locator("[type='submit']").click();
  console.log(await page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text").textContent());
  await expect(page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")).toHaveText("Invalid credentials");

});


test("Login With Valid Username But Invalid Password", async ({ page }) => 
{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");  
  
  // using a locator (attribute) to fill the username and password fields and click the submit button  
  await page.locator("[name='username']").fill("Admin");    
  await page.locator("[name='password']").fill("admin1234");
  await page.locator("[type='submit']").click();
  console.log(await page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text").textContent());
  await expect(page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")).toHaveText("Invalid credentials");

});


test("Login With Blank Fields", async ({ page }) => 
{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");  
  
  // using a locator (attribute) to fill the username and password fields and click the submit button
  await page.locator("[name='username']").fill("");
  await page.locator("[name='password']").fill("");
  await page.locator("[type='submit']").click();
  await expect(page.getByText("Required").nth(0)).toHaveText("Required");
  await expect(page.getByText("Required").nth(1)).toHaveText("Required");

});


