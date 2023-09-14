import React from "react";
import { useState } from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useForm";

function Profile(props) {
    const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();
    const currentUser = React.useContext(CurrentUserContext);
    const [isEdit, setIsEdit] = useState(false);
    const isChanged = values.name !== currentUser.name || values.email !== currentUser.email;
    const buttonEnabled = !(isValid === isChanged);

    function handleSubmit(e) {
        e.preventDefault();
        props.handleSubmit({ name: values.name, email: values.email })
    }

    function handleEdit() {
        setIsEdit(!isValid);
    }

    React.useEffect(() => {
        props.resetMessage();
        setValues({
            email: currentUser.email,
            name: currentUser.name
        })
    }, [])


    return (
        <form className="profile" onSubmit={handleSubmit}>
            <div className="profile__container">
                <h1 className="profile__title">Привет, {currentUser.name}</h1>

                <div className="profile__field">
                    <label className="profile__label">Имя</label>
                    <input type="text" name="name" className="profile__input" required minLength="2" maxLength="30" readOnly={!isEdit} onChange={handleChange} placeholder="Введите имя:" value={values.name ? values.name : ''} />
                    <span className="profile__input-error">{errors.name}</span>
                </div>

                <div className="profile__border"></div>

                <div className="profile__field">
                    <label className="profile__label">E-mail</label>
                    <input type="email" name="email" pattern="^[a-zA-Z0-9+_.\-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}$" className="profile__input" required value={values.email ? values.email : ''} onChange={handleChange} placeholder="Введите E-mail:" readOnly={!isEdit} />
                    <span className="profile__input-error">{errors.email}</span>
                </div>
            </div>

            <div className="profile__container-utils">
                {isEdit ?
                    <>
                        <span className={`profile__error ${props.isSuccessMessage ? 'profile__error_green' : ''}`}>{props.isError || props.isSuccessMessage}</span>
                        <button type="submit" className="profile__button-submit button" disabled={buttonEnabled}>Сохранить</button>
                    </> : <>
                        <button type="button" className="profile__button-edit button" onClick={handleEdit}>Редактировать</button>
                        <button type="button" className="profile__button-exit button" onClick={props.handleLogout}>Выйти из аккаунта</button>
                    </>}
            </div>
        </form>
    )
};

export default Profile;