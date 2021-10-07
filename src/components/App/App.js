import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
  //const [isLogin, setIsLogin] = React.useState(false);
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  function handleOpenNavigation() {
    setIsOpenMenu(true);
  }

  function handleCloseNavigation () {
    setIsOpenMenu(false);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Main
            isLogin={false}
            isMain={true}
            handleOpenNavigation={handleOpenNavigation}
            isOpenMenu={isOpenMenu}
            handleCloseNavigation={handleCloseNavigation}
          />
        </Route>
        <Route path='/movies'>
          <Movies
            isLogin={true}
            isMain={false}
            handleOpenNavigation={handleOpenNavigation}
            isOpenMenu={isOpenMenu}
            handleCloseNavigation={handleCloseNavigation}
          />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies
            isLogin={true}
            isMain={false}
            handleOpenNavigation={handleOpenNavigation}
            isOpenMenu={isOpenMenu}
            handleCloseNavigation={handleCloseNavigation}
          />
        </Route>
        <Route path='/profile'>
          <Profile
            isLogin={true}
            isMain={false}
            handleOpenNavigation={handleOpenNavigation}
            isOpenMenu={isOpenMenu}
            handleCloseNavigation={handleCloseNavigation}
          />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
