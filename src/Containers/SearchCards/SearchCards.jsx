import './SearchCards.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MagicCard from 'Components/MagicCard/MagicCard';
import { useParams } from 'react-router-dom';

const Cards = () => {
  const [magicCards, setMagicCards] = useState([]);
  const { needleName, needlePower, needleColor, needleRarity, needleSet } =
    useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.magicthegathering.io/v1/cards?&Page-Size=1&name=${needleName}&power=${needlePower}&colors=${needleColor}&rarity=${needleRarity}&set=${needleSet}`
      )
      .then(({ data }) => {
        setMagicCards(data.cards);
      })
      .catch(() => {
        console.error('Plz fix your call, or set up your internet');
      });
  }, []);

  return (
    <section className="container">
      <h2 className="cardsTitle">Your Cards Search</h2>
      <div className="grid">
        {magicCards.map((magic) => {
          return <MagicCard {...magic} />;
        })}
      </div>
    </section>
  );
};

export default Cards;
