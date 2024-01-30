
import './index.scss';
export const tourOptions = {
  defaultStepOptions: {
    classes: 'shepherd-theme-custom',
    cancelIcon: {
      enabled: true,
    },
    scroll: true,
  },
  useModalOverlay: true,
};


export const steps = [{
  id: 'headerIcons',
  text: '<h1>Access a brief about me, my latest projects, and my contact page.</h1>',
  attachTo: {
    element: '.nav-section',
    on: 'bottom'
  },
  // classes: 'example-step-extra-class',
  highlightClass: 'tour-highlight',
  classes: 'tour-content',
  buttons: [
    {
      classes: '',
      text: 'Next',
      type: 'next'
    }
  ],
  
},{
  id: 'techIcons',
  text: '<h1>View code snippets of technologies I used in my projects!</h1>',
  attachTo: {
    element: '.logo-grid',
    on: 'top'
  },
  // classes: 'example-step-extra-class',
  highlightClass: 'tour-highlight',
  classes: 'tour-content',
  buttons: [
    {
      classes: '',
      text: 'Next',
      type: 'next'
    }
  ],
 
},{
  
    id: 'socialIcons',
    text: '<h1>Connect with me on LinkedIn, Github, or Youtube!</h1>',
    attachTo: {
      element: '.side-links',
      on: 'left'
    },
    // classes: 'example-step-extra-class',
    highlightClass: 'tour-highlight',
    classes: 'tour-content',
    buttons: [
      {
        classes: '',
        text: 'Next',
        type: 'next'
      }
    ],

  
}





];