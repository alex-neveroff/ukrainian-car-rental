import { useDispatch } from 'react-redux';
import { incrementPage } from 'redux/slice';
import { LoadMoreStyled } from './LoadMore.styled';

const LoadMore = () => {
  const dispatch = useDispatch();

  const handleLoadMoreClicked = () => {
    dispatch(incrementPage());
  };

  return (
    <LoadMoreStyled type="button" onClick={handleLoadMoreClicked}>
      Load more
    </LoadMoreStyled>
  );
};

export default LoadMore;
