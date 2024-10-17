// React
import { useState, useEffect } from 'react'

// React Router Dom
import { useParams } from 'react-router-dom'

// Interface
import { ProductProps } from '../../Interfaces/product-type'

// Components
import { BannerShop } from '../../Components/Banner-Shop'
import { AsideShop } from '../../Components/Aside-Shop'
import { ProductCard } from '../../Components/Product-Card'
import { StoreInformation } from '../../Components/StoreInformation'

// css import 
import './shop.css'

export const Shop = () => {

    // Params
    const params = useParams()

    useEffect(() => {
        async function getProducts(){
            try {
                // Making request
                const response = await fetch('http://localhost:3000/products?limit=16')

                // Processing data
                const products = await response.json()

                // Change state products
                setProducts(products)
            } catch (error) {
                console.log(error)
            }
        }

        // Exec getProducts
        getProducts()
    },[])

    // state - products
    const [products, setProducts] = useState<ProductProps[]>([])

    return(
        <main>
            {/* Banner in page shop */}
            <BannerShop/>

            {/* Aside in page shop */}
            <AsideShop/>

            {/* Section for products */}
            <section id='list__products'>
                {/* Container products */}
                <section className='container__products'>
                    {products.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </section>

                {/* Step products */}
            </section>

           {/* Store informatios */}
           <StoreInformation/>
        </main>
    )
}