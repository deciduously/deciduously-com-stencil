import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  render() {
    return (
      <div class="container">
        <p>Ben Lovy's personal website</p>

        <stencil-route-link url="/cv">
          <button class="red">Resume/CV</button>
        </stencil-route-link>
      </div>
    );
  }
}
