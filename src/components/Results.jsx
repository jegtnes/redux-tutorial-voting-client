import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Tally from './Tally';
import Winner from './Winner';

export default React.createClass({
  mixins: ['PureRenderMixin'],
  render: function() {
    return this.props.winner ?
    <Winner ref="winner" winner={this.props.winner} /> :
    <div>
      <Tally pair={this.props.pair} tally={this.props.tally} next={this.props.next}/>
      <div className="management">
        <button ref="next" className="next" onClick={this.props.next}>Next</button>
      </div>
    </div>
  }
})
