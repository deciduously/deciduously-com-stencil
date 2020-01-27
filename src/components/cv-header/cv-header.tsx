import { Component, Prop, h } from '@stencil/core';
import { Header } from '../../global/interfaces';

@Component({
  tag: 'cv-header',
  styleUrl: 'cv-header.css',
  shadow: false
})
export class CvHeader {
  /** Header data */
  @Prop() header: Header;
  render() {
    if (this.header !== undefined) {
      return (
        <section itemscope itemtype="https://schema.org/Person">
          <span class="name">
            <span itemprop="givenName">{this.header.firstName}</span>{' '}
            <span itemprop="familyName">{this.header.lastName}</span>
          </span>
          <br />
          <span itemprop="jobTitle" class="subtitle">
            {this.header.subtitle}
          </span>
          <br />
          <a href={'mailto:' + this.header.email} itemprop="email">
            {this.header.email}
          </a>
          <div class="cv-links">
            {this.header.links.map(l => (
              <cv-link class="cv-link" link={l} />
            ))}
          </div>
        </section>
      );
    }
  }
}
