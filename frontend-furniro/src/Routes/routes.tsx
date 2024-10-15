import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Header } from "../Components/Header";
import { Home } from "../Pages/Home";

export const RoutePagination = () => {
    return(
        <BrowserRouter>

            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}