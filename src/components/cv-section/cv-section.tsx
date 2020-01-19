import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'cv-section',
  styleUrl: 'cv-section.css',
  shadow: true
})
export class CvSection {
  /** Section name in bold */
  @Prop() name: string;
  render() {
    if (this.name !== undefined) {
      return (
        <section>
          <span class="section-header">{this.name}</span>
          <slot />
        </section>
      );
    }
  }
}
