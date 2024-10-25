// React
import { useState, useEffect } from 'react'

// React Router Dom
import { Link, useParams } from 'react-router-dom'

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
import { NotFound } from '../../Components/Not-Found'
import { Loading } from '../../Components/UI/Loading'

// Axios
import axios from 'axios'

// css import 
import './shop.css'

export const Shop = () => {

    // Params
    const { id } = useParams()

    // Store
    const { showQuantity, shortBy, stepPage, setStepPage } = shopStore(state => state)

    // state - loading
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        // Starting from the top of the page
        window.scrollTo(0,0)
        
        // Find Products in Database
        async function findProductsInDatabase(){
            try {
                // Change state isLoading
                setIsLoading(true)

                // Making request
                const products = await axios.get(`http://localhost:3000/products`, {
                    params:{
                        limit:Number(showQuantity) >= 16 ? showQuantity : 32,
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
            } finally{
                // Change state loading for false
                setIsLoading(false)
            }
        }

        // Find Products from category in database
        async function findProductsFromCategoryInDatabase(){
            try {
                // Making Request products from category
                const products = await axios.get(`http://localhost:3000/products`,{
                    params:{
                        limit:32,
                        category_id:id,
                        orderBy:shortBy
                    }
                })

                // Save products in state
                setProducts(products.data)
            } catch (error) {
                console.log(error)
            } finally{
                setIsLoading(false)
            }
        }

        // Case not have id param
        if(!id){
            // Exec findProductsInDatabase
            findProductsInDatabase()

            // Change state message
            setMessage('Não há produtos')
            return
        }

        // Exec findProductsFromCategoryInDatabase
        findProductsFromCategoryInDatabase()

        // Change state message
        setMessage('Não há produtos desta categoria !!')
        
    },[stepPage, setStepPage, showQuantity, id, shortBy])

    // State - message
    const [message, setMessage] = useState<string>('')

    // state - products
    const [products, setProducts] = useState<ProductProps[]>([])

    // state - Total pages
    const [totalPagesNavigation, setTotalPagesNavigation] = useState<number[]>([])

    return(
        <main>
            {/* Banner in page shop */}
            <BannerShop/>

            {/* Aside in page shop */}
            <AsideShop />

            {/* Section for products */}
            {!isLoading ? <section id='list__products'>
                {/* Container products */}
                { products.length > 0 ? (
                    <section className='container__products'>
                        {products.map(product => (
                            <ProductCard key={product.id} product={product}/>
                        ))}
                    </section>
                ) : (
                    <NotFound>
                        <h1>{message}</h1>

                        <Link to='/shop'>Buscar produtos</Link>
                    </NotFound>
                )}

                {/* Pagination products */}
                {!id && <ProductPagination totalPagesNavigation={totalPagesNavigation} />}
            </section> : <Loading/>}

           {/* Store informatios */}
           <StoreInformation/>
        </main>
    )
}