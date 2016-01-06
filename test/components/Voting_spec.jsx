import Voting from '../../src/components/Voting';
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

const {renderIntoDocument} = ReactTestUtils;


describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );
  });
});
