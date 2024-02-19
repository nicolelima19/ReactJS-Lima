import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import Trash from "../assets/Trash-Carrito.png"

const Cart = () => {
    const { cart, removeItem, clear, TotalDeProductos, SumaTotalDeProductos } = useContext(CartContext);
    const StyleItemCount = {
        backgroundColor: '#f18639',
    }

    if (TotalDeProductos() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="display-1">🍔🍟</p>
                        <div className="alert alert-warning" role="alert">
                            ¡No se encontraron productos en el Carrito!
                        </div>
                        <Link to={"/"} style={StyleItemCount} className="btn my-3">Volver a la página principal.</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h3>Carrito</h3>
                    <table className="table">
                        <tbody>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td><img src={product.image} alt={product.title} width={80} /></td>
                                    <td className="">{product.title}</td>
                                    <td>${product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>${product.quantity * product.price}</td>
                                    <td><a href="#" onClick={() => {removeItem(product.id)}}><img src={Trash} alt="Eliminar del carrito" title="Eliminar del carrito." />
                                        </a>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td colSpan={4}>Suma Total</td>
                                <td>${SumaTotalDeProductos()}</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;