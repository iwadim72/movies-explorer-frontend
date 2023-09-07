import React from "react";
import headerLogo from '../../images/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    const location = useLocation();

    return (
        <header className={`${location.pathname === '/' ? 'header_color_blue' : ''} header`}>
            <Link to="/" className="link header__link-logo"><img src={headerLogo} alt="Логотип проекта" className="header__logo" /></Link>
            {location.pathname !== '/' || props.loggedIn ? <Navigation /> :
                <div className="header__container">
                    <Link to="sign-up" replace className="header__link-register link">Регистрация</Link>
                    <Link to="sign-in" replace ><button className="header__link-auth button">Войти</button></Link>
                </div>}
        </header>
    )
}

export default Header;