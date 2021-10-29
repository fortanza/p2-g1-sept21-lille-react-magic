import './SearchBar.css';

export default function SearchBar() {
  return (
    <>
      <h1>Planeswalker</h1> <br />
      <h2>Magic: The Gathering Database</h2>
      <div className="wrap">
        <input type="search" className="searchTerm" placeholder="Search..." />
        <img
          className="input-logo"
          alt="loupe"
          src="https://img.icons8.com/ios-glyphs/60/000000/search--v1.png"
        />
      </div>
    </>
  );
}
