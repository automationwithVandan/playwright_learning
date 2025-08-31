import {test,expect} from "@playwright/test";

test('login sauce demo', async({page})=>
{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    var pageHeading= await page.locator("span.title").textContent();
    expect(pageHeading).toBe("Products");
});