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
  isDisabled: function() {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry;
  },
  render: function() {
    return <div className="vote"> {
        this.getPair().map(entry =>
        <button key={entry} style={buttonStyle}
          disabled={this.isDisabled()}
          onClick={() => this.props.vote(entry)}>
          {entry}
          {this.hasVotedFor(entry) ?
            <span className="label"> (Voted)</span> : null}
        </button>
      )}
    </div>;
  }
});
