import React, { useContext } from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import styles from "./HeaderCartBtn.module.css";
import cartContext from "../../contexts/cart-context";
import { NavLink } from "react-router-dom";

export default function HeaderCartBtn() {
  const { watches } = useContext(cartContext);

  const numOfWatches = watches.reduce((curWatch, watch) => {
    return curWatch + watch.quantity;
  }, 0);

  return (
    <>
      <NavLink className={styles.cartBtnLink} to={"/cart"}>
        <button
          type="button"
          className={`${styles.cartBtn} btn btn-secondary position-relative d-flex align-items-center gap-2 px-5 fs-4 text-capitalize fw-medium rounded border-1`}
        >
          <PiShoppingCartSimpleFill />
          <span>cart</span>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {numOfWatches}
          </span>
        </button>
      </NavLink>
    </>
  );
}
