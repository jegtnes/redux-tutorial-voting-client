import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: ['PureRenderMixin'],
  getPair: function() {
    return this.props.pair || [];
  },
  getVotes: function(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry)
    }
    else return 0;
  },
  render: function() {
    return <div className="results">
      <div ref="what" className="tally">
        {this.getPair().map(entry =>
        <div key={entry} className="entry">
          <h1>
            {entry} <small>({this.getVotes(entry)})</small>
          </h1>
        </div>
        )}
      </div>
      <div className="management">
        <button id="nextButton" className="next" onClick={this.props.next}>Next</button>
      </div>
    </div>
  }
})
