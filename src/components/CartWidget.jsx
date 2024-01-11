import CarritoIcon from "../assets/bolsa-de-la-compra.png"

const CartWidget = () => {
    return (
        <button type="button" className="btn bg-warning position-relative">
            <img src={CarritoIcon} alt="carrito" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>

    )
}

export default CartWidget;