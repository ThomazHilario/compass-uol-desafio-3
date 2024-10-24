// React Router Dom
import { useNavigate } from "react-router-dom"

// interface
import { ProductProps } from "../../Interfaces/product-type"

// Interface ShowMoreButtonProps
interface ShowMoreButtonProps{
    products:ProductProps[];
    setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>,
    category_id?: number;
}

// Axios
import axios from "axios";

// css import
import './show-more-button.css'

export const ShowMoreButton = ({products, setProducts, category_id}:ShowMoreButtonProps) => {
    // usenavigate - react router dom
    const navigate = useNavigate()

    // Request products
    async function requestProducts(){
        try {
            // Making request
            const products = await axios.get(`http://localhost:3000/products?limit=8&category_id=${category_id}`)

            // Change state products
            setProducts(products.data)
        } catch (error) {
            console.log(error)
        }
    }

    // More action button
    const moreAction = () => {
        
        // verify lenght in products
        if(products.length >= 8){
            navigate('/shop')
        }else{
            // Exec requestProducts
            requestProducts()
        }
    }

    return <button className="show__more_btn"onClick={moreAction}>Show More</button>
}