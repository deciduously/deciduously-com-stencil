import { Component, h } from '@stencil/core';
import * as cvData from '../../assets/cv.json';

@Component({
  tag: 'cv-intro',
  styleUrl: 'cv-intro.css',
  shadow: true
})
export class CvIntro {
  render() {
    return (
      <section id="cv-intro">
        <span class="one-liner">{cvData.intro.oneLiner}</span>
        <p>
          <span class="intro-heading">About</span>
          <p class="intro-section">{cvData.intro.about}</p>
          <span class="intro-heading">Skills</span>
          <p class="intro-section">{cvData.intro.skills}</p>
          <span class="intro-heading">Techs</span>
          <p class="intro-section">{cvData.intro.techs}</p>
        </p>
      </section>
    );
  }
}
