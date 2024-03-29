import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1)
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock]);

    const addToCart = () => {
        if (counter < itemStock) {
            setItemStock(itemStock - counter)
            setCounter(1);
            onAdd(counter);
            setItemAdded(true);
        }
    }

    const StyleItemCount = {
        backgroundColor: '#f18639',
    }

    return (
        <>

            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" style={StyleItemCount} className="btn" onClick={decrementar}>-</button>
                        <button type="button" style={StyleItemCount} className="btn">{counter}</button>
                        <button type="button" style={StyleItemCount} className="btn" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1 d-flex justify-content-center">
                <div className="col-md-8">
                        {itemAdded ? <Link to={"/cart"} type="button" style={StyleItemCount} className="btn">Terminar compra</Link> : <button type="button" style={StyleItemCount} className="btn" onClick={addToCart}>Agregar al carrito</button>}
                </div>
            </div>
        </>
    )
}

export default ItemCount;