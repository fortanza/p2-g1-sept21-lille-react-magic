import { Link } from 'react-router-dom';
import './Random.css';

const Random = () => {
  return (
    <Link to="/card">
      <button type="submit">
        <li>
          <img
            className="random logo-header"
            src="/assets/img/random.png"
            alt="random"
          />
        </li>
      </button>
    </Link>
  );
};
export default Random;
