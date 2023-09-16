import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, getTotal } from './advertsOperations';
import { Notify } from 'notiflix';

const initialState = {
  cars: [],
  favorites: [],
  isLoading: false,
  error: '',
  page: 1,
  isShowLoadMore: false,
  total: 0,
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
  state.cars = [...state.cars, ...action.payload.data];
  const totalPages = Math.ceil(state.total / action.payload.perPage);
  if (totalPages === state.page) {
    state.isShowLoadMore = false;
  } else {
    state.isShowLoadMore = true;
  }
};

const totalFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = '';
  state.total = action.payload.total;
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
      .addCase(fetchAdverts.fulfilled, advertsFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(getTotal.fulfilled, totalFulfilled);
  },
});

export const { addFavorite, removeFavorite, incrementPage } =
  advertsSlice.actions;
