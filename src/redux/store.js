import { configureStore } from '@reduxjs/toolkit';
import repositoriesReducer from './repositories/repositoriesSlice';

export default configureStore({
  reducer: {
    repos: repositoriesReducer,
  },
});
