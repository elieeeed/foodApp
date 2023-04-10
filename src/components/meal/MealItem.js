import React, { useContext } from "react";
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import cartContext from '../../store/CartContext'

const MealItem = (props) => {

  const context = useContext(cartContext);

  const addToCartHandler = (newAmount) => {
    context.addItem({
      id : props.id,
      name : props.name,
      amount : newAmount,
      price : props.price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
