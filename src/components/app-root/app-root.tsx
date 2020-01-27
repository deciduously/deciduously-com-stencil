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
          <nav>
            <stencil-route-link url="/">
              <a class="headerlink mainlink">deciduously.com</a>
            </stencil-route-link>
            <stencil-route-link url="/projects">
              <a class="headerlink otherlink">Projects</a>
            </stencil-route-link>
            <stencil-route-link url="/cv">
              <a class="headerlink otherlink">Resume</a>
            </stencil-route-link>
          </nav>
        </header>

        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="app-blag" exact={true} />
            <stencil-route url="/cv" component="app-cv" />
            <stencil-route url="/post/:postId" component="app-post" />
            <stencil-route url="/projects" component="app-projects" />
          </stencil-route-switch>
        </stencil-router>
      </div>
    );
  }
}
