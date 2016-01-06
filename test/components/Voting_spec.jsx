import Voting from '../../src/components/Voting';
import React from 'react/addons';

const {renderIntoDocument} = React.addons.TestUtils;


describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );
  });
});
