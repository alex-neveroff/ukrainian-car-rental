import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';
import { Notify } from 'notiflix';

const initialState = {
  cars: [],
  favorites: [],
  brands: [],
  priceRange: [],
  page: 1,
  isLoading: false,
  isShowLoadMore: false,
  clickedLoadMore: false,
  error: '',
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.page = state.page - 1;
};

const advertsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = '';
  if (state.clickedLoadMore) {
    state.cars = [...state.cars, ...action.payload.data];
  } else {
    state.cars = action.payload.data;
  }

  if (action.payload.data.length < action.payload.perPage) {
    state.isShowLoadMore = false;
  } else {
    state.isShowLoadMore = true;
  }
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
    isShowMore(state, action) {
      state.clickedLoadMore = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, advertsFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const { addFavorite, removeFavorite, incrementPage, isShowMore } =
  advertsSlice.actions;
