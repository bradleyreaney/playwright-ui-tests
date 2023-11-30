import { test, expect } from '@playwright/test';

test('Add a prodcut to the cart and purchase', async ({ page }) => {
    // Open the demo site
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
    
    // Add a MacBook Air to the cart
    await page.getByRole('link', { name: 'Laptops' }).click();
    await page.getByRole('link', { name: 'MacBook air' }).click();
    await page.getByRole('link', { name: 'Add to cart' }).click();
    
    // Complete order details
    await page.getByRole('link', { name: 'Cart', exact: true }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await page.getByLabel('Total:').fill('John');
    await page.getByLabel('Country:').fill('Smith');
    await page.getByLabel('City:').fill('Sheffield');
    await page.getByLabel('Credit card:').fill('4444 4444 4444 4444');
    await page.getByLabel('Month:').fill('12');
    await page.getByLabel('Year:').fill('40');
    await page.getByRole('button', { name: 'Purchase' }).click();
    await page.getByRole('heading', { name: 'Thank you for your purchase!' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    
    // Confirm arrival back at home screen
    await expect(page).toHaveTitle('STORE');
});