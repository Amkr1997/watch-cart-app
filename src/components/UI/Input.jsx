import React from "react";
import styles from "../UI/Input.module.css";

export default React.forwardRef(function Input({ input, label }, ref) {
  return (
    <div className="d-flex align-items-center justify-content-around mb-1">
      <label className="fw-bold text-uppercase fs-5">{label} :</label>
      <input className={`${styles.inputElem}`} ref={ref} {...input} />
    </div>
  );
});
