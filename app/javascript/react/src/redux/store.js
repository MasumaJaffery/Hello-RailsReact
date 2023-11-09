import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './slice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;