import { Component, Prop, h } from '@stencil/core';
import { Month, MonthYear } from '../../global/interfaces';

@Component({
  tag: 'cv-monthyear',
  styleUrl: 'cv-monthyear.css',
  shadow: false
})
export class CvMonthyear {
  /** Month and Year  */
  @Prop() date: MonthYear;
  render() {
    if (this.date !== undefined) {
      return (
        <span class="date">
          <span class="month">{Month[this.date.month]}</span>{' '}
          <span class="year">{this.date.year}</span>
        </span>
      );
    }
  }
}
