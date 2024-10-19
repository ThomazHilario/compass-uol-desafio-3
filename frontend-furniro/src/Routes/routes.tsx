import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Header } from "../Components/Header";
import { Home } from "../Pages/Home";
import { Shop } from "../Pages/Shop";
import { Footer } from "../Components/Footer";

export const RoutePagination = () => {
    return(
        <BrowserRouter>

            {/* Header */}
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop/:category?/:id?" element={<Shop/>}/>
            </Routes>
            
            {/* Footer */}
            <Footer/>
        </BrowserRouter>
    )
}