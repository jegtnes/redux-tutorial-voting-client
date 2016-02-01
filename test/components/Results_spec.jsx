import {Results} from '../../src/components/Results';
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import {List, Map} from 'immutable';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = ReactTestUtils;

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

  it('invokes the next callback when the next button is clicked', () => {
    let nextInvoked = false;

    // a function that sets nextinvoked to true
    const next = () => nextInvoked = true;

    const pair = List.of('Trainspotting', '28 Days Later');
    const component = renderIntoDocument(
      <Results pair={pair}
       tally={Map()}
       next={next} />
    );

    expect(nextInvoked).to.equal(false);
    Simulate.click(React.findDOMNode(component.refs.next));
    expect(nextInvoked).to.equal(true);
  });

  it('renders the winner when there is one', () => {
    const pair = ['Trainspotting', '28 Days Later'];
    const component = renderIntoDocument(
      <Results
        winner="Trainspotting"
        pair={pair}
        tally={Map()} />
    );

    const winner = React.findDOMNode(component.refs.winner);
    expect(winner).to.be.ok;
    expect(winner.textContent).to.contain('Trainspotting');
  });
});
