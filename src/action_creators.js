// action creators are pure functions that return action objects
// these are a redux thing
// this prevents the rest of the codebase from having to deal with them
// or what they look like. encapsulation!

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function vote(entry) {
  return {
    meta: {
      remote:  true
    },
    type: 'VOTE',
    entry
  }
}
