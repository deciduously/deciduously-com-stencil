import { newSpecPage } from '@stencil/core/testing';
import { CvSection } from './cv-section';

describe('app-cv-section', () => {
  it('builds', () => {
    expect(new CvSection()).toBeTruthy();
  });
  it('has a section name', async () => {
    const page = await newSpecPage({
      components: [CvSection],
      html: '<cv-section name="ben"></cv-section>'
    });
    expect(page.root).toEqualHtml(`
      <cv-section name="ben">
        <mock:shadow-root>
          <section>
            <span class="section-header">ben</span>
            <slot></slot>
          </section>
        </mock:shadow-root>
      </cv-section>
    `);
  });
  it('renders a child', async () => {
    const page = await newSpecPage({
      components: [CvSection],
      html: '<cv-section name="ben"><p>Hi!</p></cv-section>'
    });
    expect(page.root).toEqualHtml(`
      <cv-section name="ben">
        <mock:shadow-root>
          <section>
            <span class="section-header">ben</span>
            <slot></slot>
          </section>
        </mock:shadow-root><p>Hi!</p>
      </cv-section>
    `);
  });
});
