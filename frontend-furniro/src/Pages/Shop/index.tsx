// React
import { useState, useEffect } from 'react'

// React Router Dom
import { useParams } from 'react-router-dom'

// Store
import { filterStore } from '../../Store/store'

// Interface
import { ProductProps } from '../../Interfaces/product-type'

// Components
import { BannerShop } from '../../Components/Banner-Shop'
import { AsideShop } from '../../Components/Aside-Shop'
import { ProductCard } from '../../Components/Product-Card'
import { ProductPagination } from '../../Components/Product-Pagination'
import { StoreInformation } from '../../Components/StoreInformation'

// css import 
import './shop.css'

export const Shop = () => {

    // Params
    const { id } = useParams()

    // Store - showQuantity
    const { showQuantity } = filterStore(state => state)

    // state - stepPage
    const [stepPage, setStepPage] = useState<number>(1)

    useEffect(() => {
        async function getProducts(){
            try {
                // Making request
                const response = await fetch(`http://localhost:3000/products?limit=32&page=${stepPage}`)

                // Processing data
                const products = await response.json()

                // Change state products
                setProducts(products.productsPerPage)

                // Change state totalPagesNavigation
                setTotalPagesNavigation(Array.from({length:products.totalPages}, (_, i) => i + 1))

            } catch (error) {
                console.log(error)
            }
        }

        // Exec getProducts
        getProducts()
    },[stepPage])

    // state - products
    const [products, setProducts] = useState<ProductProps[]>([])

    // state - Total pages
    const [totalPagesNavigation, setTotalPagesNavigation] = useState<number[]>([])

    // Filter products with limit or with limit and category
    const productsInLimit:ProductProps[] = !id ? products.slice(0, showQuantity as number) : products.filter(product => product.category_id === Number(id)).slice(0, showQuantity as number)

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
                    {productsInLimit.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </section>

                {/* Pagination products */}
                {!id && (
                    <ProductPagination 
                        stepPage={stepPage} 
                        setStepPage={setStepPage} 
                        totalPagesNavigation={totalPagesNavigation}
                    />
                )}
            </section>

           {/* Store informatios */}
           <StoreInformation/>
        </main>
    )
}