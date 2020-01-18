import { FunctionalComponent, h } from '@stencil/core';
import { Employment } from '../../cvdata';

interface EmploymentProps {
  employment: Employment[]
}

// TODO Schema.org

export const CvEmployment: FunctionalComponent<EmploymentProps> = ({ employment }) => (
  <section>
    {employment.map(e => {
      return <section>
        <span class="emp-title">{e.title}</span> - <span class="emp-employer">{e.employer}</span> <span class="emp-employer-address">{e.address}</span><br />
        {e.beginDate}<br /> // TODO current or end date
        <ul>
          {e.bullets.map(b => {
            return <li class="emp-bullet">{b}</li>
          })}
        </ul>
      </section>
    })}
  </section>
);
