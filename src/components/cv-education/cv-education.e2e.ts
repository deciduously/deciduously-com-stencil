import { newE2EPage } from '@stencil/core/testing';

describe('cv-education', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv-education></cv-education>');

    const element = await page.find('cv-education');
    expect(element).toHaveClass('hydrated');
  });
});
