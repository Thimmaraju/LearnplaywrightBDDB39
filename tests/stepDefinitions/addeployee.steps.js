const { Given,When,Then } = require("@cucumber/cucumber");
const {expect} = require("@playwright/test")


When('user clicks on PIM menu', async function () {

     await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()
});

When('User clicks on Add employee submenu',  async function () {

    await page.locator("//a[text()='Add Employee']").click()
  
});

When('User enter firstname {string} and lastname {string}', async  function (firstname, lastname) {
  
     await page.locator('input[name="firstName"]').fill(firstname)
     await page.locator('input[name="lastName"]').fill(lastname)
});

When('User clicks on Save button', async function () {
  
    await page.locator('button[type="submit"]').click()
});

Then('Employeee should be created', async function () {
  
    await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible()
});