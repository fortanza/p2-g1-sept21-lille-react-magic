import { Carousel } from '3d-react-carousal';
import './SectionCaroussel.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SlidesCaroussel = () => {
  const [cardLists, setCardLists] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.magicthegathering.io/v1/cards?random=true&set=MID&page=1&pageSize=10`
      )
      .then(({ data }) => {
        setCardLists(data.cards);
      });
  }, []);

  return (
    <section className="sectionCaroussel">
      <div>
        <Carousel
          slides={cardLists
            .filter((e) => {
              return e.imageUrl != null;
            })
            .map((card) => {
              return (
                <>
                  <img src={card.imageUrl} alt="a card slide" />
                </>
              );
            })}
        />
      </div>
    </section>
  );
};
export default SlidesCaroussel;
