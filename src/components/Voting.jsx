import React from 'react';

let buttonStyle = {
  background: '#9999dd',
  padding: '1em',
  fontSize: '1rem',
  border: 'none'
}

export default React.createClass({

  // pair is not yet connected to the back-end
  // currently is a fake property set in index.jsx
  getPair: function() {
    return this.props.pair || [];
  },
  render: function() {
    return <div className="voting">
      {this.getPair().map(entry =>
        <button key={entry} style={buttonStyle}>
          {entry}
        </button>
      )}
    </div>;
  }
});
