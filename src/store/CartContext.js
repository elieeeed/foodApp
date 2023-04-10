import { createContext } from "react";

const context = createContext({
    items : [],
    totalAmount : 0,
    addItem : () => {},
    removeItem : () => {}
})

export default context;