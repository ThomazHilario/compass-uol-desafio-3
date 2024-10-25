import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Header } from "../Components/Header";
import { Home } from "../Pages/Home";
import { Shop } from "../Pages/Shop";
import { SingleProduct } from "../Pages/SingleProduct";
import { PageError } from "../Pages/Error";
import { Footer } from "../Components/Footer";

export const RoutePagination = () => {
    return(
        <BrowserRouter>

            {/* Header */}
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop/:category?/:id?" element={<Shop/>}/>
                <Route path="/product/:id" element={<SingleProduct/>}/>\
                <Route path="*" element={<PageError/>}/>
            </Routes>
            
            {/* Footer */}
            <Footer/>
        </BrowserRouter>
    )
}