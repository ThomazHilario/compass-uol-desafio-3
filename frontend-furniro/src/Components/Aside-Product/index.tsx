// React Router Dom
import { Link } from "react-router-dom"

// Interface
import { ProductProps } from "../../Interfaces/product-type"

// css import
import './aside-product.css'

export const AsideProduct = ({product}:{product:ProductProps}) => {
    return(
        <aside id="aside__singleproduct">
            <ul id="container__aside__product">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shop/all'>Shop</Link></li>
                <li>{product?.name}</li>
            </ul>
        </aside>
    )
}