/**
 * Active post information
 */
import {SETUP_POST, RESET_POST, ASYNC_START} from '../actions.sync'
const initState = {
    inProgress: false,
    isReady: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case SETUP_POST: return ({
            ...state,
            ...action.payload,
            inProgress: false,
            isReady: true
        })
        case RESET_POST: return initState
        case ASYNC_START: return action.sub != 'post' ? state : ({
            ...state,
            inProgress: true
        })

        default: return state
    }
}