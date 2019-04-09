import { SETUP_STORIES, SETUP_USER } from './actions.sync'
import Services from '../common/data'

export const ASYNC_SETUP_STORIES = () => {
    return dispatch => {
        Services.get().then(response => {
            dispatch({ type: SETUP_STORIES, stories: response.data.user.edge_web_feed_timeline.edges.map(i => i.node) })
        })
    }
}

export const ASYNC_SETUP_USER = (user) => {
    return dispatch => {
        Services.getUser(user).then(response => {
            dispatch({
                type: SETUP_USER,
                payload: response
            })
        })
    }
}