import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.adverts.cars;
export const selectFavorites = state => state.adverts.favorites;
export const selectPage = state => state.adverts.page;
export const selectPerPage = state => state.adverts.perPage;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;
export const selectBrands = state => state.adverts.brands;
export const selectPriceRange = state => state.adverts.priceRange;
export const selectFilter = state => state.adverts.filter;

const getFilter = (cars, currentFilter) => {
  if (!currentFilter) return cars;
  const { carBrand, price, from, to } = currentFilter;

  if (carBrand)
    cars = cars.filter(({ make }) =>
      make.toLowerCase().includes(carBrand.toLowerCase())
    );

  if (price)
    cars = cars.filter(
      ({ rentalPrice }) => Number(rentalPrice.slice(1)) <= Number(price)
    );

  if (from && to)
    cars = cars.filter(
      ({ mileage }) => mileage >= Number(from) && mileage <= Number(to)
    );
  if (from && !to) cars = cars.filter(({ mileage }) => mileage >= Number(from));
  if (!from && to) cars = cars.filter(({ mileage }) => mileage <= Number(to));

  return cars;
};

export const selectCarsShown = createSelector(
  [selectCars, selectFilter],
  getFilter
);

export const selectFavoritesShown = createSelector(
  [selectFavorites, selectFilter],
  getFilter
);
