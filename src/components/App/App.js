import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useLoading } from '../../hooks/useLoading';
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = React.useState('');
  const [isSuccessMessage, setIsSuccessMessage] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoadingUser, setIsLoadingUser] = React.useState(true)
  const { isLoading, setIsLoading } = useLoading();

  const navigate = useNavigate();

  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      setIsLoadingUser(true);
      mainApi.checkToken(jwt)
        .then((res) => {
          if (res) {
            handleLogin();
            setCurrentUser(res.data);
          }
        })
        .catch(console.error)
        .finally(() => {
          setIsLoadingUser(false);
        });
    } else { setIsLoadingUser(false); }
  }

  function handleRegister(values) {
    setIsLoading(true);
    mainApi.register(values.name, values.email, values.password)
      .then((res) => {
        if (res.data.email) {
          setIsErrorMessage('')
          handleAuth(values)
        }
      })
      .catch((err) => {
        setIsErrorMessage(err.message);
      })
      .finally(() => { setIsLoading(false) });
  }

  function handleAuth(values) {
    setIsLoading(true);
    mainApi.authorize(values.email, values.password)
      .then((res) => {
        if (res.token) {
          setIsErrorMessage('')
          localStorage.setItem('jwt', res.token);
          getUserInfo();
          handleLogin();
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        setIsErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function getUserInfo() {
    setIsLoadingUser(true);

    mainApi.getProfileInfo()
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoadingUser(false);
      });
  }

  function logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('cacheFilmSearchName');
    localStorage.removeItem('cacheFilmSearchShortFilm');
    localStorage.removeItem('cacheFilmSearchCardsList');
    localStorage.removeItem('cacheFilmLikedCardsList');
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function resetMessage() {
    setIsErrorMessage('');
    setIsSuccessMessage('');
  }

  function updateUserInfo(info) {
    setIsErrorMessage('');
    setIsSuccessMessage('');
    setIsLoading(true);
    mainApi.setUserInfo(info)
      .then((res) => {
        setIsErrorMessage('');
        setIsSuccessMessage('Успешно!');
        setCurrentUser(res.data);
      })
      .catch((err) => {
        setIsErrorMessage(err.message);
        setIsSuccessMessage('');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  React.useEffect(() => {
    handleTokenCheck();
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Routes>
          <Route path='/' element={
            <>
              <Header loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>
          } />
          <Route path='/movies' element={
            <ProtectedRoute loggedIn={loggedIn} isLoading={isLoadingUser}>
              <>
                <Header />
                <Movies />
                <Footer />
              </>
            </ProtectedRoute>
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute loggedIn={loggedIn} isLoading={isLoadingUser}>
              <>
                <Header />
                <SavedMovies />
                <Footer />
              </>
            </ProtectedRoute>
          } />
          <Route path='/profile' element={
            <ProtectedRoute loggedIn={loggedIn} isLoading={isLoadingUser}>
              <>
                <Header />
                <Profile handleSubmit={updateUserInfo} isError={isErrorMessage} handleLogout={logout} isLoading={isLoading} isSuccessMessage={isSuccessMessage} resetMessage={resetMessage} />
              </>
            </ProtectedRoute>
          } />
          <Route path='/sign-up' element={
            <Register handleRegister={handleRegister} isError={isErrorMessage} loggedIn={loggedIn} isLoadingUser={isLoadingUser} isLoading={isLoading} setIsErrorMessage={setIsErrorMessage} />
          } />

          <Route path='/sign-in' element={
            <Login handleLogin={handleAuth} isError={isErrorMessage} loggedIn={loggedIn} isLoadingUser={isLoadingUser} isLoading={isLoading} setIsErrorMessage={setIsErrorMessage} />
          } />

          <Route path='/*' element={
            <NotFound />
          } />
        </Routes >
      </div >
    </CurrentUserContext.Provider>
  );
}

export default App;
