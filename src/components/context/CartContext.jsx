import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(product => product.id === id);
            cart[pos].quantity += quantity;
            setCart([...cart])
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }

    const removeItem = (id) => {
        const updateCart = cart.filter(product => product.id !== id);
        setCart(updateCart)
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const TotalDeProductos = () => {
        return cart.reduce((acum, product) => acum += product.quantity, 0);
    }

    const SumaTotalDeProductos = () => {
        return cart.reduce((acum, product) => acum += product.quantity * product.price, 0);
    }


    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, TotalDeProductos, SumaTotalDeProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;