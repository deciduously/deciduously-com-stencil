import { Component, Prop, h } from '@stencil/core';
import { Address } from '../../cvdata';

/* https://stackoverflow.com/questions/26188003/markup-for-postal-addresses */

const street = function(address: Address) {
  if (address.street != null) {
    return (
      <slot>
        <span itemprop="streetAddress">{address.street}</span>
        <br />
      </slot>
    );
  } else {
  }
};

@Component({
  tag: 'cv-address',
  styleUrl: 'cv-address.css',
  shadow: true
})
export class AppRoot {
  /** Address object */
  @Prop() address: Address;

  render() {
    return (
      <section
        itemscope
        itemtype="https://schema.org/PostalAddress"
        id="address"
      >
        {street(this.address)}
        <span itemprop="addressLocality">
          {this.address.locality.name}
        </span>,{' '}
        <abbr
          title={this.address.locality.state.fullName}
          itemprop="addressRegion"
        >
          {this.address.locality.state.abbreviation}
        </abbr>{' '}
        <span itemprop="postalCode">{this.address.locality.postalCode}</span>
        <br />
        <span itemprop="addressCountry">
          {this.address.locality.state.country}
        </span>
      </section>
    );
  }
}
