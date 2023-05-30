import { createSlice } from '@reduxjs/toolkit';
import fetchRepos from './repositoriesThunk';

const initialState = {
  repos: [],
};

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRepos.fulfilled]: (state, { payload }) => {
      state.repos = payload.map((repo) => ({
        id: repo.id,
        name: repo.full_name,
        description: repo.description,
        owner: repo.owner.login,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        link: repo.html_url,
      }));
    },
  },
});

export default repositoriesSlice.reducer;
