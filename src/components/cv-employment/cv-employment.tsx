import { FunctionalComponent, h } from '@stencil/core';
import { Employment } from '../../cvdata';

interface EmploymentProps {
  employment: Employment[]
}

export const CvEmployment: FunctionalComponent<EmploymentProps> = ({ employment }) => (
  <slot></slot>
);
