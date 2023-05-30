import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/forks?&sort=watchers';
// const URL = 'https://api.api-ninjas.com/v1/airquality?city=Jeddah';

const fetchRepos = createAsyncThunk('repositories/fetchRepositories', async () => {
  const repos = await fetch(URL, {
    method: 'GET',
    // headers: {
    //   'X-Api-Key': '06j/uIU/evT89CS2c1mUvw==dobmC9GDrDgAImpN',
    // },
  })
    .then((data) => data.json()).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  console.log(repos);
  return repos;
});

export default fetchRepos;
