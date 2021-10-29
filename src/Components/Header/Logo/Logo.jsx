import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="nav-logo" src="img/logo2.png" alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
