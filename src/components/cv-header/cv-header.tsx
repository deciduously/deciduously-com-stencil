import { Component, h } from '@stencil/core';
import * as cvData from '../../global/cv.json';

@Component({
  tag: 'cv-header',
  styleUrl: 'cv-header.css',
  shadow: true
})
export class CvHeader {
  render() {
    return (
      <section itemscope itemtype="https://schema.org/Person">
        <span class="name">
          <span itemprop="givenName">{cvData.header.firstName}</span>{' '}
          <span itemprop="familyName">{cvData.header.lastName}</span>
        </span>
        <br />
        <span itemprop="jobTitle" class="subtitle">
          {cvData.header.subtitle}
        </span>
        <br />
        <a href={'mailto:' + cvData.header.email} itemprop="email">
          {cvData.header.email}
        </a>
        <div class="cv-links">
          {cvData.header.links.map(l => (
            <cv-link class="cv-link" link={l} />
          ))}
        </div>
      </section>
    );
  }
}
