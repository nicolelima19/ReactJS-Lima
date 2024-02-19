import { useContext } from "react";
import { Link } from "react-router-dom";
import CarritoIcon from "../assets/bolsa-de-la-compra.png"
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const {TotalDeProductos} = useContext(CartContext);

    return (
        TotalDeProductos() > 0 ? 
        <Link to={"/cart"} type="button" className="btn bg-warning position-relative">
            <img src={CarritoIcon} alt="carrito" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{TotalDeProductos()}</span>
        </Link> : ""

    )
}

export default CartWidget;