// Components
import { BannerHome } from "../../Components/Banner-Home"
import { StoreInformation } from "../../Components/StoreInformation"

export const Home = () => {
    return (
        <main>
            {/* Banner */}
            <BannerHome/>

            <section>
                <h2>Browse The Range</h2>
            </section>

            <section>
                <h2>Our Products</h2>
            </section>

            <StoreInformation/>
        </main>
    )
}