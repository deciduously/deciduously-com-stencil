import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-blag',
  styleUrl: 'blag.css',
  shadow: true
})
export class Blag {
  posts(): string[] {
    return ['# Test Markdown String'];
  }
  render() {
    return (
      <Host>
        <h1>Blag</h1>
        {this.posts().map(p => {
          return <app-post postMarkdown={p} />;
        })}
      </Host>
    );
  }
}
