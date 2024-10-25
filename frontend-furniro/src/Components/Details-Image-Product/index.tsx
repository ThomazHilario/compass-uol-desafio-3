// React
import { useState } from "react"

// Interface
import { ProductProps } from "../../Interfaces/product-type"

// css import
import './details-image-product.css'

export const DetailsImageProduct = ({product}:{product:ProductProps}) => {

    // State - image
    const [image, setImage] = useState<string>(product.image_link)

    return(
        <section id="images__to__product">
            <section id="others__image__products">
                {product.other_images_link.map((image, idx) => (
                    <img 
                        key={idx} 
                        src={image} 
                        alt={`Outras imagem do produto ${product.name}`}
                        onClick={() => setImage(image)}
                    />
                ))}
            </section>

            <img id="main__image" src={image} alt={`imagem do produto ${product.name}`} />
        </section>
    )
}