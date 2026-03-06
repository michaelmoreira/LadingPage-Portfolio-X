// Sample Playwright test
test('Sample Test', async ({ page }) => {
  await page.goto('https://LadingPage-Portfolio-X.vercel.app');
  const title = await page.title();
  expect(title).toBe('Expected Portfolio Title');
});