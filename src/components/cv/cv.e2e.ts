import { newE2EPage } from '@stencil/core/testing';

describe('app-cv', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-cv></app-cv>');

    const element = await page.find('app-cv');
    expect(element).toHaveClass('hydrated');
  });
});
