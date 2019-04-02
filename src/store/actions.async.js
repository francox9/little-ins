import { SETUP_STORIES } from './actions.sync'
import Services from '../common/data'

export const ASYNC_SETUP_STORIES = () => {

    return dispatch => {
        Services.get().then(response => {

            try {
                dispatch({ type: SETUP_STORIES, stories: response.data.user.edge_web_feed_timeline.edges.map(i => i.node) })
            }
            catch (e) {

            }

        })
    }
}