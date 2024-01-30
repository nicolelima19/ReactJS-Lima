import { useState } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1)
    const [itemStock, setItemStock] = useState(stock)

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

    const onAdd = () => {
        if (counter < itemStock) {
            setItemStock(itemStock - counter)
            console.log("Agregaste " + counter + " productos al carrito!")
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-primary">{counter}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-3">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount;