import { newE2EPage } from '@stencil/core/testing';

describe('cv-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv-link></cv-link>');

    const element = await page.find('cv-link');
    expect(element).toHaveClass('hydrated');
  });
});
