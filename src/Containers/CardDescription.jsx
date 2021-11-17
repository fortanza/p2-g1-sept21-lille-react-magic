import { useState, useEffect } from 'react';
import './CardDescription.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const sampleCard = {
  object: 'card',
  id: '4f5ed974-396a-4b93-8e15-90e180efd17e',
  oracle_id: '4e4e96aa-2f05-4f1d-96f8-6c42cd3be589',
  multiverse_ids: [21054],
  tcgplayer_id: 349,
  cardmarket_id: 14571,
  name: 'Name',
  released_at: '1999-07-01',
  scryfall_uri:
    'https://scryfall.com/card/s99/137/norwood-archers?utm_source=api',

  image_uris: {
    png: 'https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg',
  },
  mana_cost: '',
  cmc: 4,
  type_line: 'Type :',
  oracle_text: 'Reach (This creature can block creatures with flying.)',
  power: 'Power',
  toughness: 'Toughness',
  colors: ['G'],
  color_identity: ['G'],
  keywords: ['Reach'],
};

export default function CardDescription() {
  const [cards, setCards] = useState(sampleCard);

  const { multiverseid } = useParams();
  const GetRandomCards = () => {
    setCards({});
    axios.get(`https://api.scryfall.com/cards/random`).then(({ data }) => {
      setCards({ ...data });
    });
  };
  useEffect(() => {
    axios
      .get(`https://api.scryfall.com/cards/multiverse/${multiverseid}`)
      .then(({ data }) => {
        setCards({ ...data });
      });
  }, []);

  return (
    <div className="cardDescription">
      <img
        className="cardImage"
        src={
          cards?.image_uris?.png
            ? cards?.image_uris?.png
            : 'https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg'
        }
        alt="A magic card"
      />
      <div className="cardAttribute">
        <div className="textContainer">
          <p className="cardName">{`${cards.name}  ${cards.mana_cost}`}</p>
          <p className="cardType">{cards.type_line}</p>
          <p className="cardOracle">{cards.oracle_text}</p>
          <p className="cardType">Set : {cards.set_name}</p>
          <p className="cardType">Rarity : {cards.rarity}</p>
          {cards.flavor_text && (
            <p className="cardFlavour">{cards.flavor_text}</p>
          )}
          {cards.power && (
            <p className="cardPower">
              {cards.power}/{cards.toughness}
            </p>
          )}
          <p className="cardArtist">🎨{`${cards.artist} - ${cards.frame}`}</p>
          <button type="submit" onClick={GetRandomCards}>
            <img
              className="logoReload"
              src="/assets/img/reload.png"
              alt="reload"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
