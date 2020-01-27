import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-projects',
  styleUrl: 'projects.css',
  shadow: true
})
export class Projects {
  render() {
    return (
      <Host>
        <h1>Projects</h1>
        Coming soon...
      </Host>
    );
  }
}
