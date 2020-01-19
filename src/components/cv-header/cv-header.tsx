import { FunctionalComponent, h } from '@stencil/core';
import { Header } from '../../cvdata';

interface HeaderProps {
  header: Header;
}

export const CvHeader: FunctionalComponent<HeaderProps> = ({ header }) => (
  <section itemscope itemtype="https://schema.org/Person" id="cv-header">
    <span itemprop="givenName">{header.firstName}</span>{' '}
    <span itemprop="familyName">{header.lastName}</span>
    <br />
    <span itemprop="jobTitle" id="subtitle">
      {header.subtitle}
    </span>
    <br />|{' '}
    <a href={'mailto:' + header.email} itemprop="email">
      {header.email}
    </a>{' '}
    |{' '}
    {header.links.map(l => {
      return (
        <span>
          <a target="blank" href={l} itemprop="url">
            {l}
          </a>{' '}
          |{' '}
        </span>
      );
    })}
  </section>
);
