import { FunctionalComponent, h } from '@stencil/core';
import { Intro } from '../../cvdata';

interface IntroProps {
  intro: Intro
}

export const CvIntro: FunctionalComponent<IntroProps> = ({ intro }) => (
  <section id="cv-intro">
    <span id="one-liner">{intro.oneLiner}</span><br />
    <span class="intro-heading">About</span>
    <p class="intro-section">{intro.about}</p>
    <span class="intro-heading">Skills</span>
    <p class="intro-section">{intro.skills}</p>
    <span class="intro-heading">Techs</span>
    <p class="intr-section">{intro.techs}</p>
  </section>
);