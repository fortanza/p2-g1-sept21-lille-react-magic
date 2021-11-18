import './SearchBar.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function SearchBar() {
  const history = useHistory();

  const [needleName, setNeedleName] = useState('');
  const [needlePower] = useState(' ');
  const [needleColor] = useState(' ');
  const [needleRarity] = useState(' ');
  const [needleSet] = useState(' ');
  const [needleType] = useState(' ');
  const [needleToughness] = useState(' ');

  const HandlerDiplayCardsContainer = (event) => {
    event.preventDefault();
    history.push(
      `/SearchCards/${needleName}/${needleType}/${needlePower}/${needleToughness}/${needleColor}/${needleRarity}/${needleSet}`
    );
  };

  const HandlerChangeValue = (e) => {
    setNeedleName(e.target.value);
  };

  return (
    <>
      <h1 className="siteTitle">Planeswalker</h1> <br />
      <h2 className="siteSubtitle">Magic: The Gathering Database</h2>
      <div className="wrap">
        <form onSubmit={HandlerDiplayCardsContainer}>
          <input
            type="search"
            className="searchTerm"
            placeholder="Search..."
            onChange={HandlerChangeValue}
          />
          <img
            className="InputLogo"
            alt="Magnifying glass icon"
            src="https://img.icons8.com/ios-glyphs/60/ffffff/search--v1.png"
          />
        </form>
      </div>
    </>
  );
}
