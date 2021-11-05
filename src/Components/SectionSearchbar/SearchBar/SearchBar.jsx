import './SearchBar.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function SearchBar() {
  const history = useHistory();

  const [needle, setNeedle] = useState('');

  const HandlerDiplayCardsContainer = (event) => {
    event.preventDefault();
    history.push(`/SearchCards/${needle}`);
  };

  const HandlerChangeValue = (e) => {
    setNeedle(e.target.value);
  };

  return (
    <>
      <h1>Planeswalker</h1> <br />
      <h2>Magic: The Gathering Database</h2>
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
            src="https://img.icons8.com/ios-glyphs/60/000000/search--v1.png"
          />
        </form>
      </div>
    </>
  );
}
