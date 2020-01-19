import { newE2EPage } from '@stencil/core/testing';

describe('cv-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv-header></cv-header>');

    const element = await page.find('cv-header');
    expect(element).toHaveClass('hydrated');
  });
});
