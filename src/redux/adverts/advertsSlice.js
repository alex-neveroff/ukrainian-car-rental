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

  const checkFavorites = action.payload.data.map(car => {
    if (state.favorites.find(favorite => favorite.id === car.id)) {
      return { ...car, favorite: true };
    }
    return car;
  });
  state.cars = [...state.cars, ...checkFavorites];

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
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
        Notify.success(`Car added to favorites`);
      }
    },

    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        car => car.id !== action.payload
      );
      state.cars = state.cars.map(car => {
        if (car.id === action.payload) {
          delete car.favorite;
          Notify.warning(`Car removed from favorites`);
        }
        return car;
      });
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
