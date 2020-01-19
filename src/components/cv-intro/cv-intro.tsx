import { Component, Prop, h } from '@stencil/core';
import { Intro } from '../../cvdata';

@Component({
  tag: 'cv-intro',
  styleUrl: 'cv-intro.css',
  shadow: true
})
export class CvIntro {
  /** Intro object */
  @Prop() intro: Intro;
  render() {
    return (
      <section id="cv-intro">
        <span id="one-liner">{this.intro.oneLiner}</span>
        <br />
        <span class="intro-heading">About</span>
        <p class="intro-section">{this.intro.about}</p>
        <span class="intro-heading">Skills</span>
        <p class="intro-section">{this.intro.skills}</p>
        <span class="intro-heading">Techs</span>
        <p class="intr-section">{this.intro.techs}</p>
      </section>
    );
  }
}
