import BannerUno from "../assets/Banner-Web-Call-of-duty.png";
import BannerDos from "../assets/Banner-Web-DUO-5.jpg";
import BannerTres from "../assets/Banner-web-6.jpg";
import BannerCuatro from "../assets/Banner-Postres-3.jpg";

const CarroselImg = () => {
    return (
        <div>
            <div className="carousel-item active">
                <img src={BannerUno} className="d-block w-100" alt="banner-call-of-duty" />
            </div>
            <div className="carousel-item">
                <img src={BannerDos} className="d-block w-100" alt="banner-duo" />
            </div>
            <div className="carousel-item">
                <img src={BannerTres} className="d-block w-100" alt="banner-5" />
            </div>
            <div className="carousel-item">
                <img src={BannerCuatro} className="d-block w-100" alt="banner-postres" />
            </div>
        </div>
    )
}

export default CarroselImg;