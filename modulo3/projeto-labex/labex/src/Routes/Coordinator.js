

export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToListTripsPage = (navigate) => {
    navigate("/ListTripsPage")
}

export const goToLoginPage = (navigate) => {
    navigate("/LoginPage")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/AdminHomePage")
}

export const goToApplicationFormPage = (navigate) => {
    navigate("/ApplicationFormPage")
}

export const goToCreateTripPage= (navigate) => {
    navigate("/CreateTripPage")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/TripDetailsPage/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}