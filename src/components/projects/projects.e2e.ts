import { newE2EPage } from '@stencil/core/testing';

describe('app-projects', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-projects></app-projects>');

    const element = await page.find('app-projects');
    expect(element).toHaveClass('hydrated');
  });
});
