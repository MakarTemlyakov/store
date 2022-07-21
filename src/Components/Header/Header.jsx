import React, { useState } from "react";
import "./Header.css";

const filterOptions = [
  { id: 1, value: "all", name: "ALL" },
  { id: 2, value: "fence", name: "FENCE" },
  { id: 3, value: "fix", name: "FIX" },
  { id: 4, value: "post", name: "POST" },
  { id: 5, value: "rail", name: "RAIL" },
  { id: 6, value: "plug", name: "PLUG" },
];

const displayTypeOptions = [
  { id: 1, value: "block", name: "Плитка" },
  { id: 2, value: "list", name: "Список" },
  { id: 3, value: "table", name: "Таблица" },
];

const Header = ({ setOption }) => {
  const [selectedOption, setFilterOption] = useState(filterOptions[0]);
  const [selectedDisplayType, setSelectDisplayType] = useState(
    displayTypeOptions[0]
  );
  const [isOpen, setOpenMenu] = useState(false);
  const [isEditDisplayType, setIsEditDisplayType] = useState(false);

  const setOptionFilter = (option) => {
    setFilterOption(option);
    setOption(option.value);
  };

  const setDisplayType = (type) => {
    setSelectDisplayType(type);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <h2 className="title">Каталог</h2>
          <div className="filter__wrapper">
            <label htmlFor="filter_menu" className="type">
              Товары по TYPE:
            </label>
            <div
              className="filter"
              id="filter_menu"
              onClick={() => setOpenMenu(!isOpen)}
            >
              <span>{selectedOption.name}</span>
              <ul className={isOpen ? "option-list active" : "option-list"}>
                {filterOptions.map((option) => (
                  <li key={option.id} onClick={(e) => setOptionFilter(option)}>
                    {option.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="display-type">
            <label htmlFor="display">Вид:</label>
            <div
              className="display_menu"
              id="display"
              onClick={() => setIsEditDisplayType(!isEditDisplayType)}
            >
              <span>{selectedDisplayType.name}</span>
              <ul
                className={
                  isEditDisplayType ? "display-list active" : "display-list"
                }
              >
                {displayTypeOptions.map(
                  (displayType) =>
                    displayType.id !== selectedDisplayType.id && (
                      <li
                        key={displayType.id}
                        onClick={() => setSelectDisplayType(displayType)}
                      >
                        {displayType.name}
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
