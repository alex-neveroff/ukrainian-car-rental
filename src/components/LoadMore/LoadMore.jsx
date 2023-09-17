import { useDispatch } from 'react-redux';
import { incrementPage, isShowMore } from 'redux/slice';
import { LoadMoreStyled } from './LoadMore.styled';

const LoadMore = () => {
  const dispatch = useDispatch();

  const handleLoadMoreClicked = () => {
    dispatch(isShowMore(true));
    dispatch(incrementPage());
  };

  return (
    <LoadMoreStyled type="button" onClick={handleLoadMoreClicked}>
      Load more
    </LoadMoreStyled>
  );
};

export default LoadMore;
