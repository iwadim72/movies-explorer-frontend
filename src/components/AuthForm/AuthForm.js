import React from "react";
import { Link, useLocation, Navigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from "../../hooks/useForm";
import Preloader from "../Preloader/Preloader";

function AuthForm(props) {
    const location = useLocation();
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(values)
    }

    return (

        <>
            {props.isLoadingUser ? <Preloader /> : !props.loggedIn ?
                <section className="auth">
                    <div className="auth__container">
                        <Link to="/" className="link auth__link-logo"><img src={logo} alt="Логотип проекта" className="auth__logo" /></Link>
                        <h1 className="auth__title">{props.title}</h1>
                        <form className="auth__form" onSubmit={handleSubmit}>
                            <div className="auth__form-container">
                                {location.pathname === '/sign-up' ?
                                    <div className="auth__field">
                                        <label className="auth__label">Имя</label>
                                        <input className="auth__input" type="text" name="name" minLength="2" maxLength="30" placeholder="Имя" value={values.name || ''} onChange={handleChange}></input>
                                        <span className="auth__input-error">{errors.name}</span>
                                    </div> : null}
                                <div className="auth__field">
                                    <label className="auth__label">E-mail</label>
                                    <input className="auth__input" type="email" name="email" pattern="^[a-zA-Z0-9+_.\\-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,4}$" required placeholder="E-mail" onChange={handleChange} value={values.email || ''}></input>
                                    <span className="auth__input-error">{errors.email}</span>
                                </div>
                                <div className="auth__field">
                                    <label className="auth__label">Пароль</label>
                                    <input className="auth__input" type="password" name="password" required placeholder="Пароль" onChange={handleChange} value={values.password || ''}></input>
                                    <span className="auth__input-error">{errors.password}</span>
                                </div>
                            </div>

                            <div className="auth__form-container">
                                <span className="auth__error">{props.isError}</span>
                                <button className="auth__button button" type="submit" disabled={props.isLoading || !isValid}>{props.isLoading ? 'Отправка...' : props.buttonText}</button>
                                <div className="auth__container-link">
                                    <p className="auth__link-text">{props.linkDescription}</p>
                                    <Link to={props.linkUrl} replace className="auth__link link">{props.linkText}</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </section> : <Navigate to="/" replace />}
        </>

    )
}

export default AuthForm;