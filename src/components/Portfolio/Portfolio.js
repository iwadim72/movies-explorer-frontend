import React from "react";

function Portfolio() {
    return (
        <>
            <h4 className="portfolio-text">Портфолио</h4>
            <ul className="portfolio">
                <li className="portfolio__link-container">
                    <a className="portfolio__link link" href="https://github.com/iwadim72/first-project" target="_blank">
                        <p className="portfolio__link-text">Статичный сайт</p>
                        <p className="portfolio__link-icon">↗</p>
                    </a>

                    <div className="portfolio__border"></div>
                </li>

                <li className="portfolio__link-container">
                    <a className="portfolio__link link" href="https://github.com/iwadim72/russian-travel" target="_blank">
                        <p className="portfolio__link-text">Адаптивный сайт</p>
                        <p className="portfolio__link-icon">↗</p>
                    </a>

                    <div className="portfolio__border"></div>
                </li>

                <li className="portfolio__link-container">
                    <a className="portfolio__link link" href="https://github.com/iwadim72/react-mesto-api-full-gha" target="_blank">
                        <p className="portfolio__link-text">Одностраничное приложение</p>
                        <p className="portfolio__link-icon">↗</p>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Portfolio;