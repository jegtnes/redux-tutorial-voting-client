import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Tally from './Tally';
import Winner from './Winner';
import * as actionCreators from '../action_creators';

export const Results = React.createClass({
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

// Takes a state from our Redux store and merges them into this component.
// from react-redux's connect
// This will also keep the component in sync. Which is pretty cool.
function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner:  state.get('winner')
  }
}

// This component now has two versions: A pure one (Results)
// and a connected one (ResultsContainer) which is wrapped in react-redux magic.
export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);
