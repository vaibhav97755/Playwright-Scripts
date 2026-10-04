const{test, expect} = require("@playwright/test");

test("Learning Locators" , async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    // ================================================================
    // 1. getByLabel()
    // Use when a form control has an associated <label>.
    // Best for: text boxes, password fields, checkboxes, and radio buttons.

    // HTML: <label for="exampleInputName1">Name</label>
    // Answer: await page.getByLabel("Name").fill("John Doe");

    // HTML: <label for="exampleInputEmail1">Email</label>
    // Answer: await page.getByLabel("Email").fill("john@example.com");

    // HTML: <label for="exampleInputPassword1">Password</label>
    // Answer: await page.getByLabel("Password").fill("Password123");

    // HTML: <label for="exampleCheck1">Check me out if you Love IceCreams!</label>
    // Answer: await page.getByLabel("Check me out if you Love IceCreams!").check();


    
    
    // ================================================================
    // 2. getByPlaceholder()
    // Use when an input has a placeholder attribute.
    // Best for: inputs that do not have a usable label.

    // HTML: <input placeholder="Enter your name">
    // Answer: await page.getByPlaceholder("Enter your name").fill("John Doe");

    // HTML: <input placeholder="Enter your email">
    // Answer: await page.getByPlaceholder("Enter your email").fill("john@example.com");

    // HTML: <input placeholder="Password">
    // Answer: await page.getByPlaceholder("Password").fill("Password123");


    
    
    // ================================================================
    // 3. getByRole()
    // Use the element's accessible role and accessible name.
    // Best for: buttons, links, headings, checkboxes, and text boxes.

    // HTML: <button type="submit">Submit</button>
    // Answer: await page.getByRole("button", { name: "Submit" }).click();

    // HTML: <a href="https://rahulshettyacademy.com/#/index">Home</a>
    // Answer: await page.getByRole("link", { name: "Home" }).click();

    // HTML: <a href="https://rahulshettyacademy.com/#/index">Shop</a>
    // Answer: await page.getByRole("link", { name: "Shop" }).click();

    // HTML: <a href="https://rahulshettyacademy.com/#/index">Practice</a>
    // Answer: await page.getByRole("link", { name: "Practice" }).click();

    // HTML: <a href="https://rahulshettyacademy.com/#/index">Login</a>
    // Answer: await page.getByRole("link", { name: "Login" }).click();

    // HTML: <a href="https://rahulshettyacademy.com/#/index">Signup</a>
    // Answer: await page.getByRole("link", { name: "Signup" }).click();

    // To verify a link's href attribute:
    // Answer: await expect(page.getByRole("link", { name: "Home" })).toHaveAttribute("href", "https://rahulshettyacademy.com/#/index");


    
    
    
    // ================================================================
    // 4. getByText()
    // Use when you need to locate visible text.
    // Best for: headings, paragraphs, notifications, and messages.

    // HTML: <h1>Welcome, Please Sign In!</h1>
    // Answer: await expect(page.getByText("Welcome, Please Sign In!", { exact: true })).toBeVisible();

    // HTML: <h2>Login</h2>
    // Answer: await expect(page.getByText("Login", { exact: true })).toBeVisible();

    // HTML: <p>Don't have an account? <a>Sign Up</a></p>
    // Answer: await expect(page.getByText("Don't have an account?", { exact: false })).toBeVisible();

    // HTML: <p>Already have an account? <a>Login</a></p>
    // Answer: await expect(page.getByText("Already have an account?", { exact: false })).toBeVisible();




    // ================================================================
    // 5. page.locator()
    // Use CSS selectors when a role, label, placeholder, or text locator is not suitable.
    // Best for: IDs, classes, attributes, parent-child relationships, and filtered elements.

    // HTML: <input id="exampleInputName1">
    // Answer: await page.locator("#exampleInputName1").fill("John Doe");

    // HTML: <input class="form-control">
    // Answer: await page.locator(".form-control").first().fill("John Doe");

    // HTML: <input type="email" name="email">
    // Answer: await page.locator('input[type="email"]').fill("john@example.com");

    // HTML: <button type="submit" class="btn btn-success">Submit</button>
    // Answer: await page.locator('button[type="submit"]').click();

    // HTML: <a href="https://rahulshettyacademy.com/#/index">Home</a>
    // Answer: await page.locator('a[href="https://rahulshettyacademy.com/#/index"]').click();

    // HTML: <div class="card"><h2>Product A</h2><button>Add To Cart</button></div>
    // Answer: await page.locator(".card").filter({ hasText: "Product A" }).getByRole("button", { name: "Add To Cart" }).click();



    
    
    // ================================================================
    // 6. getByAltText()
    // Use when an image has a meaningful alt attribute.

    // HTML: <img src="logo.png" alt="Company logo">
    // Answer: await expect(page.getByAltText("Company logo")).toBeVisible();


    // ================================================================
    // 7. getByTitle()
    // Use when an element has a title attribute.

    // HTML: <button title="Close">X</button>
    // Answer: await page.getByTitle("Close").click();


    // ================================================================
    // 8. getByTestId()
    // Use a stable data-testid when the visible text or role is not reliable.

    // HTML: <button data-testid="submit-button">Submit</button>
    // Answer: await page.getByTestId("submit-button").click();


    // ================================================================
    // 9. getByValue()
    // Use when you need to locate an input by its current value.

    // HTML: <input value="India">
    // Answer: await page.getByValue("India").click();

});