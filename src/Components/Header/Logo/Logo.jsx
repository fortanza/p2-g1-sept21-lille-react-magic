import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="logo" src="assets/logo.png" alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
