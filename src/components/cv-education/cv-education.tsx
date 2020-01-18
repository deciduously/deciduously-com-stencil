import { FunctionalComponent, h } from '@stencil/core';
import { Education } from '../../cvdata';

interface EducationProps {
  education: Education
}

export const CvEducation: FunctionalComponent<EducationProps> = ({ education }) => (
  <slot></slot>
);
