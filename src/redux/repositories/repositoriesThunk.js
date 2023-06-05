import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/forks?&sort=watchers';

const fetchRepos = createAsyncThunk('repositories/fetchRepositories', async () => {
  const repos = await fetch(URL)
    .then((data) => data.json()).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return repos;
});

export default fetchRepos;
