import React from 'react';
import renderer from 'react-test-renderer';
import { WallLineWithOutLabel } from './WallLineWithOutLabel'

import { AppLine } from './AppLine'
import { exportAllDeclaration } from '@babel/types';
//ES6 Class Mocks
jest.mock('./AppLine'); // Appline is now a mock constructor


//https://www.youtube.com/watch?v=XDkSaCgR8g4


beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    AppLine.mockClear();
});

it('check if the consumer called the class constructor', () => {
    const appLine = new AppLine()
    expect(AppLine).toHaveBeenCalledTimes(1);
})

it('check if the consumer called a method on the class instance', () => {

    const appLine = new AppLine()
    // https://jestjs.io/docs/en/mock-function-api.html#mockfnmockinstances
    // An array that contains all the object instances that have been instantiated from this mock function using new
    const getPointArray = AppLine.mock.instances[0].getPointArray
    appLine.getPointArray()
    expect(getPointArray).toHaveBeenCalledTimes(1);
})

it('snapshoting a visible line', () => {

    const appLine = new AppLine()
    const tree = renderer
        .create(<WallLineWithOutLabel line={appLine} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('snapshoting an invisible line', () => {

    const appLine = new AppLine()
    const tree = renderer
        .create(<WallLineWithOutLabel line={appLine} inv={true} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});