// React rounter dom
import { Link } from "react-router-dom"

// Components
import { NotFound } from "../../Components/Not-Found"

export const PageError = () => {
    return(
        <NotFound>
            {/* Title */}
            <h1>Error 404 &#128542;</h1>

            {/* Subtitle */}
            <h2>Esta pagina não existe!!</h2>

            {/* Links */}
            <div className="container__links">
                <Link to="/">Ir para Home</Link>
                <Link to="/shop">Ir para Shop</Link>
            </div>
        </NotFound>
    )
}