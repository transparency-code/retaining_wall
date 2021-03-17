import {createstateFromInitialData, calculateHeight, calculateDAFofRM, calculateDAFofBM,calculate_activeSoilCoEfficient} from './index.js'

test("createstateFromInitialData retuns state from initialData", () => {


    const initialData = {
        units : {
            aUnit: {
                label: 'aLabel',
                unit: 'metre',
                value: 1.0,
                hasLabel : true
              },
          
              bUnit: {
                label: 'bLabel',
                unit: 'metre',
                value: 2.0,
                hasLabel : false
              }
        }
    }

    const state = {
            aUnit : { value : 1.0, labelled : false},
            bUnit : { value : 2.0, }
    }

    expect(createstateFromInitialData(initialData)).toEqual(state)
})


test('test1. function calculateh : default values set h to zero', () => {
  //b=2.5 twbottm=0.3 b1=1 beta=0
  expect(calculateHeight(2.5, 0.3, 1, 0)).toBeCloseTo(0);
});


test('test2. function calculateh : change in beta ', () => {
  //b=2.5 twbottm=0.3 b1=1 beta=1
  expect(calculateHeight(2.5, 0.3, 1, 1)).toBeCloseTo(0.02);
});


test('test3. function calculateDAFofRM : default values set DAFofRM to 25.23', () => {
  expect(calculateDAFofRM(29, 0.85)).toBeCloseTo(25.23);
});

test('test4. function calculateDAFofBM : default values set DAFofBM to 26.14', () => {
  expect(calculateDAFofBM(30, 0.85)).toBeCloseTo(26.14);
});


test('test5. createLateralCoeffState : default values', () => {
  expect(calculate_activeSoilCoEfficient(25.23,25.23, 0)).toBeCloseTo(0.352);
});

test('test5. createLateralCoeffState : change beta to 1', () => {
  expect(calculate_activeSoilCoEfficient(25.23,25.23, 1)).toBeCloseTo(0.357);
});


test('test5. createLateralCoeffState : change other values to 26', () => {
  expect(calculate_activeSoilCoEfficient(26,26, 0)).toBeCloseTo(0.346);
});



