// React
import { useState, useEffect } from 'react'

// React Router Dom
import { useParams } from 'react-router-dom'

// Store
import { shopStore } from '../../Store/store'

// Interface
import { ProductProps } from '../../Interfaces/product-type'

// Components
import { BannerShop } from '../../Components/Banner-Shop'
import { AsideShop } from '../../Components/Aside-Shop'
import { ProductCard } from '../../Components/Product-Card'
import { ProductPagination } from '../../Components/Product-Pagination'
import { StoreInformation } from '../../Components/StoreInformation'

// Axios
import axios from 'axios'

// css import 
import './shop.css'

export const Shop = () => {

    // Params
    const { id } = useParams()

    // Store
    const { showQuantity, shortBy, stepPage } = shopStore(state => state)

    useEffect(() => {
        // Find Products in Database
        async function findProductsInDatabase(){
            try {
                // Making request
                const products = await axios.get(`http://localhost:3000/products`, {
                    params:{
                        limit:!id && Number(showQuantity) >= 16 ? showQuantity : 32,
                        page:stepPage,
                        orderBy:shortBy
                    }
                })           

                // Change state products
                setProducts(products.data.productsPerPage)

                // Change state totalPagesNavigation
                setTotalPagesNavigation(Array.from({length:products.data.totalPages}, (_, i) => i + 1))

            } catch (error) {
                console.log(error)
            }
        }

        // Exec findProductsInDatabase
        findProductsInDatabase()
    },[stepPage, showQuantity, id, shortBy])

    // state - products
    const [products, setProducts] = useState<ProductProps[]>([])

    // state - Total pages
    const [totalPagesNavigation, setTotalPagesNavigation] = useState<number[]>([])

    // Filter products with limit or with limit and category
    const productsInLimit:ProductProps[] = !id ? products : products.filter(product => product.category_id === Number(id))

    return(
        <main>
            {/* Banner in page shop */}
            <BannerShop/>

            {/* Aside in page shop */}
            <AsideShop />

            {/* Section for products */}
            <section id='list__products'>
                {/* Container products */}
                <section className='container__products'>
                    {productsInLimit.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </section>

                {/* Pagination products */}
                {!id && <ProductPagination totalPagesNavigation={totalPagesNavigation} />}
            </section>

           {/* Store informatios */}
           <StoreInformation/>
        </main>
    )
}