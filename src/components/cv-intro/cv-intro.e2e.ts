import { newE2EPage } from '@stencil/core/testing';

describe('cv-intro', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv-intro></cv-intro>');

    const element = await page.find('cv-intro');
    expect(element).toHaveClass('hydrated');
  });
});
