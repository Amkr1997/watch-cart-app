import React, { useRef } from "react";
import Input from "../UI/Input";

export default function WatchItemForm({ watchId, onAddtoCart }) {
  const inpAmountRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredAmount = inpAmountRef.current.value;
    const enteredAmountNumb = +enteredAmount;

    if (
      enteredAmountNumb > 5 ||
      enteredAmountNumb < 1 ||
      enteredAmount.trim().length === 0
    ) {
      return;
    }

    onAddtoCart(enteredAmountNumb);
  }

  return (
    <form className="d-flex flex-column gap-2 mb-2" onSubmit={submitHandler}>
      <Input
        ref={inpAmountRef}
        label={"Amount"}
        input={{
          id: `watchId_${watchId}`,
          type: "text",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="btn btn-danger px-4 fw-semibold text-uppercase">
        add to cart
      </button>
    </form>
  );
}
