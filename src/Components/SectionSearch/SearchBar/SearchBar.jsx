import './SearchBar.css';

export default function SearchBar() {
  return (
    <>
      <h1>Planeswalker-database</h1>
      <div className="wrap">
        <input type="search" className="searchTerm" placeholder="Search.." />
        <button type="submit" className="searchButton">
          <img
            src="https://img.icons8.com/carbon-copy/50/000000/google-web-search.png"
            alt="loupe"
          />
        </button>
      </div>
    </>
  );
}
