import { useReducer } from "react";
import CartContext from "./CartContext";

const initState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      const updateTotalAmount =
        state.totalAmount + action.item.amount * action.item.price;

      const itemExistIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existItem = state.items[itemExistIndex];
      let updatedItems;

      if (existItem) {
        const updateItem = {
          ...existItem,
          amount: existItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[itemExistIndex] = updateItem;
      } else {
        updatedItems = [...state.items];
        updatedItems.push(action.item);
      }
      return {
        items: updatedItems,
        totalAmount: updateTotalAmount,
      };

    case "REMOVE":

      const findIndexItem = state.items.findIndex(
        (item) => item.id === action.id
      );

      const findItem = state.items[findIndexItem];

      const newTotalAmount =
        state.totalAmount -  findItem.price;
      let itemList;
      if (findItem) {
        const updateItem = {
          ...findItem,
          amount: findItem.amount - 1,
        };
        itemList = [...state.items];
        if (updateItem.amount > 0) {
          itemList[findIndexItem] = updateItem;
        } else {
          itemList.filter((item) => item.id !== action.id);
        }
      } else {
        itemList = [...state.items];
      }

      return {
        items: itemList,
        totalAmount: newTotalAmount,
      };

    default:
      return initState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initState);

  const handleAddIem = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const handleRemoveItem = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddIem,
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
