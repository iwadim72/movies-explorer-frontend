import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

function Navigation() {
    const location = useLocation();
    const [isOpenedMenu, setIsOpenedMenu] = useState(false);

    function openMenu() {
        setIsOpenedMenu(true);
    }

    function closeMenu() {
        setIsOpenedMenu(false);
    }

    useEffect(() => { setIsOpenedMenu(false) }, [location.pathname])

    return (
        <>
            <nav className={`navigation ${isOpenedMenu ? 'navigation_active' : ''}`}>
                <button className="navigation__button-close button" onClick={closeMenu}></button>
                <div className="navigation__container-link">
                    <Link to="/" replace className="navigation__link navigation__link_type_main link">Главная</Link>
                    <Link to="/movies" replace className={`navigation__link ${location.pathname === '/movies' ? 'navigation__link_active' : ''} link`}>Фильмы</Link>
                    <Link to="/saved-movies" replace className={`navigation__link ${location.pathname === '/saved-movies' ? 'navigation__link_active' : ''} link`}>Сохраненные фильмы</Link>
                </div>

                <Link to="/profile" replace className="navigation__link navigation__link_type_profile link" >
                    <div className="navigation__container-profile">
                        <p className="navigation__link-text">Аккаунт</p>
                        <button type="button" className="navigation__button-profile"></button>
                    </div>
                </Link>
            </nav>

            <button type="button" className="navigation__button-nav button" onClick={openMenu}></button>
            <div className={`navigation__overlay ${isOpenedMenu ? 'navigation__overlay_active' : ''}`} onClick={closeMenu}></div>
        </>
    )
}

export default Navigation;