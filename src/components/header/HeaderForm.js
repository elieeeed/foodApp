import React, { useContext, useState } from "react";
import classes from "./Header.module.css";
import mealImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const HeaderForm = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} className={classes["img"]} />
      </div>
    </React.Fragment>
  );
};

export default HeaderForm;
