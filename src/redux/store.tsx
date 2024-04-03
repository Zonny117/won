import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { introReducer } from '@/redux/reducers';

const root = combineReducers({
  introReducer,
});

const store = configureStore({
  reducer: { root },
});

export default store;
