import { Component, Prop, h } from '@stencil/core';
import { Address } from '../../cvdata';

/* https://stackoverflow.com/questions/26188003/markup-for-postal-addresses */

@Component({
  tag: 'app-cv-address',
  styleUrl: 'cv-address.css',
  shadow: true
})
export class CvAddress {
  @Prop() address: Address;

  render() {
    if (this.address) {
      return (
        <p itemscope itemtype="https://schema.org/PostalAddress" id="address">
          <span itemprop="streetAddress">{this.address.street}</span><br />
          <span itemprop="addressLocality">{this.address.locality.name}</span>, <abbr title={this.address.locality.state.fullName} itemprop="addressRegion">{this.address.locality.state.abbreviation}</abbr> <span itemprop="postalCode">{this.address.locality.postalCode}</span><br />
          <span itemprop="addressCountry">{this.address.locality.state.country}</span>
        </p>
      );
    }
  }
}
