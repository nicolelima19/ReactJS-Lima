import Error from "../assets/404Error.png"

const Error404 = () => {
    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col">
                    <p className="fs-1 fw-bold text-center">OPPS</p>
                    <img src={Error} alt="Error 404" />
                    <p className="fs-3 fw-bold text-center">La página no se encuentra.</p>
                </div>
            </div>
        </div>
    )
}

export default Error404;