import { Carousel } from '3d-react-carousal';
import './SectionCaroussel.css';

const cards = [409741, 409742, 409743, 409744, 409745];
const SlidesCaroussel = () => {
  return (
    <section className="sectionCaroussel">
      <div>
        <Carousel
          slides={cards.map((card) => {
            return (
              <img
                src={`http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${card}&type=card`}
                alt="a card slide"
              />
            );
          })}
        />
      </div>
    </section>
  );
};
export default SlidesCaroussel;
