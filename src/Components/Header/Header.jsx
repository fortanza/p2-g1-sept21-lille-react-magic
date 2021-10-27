import './Header.css';
import Logo from './Logo/Logo';
import Nagivation from './Navigation/Navigation';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Nagivation />
    </header>
  );
};

export default Header;
