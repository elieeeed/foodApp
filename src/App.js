import HeaderForm from "./components/header/HeaderForm";
import Meals from "./components/meal/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/cart/Cart";
import { useState } from "react";

function App() {

  const [isShown, setIsShown] = useState(false);

    const showCart = () => {
        setIsShown(true)
    }

    const closeCart =() => {
        setIsShown(false)
    }

  return (
    <CartProvider>
      {isShown && <Cart onClose={closeCart} />}
      <HeaderForm onClick={showCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
