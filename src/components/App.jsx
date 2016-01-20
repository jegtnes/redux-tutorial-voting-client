import React from 'react';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

export default React.createClass({
  render: function() {
    // This renders all the child elements with the placeholder pair we've
    // hard-coded into this file. The children props is given to this component
    // by the React router
    return React.cloneElement(this.props.children, { pair: pair })
  }
})
