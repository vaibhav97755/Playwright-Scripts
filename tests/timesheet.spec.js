const { test, expect } = require("@playwright/test");

test("view employee timesheet", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.locator("button[type='submit']").click();
  await expect(page).toHaveURL(/dashboard/);

  await page.getByRole("link", { name: "Time" }).click();
  await page.getByText("Timesheets", { exact: true }).first().click();
  await expect(page.getByRole("heading", { name: "Select Employee" })).toBeVisible();

  const employeeSearch = page.getByPlaceholder("Type for hints...");
  await employeeSearch.fill("nome");
  const employeeOption = page.locator(".oxd-autocomplete-option").filter({ hasText: /nome/i });
  await expect(employeeOption).toBeVisible();
  await employeeOption.click();
  await page.getByRole("button", { name: "View" }).first().click();
  await expect(page.getByRole("heading", { name: /Timesheet/i })).toBeVisible();
});