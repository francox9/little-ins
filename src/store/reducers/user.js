import {SETUP_USER} from '../actions.sync'

const initState = {
    followCount: null,
    followedByCount: null,
    timelineCount: null,
    full_name: null,
    biography: '',
    is_verified: false,
    is_private: false,
    pic: '',
    posts: [],
    isSelf: false,
    username: '',
    link: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case SETUP_USER: return ({
            ...state,
            ...action.payload
        })
        default: return state
    }
}

 