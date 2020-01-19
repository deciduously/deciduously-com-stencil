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
      <section>
        <span class="section-header">Projects</span>
        {this.projects.map(p => {
          return (
            <div class="project">
              <span class="project-title">{p.name}</span>
              <p>{p.synopsis}</p>
            </div>
          );
        })}
      </section>
    );
  }
}
