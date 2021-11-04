import './SearchCards.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MagicCard from 'Components/MagicCard/MagicCard';
import { useParams } from 'react-router-dom';

const Cards = () => {
  const [magicCards, setMagicCards] = useState([]);
  const { needle } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.magicthegathering.io/v1/cards?name=${needle}`)
      .then(({ data }) => {
        setMagicCards(data.cards);
      })
      .catch(() => {
        console.error('Plz fix your call, or set up your internet');
      });
  }, []);

  return (
    <section>
      <h2>Cards:{needle}</h2>
      <div className="grid">
        {magicCards.map((magic) => {
          return <MagicCard {...magic} />;
        })}
      </div>
    </section>
  );
};

export default Cards;
