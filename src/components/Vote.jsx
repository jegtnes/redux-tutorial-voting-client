import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

let buttonStyle = {
  background: '#9999dd',
  padding: '1em',
  fontSize: '1rem',
  border: 'none'
}

export default React.createClass({
  mixins: [PureRenderMixin],
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
