const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-success display-6" role="alert">{greeting}</div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;