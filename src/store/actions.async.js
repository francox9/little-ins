import { SETUP_STORIES, SETUP_USER, SETUP_POST, ASYNC_START } from './actions.sync'
import Services from '../common/data'

export const ASYNC_SETUP_STORIES = () => {
    return dispatch => {
        Services.get().then(response => {
            dispatch({ type: SETUP_STORIES, stories: response })
        })
    }
}

export const ASYNC_SETUP_USER = (user) => {
    return dispatch => {
        Services.getUser(user).then(response =>  dispatch({type: SETUP_USER,payload: response}))
    }
}

export const ASYNC_SETUP_POST = (pid) => {
    return dispatch => {
        dispatch({type: ASYNC_START, sub: 'post'})
        Services.getPost(pid).then(postData => dispatch({type:SETUP_POST, payload: postData}))
    }
}