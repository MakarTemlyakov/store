import React, { useState } from "react";
import { getMinPrice } from "../../utils/getMinPrice";
import { getSkuItems } from "../../utils/getSkuItems";
import ListSku from "../ListSku/ListSku";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(-1);

  const isDisabled = product.SKU != undefined && selectedProduct === -1;

  const addProductToCart = () => {
    const productItem = skuProduct !== undefined ? skuProduct : product;
    addToCart(productItem);
  };

  const minPrice = product.SKU && getMinPrice(product.SKU);
  const skuItems = product.SKU && getSkuItems(product.SKU);
  const skuProduct =
    product.SKU &&
    getSkuItems(product.SKU).find((item) => item.ID === selectedProduct);
  const skuPrice = selectedProduct !== -1 && skuProduct.PRICE;
  const price =
    minPrice && selectedProduct == -1
      ? `Цена от $${minPrice}`
      : `Цена $${skuPrice ? skuPrice : product.PRICE}`;

  return (
    <div className="product">
      <div className="product__descr">
        <h3 className="product__name">{product.NAME}</h3>
        <div className="product__img">{product.PICTURE}</div>
      </div>
      {product.SKU && (
        <>
          <h4 className="product-sku__subTitle">Характеристики:</h4>
          <div className="product-sku__wrapper">
            <ListSku
              listSku={skuItems}
              setSelectedProduct={setSelectedProduct}
              selectedProduct={selectedProduct}
            />
          </div>
        </>
      )}
      <span className="product__price">{price}</span>
      <button
        className={"btn"}
        type="button"
        disabled={isDisabled}
        onClick={() => addProductToCart()}
      >
        Купить
      </button>
    </div>
  );
};

export default Product;
