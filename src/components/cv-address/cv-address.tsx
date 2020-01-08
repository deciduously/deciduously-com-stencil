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
    return (
      <p typeof="schema:PostalAddress" id="address">
          <span property="schema:streetAddress">{this.address.street}</span><br />
          <span property="schema:addressLocality">{this.address.locality.name}</span>, <abbr title={this.address.locality.state.fullName} property="schema:addressRegion">{this.address.locality.state.abbreviation}</abbr> <span property="schema:postalCode">{this.address.locality.postalCode}</span><br />
          <span property="schema:addressCountry">{this.address.locality.state.country}</span>
      </p>
    );
  }

}
