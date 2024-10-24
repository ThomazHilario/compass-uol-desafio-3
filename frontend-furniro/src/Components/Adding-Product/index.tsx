// React
import { useState } from "react"

// Cart store
import { cartStore } from "../../Store/store"

// Interface
import { ProductProps } from "../../Interfaces/product-type"
import { CartProps } from "../../Interfaces/cart-type"

// css import
import './adding-product.css'

export const AddingProduct = ({ product }:{product:ProductProps}) => {

    // Cart store
    const { cartProducts, setCartProducts } = cartStore(state => state)

    // state - quantity chosen
    const [quantityChosen, setQuantityChosen] = useState(1)

    // Subtracting state quantity chosen
    function SubtractingState(){
        return quantityChosen >= 2 && setQuantityChosen(quantityChosen - 1) 
    }

    // Change cartProducts store and localStorage
    function changeCartProductsInStoreAndInlocalStorage(products:CartProps[]){
         // Set new product in state cartProducts 
         setCartProducts(products)

        // Set news products in localStorage
        localStorage.setItem('cart', JSON.stringify(products))  
    }

    // Adding product in localStorage
    function addingProductInLocalStorage(){
        // Case having cart products in localStorage
        const cartProductsExistInLocalStorage = localStorage.getItem('cart') !== null

        if(cartProductsExistInLocalStorage){

            // Get cart products in localStorage
            const cartProducts:CartProps[] = JSON.parse(localStorage.getItem('cart')!)

            // Case product not includes in cart Products
            if(!cartProducts.some(productCart => productCart.id === product.id)){
                // Set new product in state cartProducts and save in localStorage
                changeCartProductsInStoreAndInlocalStorage([{
                    ...product,
                    amount:quantityChosen
                }, ...cartProducts])
            }     
            
        }else{

            // Set new product in state cartProducts and save in localStorage
            changeCartProductsInStoreAndInlocalStorage([{
                ...product,
                amount:quantityChosen
            }, ...cartProducts])
            
        }

    }

    return(
        <section id="add__product__to__cart">
            {/* Change amount product */}
            <div>
                <button onClick={SubtractingState}>-</button>
                    {quantityChosen}
                <button onClick={() => setQuantityChosen(quantityChosen + 1)}>+</button>
            </div>
            
            {/* Add product in cart */}
            <button className="action__for__the__product" onClick={addingProductInLocalStorage}>Add To Cart</button>

            {/* Compare product */}
            <button className="action__for__the__product">Compare</button>
        </section>
    )
}