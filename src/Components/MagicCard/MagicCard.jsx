import './MagicCard.css';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const MagicCard = ({ name, imageUrl, multiverseid }) => {
  const history = useHistory();
  const HandlerDiplayCardsContainer = (event) => {
    event.preventDefault();
    history.push(`/CardDescription/${multiverseid}`);
  };
  return (
    <>
      {imageUrl && (
        <figure className="card">
          <h3>{name}</h3>
          <button type="button" onClick={HandlerDiplayCardsContainer}>
            <img className="cardImg" src={imageUrl} alt={name} />
          </button>
        </figure>
      )}
    </>
  );
};

MagicCard.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  multiverseid: PropTypes.string,
};

MagicCard.defaultProps = {
  name: '',
  imageUrl: '',
  multiverseid: '',
};
export default MagicCard;
