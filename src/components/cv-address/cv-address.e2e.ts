import { newE2EPage } from '@stencil/core/testing';

describe('app-cv-address', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-cv-address></app-cv-address>');

    const element = await page.find('app-cv-address');
    expect(element).toHaveClass('hydrated');
  });
});
