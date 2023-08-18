import React, { useContext } from "react";
import styles from "./WatchItems.module.css";
import WatchItemForm from "./WatchItemForm";
import cartContext from "../../contexts/cart-context";

export default function WatchItems({ watch }) {
  const { id, model, brand, price, description, imageUrl } = watch;
  const cartCTX = useContext(cartContext);

  function handleAddNewWatch(amount) {
    cartCTX.addNewWatch({
      id,
      model,
      brand,
      price,
      quantity: amount,
    });
  }

  return (
    <li
      style={{ listStyle: "none", width: "18rem" }}
      className={`${styles.watchList} card col-10 col-sm-3 mx-auto`}
    >
      <div style={{ height: "200px" }}>
        <img
          src={imageUrl}
          className="card-img-top img-thumbnail h-75"
          alt="..."
        />
      </div>

      <div className="card-body d-flex flex-column align-items-start">
        <h5 className="card-title">
          {brand} <span className="fw-bold">{model}</span>
        </h5>
        <h6>Rs {price}</h6>
        <p className="card-text">{description}</p>
      </div>

      <div className="">
        <WatchItemForm watchId={id} onAddtoCart={handleAddNewWatch} />
      </div>
    </li>
  );
}
