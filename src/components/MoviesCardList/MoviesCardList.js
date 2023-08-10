import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';

function MoviesCardList() {
    const location = useLocation();

    const cardList = [
        {
            nameRU: 'Тестовый фильм',
            image: 'https://shapka-youtube.ru/wp-content/uploads/2021/03/patsanskaya-kartinka-na-avu.jpg',
            trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://shapka-youtube.ru/wp-content/uploads/2021/03/patsanskaya-kartinka-na-avu.jpg',
            trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://shapka-youtube.ru/wp-content/uploads/2021/03/patsanskaya-kartinka-na-avu.jpg',
            trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://shapka-youtube.ru/wp-content/uploads/2021/03/patsanskaya-kartinka-na-avu.jpg',
            trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://shapka-youtube.ru/wp-content/uploads/2021/03/patsanskaya-kartinka-na-avu.jpg',
            trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://shapka-youtube.ru/wp-content/uploads/2021/03/patsanskaya-kartinka-na-avu.jpg',
            trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://shapka-youtube.ru/wp-content/uploads/2021/03/patsanskaya-kartinka-na-avu.jpg',
            trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://shapka-youtube.ru/wp-content/uploads/2021/03/patsanskaya-kartinka-na-avu.jpg',
            trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: 120
        },
        {
            nameRU: 'Тестовый фильм',
            image: 'https://shapka-youtube.ru/wp-content/uploads/2021/03/patsanskaya-kartinka-na-avu.jpg',
            trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: 120
        }
    ];

    return (
        <section className="movies">
            <ul className="movies__list">
                {cardList.map((card, i) => { return < MoviesCard card={card} key={i} /> })}
            </ul>

            {location.pathname === '/movies' ? <button className="movies__button-more button">Ещё</button> : null}
        </section>
    )
}

export default MoviesCardList;