import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListTripsPage from "../Pages/ListTripsPage/ListTripsPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Header from "../Pages/Header/Header";
import AdminHomePage from '../Pages/AdminHomePage/AdminHomePage'
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailsPage'
import { useParams } from 'react-router-dom'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
{/*                 <Route path="HomePage" element={<HomePage />} /> */}
                <Route path="ListTripsPage" element={<ListTripsPage />} />
                <Route path="LoginPage" element={<LoginPage />} />
                <Route path="AdminHomePage" element={<AdminHomePage />} />
                <Route path="ApplicationFormPage" element={<ApplicationFormPage />} />
                <Route path="CreateTripPage" element={<CreateTripPage />} />
                <Route path="TripDetailsPage/:id" element={<TripDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}