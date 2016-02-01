import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../action_creators';

export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});

// Takes a state from our Redux store and merges them into this component.
// from react-redux's connect
// This will also keep the component in sync. Which is pretty cool.
function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  }
}

// This component now has two versions: A pure one (Voting)
// and a connected one (VotingContainer) which is wrapped in react-redux magic.
export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
)(Voting);
