import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import getCorrectCardList from '../../utils/getCorrectCardList';
import { useLoading } from "../../hooks/useLoading";

function Movies(props) {
    const [fullCardList, setFullCardList] = React.useState([]);
    const [correctCardList, setCorrectCardList] = React.useState();
    const [options, setOptions] = React.useState({});
    const [checkBoxChecked, setCheckBoxChecked] = React.useState(false);
    const { isLoading, setIsLoading } = useLoading();

    function handleChangeCheckBox() {
        setCheckBoxChecked(!checkBoxChecked);
        options.shortFilm = !checkBoxChecked;
        localStorage.setItem('cacheFilmSearchShortFilm', JSON.stringify(!checkBoxChecked));
    }

    /// Кэширую информацию, что бы не посылать повторные запросы, в случае, если в дальнейшем, фильмы будут меняться - данный функционал будет отключен
    function getCardList(optionsFilm) {
        if (localStorage.getItem('cacheFilmSearchCardsList')) {
            setFullCardList(JSON.parse(localStorage.getItem('cacheFilmSearchCardsList')));
            localStorage.setItem('cacheFilmSearchName', optionsFilm.name);
            localStorage.setItem('cacheFilmSearchShortFilm', JSON.stringify(optionsFilm.shortFilm));
            setOptions(optionsFilm);
        } else {
            setIsLoading(true);
            moviesApi.getFilms()
                .then((res) => {
                    setFullCardList(res);
                    setOptions(optionsFilm);
                    localStorage.setItem('cacheFilmSearchName', optionsFilm.name);
                    localStorage.setItem('cacheFilmSearchShortFilm', JSON.stringify(optionsFilm.shortFilm));
                    localStorage.setItem('cacheFilmSearchCardsList', JSON.stringify(res));
                })
                .catch((console.error))
                .finally(() => {
                    setIsLoading(false);
                })
        }
    }


    React.useEffect(() => {
        if (localStorage.getItem('cacheFilmSearchName')) {
            setOptions({
                name: localStorage.getItem('cacheFilmSearchName'),
                shortFilm: JSON.parse(localStorage.getItem('cacheFilmSearchShortFilm'))
            });
            setFullCardList(JSON.parse(localStorage.getItem('cacheFilmSearchCardsList')));
            if (JSON.parse(localStorage.getItem('cacheFilmSearchShortFilm'))) {
                setCheckBoxChecked(true);
            }
        }
    }, [])

    React.useEffect(() => {
        if (options.name) {
            setCorrectCardList(getCorrectCardList(options, fullCardList));
        }
    }, [checkBoxChecked, options])


    return (
        <main className="main">
            <SearchForm onSubmit={getCardList} checkBoxChecked={checkBoxChecked} handleChangeCheckBox={handleChangeCheckBox} lastSearch={options.name} />
            <MoviesCardList cardList={correctCardList} isLoading={isLoading} />
        </main>
    )
}

export default Movies;