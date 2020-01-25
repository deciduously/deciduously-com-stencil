import { newE2EPage } from '@stencil/core/testing';

describe('app-blag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-blag></app-blag>');

    const element = await page.find('app-blag');
    expect(element).toHaveClass('hydrated');
  });
});
