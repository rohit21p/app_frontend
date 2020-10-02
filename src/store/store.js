import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const config = {
    key: 'rohitpanjwaniappns',
    storage
}

const persistedReducer = persistReducer(config, reducer)
const localStore = createStore(persistedReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
const persistedStore = persistStore(localStore);

export default {
    localStore,
    persistedStore
}