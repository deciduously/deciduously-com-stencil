import { Component, Prop, h } from '@stencil/core';
import { Employment, Month } from '../../cvdata';

// TODO Schema.org

@Component({
  tag: 'cv-employment',
  styleUrl: 'cv-employment.css',
  shadow: true
})
export class CvEmployment {
  /** Employment array  */
  @Prop() employment: Employment[];
  private endDate(e: Employment) {
    if (e.current) {
      return <span class="current-employment">current</span>;
    } else {
      return (
        <slot>
          <span class="italic">{Month[e.endDate?.month]}</span>{' '}
          <span class="bold">{e.endDate?.year}</span>
        </slot>
      );
    }
  }
  render() {
    return (
      <section>
        <span class="section-header">Employment</span>
        {this.employment.map(e => {
          return (
            <section>
              <span class="emp-title">{e.title}</span> -{' '}
              <span class="emp-employer">{e.employer}</span>{' '}
              <cv-address address={e.address} />
              <br />
              {Month[e.beginDate.month]} {e.beginDate.year} - {this.endDate(e)}
              <br />
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
  }
}
