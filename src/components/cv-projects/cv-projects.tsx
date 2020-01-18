import { FunctionalComponent, h } from '@stencil/core';
import { Project } from '../../cvdata';

interface ProjectsProps {
  projects: Project[]
}

export const CvProjects: FunctionalComponent<ProjectsProps> = ({ projects }) => (
  <slot></slot>
);
