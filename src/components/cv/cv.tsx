import { Component, Prop, h } from '@stencil/core';
import { CvData, AddressRegion, Month, Locality, Address } from '../../cvdata';

// TODO ability to toggle on/off Address
// TODO different "modes"?

const massachussets: AddressRegion = {
  abbreviation: 'MA',
  fullName: 'Massachussetts',
  country: 'United States'
};

const newton: Locality = {
  name: 'Newton',
  postalCode: '02459',
  state: massachussets
};

const jcc: Address = {
  street: '333 Nahanton St',
  locality: newton
};

// TODO this will come from a backend?
const defaultCv: CvData = {
  header: {
    firstName: 'Ben',
    lastName: 'Lovy',
    email: 'bendlovy@gmail.com',
    subtitle: 'Software Developer',
    links: [
      {
        name: 'GitHub',
        imageUrl: 'images/uploads/github.png',
        target: 'https://github.com/deciduously'
      },
      {
        name: 'DEV.to',
        imageUrl: 'images/uploads/dev-badge.svg',
        target: 'https://dev.to/deciduously'
      },
      {
        name: 'LinkedIn',
        imageUrl: 'images/uploads/768-Linkedin_icon.svg.png',
        target: 'https://www.linkedin.com/in/benlovy/'
      }
    ]
  },
  intro: {
    oneLiner:
      'Entry-level software developer with a life-long passion for creative problem solving through code.',
    about:
      'Eager to apply my self-learned programming knowledge towards a more serious course of study and switch careers, utilizing my background in high-intensity, fast paced work environments to bring strong positive energy mixed with technical expertise to the team and product.',
    skills:
      'Quick and eager to internalize new concepts, highly motivated and resourceful self-learner. Creative problem-solver, fully leveraging available tools and resources where applicable. Thrives in fast-paced, high-intensity environments without sacrificing attention to detail. Effective, diplomatic communicator in difficult or delicate situations.',
    techs:
      'Familiar and comfortable working with a range of languages including C++, JavaScript, TypeScript, Python, Clojure, and Rust, as well as Familiar with modern ecosystem tools such as Git/GitHub, TravisCI, GraphQL vs RESTful API design, test-driven development.'
  },
  education: [
    {
      name: 'Champlain College',
      address: {
        locality: {
          name: 'Burlington',
          postalCode: '05401',
          state: {
            abbreviation: 'VT',
            fullName: 'Vermont',
            country: 'United States'
          }
        }
      },
      degrees: [
        {
          type: {
            abbreviation: 'Cert.',
            fullName: 'Certificate',
            subject: 'C++ Programming'
          },
          graduationDate: {
            date: {
              year: 2020,
              month: Month.May
            },
            expected: true
          },
          gpa: 4.0
        },
        {
          type: {
            abbreviation: 'B.S',
            fullName: 'Bachelor of Science',
            subject: 'Software Development'
          },
          graduationDate: {
            date: {
              year: 2021,
              month: Month.May
            },
            expected: true
          },
          gpa: 4.0
        }
      ]
    }
  ],
  projects: [
    {
      name: 'Mifkad',
      synopsis:
        'Designed and implemented a full-stack web app backend to facilitate a previously handwritten attendance collection process at an administrative position, which they have adopted permanently. Built with a ReasonReact interface and asynchronous Rust/actix_web backend for persisting state to disk.'
    },
    {
      name: 'Ratscript',
      synopsis: 'Embedded scripting language for the Anari project.'
    }
  ],
  employment: [
    {
      title: 'Accounts Receivable/Billing',
      employer: 'Jewish Community Centers of Greater Boston',
      beginDate: {
        year: 2018,
        month: Month.Apr
      },
      current: true,
      address: jcc,
      bullets: [
        'Accurately completed daily billing/receiving tasks, interfacing with our accounting and membership database software.',
        'Created and maintained extensive documentation of job tasks as they pertain to the software.',
        'Leveraged creative solutions to automation problems to reclaim administrative time, using a mix of Rust, Windows batch scripts, and Excel macros.'
      ]
    },
    {
      title: 'Administrative Assistant',
      employer: 'Jewish Community Centers of Greater Boston',
      beginDate: {
        year: 2017,
        month: Month.Aug
      },
      endDate: {
        year: 2018,
        month: Month.Apr
      },
      current: false,
      address: jcc,
      bullets: [
        'Organized and staffed educators, maintaining state-mandated child/staff ratios across all age groups.',
        'Assessed and rewrote standard operating procedures to accommodate a rapidly growing student body.',
        'Liaison between our educators, clients, directorial staff, larger JCC community, and 3rd party vendors.'
      ]
    },
    {
      title: 'Shift Leader',
      employer: "Peet's Coffee",
      beginDate: {
        year: 2015,
        month: Month.Aug
      },
      endDate: {
        year: 2017,
        month: Month.Apr
      },
      current: false,
      address: {
        street: '853 Broadway',
        locality: {
          name: 'New York',
          postalCode: '10003',
          state: {
            abbreviation: 'NY',
            fullName: 'New York',
            country: 'United States'
          }
        }
      },
      bullets: [
        'Monitored day to day product movement and ensured weekly restock minimize waste without running out of supply.',
        'Oversaw staff behavior and customer affect while on shift.',
        'Created and enforced standard operating procedures to maximize profits and customer engagement.'
      ]
    },
    {
      title: 'Operations Manager - Washington, DC',
      employer: 'ZIRX',
      beginDate: {
        year: 2014,
        month: Month.Aug
      },
      endDate: {
        year: 2015,
        month: Month.Jul
      },
      current: false,
      address: {
        street: '350 Townsend St',
        locality: {
          name: 'San Francisco',
          postalCode: '94107',
          state: {
            abbreviation: 'CA',
            fullName: 'California',
            country: 'United States'
          }
        }
      },
      bullets: [
        'Recruited, trained, and managed a team of 35-40 independent contractors, ensuring proper day-to-day coverage needs were met, company standards were upheld, and any contractor concerns were addressed quickly and appropriately.',
        'Facilitated feedback loop for active app development between QA and production environments, including retraining of staff on ground, allowing for rapid iteration of product.',
        'Acted as sole liaison between remote company HQ and my local market, leveraging data visualization techniques to track growth and adjust business plan to ensure consistent expansion.'
      ]
    }
  ],
  address: {
    street: '37 Capitol St',
    locality: {
      name: 'Watertown',
      postalCode: '02472',
      state: massachussets
    }
  }
};

// TODO higher-order component for Sections?

@Component({
  tag: 'app-cv',
  styleUrl: 'cv.css',
  shadow: true
})
export class Cv {
  /** Resume data object */
  @Prop() data: CvData = defaultCv;

  render() {
    return (
      <main class="cv">
        <cv-header class="cv-section" header={this.data.header} />
        <cv-address class="cv-section" address={this.data.address} />
        <cv-intro class="cv-section" intro={this.data.intro} />
        <cv-education class="cv-section" schools={this.data.education} />
        <cv-employment class="cv-section" employment={this.data.employment} />
        <cv-projects class="cv-section" projects={this.data.projects} />
      </main>
    );
  }
}
