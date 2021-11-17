import { Link } from 'react-router-dom';

const Filter = () => {
  return (
    <Link to="/filter">
      <button type="submit">
        <li>
          <img
            className="filter logo-header"
            src="/assets/img/filter.png"
            alt="filter"
          />
        </li>
      </button>
    </Link>
  );
};

export default Filter;
