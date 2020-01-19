import { FunctionalComponent, h } from '@stencil/core';
import { GraduationDate, Month, SchoolEntry } from '../../cvdata';
import { CvAddress } from '../cv-address/cv-address';

interface EducationProps {
  schools: SchoolEntry[];
}

const gradDate = (g: GraduationDate) => (
  <span class="grad-date">
    <span class="grad-month">{Month[g.date.month]}</span>{' '}
    <span class="grad-year">{g.date.year}</span>
  </span>
);

export const CvEducation: FunctionalComponent<EducationProps> = ({
  schools
}) => (
  <section>
    <span class="section-header">Education</span>
    {schools.map(s => {
      return (
        <div>
          <span class="school-name">{s.name}</span>
          <CvAddress address={s.address} />
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
                    GPA: {d.gpa} - {gradDate(d.graduationDate)}
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
