import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  render() {
    return (
      <div>
        <p>Ben Lovy's personal website</p>
        <stencil-route-link url="/blag">
          <button>Blag</button>
        </stencil-route-link>
        <stencil-route-link url="/cv">
          <button>Resume/CV</button>
        </stencil-route-link>
      </div>
    );
  }
}
