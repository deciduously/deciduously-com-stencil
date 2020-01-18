import { Component, h } from '@stencil/core';
import { CvData } from '../../cvdata';
import { CvAddress } from '../cv-address/cv-address';
import { CvHeader } from '../cv-header/cv-header';

// TODO this will come from a backend?
const defaultCv: CvData = {
  header: {
    firstName: "Ben",
    lastName: "Lovy",
    email: "bendlovy@gmail.com",
    subtitle: "Software Developer",
    links: [
      "https://github.com/deciduously",
      "https://dev.to/deciduously",
      "https://www.linkedin.com/in/benlovy/"
    ]
  },
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
        <CvHeader header={this.data.header} />
        <CvAddress address={this.data.address} />
      </div>
    );
  }
}
