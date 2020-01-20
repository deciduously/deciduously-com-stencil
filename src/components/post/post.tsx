import { Component, Prop, Host, h } from '@stencil/core';
const md = require('markdown-it');

@Component({
  tag: 'app-post',
  styleUrl: 'post.css',
  shadow: true
})
export class Post {
  /** A single blog post as a markdown string */
  @Prop() postMarkdown: string;
  render() {
    if (this.postMarkdown !== undefined) {
      return (
        <Host>
          <p>{md.render(this.postMarkdown)}</p>
          <slot></slot>
        </Host>
      );
    }
  }
}
