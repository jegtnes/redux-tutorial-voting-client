import {List, Map} from 'immutable';

// Merge is apparently a function of Immutable maps
function setState(state, newState) {
  return state.merge(newState);
}

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry);
  }
  else {
    return state;
  }
}

function resetVote(state) {
  const vote = state.get('hasVoted');
  const currentPair = state.getIn(['vote', 'pair'], List());

  if (vote && !currentPair.includes(vote)) {
    return state.remove('hasVoted');
  } else {
    return state;
  }
}

export default function(state = Map(), action) {

  switch(action.type) {
    case 'SET_STATE':
    return resetVote(setState(state, action.state));
    case 'VOTE':
    return vote(state, action.entry);
  }

  return state;

}
