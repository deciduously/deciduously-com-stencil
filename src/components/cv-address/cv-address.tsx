import { FunctionalComponent, h } from '@stencil/core';
import { Address } from '../../cvdata';

/* https://stackoverflow.com/questions/26188003/markup-for-postal-addresses */

interface AddressProps {
  address: Address
}

export const CvAddress: FunctionalComponent<AddressProps> = ({address}) => (
  <p itemscope itemtype="https://schema.org/PostalAddress" id="address">
    <span itemprop="streetAddress">{address.street}</span><br />
    <span itemprop="addressLocality">{address.locality.name}</span>, <abbr title={address.locality.state.fullName} itemprop="addressRegion">{address.locality.state.abbreviation}</abbr> <span itemprop="postalCode">{address.locality.postalCode}</span><br />
    <span itemprop="addressCountry">{address.locality.state.country}</span>
  </p>
);