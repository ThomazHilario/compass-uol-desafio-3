// React
import { useState, useEffect } from "react"

//Interfaces
import { CategoryProps } from "../../Interfaces/category-type"
import { ProductProps } from "../../Interfaces/product-type"

// Components
import { BannerHome } from "../../Components/Banner-Home"
import { StoreInformation } from "../../Components/StoreInformation"
import { CategoryCard } from "../../Components/Category-Card"
import { ProductCard } from "../../Components/Product-Card"
import { ShowMoreButton } from "../../Components/ShowMoreButton"
import { Loading } from "../../Components/UI/Loading"

// Axios
import axios from "axios"

// css import
import './home.css'

export const Home = () => {

    // State - loading
    const [ isLoading, setIsLoading ] = useState<boolean>(true)

    useEffect(() => {
        // Starting from the top of the page
        window.scrollTo(0,0)

        // getCategories in database
        async function requestProductsAndCategories() {
            try {
                // Making Request
                const [products, categories] = await Promise.all([
                    axios.get('http://localhost:3000/products?limit=8&isDiscount=true&isNew=true'), 
                    axios.get('http://localhost:3000/categories')
                ])

                // Change state Products and Categories 
                setProducts(products.data)
                setCategories(categories.data)
            } catch (error) {
                console.log(error)
            } finally{
                // Change state loading for false
                setIsLoading(false)
            }
        }

        // Exec function
        requestProductsAndCategories()
    }, [])

    // state categories
    const [categories, setCategories] = useState<CategoryProps[]>([])

    // state products  
    const [products, setProducts] = useState<ProductProps[]>([])


    // Return content with base in state loading
    if(isLoading) return <Loading/>

    return (
        <main>
            {/* Banner */}
            <BannerHome/>

            {/* Categories */}
            <section className="home__sections" id="browse__the__range">
                <h2>Browse The Range</h2>

                {/* Container Categories */}
                <section className="container__categories">
                    {categories.map((category:CategoryProps) => (
                            <CategoryCard 
                                key={category.id} 
                                category={category}
                            />
                        ))
                    }
                </section>

            </section>

            {/* Our Products */}
            <section className="home__sections" id="our__products">
                <h2>Our Products</h2>

                {/* Container Products */}
                <section className="container__products">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </section>

                {/* Show More Button */}
                <ShowMoreButton products={products} setProducts={setProducts}/>
            </section>

            <StoreInformation/>
        </main>
    )
}