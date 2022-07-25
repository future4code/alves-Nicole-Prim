import {useNavigate} from "react-router-dom"
import {useEffect} from "react"

export function useProtectedPage() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null) {
            navigate("/LoginPage")
        }
    }, [])
}