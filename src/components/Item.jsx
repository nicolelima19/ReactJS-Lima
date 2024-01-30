import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="col-md-3 text-center d-flex align-items-center">
            <div className="card border-0">
                <Link to={"/item/" + item.id} className="text-decoration-none text-black">
                    <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <p className="card-text">{item.title}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;