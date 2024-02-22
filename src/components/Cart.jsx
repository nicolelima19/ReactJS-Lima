import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import Trash from "../assets/Basura-Carrito.png";

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
                            <tr>
                                <td className="text-end align-middle" colSpan={6}><a href="#" onClick={clear} style={StyleItemCount} className="btn">Vaciar Carrito<img src={Trash} alt="Eliminar Producto" title="Eliminar Producto" /></a></td>
                            </tr>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td className="text-start align-middle"><img src={product.image} alt={product.title} width={80} /></td>
                                    <td className="text-start align-middle">{product.title}</td>
                                    <td className="text-start align-middle">${product.price}</td>
                                    <td className="text-start align-middle">{product.quantity}</td>
                                    <td className="text-start align-middle">${product.quantity * product.price}</td>
                                    <td className="text-end align-middle"><a href="#" onClick={() => { removeItem(product.id) }}><img src={Trash} alt="Eliminar del carrito" title="Eliminar del carrito." />
                                    </a>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td>&nbsp;</td>
                                <td className="text-start">Suma Total</td>
                                <td className="text-center align-middle" colSpan={2}>&nbsp;</td>
                                <td className="text-start align-middle">${SumaTotalDeProductos()}</td>
                                <td className="text-end align-middle" colSpan={6}><Link to={"/checkout"} style={StyleItemCount} className="btn">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default Cart;