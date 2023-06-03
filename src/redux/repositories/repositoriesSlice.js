import { createSlice } from '@reduxjs/toolkit';
import fetchRepos from './repositoriesThunk';

const initialState = {
  repos: [],
};

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRepos.fulfilled, (state, { payload }) => ({
        ...state,
        repos: payload.map((repo) => ({
          id: repo.id,
          name: repo.name,
          owner: repo.owner.login,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          status: 'succeeded',
        })),
      }))
      .addCase(fetchRepos.pending, (state) => ({
        ...state,
        status: 'loading',
      }));
  },
});

export { fetchRepos };
export const { selectRepo } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;
