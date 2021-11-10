import './Header.css';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <header className={['header', 'headerContainer'].join(' ')}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
