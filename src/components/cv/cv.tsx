import { Component, Prop, h } from '@stencil/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CvData, defaultCv } from '../../cvdata';

// TODO ability to toggle on/off Address
// TODO different "modes"?

// TODO higher-order component for Sections?

@Component({
  tag: 'app-cv',
  styleUrl: 'cv.css',
  shadow: true
})
export class Cv {
  /** Resume data object */
  @Prop() data: CvData = defaultCv;

  print() {
    try {
      // Init html2canvas for jsPDF
      window['html2canvas'] = html2canvas;

      const doc = new jsPDF('p', 'pt', 'letter');
      doc.html(document.body, {
        callback: function(doc) {
          doc.save();
        }
      });
    } catch (e) {
      if (e.name !== 'SecurityError') throw e;
      return;
    }
  }

  render() {
    if (this.data !== undefined) {
      return (
        <div>
          <button id="#ignorePDF" onClick={_ => this.print()}>
            Download PDF
          </button>
          <main class="cv" id="cv">
            <div class="cv-section">
              <cv-header class="cv-heading-section" header={this.data.header} />
              <cv-address
                class="cv-heading-section"
                address={this.data.address}
              />
              <cv-education
                class="cv-heading-section"
                schools={this.data.education}
              />
            </div>
            <div class="cv-section">
              <div class="cv-body-section">
                <cv-intro intro={this.data.intro} />
                <cv-projects projects={this.data.projects} />
              </div>
              <cv-employment
                class="cv-body-section"
                employment={this.data.employment}
              />
            </div>
          </main>
        </div>
      );
    }
  }
}
