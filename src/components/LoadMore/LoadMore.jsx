import { useDispatch } from 'react-redux';
import { incrementPage } from 'redux/adverts/advertsSlice';
import { LoadMoreStyled } from './LoadMore.styled';

const LoadMore = () => {
  const dispatch = useDispatch();

  return (
    <LoadMoreStyled type="button" onClick={() => dispatch(incrementPage())}>
      Load more
    </LoadMoreStyled>
  );
};

export default LoadMore;
