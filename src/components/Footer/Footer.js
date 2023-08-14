import React from "react";


function Footer() {
    return (
        <footer className="footer" >
            <h5 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h5>
            <div className="footer__border"></div>
            <div className="footer__info-container">
                <p className="footer__author">© 2023</p>
                <div className="footer__links">
                    <a className="footer__link link" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a>
                    <a className="footer__link link" href="https://github.com/iwadim72" target="_blank">Github</a>
                </div>
            </div>
        </footer >
    )
}

export default Footer;