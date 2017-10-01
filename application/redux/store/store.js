import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import { AsyncStorage } from 'react-native';
import renders from '../reducer/reducers'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const Store = createStoreWithMiddleware(renders,autoRehydrate());

persistStore(Store,{
    storage:AsyncStorage,
    blacklist:['messageReducer']
});

export default Store;

// export default  store = createStoreWithMiddleware(renders);