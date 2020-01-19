import { newE2EPage } from '@stencil/core/testing';

describe('cv-address', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv-address></cv-address>');

    const element = await page.find('cv-address');
    expect(element).toHaveClass('hydrated');
  });
});
