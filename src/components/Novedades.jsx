import Img1 from "../assets/NOTICIAS-Y-CUPON-Postres.jpg";
import Img2 from "../assets/NOTICIAS-Y-CUPON-Promo-Duo-2.jpg";
import Img3 from "../assets/NOTICIAS-Y-CUPONx-2.jpg";

const Novedades = () => {
    return (
        <div className="container text-center">
            <div className="row m-2 my-5 mx-3">
                <div className="row ">
                    <h3 className="col-md-10 d-flex justify-content-start">Novedades</h3>
                    <a className="col-md-2 d-flex justify-content-end" style={{textDecoration: 'none', color: 'black'}} href="#">Ver todo</a>
                </div>
                <div className="col mx-2 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                    <img src={Img3} className="card-img-top rounded" alt="hamburg1" />
                    <div className="card-body my-3 blockquote">
                        <h5>Mega King Selection</h5>
                        <p className="card-text">¡Lo mejor de nuestra parrilla!</p>
                    </div>
                </div>
                <div className="col mx-2 mx-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                    <img src={Img2} className="card-img-top rounded" alt="img2" />
                    <div className="card-body blockquote my-3">
                        <h5>Promo Dúo</h5>
                        <p className="card-text">Con la nueva Promo DUO, podes llevarte 2 Hamburgesas por $299 eligiendo tu conbinación preferida entre: Egg Bacon Jr. Doble, Stacker Jr. Doble, Egg Stacker Jr: Doble y Pollo Jr: Doble. Por $119 extras le sumas a tu promo unas papas medianas y free refill de refresco.</p>
                    </div>
                </div>
                <div className="col mx-2 mx-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                    <img src={Img1} className="card-img-top rounded" alt="img3" />
                    <div className="card-body blockquote my-3">
                        <h5>Helados</h5>
                        <p className="card-text">¡Nuevos helados! Deléitate con los más ricos sabores: King Mix Alfajor Negro Punta Ballena, King Mix ALfajor Surprise Punta Ballena, King Mix Rocklets King Mix Brownie.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Novedades;