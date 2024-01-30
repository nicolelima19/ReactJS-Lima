import { useEffect, useState } from "react";

const ItemCount = ({ stock }) => {
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

    useEffect(() => {
        setItemStock(stock)
    }, [stock]);

    const onAdd = () => {
        if (counter < itemStock) {
            setItemStock(itemStock - counter)
            console.log("Agregaste " + counter + " productos al carrito!")
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
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" style={StyleItemCount} className="btn" onClick={onAdd}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount;