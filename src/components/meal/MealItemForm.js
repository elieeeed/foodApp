import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../ui/Input";

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValide] = useState(true);
  const amountInputRef = useRef();

  const changeAmount = (e) => {
    e.preventDefault();

    const exAmount = amountInputRef.current.value;
    const newAmount = +exAmount;
    if (newAmount < 1 || newAmount > 5) {
      setAmountIsValide(false);
      return;
    }
    
    onAddToCart(newAmount)
};

  return (
    <form className={classes.form} onSubmit={changeAmount}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
