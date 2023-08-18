import React from "react";
import styles from "./CartWatches.module.css";

export default function CartWatches({ watch, onAddToCart, onRemoveWatch }) {
  const { brand, price, quantity } = watch;
  const watchCost = `$${price.toFixed(2)}`;

  return (
    <li
      className={`${styles.cartItem} d-flex justify-content-between align-items-center p-1 m-1`}
    >
      <p className={`h5 text-center mb-1`}>{brand}</p>
      <div
        className={`${styles.summary} d-flex justify-content-around justify-content-sm-between align-items-center`}
      >
        <span className={`${styles.price} fw-bold`}>{watchCost}</span>
        <span className={`${styles.amount} fw-bold`}>{quantity} x</span>
      </div>
      <div className={`${styles.actions} d-flex flex-sm-row flex-column gap-1`}>
        <button onClick={onAddToCart}>+</button>
        <button onClick={onRemoveWatch}>-</button>
      </div>
    </li>
  );
}
