import Voting from '../../src/components/Voting';
import React from 'react'
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils'
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} = ReactTestUtils;

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );

    // This is a rather verbose React helper function that finds the instances
    // of the specified tag in the React render tree that we pass to it
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    // more vanilla Chai checks to see if the buttons have the content we expect
    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting');
    expect(buttons[1].textContent).to.equal('28 Days Later');
  });

  it('fires a callback when a button is clicked', () => {
    let votedWith;
    const vote = (entry) => votedWith = entry;

    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]}
              vote={vote} />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);

    expect(votedWith).to.equal('Trainspotting');
  });

  it('disables buttons upon voting', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} hasVoted="Trainspotting" />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].hasAttribute('disabled')).to.equal(true);
    expect(buttons[1].hasAttribute('disabled')).to.equal(true);
  });

  it('adds a label to indicate which component is disabled', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} hasVoted="Trainspotting" />
    );

    const button = scryRenderedDOMComponentsWithTag(component, 'button')[0];

    expect(button.textContent).to.contain('Voted');
  });

  it('only renders the winner if there is a winner', () => {
    const component = renderIntoDocument(
      <Voting winner="Trainspotting" />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(0);

    const winner = ReactDOM.findDOMNode(component.refs.winner);
    expect(winner).to.be.ok;
    expect(winner.textContent).to.contain('Trainspotting');
  });

  // We're going to be using the PureRenderMixin for a speed boost.
  // https://facebook.github.io/react/docs/pure-render-mixin.html
  // Test our component is pure: i.e., given the same props and state,
  // it will always render the same result
  it('is a pure component', () => {
    const votingPair = ['Trainspotting', '28 Days Later'];
    const component = renderIntoDocument(
      <Voting pair={votingPair} />
    );

    let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    expect(firstButton.textContent).to.equal('Trainspotting');

    votingPair[0] = 'Sunshine';

    component.setProps({votingPair: votingPair});

    firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    expect(firstButton.textContent).to.equal('Trainspotting');
  });
});
