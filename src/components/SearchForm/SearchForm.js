import React from "react";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../../hooks/useForm';

function SearchForm(props) {
    const { values, handleChange, isChanged, isValid, errors } = useFormWithValidation();
    const disabled = !isValid;

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({
            name: values.filmName,
            shortFilm: props.checkBoxChecked
        });
    }

    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form" onSubmit={handleSubmit}>
                    <label className="search__field">
                        <input className="search__input" name="filmName" required placeholder="Фильм" value={values.filmName || (isChanged ? '' : (props.lastSearch === undefined ? '' : props.lastSearch))} onChange={handleChange}></input>
                    </label>

                    <button type="submit" className="search__submit" disabled={disabled}></button>
                    <span className="search__error">{errors.filmName ? 'Нужно ввести ключевое слово' : ''}</span>
                </form>

                <FilterCheckbox handleChangeCheckBox={props.handleChangeCheckBox} checkBoxChecked={props.checkBoxChecked} />

                <div className="search__border"></div>
            </div>
        </section>
    )
}

export default SearchForm;