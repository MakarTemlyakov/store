import React, { useReducer, useState } from 'react';
import { productAPI } from '../api/ProductApi';
import Cart from '../Components/Cart/Cart';
import Catalog from '../Components/Catalog/Catalog';
import Header from '../Components/Header/Header';
import { ToastList } from '../Components/ToastList/ToastList';

import { CartContext } from '../Context/cartContext';
import { initState, reducer } from '../store/store';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItem] = useState([]);
  const [option, setFilterOption] = useState('all');
  const [state, dispatch] = useReducer(reducer, initState);
  const [isLoading, setIsLoading] = useState(false);
  const [toastList, setToastList] = useState([]);
  const setOption = (name) => setFilterOption(name);

  const addToCart = (product, qty = 1) => {
    const cartItem = cartItems.find((x) => x.ID === product.ID);
    if (cartItem) {
      cartItem.count++;
      setCartItem([...cartItems.map((item) => (item.ID === cartItem.id ? cartItem : item))]);
    } else {
      let productItem = { ...product, count: qty };
      setCartItem([...cartItems, productItem]);
    }
    setToastList([`Товар добавлен в корзину!`, ...toastList]);
  };

  const minusItem = (id) => {
    const cartItem = cartItems.find((x) => x.ID === id);
    if (cartItem) cartItem.count--;
    if (cartItem.count < 1) {
      cartItem.count = 1;
    }
    setCartItem([...cartItems.map((item) => (item.ID === id ? cartItem : item))]);
  };

  const removeFromCart = (productId) => setCartItem(cartItems.filter((x) => x.ID !== productId));

  React.useEffect(() => {
    productAPI.getProducts().then((data) => {
      setIsLoading(true);
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  const filtredProducts =
    option === 'all' ? products : products.filter((product) => product.TYPE === option);

  if (isLoading) return <div>Загрузка</div>;

  return (
    <CartContext.Provider value={cartItems}>
      <div className="app">
        <Header setOption={setOption} />
        <Catalog products={filtredProducts} addToCart={addToCart} />
        <Cart
          cartItems={state.cartItems}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          minusItem={minusItem}
        />
        <ToastList toastList={toastList} setToastList={setToastList} />
      </div>
    </CartContext.Provider>
  );
};

export default App;
