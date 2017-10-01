import { combineReducers } from 'redux';
import { homeReducer } from './homeReducer';
import { netReducer } from './netReducer';
import { messageReducer } from './messageReducer';

const reducers = combineReducers({
    netReducer,
    homeReducer,
    messageReducer,
})

export default reducers;