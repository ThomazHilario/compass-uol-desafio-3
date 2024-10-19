// React Router Dom
import { Link } from "react-router-dom"

//Interface
import { CategoryProps } from "../../Interfaces/category-type"

// Interface CategoryCardProps
interface CategoryCardProps{
    category:CategoryProps
}

// Css import
import './category-card.css'

export const CategoryCard = ({ category }:CategoryCardProps) => {
    return(
        <Link to={`/shop/${category.name}/${category.id}`} className="category__card" key={category.id}>
            <img src={category.image_link} alt={category.name}/>
            <h3>{category.name}</h3>
        </Link>
    )
}