import { newE2EPage } from '@stencil/core/testing';

describe('cv-employment', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv-employment></cv-employment>');

    const element = await page.find('cv-employment');
    expect(element).toHaveClass('hydrated');
  });
});
