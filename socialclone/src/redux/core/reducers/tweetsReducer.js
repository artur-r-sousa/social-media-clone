import types from '../actions/types/tweetTypes'


const STATE = {
    tweets: []
}

export default (state = STATE, action) => {
    switch(action.type) {
        case types.SET_TWEETS:
            return {               
                tweets: action.payload,
                isLoading: false
            }
        case types.IS_LOADING:
            return { ...state, isLoading: true }
        default:
            return state
    }
}