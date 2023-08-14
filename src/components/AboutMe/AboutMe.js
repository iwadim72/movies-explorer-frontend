import React from "react";
import photo from '../../images/Фото.jpg'
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
    return (
        <section className="about-me" id="about-me">
            <div className="about-me__container">
                <h2 className="about-me__title">Студент</h2>
                <div className="about-me__border"></div>
                <div className="about-me__container-info">
                    <div className="about-me__container-text">
                        <h3 className="about-me__name">Вадим</h3>
                        <span className="about-me__job">Фронтенд-разработчик, 22 года</span>
                        <p className="about-me__info">Я родился и живу в Тольятти, с отличием закончил Музыкальный Колледж по направлению Артист - Преподаватель класса Саксофона.
                            С детства тяготел к технологиям, и после окончания учебного заведения решился на смену специализации.
                            Во время прохождения курса по веб-разработке начал брать фриланс-заказы и на данный момент активно развиваюсь в данном направлении.</p>
                        <a className="about-me__github-link link" href="https://github.com/iwadim72" target="_blank">Github</a>
                    </div>

                    <img className="about-me__photo" alt="Моя фотография" src={photo} />
                </div>

                <Portfolio />
            </div>
        </section >
    )
}

export default AboutMe;