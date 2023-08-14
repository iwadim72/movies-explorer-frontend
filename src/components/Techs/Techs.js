import React from "react";

function Techs() {
    return (
        <section className="techs" id="techs">
            <div className="techs__container">
                <h2 className="techs__title">Технологии</h2>
                <div className="techs__border"></div>
                <span className="techs__count">7 технологий</span>
                <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном&nbsp;проекте.</p>
                <ul className="techs__list">
                    <li className="techs__name">HTML</li>
                    <li className="techs__name">CSS</li>
                    <li className="techs__name">JS</li>
                    <li className="techs__name">React</li>
                    <li className="techs__name">Git</li>
                    <li className="techs__name">Express.js</li>
                    <li className="techs__name">mongoDB</li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;