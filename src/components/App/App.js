import {useEffect, useState } from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {Route, Switch, useHistory} from "react-router-dom";
import './App.css';
import PageNotFound from "../PageNotFound/PageNotFound";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ErrorWindow from "../ErrorWindow/ErrorWindow";
import MainApi from "../../utils/MainApi/MainApi"

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [errors, setErrors] = useState('');
  const [isOpenErrors, setIsOpenErrors] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    {
      name: "",
      email: "",
      _id: ""
    }
  );
  const [saveMovies, setSaveMovies] =  useState([]);

  useEffect(() => {
    handleTokenCheck();
  }, [])

  function handleOpenNavigation() {
    setIsOpenMenu(true);
  }

  function handleCloseNavigation () {
    setIsOpenMenu(false);
  }

  function handleCloseErrors () {
    setIsOpenErrors(false);
  }

  function errorsSet (text) {
    setErrors(text);
    setIsOpenErrors(true);
  }

  const history = useHistory();

  function handleTokenCheck(){
    MainApi.checkToken()
      .then((res) => {
        if (!res.ok) throw res;
        else return res.json();
      })
      .then((user) => {
        const url = localStorage.getItem('url')
        setIsLogin(true);
        setCurrentUser(user);
        if (url) history.push(url);
      })
      .catch((err) => {
        errorsSet(err);
      });
  }

  function onCardDislike(movie) {
    MainApi.postDeleteMovie(movie._id)
      .then((res) => {
        if (!res.ok) throw res;
      })
      .then(() => {
        setSaveMovies((state) => state.filter((stateCard) => stateCard._id !== movie._id))
      })
      .catch((err) => {
        setErrors(err);
      })
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={{
        loggedIn: isLogin,
        setIsLogin: setIsLogin,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        setErrors: errorsSet,
        handleTokenCheck: handleTokenCheck,
      }}>
        <Switch>
          <Route exact path='/'>
            <Main
              isLogin={isLogin}
              isMain={true}
              handleOpenNavigation={handleOpenNavigation}
              isOpenMenu={isOpenMenu}
              handleCloseNavigation={handleCloseNavigation}
            />
          </Route>
          <ProtectedRoute
            exact
            path='/movies'
            component={Movies}
            isLogin={isLogin}
            isMain={false}
            handleOpenNavigation={handleOpenNavigation}
            isOpenMenu={isOpenMenu}
            handleCloseNavigation={handleCloseNavigation}
            saveMovies={saveMovies}
            setSaveMovies={setSaveMovies}
            onCardDislike={onCardDislike}
          />
          <ProtectedRoute
            exact
            path='/saved-movies'
            component={SavedMovies}
            isLogin={isLogin}
            isMain={false}
            handleOpenNavigation={handleOpenNavigation}
            isOpenMenu={isOpenMenu}
            handleCloseNavigation={handleCloseNavigation}
            saveMovies={saveMovies}
            setSaveMovies={setSaveMovies}
            onCardDislike={onCardDislike}
          />
          <ProtectedRoute
            exact
            path='/profile'
            component={Profile}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            isMain={false}
            handleOpenNavigation={handleOpenNavigation}
            isOpenMenu={isOpenMenu}
            handleCloseNavigation={handleCloseNavigation}
          />
          <Route
            exact
            path='/signin'>
            <Login />
          </Route>
          <Route
            exact
            path='/signup'>
            <Register />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
      <ErrorWindow isOpen={isOpenErrors} onClose={handleCloseErrors} errors={errors}/>
    </div>
  );
}

export default App;
