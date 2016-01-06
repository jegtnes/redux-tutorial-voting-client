import jsdom from 'jsdom';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

// Ensure all jsdom window.* properties are available as global variables in Node
// so they can be used as they would be in a browser
// (React relies on this to work)
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);
