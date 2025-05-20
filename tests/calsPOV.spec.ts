/*import { expect } from 'playwright/test';
import {test} from "../pages/fixtures/base";

test('test', async ({ page }) => {
  await page.goto('https://www.maenwatches.com/');
  await page.locator('#header').getByRole('link', { name: 'ACCESSORIES' }).click();
  await page.getByRole('link', { name: 'GREY FKM RUBBER STRAP GREY' }).click();
  await page.getByRole('button', { name: 'Add to cart €' }).click();
  await page.getByRole('button', { name: 'Checkout €' }).click();
});*/

//this is shit - having in page files means locators can be reused
//and is better practice in general