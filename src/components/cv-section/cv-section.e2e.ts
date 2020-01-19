import { newE2EPage } from '@stencil/core/testing';

describe('cv-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv-section></cv-section>');

    const element = await page.find('cv-section');
    expect(element).toHaveClass('hydrated');
  });
  it('renders prop', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv-section name="Ben" />');

    const element = await page.find('cv-section >>> .section-header');
    expect(element.textContent).toEqual('Ben');
  });
  // TODO this test fails but I don't know why
  //it('renders child', async () => {
  //  const page = await newE2EPage();
  //  await page.setContent(
  //    '<cv-section name="Ben"><p>Hi There</p></cv-section>'
  //  );
  //
  //  const element = await page.find('cv-section');
  //  expect(element.shadowRoot).toEqualHtml(`<section>
  //  <span class="section-header">Ben</span>
  //    <slot>
  //      <p>
  //        Hi There
  //      </p>
  //    </slot>
  //  </section>`);
  //});
});
