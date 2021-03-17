import * as actions from './index'


//https://redux.js.org/recipes/writing-tests#action-creators

describe('actions', () => {
    // it('should create an action updateStore', () => {


    //     const expectedAction = {
    //         type: 'UPDATE_STORE',
    //         payload : {
    //             name : "aName",
    //             value : "aValue"
    //         }

    //   }
    //   expect(actions.updateStore("aName","aValue")).toEqual(expectedAction)
    // })


    // it('should create an action updateLabel', () => {


    //     const expectedAction = {
    //         type: 'UPDATE_LABEL',
    //         payload : {
    //             name : "aName",
    //             value : true
    //         }

    //   }
    //   expect(actions.updateLabel("aName",true)).toEqual(expectedAction)
    // })

    
    it('should create an action UPDATE_LATERAL_COEFF', () => {


        const expectedAction = {
            type: 'UPDATE_LATERAL_COEFF',
            payload : {
                dafrm : 0.1,
                cefa: 0.2,
                beta: 0.3
            }

      }
      expect(actions.calculateLaterlCoeffs(0.1,0.2,0.3)).toEqual(expectedAction)
    })
  })