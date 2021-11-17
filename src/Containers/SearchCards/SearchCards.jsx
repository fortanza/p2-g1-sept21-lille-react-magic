import './SearchCards.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MagicCard from 'Components/MagicCard/MagicCard';
import { useParams } from 'react-router-dom';
import Spinner from 'UI/Spinner/Spinner';

const Cards = () => {
  const [magicCards, setMagicCards] = useState([]);

  const [loading, setLoading] = useState(false);
  const { needle } = useParams();

  const {
    needleName,
    needlePower,
    needleToughness,
    needleColor,
    needleRarity,
    needleSet,
    needleType,
  } = useParams();


  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.magicthegathering.io/v1/cards?&Page-Size=1&name=${needleName}&power=${needlePower}&toughness=${needleToughness}&type=${needleType}&colors=${needleColor}&rarity=${needleRarity}&set=${needleSet}`
      )
      .then(({ data }) => {
        setMagicCards(data.cards);

        setLoading();
      })
      .catch(() => {
        console.error('Plz fix your call, or set up your internet');
        setLoading();


      });
  }, []);

  return (

    <section className="container">
      <h2 className="cardsTitle">Your Cards Search</h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid">
          {magicCards.map((magic) => {
            return <MagicCard {...magic} />;
          })}
        </div>
      )}
    </section>

    <>
      {magicCards.length ? (
        <section className="container">
          <h2 className="cardsTitle">Your Cards Search</h2>
          <div className="grid">
            {magicCards.map((magic) => {
              return <MagicCard {...magic} />;
            })}
          </div>
        </section>
      ) : (
        <p className="searchError">Oups, no result for this request...</p>
      )}
    </>

  );
};

export default Cards;
