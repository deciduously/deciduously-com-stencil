import { newE2EPage } from '@stencil/core/testing';

describe('cv-prjects', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv-projects></cv-projects>');

    const element = await page.find('cv-projects');
    expect(element).toHaveClass('hydrated');
  });
});
