import React from "react";
import AuthForm from '../AuthForm/AuthForm';

function Register(props) {

    function handleSubmit(values) {
        props.handleRegister(values);
    }

    React.useEffect(() => {
        props.setIsErrorMessage('');
    }, [])

    return (
        <AuthForm title="Добро пожаловать!" buttonText="Зарегистрироваться" linkDescription="Уже зарегистрированы?" linkText="Войти" linkUrl='/sign-in' onSubmit={handleSubmit} isError={props.isError} isLoadingUser={props.isLoadingUser} loggedIn={props.loggedIn} isLoading={props.isLoading} />
    )
}

export default Register;