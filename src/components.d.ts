/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';
import {
  Address,
  BlagPost,
  CvImageLink,
  MonthYear,
} from './global/interfaces';

export namespace Components {
  interface AppBlag {}
  interface AppCv {}
  interface AppPost {
    'blagPost': BlagPost;
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface AppProjects {}
  interface AppRoot {}
  interface CvAddress {
    /**
    * Address object
    */
    'address': Address;
  }
  interface CvEducation {}
  interface CvEmployment {}
  interface CvHeader {}
  interface CvIntro {}
  interface CvLink {
    /**
    * Link object with image URL
    */
    'link': CvImageLink;
  }
  interface CvMonthyear {
    /**
    * Month and Year
    */
    'date': MonthYear;
  }
  interface CvProjects {}
  interface CvSection {
    /**
    * Section name in bold
    */
    'name': string;
  }
}

declare global {


  interface HTMLAppBlagElement extends Components.AppBlag, HTMLStencilElement {}
  var HTMLAppBlagElement: {
    prototype: HTMLAppBlagElement;
    new (): HTMLAppBlagElement;
  };

  interface HTMLAppCvElement extends Components.AppCv, HTMLStencilElement {}
  var HTMLAppCvElement: {
    prototype: HTMLAppCvElement;
    new (): HTMLAppCvElement;
  };

  interface HTMLAppPostElement extends Components.AppPost, HTMLStencilElement {}
  var HTMLAppPostElement: {
    prototype: HTMLAppPostElement;
    new (): HTMLAppPostElement;
  };

  interface HTMLAppProjectsElement extends Components.AppProjects, HTMLStencilElement {}
  var HTMLAppProjectsElement: {
    prototype: HTMLAppProjectsElement;
    new (): HTMLAppProjectsElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLCvAddressElement extends Components.CvAddress, HTMLStencilElement {}
  var HTMLCvAddressElement: {
    prototype: HTMLCvAddressElement;
    new (): HTMLCvAddressElement;
  };

  interface HTMLCvEducationElement extends Components.CvEducation, HTMLStencilElement {}
  var HTMLCvEducationElement: {
    prototype: HTMLCvEducationElement;
    new (): HTMLCvEducationElement;
  };

  interface HTMLCvEmploymentElement extends Components.CvEmployment, HTMLStencilElement {}
  var HTMLCvEmploymentElement: {
    prototype: HTMLCvEmploymentElement;
    new (): HTMLCvEmploymentElement;
  };

  interface HTMLCvHeaderElement extends Components.CvHeader, HTMLStencilElement {}
  var HTMLCvHeaderElement: {
    prototype: HTMLCvHeaderElement;
    new (): HTMLCvHeaderElement;
  };

  interface HTMLCvIntroElement extends Components.CvIntro, HTMLStencilElement {}
  var HTMLCvIntroElement: {
    prototype: HTMLCvIntroElement;
    new (): HTMLCvIntroElement;
  };

  interface HTMLCvLinkElement extends Components.CvLink, HTMLStencilElement {}
  var HTMLCvLinkElement: {
    prototype: HTMLCvLinkElement;
    new (): HTMLCvLinkElement;
  };

  interface HTMLCvMonthyearElement extends Components.CvMonthyear, HTMLStencilElement {}
  var HTMLCvMonthyearElement: {
    prototype: HTMLCvMonthyearElement;
    new (): HTMLCvMonthyearElement;
  };

  interface HTMLCvProjectsElement extends Components.CvProjects, HTMLStencilElement {}
  var HTMLCvProjectsElement: {
    prototype: HTMLCvProjectsElement;
    new (): HTMLCvProjectsElement;
  };

  interface HTMLCvSectionElement extends Components.CvSection, HTMLStencilElement {}
  var HTMLCvSectionElement: {
    prototype: HTMLCvSectionElement;
    new (): HTMLCvSectionElement;
  };
  interface HTMLElementTagNameMap {
    'app-blag': HTMLAppBlagElement;
    'app-cv': HTMLAppCvElement;
    'app-post': HTMLAppPostElement;
    'app-projects': HTMLAppProjectsElement;
    'app-root': HTMLAppRootElement;
    'cv-address': HTMLCvAddressElement;
    'cv-education': HTMLCvEducationElement;
    'cv-employment': HTMLCvEmploymentElement;
    'cv-header': HTMLCvHeaderElement;
    'cv-intro': HTMLCvIntroElement;
    'cv-link': HTMLCvLinkElement;
    'cv-monthyear': HTMLCvMonthyearElement;
    'cv-projects': HTMLCvProjectsElement;
    'cv-section': HTMLCvSectionElement;
  }
}

declare namespace LocalJSX {
  interface AppBlag {}
  interface AppCv {}
  interface AppPost {
    'blagPost'?: BlagPost;
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }
  interface AppProjects {}
  interface AppRoot {}
  interface CvAddress {
    /**
    * Address object
    */
    'address'?: Address;
  }
  interface CvEducation {}
  interface CvEmployment {}
  interface CvHeader {}
  interface CvIntro {}
  interface CvLink {
    /**
    * Link object with image URL
    */
    'link'?: CvImageLink;
  }
  interface CvMonthyear {
    /**
    * Month and Year
    */
    'date'?: MonthYear;
  }
  interface CvProjects {}
  interface CvSection {
    /**
    * Section name in bold
    */
    'name'?: string;
  }

  interface IntrinsicElements {
    'app-blag': AppBlag;
    'app-cv': AppCv;
    'app-post': AppPost;
    'app-projects': AppProjects;
    'app-root': AppRoot;
    'cv-address': CvAddress;
    'cv-education': CvEducation;
    'cv-employment': CvEmployment;
    'cv-header': CvHeader;
    'cv-intro': CvIntro;
    'cv-link': CvLink;
    'cv-monthyear': CvMonthyear;
    'cv-projects': CvProjects;
    'cv-section': CvSection;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-blag': LocalJSX.AppBlag & JSXBase.HTMLAttributes<HTMLAppBlagElement>;
      'app-cv': LocalJSX.AppCv & JSXBase.HTMLAttributes<HTMLAppCvElement>;
      'app-post': LocalJSX.AppPost & JSXBase.HTMLAttributes<HTMLAppPostElement>;
      'app-projects': LocalJSX.AppProjects & JSXBase.HTMLAttributes<HTMLAppProjectsElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'cv-address': LocalJSX.CvAddress & JSXBase.HTMLAttributes<HTMLCvAddressElement>;
      'cv-education': LocalJSX.CvEducation & JSXBase.HTMLAttributes<HTMLCvEducationElement>;
      'cv-employment': LocalJSX.CvEmployment & JSXBase.HTMLAttributes<HTMLCvEmploymentElement>;
      'cv-header': LocalJSX.CvHeader & JSXBase.HTMLAttributes<HTMLCvHeaderElement>;
      'cv-intro': LocalJSX.CvIntro & JSXBase.HTMLAttributes<HTMLCvIntroElement>;
      'cv-link': LocalJSX.CvLink & JSXBase.HTMLAttributes<HTMLCvLinkElement>;
      'cv-monthyear': LocalJSX.CvMonthyear & JSXBase.HTMLAttributes<HTMLCvMonthyearElement>;
      'cv-projects': LocalJSX.CvProjects & JSXBase.HTMLAttributes<HTMLCvProjectsElement>;
      'cv-section': LocalJSX.CvSection & JSXBase.HTMLAttributes<HTMLCvSectionElement>;
    }
  }
}


