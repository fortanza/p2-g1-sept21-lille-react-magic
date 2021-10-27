import Deck from './Deck/Deck';
import Filter from './Filter/Filter';
import Random from './Random/Random';

const Nagivation = () => {
  return (
    <ul>
      <Filter />
      <Random />
      <Deck />
    </ul>
  );
};

export default Nagivation;
