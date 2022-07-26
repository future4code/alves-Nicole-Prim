import {useNavigate} from "react-router-dom"
import {useLayoutEffect} from "react"
import { goToLoginPage } from "../Routes/Coordinator"

export function useProtectedPage() {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            goToLoginPage(navigate)
        }
    }, [navigate])
}