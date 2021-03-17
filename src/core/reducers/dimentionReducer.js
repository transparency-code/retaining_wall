import {calculateHeight} from 'core/util/'

//https://redux.js.org/basics/reducers
export const dimentionReducer = (state = {}, action) => {


    switch (action.type) {
        case 'UPDATE_UNIT' :
                return { ...state, [action.payload.name]: { ...state[action.payload.name] , value : action.payload.value } }
        case 'UPDATE_DIMENTION_DEPENDENTS':  
            const { backfillinclination } = state      
            const { basewidth } = state
            const { offsetofwallstemfromtoe } = state
            const { thicknessofwallstematbottom } = state
            // //calculate a new value
            const newWallHeight = calculateHeight(basewidth.value,thicknessofwallstematbottom.value,offsetofwallstemfromtoe.value,backfillinclination.value)
            // //update state
            return {...state , heightfromtopofwalltotopofbackfillslope: { ...state['heightfromtopofwalltotopofbackfillslope'] , value : newWallHeight }}
        case 'UPDATE_LABEL': 
            return { ...state, [action.payload.id] : { ...state[action.payload.id] , labelled : !state[action.payload.id].labelled}}
           
        default:
            return state

    }

}

export default dimentionReducer