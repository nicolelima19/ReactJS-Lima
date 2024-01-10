import Android from "../assets/googleplay.png"
import Apple from "../assets/appstore.png"

const ColPre = () => {
    const TextWhite = {
        color: 'white',
        fontSize: '52px',
    }
    const TextP = {
        color: 'white',
        fontSixe: '24px',
    }
    return (
        <div>
            <div>
                <h1 style={TextWhite}>Des­car­gá la APP y dis­fru­tá mucho más por mucho menos</h1>
            </div>
            <div className="row my-4">
                <div className="col-3">
                    <a className="mx-3" href="#"><img src={Android} width={135} alt="google-play" /></a>
                </div>
                <div className="col-2">
                    <a className="mx-2" href="#"><img src={Apple} width={125} alt="app-store" /></a>
                </div>
            </div>
            <div style={TextP} className="col-12 p-2">
                <p>Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. Y otros países. App Store es una marca de servicio de Apple Inc. Google Play es una marca comercial de Google Inc. Se aplican términos.</p>
            </div>
        </div>
    )
}

export default ColPre;