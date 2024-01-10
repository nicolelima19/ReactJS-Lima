import TituloFooter from "./TituloFotter";
import ListaFooterUno from "./ListasFooterUno";
import ListaFooterDos from "./ListaFooterDos";
import IconosRedes from "./IconosRedes";

const Footer = () => {
    const StyleFooter = {
        backgroundColor: '#502314',
    }
    return (
        <div style={StyleFooter} className="container-fluid">
            <div className="row d-flex align-items-baseline">
                <div className="col-md-7 text-dark fw-bold my-4">
                    <TituloFooter />
                </div>
                <div className="col-md-2 text-dark fw-bold d-flex align-items-center my-3">
                    <ListaFooterUno />
                </div>
                <div className="col-md-3 text-dark fw-bold d-flex align-items-top my-3">
                    <ListaFooterDos />
                </div>
                <div><hr /></div>
                <div className="row my-3">
                    <IconosRedes />
                </div>
            </div>
        </div >
    )
}

export default Footer;