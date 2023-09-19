import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { CarList, FilterForm, LoadMore } from 'components';
import { Container, EmptySection } from 'components/Layout/Layout.styled';
import {
  selectCars,
  selectCarsShown,
  selectPage,
  selectPerPage,
} from 'redux/selectors';
import { Notify } from 'notiflix';
import { resetFilter } from 'redux/slice';

const Catalog = () => {
  const dispatch = useDispatch();
  const allCars = useSelector(selectCars);
  const cars = useSelector(selectCarsShown);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const [filteredCars, setFilteredCars] = useState([]);
  const [isShowLoadMore, setIsShowLoadMore] = useState(false);
  const totalPages = Math.ceil(cars.length / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  useEffect(() => {
    dispatch(resetFilter());
  }, []);

  useEffect(() => {
    setFilteredCars(cars.slice(0, endIndex));
    if (totalPages === page || totalPages === 0) {
      setIsShowLoadMore(false);
    } else {
      setIsShowLoadMore(true);
    }
  }, [cars, page, endIndex, totalPages]);

  useEffect(() => {
    if (allCars.length > 0) {
      if (cars.length === 0) {
        Notify.success(`Founded nothing`);
      } else if (cars.length === 1) {
        Notify.success(`Founded just one car`);
      } else {
        Notify.success(`Founded ${cars.length} cars`);
      }
    }
  }, [cars]);

  return (
    <Container>
      <FilterForm />
      <section>
        {filteredCars.length > 0 && <CarList cars={filteredCars} />}
        {allCars.length > 0 && cars.length === 0 && (
          <EmptySection>
            No cars were found for this filter. Try a different filter or select
            empty rows to see the entire range.
          </EmptySection>
        )}
        {isShowLoadMore && <LoadMore />}
      </section>
    </Container>
  );
};

export default Catalog;
