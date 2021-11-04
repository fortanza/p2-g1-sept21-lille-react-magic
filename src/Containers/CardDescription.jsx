import React, { useState } from 'react';
import './CardDescription.css';
import axios from 'axios';
// import Random from 'Components/Header/Navigation/Random/Random';
const sampleCard = {
  object: 'card',
  id: '4f5ed974-396a-4b93-8e15-90e180efd17e',
  oracle_id: '4e4e96aa-2f05-4f1d-96f8-6c42cd3be589',
  multiverse_ids: [21054],
  tcgplayer_id: 349,
  cardmarket_id: 14571,
  name: 'Norwood Archers',
  lang: 'en',
  released_at: '1999-07-01',
  uri: 'https://api.scryfall.com/cards/4f5ed974-396a-4b93-8e15-90e180efd17e',
  scryfall_uri:
    'https://scryfall.com/card/s99/137/norwood-archers?utm_source=api',
  layout: 'normal',
  highres_image: true,
  image_status: 'highres_scan',
  image_uris: {
    small:
      'https://c1.scryfall.com/file/scryfall-cards/small/front/4/f/4f5ed974-396a-4b93-8e15-90e180efd17e.jpg?1562874074',
    normal:
      'https://c1.scryfall.com/file/scryfall-cards/normal/front/4/f/4f5ed974-396a-4b93-8e15-90e180efd17e.jpg?1562874074',
    large:
      'https://c1.scryfall.com/file/scryfall-cards/large/front/4/f/4f5ed974-396a-4b93-8e15-90e180efd17e.jpg?1562874074',
    png: 'https://c1.scryfall.com/file/scryfall-cards/png/front/4/f/4f5ed974-396a-4b93-8e15-90e180efd17e.png?1562874074',
    art_crop:
      'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/f/4f5ed974-396a-4b93-8e15-90e180efd17e.jpg?1562874074',
    border_crop:
      'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/f/4f5ed974-396a-4b93-8e15-90e180efd17e.jpg?1562874074',
  },
  mana_cost: '{3}{G}',
  cmc: 4,
  type_line: 'Creature — Elf Archer',
  oracle_text: 'Reach (This creature can block creatures with flying.)',
  power: '3',
  toughness: '3',
  colors: ['G'],
  color_identity: ['G'],
  keywords: ['Reach'],
  legalities: {
    standard: 'not_legal',
    future: 'not_legal',
    historic: 'not_legal',
    gladiator: 'not_legal',
    pioneer: 'not_legal',
    modern: 'not_legal',
    legacy: 'legal',
    pauper: 'legal',
    vintage: 'legal',
    penny: 'not_legal',
    commander: 'legal',
    brawl: 'not_legal',
    historicbrawl: 'not_legal',
    paupercommander: 'legal',
    duel: 'legal',
    oldschool: 'not_legal',
    premodern: 'not_legal',
  },
  games: ['paper'],
  reserved: false,
  foil: false,
  nonfoil: true,
  finishes: ['nonfoil'],
  oversized: false,
  promo: false,
  reprint: true,
  variation: false,
  set_id: '7e345c51-7a88-4c7a-8184-4e1ba493b40d',
  set: 's99',
  set_name: 'Starter 1999',
  set_type: 'starter',
  set_uri: 'https://api.scryfall.com/sets/7e345c51-7a88-4c7a-8184-4e1ba493b40d',
  set_search_uri:
    'https://api.scryfall.com/cards/search?order=set&q=e%3As99&unique=prints',
  scryfall_set_uri: 'https://scryfall.com/sets/s99?utm_source=api',
  rulings_uri:
    'https://api.scryfall.com/cards/4f5ed974-396a-4b93-8e15-90e180efd17e/rulings',
  prints_search_uri:
    'https://api.scryfall.com/cards/search?order=released&q=oracleid%3A4e4e96aa-2f05-4f1d-96f8-6c42cd3be589&unique=prints',
  collector_number: '137',
  digital: false,
  rarity: 'common',
  card_back_id: '0aeebaf5-8c7d-4636-9e82-8c27447861f7',
  artist: 'Rebecca Guay',
  artist_ids: ['f8f662fa-d597-46a3-afb2-91d6e13243e2'],
  illustration_id: 'ce09c673-e792-4ac6-a469-c10f2ee1c1a7',
  border_color: 'white',
  frame: '1997',
  full_art: false,
  textless: false,
  booster: true,
  story_spotlight: false,
  edhrec_rank: 19872,
  prices: {
    usd: '0.24',
    usd_foil: null,
    usd_etched: null,
    eur: '0.39',
    eur_foil: null,
    tix: null,
  },
  related_uris: {
    gatherer:
      'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=21054',
    tcgplayer_infinite_articles:
      'https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Norwood+Archers&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
    tcgplayer_infinite_decks:
      'https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Norwood+Archers&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
    edhrec: 'https://edhrec.com/route/?cc=Norwood+Archers',
    mtgtop8:
      'https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Norwood+Archers',
  },
  purchase_uris: {
    tcgplayer:
      'https://shop.tcgplayer.com/product/productsearch?id=349&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
    cardmarket:
      'https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Norwood+Archers&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall',
    cardhoarder:
      'https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Norwood+Archers&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall',
  },
};

export default function CardDescription() {
  const [card, setCard] = useState(sampleCard);

  const GetRandomCards = () => {
    axios.get(`https://api.scryfall.com/cards/random`).then(({ data }) => {
      setCard({ ...data });
    });
  };

  return (
    <div className="Container">
      <div className="CardDescription">
        <img
          className="CardImage"
          src={card?.image_uris?.png}
          alt="A magic card"
        />
        <div className="CardAttribute">
          <p className="CardName">{card.name}</p>
          <p className="CardType">{card.type_line}</p>
          <p className="CardOracle">{card.oracle_text}</p>
          {card.flavor_text ? (
            <p className="CardFlavour"> {card.flavor_text}</p>
          ) : (
            ''
          )}
          <button className="reload" type="submit" onClick={GetRandomCards}>
            Random Card
          </button>
        </div>
      </div>
    </div>
  );
}
