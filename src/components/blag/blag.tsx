import { Component, Host, h } from '@stencil/core';
import { blagPosts, BlagPosts } from '../../posts';

@Component({
  tag: 'app-blag',
  styleUrl: 'blag.css',
  shadow: true
})
export class Blag {
  blagPosts: BlagPosts = blagPosts;
  render() {
    if (this.blagPosts !== undefined) {
      return (
        <Host>
          <h1>Blag</h1>
          {this.blagPosts
            .allArticleTitles()
            .reverse()
            .map(([id, name]) => {
              return (
                <li>
                  <stencil-route-link url={'/post/' + id}>
                    {name}
                  </stencil-route-link>
                </li>
              );
            })}
        </Host>
      );
    }
  }
}
