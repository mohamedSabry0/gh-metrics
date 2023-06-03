import { configureStore } from '@reduxjs/toolkit';
import repositoriesReducer from './repositories/repositoriesSlice';
import detailsSlice from './details/detailsSlice';

export default configureStore({
  reducer: {
    repos: repositoriesReducer,
    details: detailsSlice,
  },
});
