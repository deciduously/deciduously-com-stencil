import { FunctionalComponent, h } from '@stencil/core';
import { Project } from '../../cvdata';

interface ProjectsProps {
  projects: Project[];
}

export const CvProjects: FunctionalComponent<ProjectsProps> = ({
  projects
}) => (
  <section>
    <span class="section-header">Projects</span>
    {projects.map(p => {
      return (
        <div class="project">
          <span class="project-title">{p.name}</span>
          <p>{p.synopsis}</p>
        </div>
      );
    })}
  </section>
);
