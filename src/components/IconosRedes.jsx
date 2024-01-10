import IconoUno from "../assets/facebook.png";
import IconoDos from "../assets/instagram.png";
import IconoTres from "../assets/youtube.png";


const IconosRedes = () => {
    const TextWhite = {
        color: 'white',
    }
    return (
        <div className="d-flex">
            <div className="p-2 flex-fill">
                <p style={TextWhite}>TM © 2021 Burger King Corporation. Todos los derechos reservados.</p>
            </div>
            <div className="p-2 flex-fill-end">
                <a href="#" className="mx-2"><img src={IconoUno} width={24} alt={"Facebook"} /></a>
                <a href="#" className="mx-2"><img src={IconoDos} width={24} alt={"Instagram"} /></a>
                <a href="#" className="mx-2 align-middle"><img src={IconoTres} width={24} alt={"Youtube"} /></a>
            </div>
        </div>
    )
}

export default IconosRedes;