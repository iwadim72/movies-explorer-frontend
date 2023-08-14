import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    function navigateBack() {
        navigate(-1);
    }
    return (
        <section className="not-found">
            <div className='not-found__container'>
                <h1 className='not-found__title'>404</h1>
                <p className='not-found__description'>Страница не найдена</p>
            </div>

            <button type="button" className="not-found__link link" onClick={navigateBack}>Назад</button>
        </section>
    )
}

export default NotFound;