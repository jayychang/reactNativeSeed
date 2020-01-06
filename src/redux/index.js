import AsyncStorage from '@react-native-community/async-storage'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import storeReducer from 'src/redux/reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [], // FOR TESTING
}

const persistedReducer = persistReducer(persistConfig, storeReducer)

const intitialState = __DEV__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : {}

const store = createStore(
  persistedReducer,
  intitialState,
)

const persistor = persistStore(store)

export {
  persistor,
  store,
}
