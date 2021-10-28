import Deck from './Deck/Deck';
import Filter from './Filter/Filter';
import Random from './Random/Random';

const Navigation = () => {
  return (
    <ul className="navigationList">
      <Filter />
      <Random />
      <Deck />
    </ul>
  );
};

export default Navigation;
