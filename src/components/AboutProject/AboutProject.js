import React from "react";

function AboutProject() {
    return (
        <section className="about-project" id="about-project">
            <div className="about-project__container">
                <h2 className="about-project__title">О проекте</h2>
                <div className="about-project__border"></div>
                <div className="about-project__containers-description">
                    <div className="about-project__container-description">
                        <p className="about-project__info">Дипломный проект включал 5 этапов</p>
                        <p className="about-project__info-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="about-project__container-description">
                        <p className="about-project__info">На выполнение диплома ушло 5 недель</p>
                        <p className="about-project__info-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>

                <div className="about-project__time-containers">
                    <div className="about-project__container-backend"><p className="about-project__time-backend">1 неделя</p></div>
                    <div className="about-project__container-frontend"><p className="about-project__time-frontend">4 недели</p></div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;