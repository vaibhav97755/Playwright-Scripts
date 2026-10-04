const { test, expect } = require("@playwright/test");

test("Learning Assertions", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    // Assertions check whether the application has the expected state.
    // Playwright automatically waits and retries web assertions.

    // ================================================================
    // 1. toBeVisible()
    // Use when an element should be visible to the user.

    // HTML: <h1>Shop Name</h1>
    // Answer: await expect(page.getByText("Shop Name")).toBeVisible();


    // ================================================================
    // 2. toBeHidden()
    // Use when an element should not be visible.

    // HTML: <div class="loading">Loading...</div>
    // Answer: await expect(page.locator(".loading")).toBeHidden();


    // ================================================================
    // 3. toHaveText()
    // Use when the complete text should match exactly.

    // HTML: <h1>Welcome</h1>
    // Answer: await expect(page.locator("h1")).toHaveText("Welcome");


    // ================================================================
    // 4. toContainText()
    // Use when an element should contain some text, but may contain other text too.

    // HTML: <div>Welcome, John</div>
    // Answer: await expect(page.locator("div")).toContainText("Welcome");


    // ================================================================
    // 5. toHaveValue()
    // Use when an input should contain a specific value.

    // HTML: <input value="John Doe">
    // Answer: await expect(page.getByLabel("Name")).toHaveValue("John Doe");


    // ================================================================
    // 6. toBeChecked()
    // Use when a checkbox or radio button should be selected.

    // HTML: <input type="checkbox" checked>
    // Answer: await expect(page.getByLabel("Check me out if you Love IceCreams!")).toBeChecked();


    // ================================================================
    // 7. toBeEnabled() and toBeDisabled()
    // Use to check whether a control can or cannot be used.

    // HTML: <button>Submit</button>
    // Answer: await expect(page.getByRole("button", { name: "Submit" })).toBeEnabled();

    // HTML: <button disabled>Submit</button>
    // Answer: await expect(page.getByRole("button", { name: "Submit" })).toBeDisabled();


    // ================================================================
    // 8. toBeEditable()
    // Use when an input should allow the user to enter or change text.

    // HTML: <input type="text">
    // Answer: await expect(page.getByLabel("Name")).toBeEditable();


    // ================================================================
    // 9. toHaveAttribute()
    // Use when an element should have a specific HTML attribute and value.

    // HTML: <a href="/shop">Shop</a>
    // Answer: await expect(page.getByRole("link", { name: "Shop" })).toHaveAttribute("href", "/shop");


    // ================================================================
    // 10. toHaveClass()
    // Use when an element should have a specific CSS class.

    // HTML: <button class="btn btn-success">Submit</button>
    // Answer: await expect(page.getByRole("button", { name: "Submit" })).toHaveClass(/btn-success/);


    // ================================================================
    // 11. toHaveCount()
    // Use when a locator should find a specific number of elements.

    // HTML: <li>Item</li><li>Item</li>
    // Answer: await expect(page.locator("li")).toHaveCount(2);


    // ================================================================
    // 12. toHaveURL()
    // Use to verify the current page URL after navigation.

    // Answer: await expect(page).toHaveURL(/angularpractice/);


    // ================================================================
    // 13. toHaveTitle()
    // Use to verify the browser tab title.

    // HTML: <title>Angular Practice</title>
    // Answer: await expect(page).toHaveTitle("Angular Practice");


    // ================================================================
    // 14. Value assertions
    // Use normal expect() for JavaScript values, strings, arrays, and objects.

    // Answer: expect(actualValue).toBe(expectedValue);
    // Answer: expect(actualText).toContain("expected text");
    // Answer: expect(actualObject).toEqual(expectedObject);
    // Answer: expect(items).toHaveLength(3);


    // ================================================================
    // Common comparison:
    // Use toBe() for an exact primitive value.
    // Use toContainText() when checking text inside a web element.
    // Use toHaveText() when the complete element text must match.
});
