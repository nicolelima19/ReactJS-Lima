import Dibujo from "../assets/BK_ILLUSTRATION_PICKLE_EYE_MASK_ST_FC.png"

const LocalesBK = () => {
    return (
        <div className="container my-5 rounded" style={{backgroundColor: '#ff8732', padding: '20px', color: 'white'}}>
            <div className="d-flex align-self-center">
                <div style={{width: '50%'}}>
                    <h4>Locales</h4>
                    <p>Encontrá el más cercano</p>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input style={{padding: '10px', marginRight: '10px', border: '1px solid #ccc', borderRadius: '4px', flexGrow: 1}}
                            autoComplete="off" placeholder="Tu ciudad o dirección" type="text"/><button type="button" aria-label="search" style={{background: 'none', border: 'none'}}><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.uy/wp-media-folder-bk-uruguay/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/27/2022/03/pobrane.svg"
                                aria-label="search icon"
                                alt="location icon"
                                style={{width: '24px', height: '24px'}}/></button>
                    </div>
                </div>
                <div style={{width: '50%'}}>
                    <img className="float-end" src={Dibujo} alt="Ilustración BK" style={{maxWidth: '50%'}}/>
                </div>
            </div>
        </div>
    )
}

export default LocalesBK;