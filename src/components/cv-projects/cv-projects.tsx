import { Component, Prop, h } from '@stencil/core';
import { Project } from '../../cvdata';

@Component({
  tag: 'cv-projects',
  styleUrl: 'cv-projects.css',
  shadow: true
})
export class CvProjects {
  /** Projects list */
  @Prop() projects: Project[];
  render() {
    return (
      <cv-section name="Projects">
        {this.projects.map(p => {
          return (
            <section class="project">
              <span class="project-title">{p.name}</span>
              <p>{p.synopsis}</p>
            </section>
          );
        })}
      </cv-section>
    );
  }
}
