import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';
import { Notify } from 'notiflix';
import { generatePriceRange } from 'helpers';

const initialState = {
  cars: [],
  favorites: [],
  brands: [],
  priceRange: [],
  page: 1,
  perPage: 8,
  isLoading: false,
  filter: null,
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
  state.cars = action.payload.data;
  const allBrands = action.payload.data.map(item => item.make);
  state.brands = ['', ...new Set(allBrands)].sort();

  const allprices = action.payload.data.map(item =>
    Number(item.rentalPrice.replace('$', ''))
  );
  state.priceRange = generatePriceRange(allprices);
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
    setFilter(state, action) {
      state.page = 1;
      state.filter = action.payload;
    },
    resetFilter(state) {
      state.filter = null;
      state.page = 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, advertsFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const {
  addFavorite,
  removeFavorite,
  incrementPage,
  setFilter,
  resetFilter,
} = advertsSlice.actions;
