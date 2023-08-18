import React from "react";
import styles from "../header/Nav.module.css";
import HeaderCartBtn from "./HeaderCartBtn";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={`${styles.nav} container-fluid py-3`}>
      <div className="row">
        <div className=" col-3 col-sm-4">
          <NavLink className={styles.logoLink} to="/">
            <h1 className="text-center text-uppercase">Watches</h1>
          </NavLink>
        </div>

        <div className="col-3 col-sm-4"></div>

        <div className="col-6 col-sm-4 d-flex justify-content-center">
          <HeaderCartBtn />
        </div>
      </div>
    </nav>
  );
}
