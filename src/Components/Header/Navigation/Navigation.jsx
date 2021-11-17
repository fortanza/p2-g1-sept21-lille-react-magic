import Filter from './Filter/Filter';
import Random from './Random/Random';

const Navigation = () => {
  return (
    <ul className="navigationList">
      <Filter />
      <Random />
    </ul>
  );
};

export default Navigation;
