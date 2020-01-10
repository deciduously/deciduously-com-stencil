import { Component, h } from '@stencil/core';
import { CvData } from '../../cvdata';

// TODO this will come from a backend
const defaultCv: CvData = {
  name: "Ben Lovy",
  address: {
    street: "37 Capitol St",
    locality: {
      name: "Watertown",
      postalCode: "02472",
      state: {
        abbreviation: "MA",
        fullName: "Massachussetts",
        country: "United States",
      }
    }
  }
}

@Component({
  tag: 'app-cv',
  styleUrl: 'cv.css',
  shadow: true
})
export class Cv {
  data: CvData = defaultCv;

  render() {
    return (
      <div>
        <h2>CV</h2>
        <h3>{this.data.name}</h3>
        <app-cv-address address={this.data.address}></app-cv-address>
      </div>
    );
  }
}
