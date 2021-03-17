import  genericReducer from 'core/reducers/genericReducer'
import {  updateUnit } from 'core/actions/'

describe('testing generic reducer', () => {

    it('it updates state', () => {

        const initialState = {
            aUnit : { value : 1 },
            bUnit : { value : 2 }
        }

        const action = updateUnit("bUnit", 3)

        const result = {
            aUnit : { value : 1 },
            bUnit : { value : 3 }
        }

        expect(genericReducer(initialState, action)).toEqual(result)

    })

})