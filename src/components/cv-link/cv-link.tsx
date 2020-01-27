import { Component, Prop, getAssetPath, h } from '@stencil/core';
import { CvImageLink } from '../../global/interfaces';

@Component({
  assetsDir: 'images',
  tag: 'cv-link',
  styleUrl: 'cv-link.css',
  shadow: false
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
              src={getAssetPath(`./images/${this.link.imageUrl}`)}
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
