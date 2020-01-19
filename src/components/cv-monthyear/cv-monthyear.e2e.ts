import { newE2EPage } from '@stencil/core/testing';

describe('cv-monthyear', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv-monthyear></cv-monthyear>');

    const element = await page.find('cv-monthyear');
    expect(element).toHaveClass('hydrated');
  });
});
