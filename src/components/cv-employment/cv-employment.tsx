import { Component, Prop, h } from '@stencil/core';
import { Employment } from '../../global/interfaces';

// TODO Schema.org

@Component({
  tag: 'cv-employment',
  styleUrl: 'cv-employment.css',
  shadow: false
})
export class CvEmployment {
  /** Employment array  */
  @Prop() employment: Employment[];
  private endDate(e: Employment) {
    if (e.current) {
      return <span class="current-employment">current</span>;
    } else {
      return <cv-monthyear date={e.endDate} />;
    }
  }
  render() {
    if (this.employment !== undefined) {
      return (
        <cv-section name="Employment">
          {this.employment.map(e => {
            return (
              <section>
                <span class="title">{e.title}</span>
                <br />
                <span class="employer">{e.employer}</span>{' '}
                <div class="address">
                  <cv-address address={e.address} />
                </div>
                <br />
                <cv-monthyear date={e.beginDate} /> - {this.endDate(e)}
                <br />
                <ul>
                  {e.bullets.map(b => {
                    return <li class="emp-bullet">{b}</li>;
                  })}
                </ul>
              </section>
            );
          })}
        </cv-section>
      );
    }
  }
}
