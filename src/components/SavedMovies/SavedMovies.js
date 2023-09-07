import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
    const [options, setOptions] = React.useState({});
    const [checkBoxChecked, setCheckBoxChecked] = React.useState(false);

    function getOptionsForSavedMovies(optionsFilm) {
        setOptions(optionsFilm);
    }

    function handleChangeCheckBox() {
        setCheckBoxChecked(!checkBoxChecked);
        options.shortFilm = !checkBoxChecked;
    }

    React.useEffect(() => {

    }, [options, checkBoxChecked])

    return (
        <main className="main">
            <SearchForm onSubmit={getOptionsForSavedMovies} handleChangeCheckBox={handleChangeCheckBox} checkBoxChecked={checkBoxChecked} />
            <MoviesCardList options={options} checkBoxChecked={checkBoxChecked} />
        </main>
    )
}

export default SavedMovies;