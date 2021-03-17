import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import {rwappReducer} from 'core/reducers'


//https://redux.js.org/api/combinereducers
const rootReducer = combineReducers({
   rwApp : rwappReducer
});

const store = createStore(rootReducer,devToolsEnhancer( ));

export default store;