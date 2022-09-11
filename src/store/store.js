const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

export const initState = {
  cartItems: [],
};

export const reducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      console.log(action.payload);

      console.log({ newState: newState.newState });
      console.log({ isArray: Array.isArray(newState.cartItems) });
      const cartItem = newState.cartItems.find((x) => x.ID === action.payload.ID);
      if (cartItem) {
        cartItem.count++;
        return {
          ...newState.cartItems.map((item) => (item.ID === cartItem.ID ? cartItem : item)),
        };
      } else {
        let productItem = { ...action.payload, count: 1 };
        return { newState, cartItems: [...newState.cartItems, productItem] };
      }
    }
    default:
      return state;
  }
};

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});
