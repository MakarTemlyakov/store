import React, { useContext, useReducer } from "react";
import { CartContext } from "../../Context/cartContext";
import { addProductToCart, initState, reducer } from "../../store/store";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";

const Cart = ({ removeFromCart, addToCart, minusItem }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const totalPriceCart = state.cartItems.reduce(
    (sum, cartItem) => sum + cartItem.count * cartItem.PRICE,
    0
  );

  return (
    <section className="cart">
      <div className="container">
        {state.cartItems.length > 0 ? (
          <>
            <h2 className="title">Корзина</h2>
            <div className="cart-wrapper">
              <table className="cart-table">
                <thead>
                  <tr className="head-row">
                    <th className="head-col">Наименование</th>
                    <th className="head-col">Кол-во</th>
                    <th className="head-col">Цена/шт</th>
                    <th className="head-col" colSpan={2}>
                      Сумма
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {state.cartItems.map((cartItem, index) => (
                    <CartItem
                      key={index}
                      // addToCart={addToCart}

                      removeFromCart={removeFromCart}
                      minusItem={minusItem}
                      cartItem={cartItem}
                      onClick={dispatch(addProductToCart(cartItem))}
                    />
                  ))}
                  <tr>
                    <td colSpan={3}>Итого:</td>
                    <td colSpan={2}>${totalPriceCart.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <span className="cart-empty">Корзина пустая</span>
        )}
      </div>
    </section>
  );
};

export default Cart;
