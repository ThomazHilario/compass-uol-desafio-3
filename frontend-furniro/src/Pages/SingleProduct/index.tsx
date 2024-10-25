// React
import { useState, useEffect } from "react"

// React Router Dom
import { useParams, Link } from "react-router-dom"

// Interfaces
import { ProductProps } from "../../Interfaces/product-type"
import { CategoryProps } from "../../Interfaces/category-type"

// Components
import { ShowMoreButton } from "../../Components/ShowMoreButton"
import { AsideProduct } from "../../Components/Aside-Product"
import { DetailsImageProduct } from "../../Components/Details-Image-Product"
import { SizeProduct } from "../../Components/Size-Product"
import { AddingProduct } from "../../Components/Adding-Product"
import { AboutTabsProduct } from "../../Components/About-Tabs-Product"
import { ProductCard } from "../../Components/Product-Card"
import { NotFound } from "../../Components/Not-Found"
import { Loading } from "../../Components/UI/Loading"

// Axios
import axios from "axios"

// css import
import './single-product.css'

export const SingleProduct = () => {
    // Params
    const { id } = useParams()

    // State - loading
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if(id){
            // Find specified product
            async function findSpecifiedProduct(){
                try {
                    // Change state loading for true
                    setIsLoading(true)

                    // Making request
                    const [productFounded, categoriesFounded] = await Promise.all([
                        axios.get(`http://localhost:3000/products/${id}`), 
                        axios.get('http://localhost:3000/categories')
                    ])

                    // Find Category id
                    const categoryId = categoriesFounded.data.find((category:CategoryProps) => category.id === productFounded.data.category_id).id
                    
                    // Request products related
                    const productsRelated = await axios.get(`http://localhost:3000/products?limit=4&category_id=${categoryId}`)

                    // Set data in state product, categories and products related
                    setProduct(productFounded.data)
                    setCategories(categoriesFounded.data)
                    setProductsRelated(productsRelated.data)
                } catch (error) {
                    console.log(error)
                } finally{
                    // Change state loading for false
                    setIsLoading(false)

                    // Starting from the top of the page
                    window.scrollTo(0,0)
                }
            }

            // Exec findSpecifiedProduct
            findSpecifiedProduct()
        }
        
    }, [id])

    // state - Products
    const [productsRelated, setProductsRelated] = useState<ProductProps[]>([])

    // state - product
    const [product, setProduct] = useState<ProductProps>()

    // state - categories
    const [categories, setCategories] = useState<CategoryProps[]>([])

    // Product category
    const category = categories.find(category => category.id === product?.category_id)

    // format price in BRL
    function formatPrice(price:number, discount_price:number){

        if(discount_price > 0){
            const priceParsingToNumber:number = Number(price - discount_price)

            return priceParsingToNumber.toLocaleString('pt-br', {style:'currency', currency:'BRL'})
        } else{
            const priceParsingToNumber:number = Number(price)

            return priceParsingToNumber.toLocaleString('pt-br', {style:'currency', currency:'BRL'})
        }
    }

    // Price formated
    const priceWithDiscountOrNo = formatPrice(product?.price as number, product?.discount_price as number)

    // Return content with base in state loading
    if(isLoading) return <Loading/>

    if(product){
        return(
            <main id="container__singleproduct">
    
                {/* Aside product */}
                <AsideProduct product={product}/>
    
                <section id="container__product__information">
                    {/* Details image product */}
                    <DetailsImageProduct product={product}/>
    
                    {/* Detail for product */}
                    <article id="details__to__product">
                        <h2>{product.name}</h2>
                        <h3>{priceWithDiscountOrNo}</h3>
    
                        {/* Avaliation to product */}
                        <div id="available__product">
    
                            {/* Rating for product */}
                            <div id="rating">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFC700"/>
                                </svg>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFC700"/>
                                </svg>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFC700"/>
                                </svg>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFC700"/>
                                </svg>
    
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.1563 6.0125L0.800049 6.9375L5.40005 11.4188L4.31255 17.75L10 14.7625V0.25L7.1563 6.0125Z" fill="#FFC700"/>
                                </svg>
                            </div>
    
    
                            {/* Pipe separator */}
                            <svg id="pipe__separator" width="1" height="30" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" x2="0.5" y2="30" stroke="#9F9F9F"/>
                            </svg>
    
                                
                            <p>5 Customer Review</p>
                        </div>
    
                        {/* Description product */}
                        <p id="description">
                            {product.description}
                        </p>
    
                        {/* size product component */}
                        <SizeProduct/>
    
                        {/* Section color product */}
                        <section id="color__product" className="container__button">
                            <h4>Color</h4>
    
                            <div>
                                <button/>
                                <button/>
                                <button/>
                            </div>
                        </section>
    
                        {/* Section add product in cart */}
                        <AddingProduct product={product}/>            
    
                        <hr />
    
                        {/* Product information */}
                        <article id="product__information">
                            <ul>
                                <li><h5>SKU</h5> <span>{product?.sku}</span></li>
                                <li><h5>Category</h5> <span>{category?.name}</span></li>
                                <li><h5>Tags</h5> <span>{category?.name}, Chair, Home, Shop</span></li>
                                <li>
                                    <h5>Share</h5> 
                                    
                                    <div id="social__medias">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z" fill="black"/>
                                        </svg>
    
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.833252 2.365C0.833252 1.95877 0.994624 1.56919 1.28187 1.28195C1.56911 0.994702 1.9587 0.83333 2.36492 0.83333H17.6333C17.8346 0.833001 18.034 0.872383 18.22 0.949219C18.4061 1.02606 18.5752 1.13884 18.7176 1.28111C18.8601 1.42338 18.973 1.59235 19.0501 1.77834C19.1271 1.96433 19.1667 2.16368 19.1666 2.365V17.6333C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5753 18.7183 18.7178C18.5759 18.8602 18.4069 18.9731 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.127 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5754 1.02653 18.4065 0.949604 18.2206C0.87268 18.0346 0.833143 17.8354 0.833252 17.6342V2.365ZM8.08992 7.82333H10.5724V9.07C10.9308 8.35333 11.8474 7.70833 13.2249 7.70833C15.8658 7.70833 16.4916 9.13583 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3517V16.6067H8.08992V7.82333ZM3.50659 16.4925H6.17992V7.70833H3.50659V16.4917V16.4925ZM6.56242 4.84333C6.56746 5.07222 6.52673 5.29982 6.44262 5.51276C6.35851 5.7257 6.23271 5.91969 6.07261 6.08336C5.91251 6.24702 5.72133 6.37706 5.5103 6.46584C5.29926 6.55461 5.07262 6.60035 4.84367 6.60035C4.61472 6.60035 4.38808 6.55461 4.17704 6.46584C3.966 6.37706 3.77483 6.24702 3.61473 6.08336C3.45463 5.91969 3.32883 5.7257 3.24472 5.51276C3.16061 5.29982 3.11988 5.07222 3.12492 4.84333C3.13481 4.39404 3.32024 3.96649 3.64149 3.65224C3.96274 3.33798 4.39427 3.16201 4.84367 3.16201C5.29307 3.16201 5.7246 3.33798 6.04585 3.65224C6.3671 3.96649 6.55253 4.39404 6.56242 4.84333Z" fill="black"/>
                                        </svg>
    
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM16.7563 8.80713C16.7637 8.92188 16.7637 9.0415 16.7637 9.15869C16.7637 12.7427 14.0342 16.8711 9.04639 16.8711C7.5083 16.8711 6.08252 16.4243 4.88135 15.6553C5.10107 15.6797 5.31104 15.6895 5.53565 15.6895C6.80518 15.6895 7.97217 15.2598 8.90234 14.5322C7.71094 14.5078 6.70996 13.7266 6.36816 12.6523C6.78564 12.7134 7.16162 12.7134 7.59131 12.6035C6.97785 12.4789 6.42645 12.1457 6.0308 11.6606C5.63515 11.1755 5.41964 10.5684 5.4209 9.94238V9.9082C5.77979 10.1108 6.20215 10.2354 6.64404 10.2524C6.27256 10.0049 5.96792 9.66946 5.75711 9.27595C5.5463 8.88244 5.43585 8.443 5.43555 7.99658C5.43555 7.49121 5.56738 7.02979 5.8042 6.62939C6.48511 7.46762 7.33479 8.15318 8.29801 8.64152C9.26123 9.12986 10.3164 9.41004 11.395 9.46387C11.0117 7.62061 12.3887 6.12891 14.0439 6.12891C14.8252 6.12891 15.5283 6.45605 16.0239 6.9834C16.6367 6.86865 17.2227 6.63916 17.7451 6.33154C17.5425 6.95898 17.1177 7.48877 16.5537 7.82324C17.1006 7.76465 17.6279 7.61328 18.1162 7.40088C17.7476 7.94287 17.2861 8.42383 16.7563 8.80713Z" fill="black"/>
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                        </article>
                    </article>
                </section>
                
                {/* Horizontal line */}
                <hr className="horizontal__line" />
    
                {/* About tabs product component */}
                <AboutTabsProduct 
                    description={product.description} 
                    large_description={product.large_description}
                />
    
                <section id="related__products">
                    <h2>Related Products</h2>
    
                    <section id="container__products">
                        {productsRelated.map(product => (
                            <ProductCard key={product.id} product={product}/>
                        ))}
                    </section>
    
                    <ShowMoreButton 
                        products={productsRelated} 
                        setProducts={setProductsRelated}
                        category_id={category?.id}
                    />
                </section>
    
                {/* Horizontal line */}
                <hr className="horizontal__line" />
            </main>
        )
    }else{
        return (
            <NotFound>
                {/* Title */}
                <h1>&#128549; Este produto não existe!! &#128557;</h1>

                {/* Subtitle */}
                <h2>&#128071; Ir para: &#128071;</h2>
                
                {/* Links */}
                <div className='container__links'>
                    <Link to='/Home'>Ir para Home</Link>
                    <Link to='/shop'>Ir para shop</Link>
                </div>
            </NotFound>
        )
    }
}