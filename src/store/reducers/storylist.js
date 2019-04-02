import {SETUP_STORIES} from '../actions.sync'

const initState = {
    stories: [],
    inProgress: false
}

const storylist = (state = initState, action) => {
    switch (action.type) {
        case SETUP_STORIES: return ({
            ...state,
            stories: action.stories,
            inProgress: false
        })
        default: return state
    }    
}

export default storylist