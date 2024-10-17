// interface
import { ProductProps } from "../../Interfaces/product-type"

// css import
import './product-card.css'

export const ProductCard = ({ product }:{product:ProductProps}) => {

    // Format price in BRL
    const formatPrice = (price:number | string) => {

        // Parse param value in number
        const fixPrice = Number(price)

        // Return price format in BRL
        return fixPrice.toLocaleString('pt-br', {style:'currency', currency:'BRL'})
    }

    // tag Logics
    const isProductWithDiscountOrIsNew = product.discount_price > 0 || product.is_new
    const tagColor = product.discount_price > 0 ? '#2EC1AC' : '#E97171'

    return(
        <div className="product__card">
            <img src={product.image_link} alt={product.name} />

            <article>

                {isProductWithDiscountOrIsNew && (
                    <div className="tag__card" style={{backgroundColor: tagColor}}>
                        {product.is_new && <p>New</p>}
                        {product.discount_percent > 0 && <p>-{product.discount_percent}%</p>}
                    </div>
                )}

                {/* Title Card */}
                <h3 className="title__card">{product.name}</h3>

                {/* Subtitle Card */}
                <h4 className="subtitle__card">{product.subTitle}</h4>

                <section>
                    {product.discount_price > 0 ? (
                        <div className="price__details">

                            {/* Current Price */}
                            <h5 className="current__price">{formatPrice(product.price - product.discount_price)}</h5>

                            {/* Old Price */}
                            <h6 className="old__price">{formatPrice(product.price)}</h6>
                        </div>

                    ) : <h5 className="current__price">{formatPrice(product.price)}</h5>}
                </section>
            </article>

            <div className="moreInformation"></div>
        </div>
    )
}