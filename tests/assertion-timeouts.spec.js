const { test, expect } = require("@playwright/test");

// An assertion timeout tells Playwright how long to wait for a check to pass.
// For example, Playwright can keep checking until an element becomes visible.
// This timeout is only for the assertion, not for the whole test.

test("Learning Assertion Timeouts", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    // ================================================================
    // 1. Give extra time to one assertion
    // Use this when one particular element may take longer to appear.
    // The 10000 below means 10000 milliseconds, or 10 seconds.
    // Other assertions are not changed.

    // Answer: await expect(page.getByText("Shop Name")).toBeVisible({ timeout: 10000 });


    // ================================================================
    // 2. Give the same extra time to several assertions
    // Use expect.configure() when multiple checks need the same timeout.
    // slowExpect waits up to 10 seconds for every check that uses it.
    // The normal expect keeps its usual timeout.

    // Answer: const slowExpect = expect.configure({ timeout: 10000 });
    // Answer: await slowExpect(page.getByText("Shop Name")).toBeVisible();
    // Answer: await slowExpect(page.getByRole("link", { name: "Home" })).toBeVisible();


    // ================================================================
    // 3. Give extra time to assertions in the whole project
    // Use this when most pages in the application are normally slow.
    // Put this setting inside defineConfig() in playwright.config.js.
    // Every assertion will then wait up to 10 seconds by default.

    // playwright.config.js:
    // Answer: export default defineConfig({ expect: { timeout: 10000 } });
    // Every web assertion then waits up to 10 seconds unless overridden.


    // ================================================================
    // Change the project timeout for one assertion
    // Even if the config says 10 seconds, this check will wait only 3 seconds.
    // A timeout written directly on an assertion takes priority.

    // Answer: await expect(page.getByText("Shop Name")).toBeVisible({ timeout: 3000 });


    // ================================================================
    // Important difference: assertion timeout and test timeout are different
    // An assertion timeout controls one expect() check.
    // A test timeout controls everything in the test: goto, clicks, typing, and checks.

    // Answer: test.setTimeout(60000);
    // This gives the complete test 60 seconds, not 60 seconds to every assertion.


    // ================================================================
    // Best practice
    // Use the normal timeout when the page responds quickly.
    // Add a timeout to one assertion when only one element is slow.
    // Use expect.configure() when several checks in one test are slow.
    // Use the config setting when most tests need more time.
    // Do not use page.waitForTimeout(5000); it always waits 5 seconds, even if the page is ready sooner.
});
