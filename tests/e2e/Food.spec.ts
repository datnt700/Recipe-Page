import { test, expect } from '@playwright/test';

test.describe('Food Component', () => {
  test('should display category images', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const images = await page.locator('img[alt="card-image"]');
    await expect(images.first()).toHaveAttribute(
      'src',
      expect.stringContaining('www.themealdb.com')
    );
  });
});
