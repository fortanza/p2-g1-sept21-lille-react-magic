import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './FilterOption.css';

const FilterOption = () => {
  const history = useHistory();
  const [listSets, setlistSets] = useState([]);
  const [listTypes, setlistTypes] = useState([]);
  const [needleName, setNeedleName] = useState(' ');
  const [needlePower, setNeedlePower] = useState(' ');
  const [needleToughness, setNeedleToughness] = useState(' ');
  const [needleColor, setNeedleColor] = useState(' ');
  const [needleRarity, setNeedleRarity] = useState(' ');
  const [needleSet, setNeedleSet] = useState(' ');
  const [needleTypes, setNeedleTypes] = useState(' ');

  const HandlerDiplayCardsContainer = (event) => {
    event.preventDefault();
    history.push(
      `/SearchCards/${needleName}/${needleTypes}/${needlePower}/${needleToughness}/${needleColor}/${needleRarity}/${needleSet}`
    );
  };

  const HandlerChangeNameValue = (e) => {
    setNeedleName(e.target.value);
  };
  const HandlerChangePowerValue = (e) => {
    setNeedlePower(e.target.value);
  };
  const HandlerChangeToughnessValue = (e) => {
    setNeedleToughness(e.target.value);
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
  const HandlerChangeTypeValue = (e) => {
    setNeedleTypes(e.target.value);
  };

  useEffect(() => {
    axios.get(`https://api.magicthegathering.io/v1/sets`).then(({ data }) => {
      setlistSets(
        data.sets.sort((set1, set2) => {
          if (set1.name < set2.name) return -1;
          return 1;
        })
      );
    });
  }, []);
  useEffect(() => {
    axios.get(`https://api.magicthegathering.io/v1/types`).then(({ data }) => {
      setlistTypes(data.types);
    });
  }, []);

  return (
    <div className="filterContainer">
      <h1 className="filterTitle">Filter Options</h1>
      <div className="nameSection">
        <p className="pTitle">Card Name :</p>
        <input
          type="search"
          className="searchName"
          placeholder="Name..."
          onChange={HandlerChangeNameValue}
        />
      </div>
      <div className="statsTypeSection">
        <div className="subSection">
          <p className="pTitle"> Type : </p>
          <select
            name="types"
            className="typeSelect"
            onChange={HandlerChangeTypeValue}
          >
            <option value="">Select a Type</option>
            {listTypes.map((type) => {
              return (
                <>
                  <option value={type}>{type}</option>
                </>
              );
            })}
          </select>
        </div>
        <div>
          <div className="statsSection">
            <p className="pTitle">Stats :</p>
            <input
              type="search"
              placeholder="0"
              className="searchStats"
              onChange={HandlerChangePowerValue}
            />
            /
            <input
              type="search"
              placeholder="0"
              className="searchStats "
              onChange={HandlerChangeToughnessValue}
            />
          </div>
        </div>
      </div>
      <div className="colorSection">
        <p className="pTitle">Color :</p>
        <select
          name="colors"
          className="colorSelect"
          onChange={HandlerChangeColorValue}
        >
          <option value="">Select a Color</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="White">White</option>
          <option value="Green">Green</option>
        </select>
      </div>
      <div className="setsRaritySection">
        <div className="setsSection">
          <p className="pTitle">Sets : </p>
          <select
            name="sets"
            className="setsSelect"
            onChange={HandlerChangeSetValue}
          >
            <option value="">Select a Set</option>
            {listSets
              .filter((e) => {
                return (
                  e.onlineOnly === !true &&
                  e.type !== 'promo' &&
                  e.type !== 'memorabilia' &&
                  e.type !== 'token' &&
                  e.type !== 'funny' &&
                  e.type !== 'box'
                );
              })
              .map((set) => {
                return (
                  <>
                    <option value={set.code}>{set.name}</option>
                  </>
                );
              })}
          </select>
        </div>
        <div>
          <p className="pTitle">Rarity :</p>
          <select
            name="rarity"
            className="raritySelect"
            onChange={HandlerChangeRarityValue}
          >
            <option value="">Select a Rarity</option>
            <option value="Common">Common</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Rare">Rare</option>
            <option value="Mythic">Mythic</option>
          </select>
        </div>
      </div>
      <div className="buttonSection">
        <button
          className="submitBtn"
          type="submit"
          onClick={HandlerDiplayCardsContainer}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FilterOption;
