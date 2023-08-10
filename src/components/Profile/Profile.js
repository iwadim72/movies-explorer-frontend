import React from "react";
import { useState } from 'react';

function Profile() {
    const [isEdit, setIsEdit] = useState(false);

    function handleEdit() {
        setIsEdit(true);
    }

    return (
        <form className="profile" onSubmit={(event) => {
            event.preventDefault();
            console.log('сработал')
        }}>
            <div className="profile__container">
                <h1 className="profile__title">Привет, Вадим!</h1>

                <div className="profile__field">
                    <label className="profile__label">Имя</label>
                    <input type="text" className="profile__input" required minlength="2" maxlength="30" readOnly={!isEdit} placeholder="Введите имя:" value="Вадим" />
                </div>

                <div className="profile__border"></div>

                <div className="profile__field">
                    <label className="profile__label">E-mail</label>
                    <input type="text" className="profile__input" required value="test@gmail.com" placeholder="Введите E-mail:" readOnly />
                </div>
            </div>

            <div className="profile__container-utils">
                {isEdit ? <button type="submit" className="popup__button-submit" disabled>Сохранить</button> : <>
                    <button type="button" className="profile__button-edit button" onClick={handleEdit}>Редактировать</button>
                    <button type="button" className="profile__button-exit button">Выйти из аккаунта</button>
                </>}
            </div>
        </form>
    )
};

export default Profile;