import React from "react";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
    const location = useLocation();

    const [isActiveRemoveClass, setIsActiveRemoveClass] = useState('card-movie__delete-button button')

    const handleMouseEnter = (e) => {
        setIsActiveRemoveClass('card-movie__delete-button card-movie__delete-button_active button')
    }

    const handleMouseLeave = (e) => {
        setIsActiveRemoveClass('card-movie__delete-button button')
    }

    return (
        <li className="card-movie" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a className="card-movie__trailer-link" href={props.card.trailerLink} target="_blank">
                <img className="card-movie__photo" src={props.card.image} alt="Заставка фильма"></img>
            </a>
            <div className="card-movie__container">
                <h5 className="card-movie__name">{props.card.nameRU}</h5>
                {location.pathname === '/movies' ? <button className="card-movie__like-button button"></button> :
                    <button className={isActiveRemoveClass}></button>}
            </div>

            <p className="card-movie__duration">1ч 30м</p>
        </li>
    )
}

export default MoviesCard;