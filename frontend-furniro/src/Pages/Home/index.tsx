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

import axios from "axios"

// css import
import './home.css'


export const Home = () => {

    useEffect(() => {
        // getCategories in database
        async function requestProductsAndCategories() {
            try {
                const [products, categories] = await Promise.all([axios.get('http://localhost:3000/products', {
                    params:{
                        isNew:true,
                        isDiscount:true,
                        limit:8
                    }
                }), axios.get('http://localhost:3000/categories')])

                // Change state Products and Categories 
                setProducts(products.data)
                setCategories(categories.data)
            } catch (error) {
                console.log(error)
            }
        }

        // Exec function
        requestProductsAndCategories()
    }, [])

    // state categories
    const [categories, setCategories] = useState<CategoryProps[]>([])

    // state products  
    const [products, setProducts] = useState<ProductProps[]>([])


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
                            product={product}
                        />
                    ))}
                </section>
            </section>

            <StoreInformation/>
        </main>
    )
}