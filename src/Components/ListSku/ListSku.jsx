import React, { useRef, useState } from "react";
import "./ListSku.css";

const getDefaultSkuProduct = (skuProduct) => {
  return Object.values(skuProduct)[0];
};

const ListSku = ({ listSku, setSelectedProduct, selectedProduct }) => {
  const [isOpen, setDropDownMenu] = useState(false);
  const [selectedOption, setSelectOption] = useState("Выберите опцию");

  const showDropDown = () => {
    setDropDownMenu(!isOpen);
  };

  const selectOption = (id, name) => {
    setSelectOption(name);
    setSelectedProduct(id);
  };

  return (
    <>
      <div className="wrapper-dropdown" onClick={() => showDropDown()}>
        <span>{selectedOption}</span>
        <ul className={isOpen ? "option__menu active" : "option__menu"}>
          {listSku.map((skuItem) => (
            <li
              onClick={(e) => selectOption(skuItem.ID, e.target.innerHTML)}
              key={skuItem.ID}
            >
              Ширина: {skuItem.WEIGHT} Длина: {skuItem.LENGTH}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListSku;
