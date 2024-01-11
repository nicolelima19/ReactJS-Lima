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
                            <a className="nav-link text-dark fw-bold" href="#">Pedir aquí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold" href="#">Cupones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold" herf="#">Restaurantes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold" herf="#">Novedades</a>
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