import {createStore, applyMiddleware} from 'redux'
import createRootReducer from './reducer'
import thunk from 'redux-thunk';


export default () => {
    return createStore(
        createRootReducer(),
        applyMiddleware(thunk)
    )
}