import { Component, Prop, h } from '@stencil/core';
import { Intro } from '../../global/interfaces';

@Component({
  tag: 'cv-intro',
  styleUrl: 'cv-intro.css',
  shadow: false
})
export class CvIntro {
  /** Intro object */
  @Prop() intro: Intro;
  render() {
    if (this.intro !== undefined) {
      return (
        <section id="cv-intro">
          <span class="one-liner">{this.intro.oneLiner}</span>
          <p>
            <span class="intro-heading">About</span>
            <p class="intro-section">{this.intro.about}</p>
            <span class="intro-heading">Skills</span>
            <p class="intro-section">{this.intro.skills}</p>
            <span class="intro-heading">Techs</span>
            <p class="intro-section">{this.intro.techs}</p>
          </p>
        </section>
      );
    }
  }
}
