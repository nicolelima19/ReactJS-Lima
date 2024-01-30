import { Link } from "react-router-dom"
import LogoBk from "../assets/burgerking-logo.png"

const LogoPrincipal = () => {
    return (
        <Link to={"/"}>
            <img src={LogoBk} alt="BurgerKing Uruguay" width={70} />
        </Link>
    )
}

export default LogoPrincipal;