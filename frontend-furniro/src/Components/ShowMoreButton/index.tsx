// React Router Dom
import { useNavigate } from "react-router-dom"

// interface
import { ProductProps } from "../../Interfaces/product-type"

// Interface ShowMoreButtonProps
interface ShowMoreButtonProps{
    products:ProductProps[];
    setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>
}

// css import
import './show-more-button.css'

export const ShowMoreButton = ({products, setProducts}:ShowMoreButtonProps) => {
    // usenavigate - react router dom
    const navigate = useNavigate()

    // Request products
    async function requestProducts(){
        try {
            // Making request
            const response = await fetch('http://localhost:3000/products?limit=8')

            // Processing data
            const products = await response.json()

            // Change state products
            setProducts(products)
        } catch (error) {
            console.log(error)
        }
    }

    // More action button
    const moreAction = () => {
        
        // verify lenght in products
        if(products.length === 8){
            navigate('/shop')
        }else{
            // Exec requestProducts
            requestProducts()
        }
    }

    return <button className="show__more_btn"onClick={moreAction}>Show More</button>
}