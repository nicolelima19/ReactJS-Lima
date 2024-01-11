import BK1 from "../assets/bk1.jpeg"
import BK2 from "../assets/bk2.jpeg"
import BK3 from "../assets/bk3.jpeg"

const Cupones = () => {
    return(
        <div className="container text-center">
        <div className="row m-2 my-5 mx-3">
            <div className="row ">
                <h3 className="col-md-10 d-flex justify-content-start">Cupones</h3>
                <a className="col-md-2 d-flex justify-content-end" style={{textDecoration: 'none', color: 'black'}} href="#">Ver todo</a>
            </div>
            <div className="col mx-2 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <a href="#"><img src={BK1} className="card-img-top rounded" alt="hamburg1"/></a>
            </div>
            <div className="col mx-2 mx-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <a href="#"><img src={BK2} className="card-img-top rounded" alt="img2"/></a>
            </div>
            <div className="col mx-2 mx-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <a href="#"><img src={BK3} className="card-img-top rounded" alt="img3"/></a>
            </div>
        </div>
    </div>
    )
}

export default Cupones;