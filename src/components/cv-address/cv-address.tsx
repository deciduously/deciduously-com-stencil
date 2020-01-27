import { Component, Prop, h } from '@stencil/core';
import { Address } from '../../global/interfaces';

/* https://stackoverflow.com/questions/26188003/markup-for-postal-addresses */

@Component({
  tag: 'cv-address',
  styleUrl: 'cv-address.css',
  shadow: false
})
export class CvAddress {
  /** Address object */
  @Prop() address: Address;

  street = (address: Address) => {
    if (address.street != null) {
      return (
        <div itemprop="streetAddress">
          {address.street}
          {address.line2 !== undefined ? (
            <slot>
              <br />
              {address.line2}
            </slot>
          ) : (
            <slot></slot>
          )}
        </div>
      );
    }
  };

  render() {
    if (this.address !== undefined) {
      return (
        <section
          itemscope
          itemtype="https://schema.org/PostalAddress"
          class="address"
        >
          {this.street(this.address)}
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
}
