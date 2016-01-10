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
  // the component is pure (the same data coming in should get the same result)
  // so really, it doesn't matter where it is at the moment
  getPair: function() {
    return this.props.pair || [];
  },
  render: function() {
    return <div className="voting">
      {this.getPair().map(entry =>
        <button key={entry} style={buttonStyle}
          onClick={() => this.props.vote(entry)}>
          {entry}
        </button>
      )}
    </div>;
  }
});
