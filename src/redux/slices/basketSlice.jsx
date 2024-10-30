import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  } else {
    return [];
  }
};

const initialState = {
  products: getBasketFromStorage(),
  drawer: false,
  total: 0,
};

const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id === action.payload.id);

      if (findProduct) {
        //daha önceden eklenmiştir
        const extractedProducts = state.products.filter(
          (product) => product.id != action.payload.id
        );
        findProduct.count += action.payload.count;
        state.products = [...extractedProducts, findProduct];
        writeFromBasketToStorage(state.products);
      } else {
        //daha önceden eklenmemiştir
        state.products = [...state.products, action.payload];
        writeFromBasketToStorage(state.products);
      }
    },
    changeDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    findTotal: (state) => {
      state.total = 0;
      state.products &&
        state.products.forEach((product) => {
          state.total += product.price * product.count;
        });
    },
  },
  removeFromBasket: (state, action) => {
    state.products = state.products.filter(
      (product) => product.id != action.payload.id
    );
  },
});

export const { addToBasket, changeDrawer, findTotal, removeFromBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
