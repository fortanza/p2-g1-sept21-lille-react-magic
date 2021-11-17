import { Link } from 'react-router-dom';

const Filter = () => {
  return (
    <Link to="/filter">
      <li>
        <img
          className="filter logo-header"
          src="/assets/img/filter.png"
          alt="filter"
        />
      </li>
    </Link>
  );
};

export default Filter;
