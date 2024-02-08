import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import modeReducer from '../slices/mode/modeSlice';
import counterReducer from '../slices/counter/counterSlice';

const persistConfig = {
  key: 'mode-persist',
  storage,
  whiteList: ['mode'],
};

const rootReducer = combineReducers({
  mode: modeReducer,
  counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleWare =>
      getDefaultMiddleWare({ serializableCheck: false }),
  });
  const persistor = persistStore(store);
  return { store, persistor };
};
