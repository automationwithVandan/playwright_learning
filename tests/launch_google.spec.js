import {test,expect} from "@playwright/test";

test('launch google chrome', async({browser})=>
{
    var context= await browser.newContext();
    var page= await context.newPage();
    await page.goto("https://www.google.com");
    console.log(page.title);
    await expect(page).toHaveTitle("Google");

});
   