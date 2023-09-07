import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login(props) {
    function handleSubmit(values) {
        props.handleLogin(values);
    }

    React.useEffect(() => {
        props.setIsErrorMessage('');
    }, [])

    return (
        <AuthForm title="Рады видеть!" buttonText='Войти' linkDescription='Ещё не зарегистрированы?' linkText='Регистрация' linkUrl='/sign-up' onSubmit={handleSubmit} isError={props.isError} isLoadingUser={props.isLoadingUser} loggedIn={props.loggedIn} isLoading={props.isLoading} />
    )
}

export default Login;