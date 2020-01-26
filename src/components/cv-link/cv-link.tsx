import { Component, Prop, h } from '@stencil/core';
import { CvImageLink } from '../../cvdata';

@Component({
  tag: 'cv-link',
  styleUrl: 'cv-link.css',
  shadow: true
})
export class CvLink {
  /** Link object with image URL */
  @Prop() link: CvImageLink;
  private imgDim: number = 32;

  render() {
    if (this.link !== undefined) {
      return (
        <figure>
          <a target="_blank" href={this.link.target}>
            <img
              src={this.link.imageUrl}
              alt={this.link.name}
              height={this.imgDim}
              width={this.imgDim}
            />
          </a>
          <figcaption>{this.link.name}</figcaption>
        </figure>
      );
    }
  }
}
