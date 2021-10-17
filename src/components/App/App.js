import React from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {Route, Switch} from "react-router-dom";
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

function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const [errors, setErrors] = React.useState('');
  const [isOpenErrors, setIsOpenErrors] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(
    {name: "",
      about: "",
      avatar: "",
      _id: "",
      cohort: ""}
  );

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

  return (
    <div className="App">
      <CurrentUserContext.Provider value={{
        loggedIn: isLogin,
        currentUser: currentUser,
        setErrors: errorsSet,
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
          />
          <ProtectedRoute
            exact
            path='/profile'
            component={Profile}
            isLogin={isLogin}
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
