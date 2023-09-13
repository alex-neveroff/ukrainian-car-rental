import { FaSpinner } from 'react-icons/fa';
import { Spinner } from './Loader.styled';

const Loader = () => {
  return (
    <Spinner>
      <FaSpinner className="spinner-icon" />
    </Spinner>
  );
};

export default Loader;
