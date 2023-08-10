import React from "react";
import headerLogo from '../../images/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
    const location = useLocation();

    /// В финальном приложении в лендинге будет показываться Navigate, на данный момент отсутствует переменная loggedIn
    return (
        <header className={`${location.pathname === '/' ? 'header_color_blue' : ''} header`}>
            <img src={headerLogo} alt="Логотип проекта" className="header__logo" />
            {location.pathname !== '/' ? <Navigation /> :
                <div className="header__container">
                    <Link to="sign-up" replace className="header__link-register link">Регистрация</Link>
                    <Link to="sign-in" replace ><button className="header__link-auth button">Войти</button></Link>
                </div>}
        </header>
    )
}

export default Header;