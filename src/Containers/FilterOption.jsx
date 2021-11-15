import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './FilterOption.css';

const FilterOption = () => {
  const history = useHistory();
  const [listSets, setlistSets] = useState([]);
  const [needleName, setNeedleName] = useState(' ');
  const [needlePower, setNeedlePower] = useState(' ');
  const [needleColor, setNeedleColor] = useState(' ');
  const [needleRarity, setNeedleRarity] = useState(' ');
  const [needleSet, setNeedleSet] = useState(' ');

  const HandlerDiplayCardsContainer = (event) => {
    event.preventDefault();
    history.push(
      `/SearchCardsAdvanced/${needleName}/${needlePower}/${needleColor}/${needleRarity}/${needleSet}`
    );
  };

  const HandlerChangeNameValue = (e) => {
    setNeedleName(e.target.value);
  };
  const HandlerChangePowerValue = (e) => {
    setNeedlePower(e.target.value);
  };

  const HandlerChangeColorValue = (e) => {
    setNeedleColor(e.target.value);
  };
  const HandlerChangeRarityValue = (e) => {
    setNeedleRarity(e.target.value);
  };
  const HandlerChangeSetValue = (e) => {
    setNeedleSet(e.target.value);
  };

  useEffect(() => {
    axios.get(`https://api.magicthegathering.io/v1/sets`).then(({ data }) => {
      setlistSets(data.sets);
    });
  }, []);
  return (
    <>
      <div className="filterWrap">
        <input
          type="search"
          className="searchName filterInput"
          placeholder="Name..."
          onChange={HandlerChangeNameValue}
        />
        {needleName} {needlePower} {needleColor}
        <input
          type="search"
          className="searchPower filterInput"
          placeholder="Power..."
          onChange={HandlerChangePowerValue}
        />
        <select name="colors" id="colors" onChange={HandlerChangeColorValue}>
          <option value="">Select a Color</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="White">White</option>
          <option value="Green">Green</option>
        </select>
        <select name="rarity" id="rarity" onChange={HandlerChangeRarityValue}>
          <option value="">Select a Rarity</option>
          <option value="Common">Common</option>
          <option value="Uncommon">Uncommon</option>
          <option value="Rare">Rare</option>
          <option value="Mythic">Mythic</option>
        </select>
        <select name="sets" id="sets" onChange={HandlerChangeSetValue}>
          <option value="">Select a Set</option>
          {listSets.map((set) => {
            return (
              <>
                <option value={set.code}>{set.name}</option>
              </>
            );
          })}
        </select>
        <button
          className="filterSubmit"
          type="submit"
          onClick={HandlerDiplayCardsContainer}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default FilterOption;
