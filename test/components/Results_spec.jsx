import Results from '../../src/components/Results';
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import {List, Map} from 'immutable';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass} = ReactTestUtils;

describe('Results', () => {
  it('renders entries with vote counts or zero', () => {
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = Map({'Trainspotting': 5});

    const component =  renderIntoDocument(
      <Results pair={pair} tally={tally} />
    );

    const entries = scryRenderedDOMComponentsWithClass(component, 'entry');

    // set two variables, entry1 and entry2, to the text content of
    // the first and second array item in entries
    const [trainspotting, twentyeightdays] = entries.map(entry => entry.textContent);

    expect(entries.length).to.equal(2);
    expect(trainspotting).to.contain('Trainspotting');
    expect(trainspotting).to.contain('5');
    expect(twentyeightdays).to.contain('28 Days Later');
    expect(twentyeightdays).to.contain('0');
  });
});
