import Voting from '../../src/components/Voting';
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = ReactTestUtils;

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
});
