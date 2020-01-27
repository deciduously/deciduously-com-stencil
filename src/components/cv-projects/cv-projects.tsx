import { Component, h } from '@stencil/core';
import * as cvData from '../../global/cv.json';

@Component({
  tag: 'cv-projects',
  styleUrl: 'cv-projects.css',
  shadow: true
})
export class CvProjects {
  render() {
    if (cvData.projects !== undefined) {
      return (
        <cv-section name="Projects">
          {cvData.projects.map(p => {
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
