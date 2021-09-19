import types from '../actions/types/userTypes'


const STATE = {
    user: {}
}

export default (state = STATE, action) => {
    switch(action.type) {
        case types.SET_USER:
            return {
                user: action.payload,
                isLoading: false
            }
        case types.IS_LOADING:
            return { ...state, isLoading: true }
        default:
            return state
    }
}