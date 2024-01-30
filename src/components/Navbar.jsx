import { NavLink } from "react-router-dom"
import LogoPrincipal from "./LogoPrincipal"
import CartWidget from "./CartWidget"

const Navbar = () => {
    const ColorGeneral = {
        backgroundCoor: '#d72300',
    }
    return (
        <div style={ColorGeneral} className="container my-2">
            <div className="row">
                <div className="col-md-1">
                    <LogoPrincipal />
                </div>
                <div className="col-md-10 d-flex align-items-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold" activeclassname="active" to={"/"}>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold" activeclassname="active" to={"/category/hamburgesas"}>Hamburgesas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold" activeclassname="active" to={"/category/acompañamientos"}>Acompañamientos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold" activeclassname="active" to={"/category/wrap"}>Wrap</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold" activeclassname="active" to={"/category/kingJr"}>King Jr</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-1 d-flex align-items-center">
                    <CartWidget />
                </div>
            </div>

        </div>
    )
}

export default Navbar;