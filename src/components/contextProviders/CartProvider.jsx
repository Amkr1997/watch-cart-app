import React, { useReducer } from "react";
import CartContext from "../../contexts/cart-context";

const initialState = {
  watches: [],
  totalAmount: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.quantity;

      const existingWatchIndex = state.watches.findIndex(
        (watch) => watch.id === action.payload.id
      );

      const existingWatch = state.watches[existingWatchIndex];

      let updatedWatches;

      if (existingWatch) {
        const updatedWatch = {
          ...existingWatch,
          quantity: existingWatch.quantity + action.payload.quantity,
        };

        updatedWatches = [...state.watches];
        updatedWatches[existingWatchIndex] = updatedWatch;
      } else {
        updatedWatches = [...state.watches, action.payload];
      }

      return {
        watches: updatedWatches,
        totalAmount: updatedTotalAmount,
      };

    case "REMOVE":
      const existingRemoveWatchIndex = state.watches.findIndex(
        (watch) => watch.id === action.payload
      );

      const existingRemoveWatch = state.watches[existingRemoveWatchIndex];

      const updatedTotalRemoveAmount =
        state.totalAmount - existingRemoveWatch.price;

      let updatedRemoveWatches;

      if (existingRemoveWatch.quantity === 1) {
        updatedRemoveWatches = state.watches.filter(
          (watch) => watch.id !== action.payload
        );
      } else {
        const updatedRemoveWatch = {
          ...existingRemoveWatch,
          quantity: existingRemoveWatch.quantity - 1,
        };

        updatedRemoveWatches = [...state.watches];
        updatedRemoveWatches[existingRemoveWatchIndex] = updatedRemoveWatch;
      }

      return {
        watches: updatedRemoveWatches,
        totalAmount: updatedTotalRemoveAmount,
      };

    default:
      return initialState;
  }
}

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleAddWatch(watch) {
    dispatch({ type: "ADD", payload: watch });
  }

  function handleRemoveWatch(id) {
    dispatch({ type: "REMOVE", payload: id });
  }

  const cartContext = {
    watches: state.watches,
    totalAmount: state.totalAmount,
    addNewWatch: handleAddWatch,
    removeNewWatch: handleRemoveWatch,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
