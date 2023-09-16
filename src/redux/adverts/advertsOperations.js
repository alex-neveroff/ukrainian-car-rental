import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

const PER_PAGE = 8;
axios.defaults.baseURL = 'https://6501eca0736d26322f5c7e80.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (page, thunkAPI) => {
    const options = {
      params: {
        page,
        limit: PER_PAGE,
      },
    };
    try {
      const { data } = await axios.get('/adverts', options);
      return { data, perPage: PER_PAGE };
    } catch (error) {
      Notify.failure(`Server error: ${error.message}`);
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const getTotal = createAsyncThunk(
  'adverts/totalItems',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/adverts');
      return { data };
    } catch (error) {
      Notify.failure(`Server error: ${error.message}`);
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
