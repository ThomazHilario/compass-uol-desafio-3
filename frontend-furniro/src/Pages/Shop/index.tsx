// React Router Dom
import { useParams } from 'react-router-dom'

// Components
import { BannerShop } from '../../Components/Banner-Shop'

// css import 
import './shop.css'

export const Shop = () => {

    // Params
    const params = useParams()

    console.log()

    return(
        <main>
            <BannerShop/>
        </main>
    )
}