import './MagicCard.css';
import PropTypes from 'prop-types';

const MagicCard = ({ name, imageUrl }) => {
  return (
    <figure className="card">
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
      <button className="myButton" type="button">
        Description
      </button>
      <button className="myButton" type="button">
        Add to Deck
      </button>
    </figure>
  );
};

MagicCard.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
};

MagicCard.defaultProps = {
  name: 'Archangel Avacyn',
  imageUrl:
    'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card',
};
export default MagicCard;
