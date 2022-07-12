import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListTripsPage from "../Pages/ListTripsPage/ListTripsPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="ListTripsPage" element={<ListTripsPage />} />
                <Route path="LoginPage" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )


}