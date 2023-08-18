import React from "react";

const cartContext = React.createContext({
  watches: [],
  totalAmount: 0,
  addNewWatch: (watch) => {},
  removeNewWatch: (id) => {},
});

export default cartContext;
