import React, { useContext } from "react";
import styles from "./Cart.module.css";
import cartContext from "../../contexts/cart-context";
import CartWatches from "./CartWatches";

export default function Cart() {
  const { watches, totalAmount, addNewWatch, removeNewWatch } =
    useContext(cartContext);
  const totalCartCost = `$${totalAmount.toFixed(2)}`;

  function cartAddHandler(watch) {
    addNewWatch({ ...watch, quantity: 1 });
  }

  function cartRemoveHandler(id) {
    removeNewWatch(id);
  }

  const cartWatches = (
    <ul className={`${styles.cartItems}`}>
      {watches.map((watch) => (
        <CartWatches
          watch={watch}
          key={watch.id}
          onAddToCart={() => cartAddHandler(watch)}
          onRemoveWatch={() => cartRemoveHandler(watch.id)}
        />
      ))}
    </ul>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 rounded mb-1 p-2 d-flex flex-column gap-3">
          {cartWatches}
          <div className="d-flex justify-content-between align-items-center fw-bold fs-4 m-1">
            <span>Total Amount</span>
            <span>{totalCartCost}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
