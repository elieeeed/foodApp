import React, { useContext, useEffect } from "react";
import cartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../ui/Modal";

const Cart = (props) => {
  const context = useContext(cartContext);

  const addItem = (item) => {
    context.addItem(item);
  };

  const removeItem = (id) => {
    context.removeItem(id);
  };
  const itemList = (
    <ul>
      {context.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          amount={item.amount}
          price={item.price}
          onAdd={addItem.bind(null, item)}
          onRemove={removeItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  function orderItems() {
    context.items.map(async (item) => {
      const response = await fetch(
        "https://food-app-eli-api-default-rtdb.firebaseio.com/cart.json",
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-type": "application/json",
          },
        }
      ).then((response) => {
        props.onClose();
        if (response.ok) {
          context.items.map((item) => context.removeItem(item.id));
        }
      });
    });
  }

  return (
    <Modal onClose={props.onClose}>
      {itemList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{context.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button} onClick={orderItems}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
