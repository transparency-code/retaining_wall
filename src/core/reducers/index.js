import { createstateFromInitialData } from 'core/util'
import dimentionData from 'core/data/dimentions'
import materialData from 'core/data/materialData'
import soilData from 'core/data/soilData'
import surchargeLoadingData from 'core/data/surchargeLoading'
import soilReducer from 'core/reducers/soilReducer'
import dimentionReducer from 'core/reducers/dimentionReducer'
import genericReducer from 'core/reducers/genericReducer'
import lateralForceReducer from 'core/reducers/lateralForceReducer'


//creates initial state from file data
const initialState = {
    dimention: createstateFromInitialData(dimentionData),
    material: createstateFromInitialData(materialData),
    soil : createstateFromInitialData(soilData),
    surchargeLoading : createstateFromInitialData(surchargeLoadingData)

}

// //https://redux.js.org/basics/reducers
//https://redux.js.org/recipes/structuring-reducers/refactoring-reducer-example#separating-data-handling-by-domain
//reducer composition

export const rwappReducer = (state = initialState, action) => {

    //console.log( lateralForceReducer(state))
    return {
        dimention: dimentionReducer(state.dimention, action),
        material: genericReducer(state.material, action),
        soil : soilReducer(state.soil,action),
        surchargeLoading : genericReducer(state.surchargeLoading, action),
        lateralForceCoEff : lateralForceReducer(state)
    }
}


