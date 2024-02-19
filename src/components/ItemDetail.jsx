import { useContext } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
    const{addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container">
            <div className="col">
                <div className="col-md-4 offset-md-4">
                    <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="col-md-4 text-center offset-md-4">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p><b>${item.price}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;