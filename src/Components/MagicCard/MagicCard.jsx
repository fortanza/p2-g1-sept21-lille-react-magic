import './MagicCard.css';
import PropTypes from 'prop-types';

const MagicCard = ({ name, imageUrl }) => {
  return (
    <>
      {imageUrl && (
        <figure className="card">
          <h3>{name}</h3>
          <img src={imageUrl} alt={name} />
        </figure>
      )}
    </>
  );
};

MagicCard.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
};

MagicCard.defaultProps = {
  name: '',
  imageUrl: '',
};
export default MagicCard;
