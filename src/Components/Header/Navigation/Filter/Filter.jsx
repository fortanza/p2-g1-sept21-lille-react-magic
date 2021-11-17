import { Link } from 'react-router-dom';

const Filter = () => {
  return (

    <button type="submit">
    <Link to="/filter">
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
