import { Component, Prop, h } from '@stencil/core';
//import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';
import { CvData } from '../../global/interfaces';
import * as cvData from '../../assets/cv.json';

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
  @Prop() data: CvData = cvData;

  //print() {
  //  try {
  //    // Init html2canvas for jsPDF
  //    window['html2canvas'] = html2canvas;
  //
  //    const doc = new jsPDF('p', 'pt', 'letter');
  //    doc.html(document.body, {
  //      callback: function(doc) {
  //        doc.save();
  //      }
  //    });
  //  } catch (e) {
  //    if (e.name !== 'SecurityError') throw e;
  //    return;
  //  }
  //}

  render() {
    if (this.data !== undefined) {
      return (
        <div>
          <button id="#ignorePDF" onClick={_ => console.log('Not yet!!')}>
            Download PDF
          </button>
          <main class="cv" id="cv">
            <div class="cv-section">
              <cv-header class="cv-heading-section" header={this.data.header} />
              <div class="cv-heading-section">
                <cv-address class="homeaddress" address={this.data.address} />
              </div>
            </div>
            <div class="cv-section">
              <div class="cv-body-section">
                <cv-intro intro={this.data.intro} />
                <cv-education schools={this.data.education} />
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
