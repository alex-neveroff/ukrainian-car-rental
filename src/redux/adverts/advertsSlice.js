import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './advertsOperations';
import { Notify } from 'notiflix';

const initialState = {
  cars: [],
  favorites: [],
  isLoading: false,
  error: '',
  page: 1,
  isPagination: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = '';
  state.cars = action.payload.data;

  if (action.payload.data.length < action.payload.perPage) {
    state.isPagination = false;
  } else {
    state.isPagination = true;
  }
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.page = state.page - 1;
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.isLoading = false;
      state.favorites.push(action.payload);
      Notify.success(`Car added to favorites`);
    },

    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        car => car.id !== action.payload.id
      );
      Notify.warning(`Car removed from favorites`);
    },

    incrementPage(state) {
      state.page = state.page + 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, handleFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const { addFavorite, removeFavorite, incrementPage } =
  advertsSlice.actions;
