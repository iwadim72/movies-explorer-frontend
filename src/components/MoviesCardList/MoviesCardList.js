import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';
import { useCardList } from "../../hooks/useCardList";
import getCorrectCardList from "../../utils/getCorrectCardList";
import mainApi from '../../utils/MainApi';

function MoviesCardList(props) {
    const location = useLocation();
    const { cardsCountInLine, cardsLineCount, setCardsLineCount, CardList } = useCardList();

    const [cardList, setCardList] = React.useState([]);
    const [likedCards, setLikedCards] = React.useState([]);
    const [correctLikedCards, setCorrectLikedCards] = React.useState([]);
    const [isSearched, setIsSearched] = React.useState(false);

    const correctCardsCount = cardsCountInLine * cardsLineCount;
    const buttonMoreIsActive = (location.pathname === '/movies') && props.cardList && cardList && (cardList.length > correctCardsCount);


    function handleButtonMoreClick() {
        if (cardsCountInLine === 1) {
            setCardsLineCount(cardsLineCount + 2);
        } else { setCardsLineCount(cardsLineCount + 1); }

    }

    function handleCardDelete(card) {
        mainApi.removeLike(card._id)
            .then(() => {
                const newLikedCards = likedCards.filter((item) => item._id !== card._id)
                setLikedCards(newLikedCards)
                localStorage.setItem('cacheFilmLikedCardsList', JSON.stringify(newLikedCards))
            })
            .catch((err) => {
                console.log(err);
            })
    }

    /// Сопоставление двух api для отображения лайков
    /// Кэширую информацию, что бы не посылать повторные запросы, в случае, если в дальнейшем, фильмы будут меняться - данный функционал будет отключен
    function getLikedMovies() {
        const cardList = props.cardList;
        const likedCardsObject = {};
        let likedCardList;

        function getMovies() {
            likedCardList.forEach((card) => {
                card.isLiked = true;
                if (card.movieId) {
                    likedCardsObject[card.movieId] = card._id;
                } else { likedCardsObject[card.id] = card._id; }

            })
            if (props.cardList) {
                cardList.forEach((card) => {
                    if (likedCardsObject[card.id]) {
                        card._id = likedCardsObject[card.id]
                        card.isLiked = true;
                    } else {
                        card.isLiked = false;
                    }
                });
            };

            setIsSearched(true);
            setCardList(cardList);
            setLikedCards(likedCardList);
            setCorrectLikedCards(likedCardList);
        }

        if (localStorage.getItem('cacheFilmLikedCardsList')) {
            likedCardList = JSON.parse((localStorage.getItem('cacheFilmLikedCardsList')));
            getMovies();
        } else {
            mainApi.getLikedMovies()
                .then((res) => {
                    likedCardList = res.data;

                    getMovies()

                    localStorage.setItem('cacheFilmLikedCardsList', JSON.stringify(likedCardList))
                })
                .catch(console.error);
        }
    }


    React.useEffect(() => {
        function handleResize() {
            setTimeout(CardList, 100);
        }

        window.addEventListener("resize", handleResize);

        return function cleanup() {
            window.removeEventListener("resize", handleResize);
        }
    });

    React.useEffect(() => {
        if (props.cardList || location.pathname === '/saved-movies') {
            CardList();
            getLikedMovies();
        }
    }, [props.cardList]);


    /// Фильтрация сохраненных фильмов
    React.useEffect(() => {
        const options = props.options;
        if (location.pathname === '/saved-movies' && props.checkBoxChecked) {
            setCorrectLikedCards(getCorrectCardList(options, likedCards));
        } else if (location.pathname === '/saved-movies' && likedCards.length >= 0) {
            setCorrectLikedCards(getCorrectCardList(options, likedCards));

        }
    }, [props.checkBoxChecked, likedCards, props.options])


    return (
        <section className="movies">
            <ul className="movies__list">
                {cardList ? cardList.map((card, i) => {
                    if (i < correctCardsCount && !props.isLoading) {
                        return < MoviesCard card={card} key={card.id} />
                    }
                }) : ''}
                {(location.pathname === '/saved-movies') && correctLikedCards ? correctLikedCards.map((card, i) => {
                    return < MoviesCard card={card} key={card._id} handleDelete={handleCardDelete} />
                }) : ''}
            </ul>

            {(cardList && (cardList.length === 0)) && isSearched ? 'Ничего не найдено' : ''}
            {props.isLoading ? <Preloader /> : ''}

            {buttonMoreIsActive && !props.isLoading ? <button className="movies__button-more button" onClick={handleButtonMoreClick}>Ещё</button> : null}
        </section>
    )
}

export default MoviesCardList;