import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchDetails = createAsyncThunk('details/fetchDetails', async (URL) => {
  const details = await fetch(URL)
    .then((data) => data.json()).catch((error) => (`HTTP error! Error: ${error}`));
  console.log(details);
  return details;
});

export default fetchDetails;
