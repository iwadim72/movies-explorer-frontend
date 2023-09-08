import React from "react";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import mainApi from "../../utils/MainApi";

function MoviesCard(props) {
    const { card } = props;
    const location = useLocation();

    const [isLiked, setIsLiked] = useState(false);
    const [isActiveRemoveClass, setIsActiveRemoveClass] = useState('card-movie__delete-button button');

    function getDuration() {
        const durationHours = Math.floor(card.duration / 60);
        const durationMinutes = card.duration % 60;
        if (durationHours > 0 && durationHours > 0) {
            return `${durationHours}ч ${durationMinutes}м`
        } else if (durationHours > 0) {
            return `${durationHours}ч`
        } else {
            return `${durationMinutes}м`
        }
    }

    function handleLike() {
        mainApi.changeLikeCardStatus(card, isLiked)
            .then((res) => {
                if (res.data._id) {
                    card._id = res.data._id
                }

                const likedList = JSON.parse(localStorage.getItem('cacheFilmLikedCardsList'));

                if (!isLiked) {
                    card.isLiked = true;
                    likedList.push(card);
                    localStorage.setItem('cacheFilmLikedCardsList', JSON.stringify(likedList));
                    setIsLiked(true);
                } else {
                    card.isLiked = false;
                    const newList = likedList.filter((item) => {
                        return item.id !== card.id
                    })

                    localStorage.setItem('cacheFilmLikedCardsList', JSON.stringify(newList));
                    setIsLiked(false);
                }
            })
            .catch((console.error));
    }

    function handleDelete() {
        props.handleDelete(card);
    }


    const handleMouseEnter = (e) => {
        setIsActiveRemoveClass('card-movie__delete-button card-movie__delete-button_active button')
    }

    const handleMouseLeave = (e) => {
        setIsActiveRemoveClass('card-movie__delete-button button')
    }

    React.useEffect(() => {
        setIsLiked(card.isLiked);
        const userWidth = window.innerWidth;
        if (userWidth < 770) {
            setIsActiveRemoveClass('card-movie__delete-button card-movie__delete-button_active button')
        }

    }, []);

    return (
        <li className="card-movie" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a className="card-movie__trailer-link" href={card.trailerLink} target="_blank">
                <img className="card-movie__photo" src={card.image.url ? card.image.url : card.image} alt="Заставка фильма"></img>
            </a>
            <div className="card-movie__container">
                <h5 className="card-movie__name">{card.nameRU}</h5>
                {location.pathname === '/movies' ? <button className={`card-movie__like-button button ${isLiked ? 'card-movie__like-button_active' : ''}`} onClick={handleLike}></button> :
                    <button className={isActiveRemoveClass} onClick={handleDelete}></button>}
            </div>

            <p className="card-movie__duration">{getDuration()}</p>
        </li>
    )
}

export default MoviesCard;