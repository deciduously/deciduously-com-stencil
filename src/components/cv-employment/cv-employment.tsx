import { FunctionalComponent, h } from '@stencil/core';
import { Employment, Month } from '../../cvdata';

interface EmploymentProps {
  employment: Employment[];
}

// TODO Schema.org

const endDate = (e: Employment) => {
  if (e.current) {
    return <span class="current-employment">current</span>;
  } else {
    return (
      <slot>
        <span class="grad-month">{Month[e.endDate?.month]}</span>{' '}
        <span class="grad-year">{e.endDate?.year}</span>
      </slot>
    );
  }
};

export const CvEmployment: FunctionalComponent<EmploymentProps> = ({
  employment
}) => (
  <section>
    <span class="section-header">Employment</span>
    {employment.map(e => {
      return (
        <section>
          <span class="emp-title">{e.title}</span> -{' '}
          <span class="emp-employer">{e.employer}</span>{' '}
          <span class="emp-employer-address">{e.address}</span>
          <br />
          {Month[e.beginDate.month]} {e.beginDate.year} - {endDate(e)}
          <br /> {/* TODO current or end date*/}
          <ul>
            {e.bullets.map(b => {
              return <li class="emp-bullet">{b}</li>;
            })}
          </ul>
        </section>
      );
    })}
  </section>
);
