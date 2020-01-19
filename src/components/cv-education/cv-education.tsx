import { Component, Prop, h } from '@stencil/core';
import { GraduationDate, Month, SchoolEntry } from '../../cvdata';

@Component({
  tag: 'cv-education',
  styleUrl: 'cv-education.css',
  shadow: true
})
export class CvEducation {
  /** Schools list */
  @Prop() schools: SchoolEntry[];
  private gradDate(g: GraduationDate) {
    return (
      <span class="grad-date">
        <span class="grad-month">{Month[g.date.month]}</span>{' '}
        <span class="grad-year">{g.date.year}</span>
      </span>
    );
  }
  render() {
    return (
      <section>
        <span class="section-header">Education</span>
        {this.schools.map(s => {
          return (
            <div>
              <span class="school-name">{s.name}</span>
              <cv-address address={s.address} />
              <ul class="schools">
                {s.degrees.map(d => {
                  return (
                    <li>
                      <p>
                        <abbr title={d.type.fullName} class="degree-type">
                          {d.type.abbreviation}
                        </abbr>{' '}
                        - {d.type.subject}
                        <br />
                        GPA: {d.gpa} - {this.gradDate(d.graduationDate)}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>
    );
  }
}
