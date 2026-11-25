const { Given,When,Then } = require("@cucumber/cucumber");
const {expect} = require("@playwright/test")

Given('User Launch the Application', async function () {
  
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
});

When('User enter username {string} and password {string}', async function (username, password) {
  
    await page.locator('input[name="username"]').fill(username)
    await page.locator('input[name="password"]').fill(password)
});

When('User clicks on login button', async function () {
 
    await page.locator('//button[@type="submit"]').click()
});

Then('User should be navigated to dashboard page', async function () {
  
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
});

Then('User should get Login error Message', async function () {
  await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
});