import { Component, h } from '@stencil/core';
import { blagPosts, BlagPosts } from '../../global/posts';

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
        <main>
          <cv-header />
          <span class="blogheader">Blag</span>
          <ul>
            {this.blagPosts
              .allArticles()
              .reverse()
              .map(({ id, title, date }) => {
                return (
                  <li>
                    {id + '. '}
                    <stencil-route-link url={'/post/' + id}>
                      {title}
                    </stencil-route-link>
                    {' - '}
                    <span class="blagdate">{date.toLocaleDateString()}</span>
                  </li>
                );
              })}
          </ul>
        </main>
      );
    }
  }
}
