import logo from '../../logo.svg';
import './App.css';
import Header from '../Header/Header';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="root">
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
        <Route path='/movies' element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
        } />
        <Route path='/saved-movies' element={
          <>
            <Header />
            <SavedMovies />
            <Footer />
          </>
        } />
        <Route path='/profile' element={
          <>
            <Header />
            <Profile />
          </>
        } />
        <Route path='/sign-up' element={
          <Register />
        } />

        <Route path='/sign-in' element={
          <Login />
        } />

        <Route path='/not-found' element={
          <NotFound />
        } />
      </Routes >
    </div >
  );
}

export default App;
