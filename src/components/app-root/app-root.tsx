import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <div>
        <header class="home">
          <stencil-route-link url="/">
            <h1>deciduously.com</h1>
          </stencil-route-link>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/cv" component="app-cv" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
