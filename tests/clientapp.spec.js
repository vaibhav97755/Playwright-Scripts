const{test,expect} = require("@playwright/test");

test("Client App Login With Invalid Email Format", async ({ page }) => 
{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.getByPlaceholder("email@example.com").pressSequentially("invalid", {delay: 50});
  await page.getByPlaceholder("enter your passsword").pressSequentially("Test@1234", {delay: 50 });
  await page.locator("#login").click();
  await expect(page.getByText("*Enter Valid Email")).toBeVisible();
  console.log(await page.getByText("*Enter Valid Email").textContent());

});


test("Client App Login With Incorrect Email & Correct Password", async ({ page }) => 
{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.getByPlaceholder("email@example.com").pressSequentially("invalid@example.com", {delay: 50});
  await page.getByPlaceholder("enter your passsword").pressSequentially("Test@1234", {delay: 50 });
  await page.locator("#login").click();
  await expect(page.locator("#toast-container")).toBeVisible();
  console.log(await page.locator("#toast-container").textContent());

});


test("Client App Login With Correct Email & Incorrect Password", async ({ page }) => 
{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.getByPlaceholder("email@example.com").pressSequentially("vibhusharma9775.vs@gmail.com" , {delay: 50});
  await page.getByPlaceholder("enter your passsword").pressSequentially("Test@123" , {delay: 50});
  await page.locator("#login").click();
  await expect(page.locator("#toast-container")).toBeVisible();
  console.log(await page.locator("#toast-container").textContent());

});


test.only("Client App Login With Correct Email & Correct Password", async ({ page }) => 
{
  // Logged into application.
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login", {
    waitUntil: "domcontentloaded"
  });
  await page.getByPlaceholder("email@example.com").pressSequentially("vibhusharma9775.vs@gmail.com" , {delay: 50});
  await page.getByPlaceholder("enter your passsword").pressSequentially("Test@1234" , {delay: 50});
  await page.locator("#login").click();
  await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
  console.log(page.url());

  // Add to Cart product Zara coat 3 and verify the product is added to cart.
  await page.locator(".card").filter({ hasText: "ZARA COAT 3" }).getByRole("button", { name: " Add To Cart" }).click();
  await expect(page.locator("#toast-container")).toContainText("Product Added To Cart");
  console.log(await page.locator("#toast-container").textContent());
  await page.locator("[routerlink='/dashboard/cart']").click();
  await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/cart");
  await expect(page.getByRole("heading", { name: "ZARA COAT 3", exact: true })).toBeVisible();
  console.log(page.url());
  await page.locator("text=Checkout").click();
  // Payment Page
  await page.locator("[placeholder='Select Country']").pressSequentially("ind", {delay: 50});
  await page.getByRole("button", { name: /India$/ }).click();
  await expect(page.locator(".user__name [type*='text']").first()).toHaveText("vibhusharma9775.vs@gmail.com");
  await page.locator(".btnn.action__submit.ng-star-inserted").click();
  await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  console.log(await page.locator(".hero-primary").textContent());
  const orderID = (await page.locator("label[class='ng-star-inserted']").textContent()).replace(/\|/g, "").trim();
  console.log("Order ID: " + orderID);

  // Verify the order is present in the orders page.
  await page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']").click();
  await expect(page.locator("h1[class='ng-star-inserted']")).toHaveText("Your Orders");
  await expect(page.locator("tbody tr").filter({ hasText: orderID })).toBeVisible();


});