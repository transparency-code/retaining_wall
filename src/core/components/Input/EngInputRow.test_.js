import React from 'react';
import renderer from 'react-test-renderer';
import {EngInputRow} from './_EngInputRow'



//http://toniando.com/posts/testing-connected-react-components/

//use a test renderer to quickly generate a serializable value for your React tree
//https://jestjs.io/docs/en/snapshot-testing
it('user input field', () => {

  //const mock1 = jest.fn()
  const props = {

    //from connect
    updateStore: jest.fn(),
    updateHeight: jest.fn(),

    //as ownProps
    label: 'Height of Wall (H)',
    unit: 'metre',
    value: 3.3,
    step: 0.1,
    hasLabel: true
  }

  const tree = renderer
    .create(<EngInputRow {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('readOnly field', () => {

  //const mock1 = jest.fn()
  const props = {
      label: 'Height from top of Wall to top of backfill slope (h)',
      unit: 'metre',
      value: 0,
      readOnly: true,
      hasLabel: true

  }

  const tree = renderer
    .create(<EngInputRow {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


