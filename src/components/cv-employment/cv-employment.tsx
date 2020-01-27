import { Component, h } from '@stencil/core';
import { Employment } from '../../global/interfaces';
import * as cvData from '../../global/cv.json';

// TODO Schema.org

@Component({
  tag: 'cv-employment',
  styleUrl: 'cv-employment.css',
  shadow: true
})
export class CvEmployment {
  private endDate(e: Employment) {
    if (e.current) {
      return <span class="current-employment">current</span>;
    } else {
      return <cv-monthyear date={e.endDate} />;
    }
  }
  render() {
    return (
      <cv-section name="Employment">
        {cvData.employment.map(e => {
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
