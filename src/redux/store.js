import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension';   

import contactsReducer from './contacts-reducer';

const initialState = {
   contacts: {
    items: [],
    filter: ''
  }
};

// const rootReduscer = combineReducers({
//    contacts: contactsReducer,
// })

// const store = createStore(rootReduscer, composeWithDevTools());

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
}

const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }
}), logger];

const rootReduscer = combineReducers({
      contacts: persistReducer(persistConfig, contactsReducer)
})


const store = configureStore({
   reducer: rootReduscer,
   devTools: process.env.NODE_ENV === 'development',
   middleware,
})

const persistor = persistStore(store);

export default {persistor, store};