import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../Assets/Logo2.svg'
import Entrar from '../../Assets/Entrar.svg'
import Logout from '../../Assets/Logout.svg'
import Fechar from '../../Assets/fechar.svg'
import { goToLoginPage, goToPostListPage } from '../../Routes/Coordinator'

const Header = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        goToLoginPage(navigate)
    }

    const buttonHeader = () => {
        if (window.location.pathname === "/signup") {
            return (
                <>
                    <img src={Logo} alt="Logo" />
                    <button onClick={() => goToLoginPage(navigate)}> <img src={Entrar} alt="Botão login" /> </button>
                </>
            )
        } else if (window.location.pathname === "/") {
            return (
                <>
                    <img src={Logo} alt="Logo" />
                    <button onClick={logout}> <img src={Logout} alt="Botão logout" /> </button>
                </>
            )
        } else if (window.location.pathname.includes(`/postdetailpage`)) {
            return (
                <>
                    <button onClick={() => goToPostListPage(navigate)}> <img src={Fechar} alt="Botão fechar" /> </button>
                    <img src={Logo} alt="Logo" />
                    <button onClick={logout}> <img src={Logout} alt="Botão logout" /> </button>
                </>
            )
        } else if (window.location.pathname === "*") {
            return (
                <>
                    <img src={Logo} alt="Logo" />
                    <button onClick={() => goToLoginPage(navigate)}> <img src={Entrar} alt="Botão login" /> </button>
                </>
            )
        } else {
            return (
                <>

                </>
            )
        }
    }

    return (
        <>
            {buttonHeader()}
        </>
    )
}

export default Header