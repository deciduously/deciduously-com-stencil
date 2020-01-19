import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>Ben Lovy's personal website</p>
        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
        <stencil-route-link url="/cv">
          <button>Resume/CV</button>
        </stencil-route-link>
      </div>
    );
  }
}
