import  dimentionReducer from 'core/reducers/dimentionReducer'
import dimentionsData from 'core/data/dimentions'
import {  updateWallHeight, updateDimention, updateLabel } from 'core/actions/'

//https://redux.js.org/recipes/writing-tests#reducers


describe('testing composing dimentionsReducer', () => {


    //https://stackoverflow.com/questions/52397708/how-to-pass-variable-from-beforeeach-hook-to-tests-in-jest
    let initialState

    beforeEach(() => {
        initialState = {
            aUnit: { value: 1.0, labelled: true },
            bUnit: { value: 2.0 }
        }
    })


    it('should return initial state', () => {
        expect(dimentionReducer(initialState, {})).toEqual(initialState)
    })

    // it('should update state', () => {

    //     const action = updateDimention("aUnit", 3.0)

    //     const result = {
    //         aUnit: { value: 3.0, labelled: true },
    //         bUnit: { value: 2.0 }
    //     }

    //     expect(dimentionReducer(initialState, action)).toEqual(result)
    // })

    it('should update label', () => {

        const action = updateLabel("aUnit")

        const result = {
            aUnit: { value: 1.0, labelled: false },
            bUnit: { value: 2.0 }
        }

        expect(dimentionReducer(initialState, action)).toEqual(result)
    })



})

// describe('testing updatewallHeight', () => {

//     it('testing change in thicknessofwallstematbottom', () => {

//         const initialState = {
//             backfillinclination: { value: 1, hasLabel: true },
//             basewidth: { value: 2.5, hasLabel: true },
//             offsetofwallstemfromtoe: { value: 1, hasLabel: true },
//             thicknessofwallstematbottom: { value: 0.3, hasLabel: true },
//             heightfromtopofwalltotopofbackfillslope: { value: 1, hasLabel: true }
//         }

//         const action = updateWallHeight()
//         const result = dimentionReducer(initialState, action)

//         expect(dimentionReducer(initialState, action)).toEqual(expect.objectContaining({ heightfromtopofwalltotopofbackfillslope: { value: 0.02, hasLabel: true } }))

//     })

// })