import { Component, h } from '@stencil/core';
import * as cvData from '../../global/cv.json';

@Component({
  tag: 'cv-education',
  styleUrl: 'cv-education.css',
  shadow: true
})
export class CvEducation {
  render() {
    return (
      <cv-section name="Education">
        {cvData.education.map(s => {
          return (
            <div>
              <span class="school-name">{s.name}</span>
              <cv-address class="ed-address" address={s.address} />
              <p class="subtitle">Unofficial transcript available on request</p>
              <ul class="schools">
                {s.degrees.map(d => {
                  return (
                    <li>
                      <p>
                        <abbr title={d.type.fullName} class="degree-type">
                          {d.type.abbreviation}
                        </abbr>{' '}
                        {d.type.subject}
                        <br />
                        <span class="grad-date">
                          <cv-monthyear date={d.graduationDate.date} />
                        </span>{' '}
                        {d.graduationDate.expected ? (
                          <span class="expected">- expected</span>
                        ) : (
                            <slot></slot>
                          )}
                        {' | GPA: ' + d.gpa.toFixed(1)}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </cv-section>
    );
  }
}
