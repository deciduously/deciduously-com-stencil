import { Component, Host, h } from '@stencil/core';
import * as cvData from '../../assets/cv.json';

// TODO ability to toggle on/off Address
// TODO different "modes"?

// TODO higher-order component for Sections?

@Component({
  tag: 'app-cv',
  styleUrl: 'cv.css',
  shadow: true
})
export class Cv {
  render() {
    return (
      <Host id="cv">
        <main class="cv">
          <div class="cv-section">
            <cv-header class="cv-heading-section" />
            <div class="cv-heading-section">
              <cv-address class="homeaddress" address={cvData.address} />
            </div>
          </div>
          <div class="cv-section">
            <div class="cv-body-section">
              <cv-intro />
              <cv-education />
              <cv-projects />
            </div>
            <cv-employment class="cv-body-section" />
          </div>
        </main>
      </Host>
    );
  }
}
