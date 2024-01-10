import LogoPrincipal from "./LogoPrincipal"
import Navbar from "./Navbar"

const Header = () => {
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
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Header; 