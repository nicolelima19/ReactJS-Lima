import CelularImg from "../assets/prefooterimage.png"
import ColPre from "./ColPreFooter";


const PreFooter = () => {
    const StylePre = {
        backgroundColor: '#d72300',
    }
    return(
        <div style={StylePre} className="row d-flex align-items-end">
            <div className="col-5">
                <img src={CelularImg} width={450} alt="celular-img" />
            </div>
            <div className="col-7">
                <ColPre />
            </div>
        </div>
    )
}

export default PreFooter;