import { Carousel } from '3d-react-carousal';

const SlidesCaroussel = () => {
  const slides = [
    <img
      src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card"
      alt="1"
    />,
    <img
      src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409742&type=card"
      alt="2"
    />,
    <img
      src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409743&type=card"
      alt="3"
    />,
    <img
      src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409744&type=card"
      alt="4"
    />,
    <img
      src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409745&type=card"
      alt="5"
    />,
    <img
      src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409746&type=card"
      alt="6"
    />,
    <img
      src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409747&type=card"
      alt="7"
    />,
    <img
      src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409748&type=card"
      alt="8"
    />,
    <img
      src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409749&type=card"
      alt="9"
    />,
    <img
      src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409750&type=card"
      alt="10"
    />,
  ];
  return (
    <div className="section_caroussel">
      <Carousel slides={slides} />
    </div>
  );
};
export default SlidesCaroussel;
