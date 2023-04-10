import React, { useCallback, useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../ui/Card";

function MealsList() {
  const [itemList, setItemList] = useState([]);

  const fetchMealList = useCallback(async () => {
    const response = await fetch(
      "https://food-app-eli-api-default-rtdb.firebaseio.com/food.json"
    );
    const data = await response.json();
    const foodList = [];
    for (const key in data) {
      foodList.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }
    setItemList(foodList)
  }, []);

  useEffect(() => {
    fetchMealList();
  }, [fetchMealList]);

  

  const mealList = itemList.map((item) => (
    <MealItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul className={classes.ul}>{mealList}</ul>
      </Card>
    </section>
  );
}

export default MealsList;
