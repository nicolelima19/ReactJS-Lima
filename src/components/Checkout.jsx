import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import LogoGracias from "../assets/burgerking-logo.png";

const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const {cart, clear, SumaTotalDeProductos} = useContext(CartContext);
    const StyleItemCount = {
        backgroundColor: '#f18639',
    }

    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const buyer = {name:nombre, email:email, phone:telefono};
        const items = cart.map(item => ({id:item.idx, title:item.title, price:item.price}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = SumaTotalDeProductos();
        const order = {buyer:buyer, items:items, date:date, total:total};

        // Inserto Documento en Firestore
        const db = getFirestore();
        const orderCollection = collection(db, "order");
        addDoc(orderCollection, order).then(resultado => {
            clear();
            setOrderId(resultado.id);
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h3>Checkout</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" style={StyleItemCount} className="btn" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6 text-center">
                    <table className="table">
                        <tbody>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td className="align-middle"><img src={product.image} alt={product.title} width={80} /></td>
                                    <td className="text-start align-middle">{product.title}</td>
                                    <td className="text-start align-middle">${product.price}</td>
                                    <td className="text-start align-middle">{product.quantity}</td>
                                    <td className="text-start align-middle">${product.quantity * product.price}</td>
                                </tr>
                            )}
                            <tr>
                                <td className="text-center align-middle" colSpan={4}>&nbsp;</td>
                                <td className="text-start align-middle">${SumaTotalDeProductos()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div style={StyleItemCount} class="alert p-5 text-center" role="alert">
                        <img src={LogoGracias} alt="Gracias" />
                        <h2>Gracias por tu Compra!</h2>
                        <p>Tu ID de Compra es: <b>{orderId}</b></p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;