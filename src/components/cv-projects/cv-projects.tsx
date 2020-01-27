import { Component, Prop, h } from '@stencil/core';
import { Project } from '../../global/interfaces';

@Component({
  tag: 'cv-projects',
  styleUrl: 'cv-projects.css',
  shadow: false
})
export class CvProjects {
  /** Projects list */
  @Prop() projects: Project[];
  render() {
    if (this.projects !== undefined) {
      return (
        <cv-section name="Projects">
          {this.projects.map(p => {
            return (
              <section class="project">
                <p>
                  <span class="title">{p.name}</span>
                  <div>{p.synopsis}</div>
                </p>
              </section>
            );
          })}
        </cv-section>
      );
    }
  }
}
