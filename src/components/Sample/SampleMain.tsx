import { Link } from 'react-router-dom';
import { SAMPLE_ROUTES } from '~/constants/path';

const SampleMain = () => (
  <>
    <h1>안녕 👋</h1>
    <Link to={SAMPLE_ROUTES.TODO_LIST}>✏ TODO LIST</Link>
  </>
);

export default SampleMain;
