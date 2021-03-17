export const genericReducer = (state = {}, action) => {

    switch (action.type) {
        case 'UPDATE_UNIT':
            return { ...state, [action.payload.name]: { ...state[action.payload.name] , value : action.payload.value } }
        default:
            return state

    }

}

export default genericReducer