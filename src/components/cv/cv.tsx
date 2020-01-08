import { Component, h } from '@stencil/core';
import { CvData, defaultCv } from '../../cvdata';

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
