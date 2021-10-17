import React, {useContext, useEffect, useRef, useState} from 'react';
import "./Profile.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import MainApi from "../../utils/MainApi/MainApi";
import {useHistory} from "react-router-dom";
import * as errorText from "../../utils/Constants/errorText";
import validationRegForm from "../../utils/Validation/validationRegForm";

function Profile ({
                    isLogin,
                    setIsLogin,
                    isMain,
                    handleOpenNavigation,
                    isOpenMenu,
                    handleCloseNavigation,
                  }) {
  const value = useContext(CurrentUserContext);
  const [isOpenForm, setIsOpenForm] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [nameVal, setNameVal] = useState(true);
  const [emailVal, setEmailVal] = useState(true);

  useEffect(() => {
    value.handleTokenCheck();
    setName(value.currentUser.name);
    setEmail(value.currentUser.email);
    localStorage.setItem('url', '/profile');
  }, [])

  const refName = useRef(null);
  const refEmail = useRef(null);
  const refFormName = useRef(null);

  function handleSubmitProfile(evt) {
    evt.preventDefault();
    const name = refName.current.value;
    const email = refEmail.current.value;
    MainApi.patchUserData(name, email)
      .then((res) => {
        if (!res.ok) throw res;
      })
      .then(() => {
        setName(name);
        setEmail(email);
        setIsOpenForm(false);
      })
      .catch((err) => {
        value.setErrors(err);
      });
  }

  const history = useHistory();

  function handleLogOut() {
    MainApi.userExit()
      .then((res) => {
        if (!res.ok) throw res;
      })
      .then(() => {
        localStorage.removeItem('url');
        localStorage.removeItem('phrase');
        setIsLogin(false);
        history.push('/');
      })
      .catch((err) => {
        value.setErrors(err);
      });
  }

  function handleChangeName (evt) {
    setName(evt.target.value);
    setNameVal(validationRegForm.name(evt.target.value));
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    setEmailVal(validationRegForm.email(evt.target.value));
  }

  function handleEditProfile() {
    setIsOpenForm(true);
  }

  return (
    <>
      <Header
        isLogin={isLogin}
        isMain={isMain}
        handleOpenNavigation={handleOpenNavigation}
      />
      <div className="profile">
        <h1 className="profile__title">Привет, Максим!</h1>
        <form onSubmit={handleSubmitProfile} className="profile__edit"
              ref={refFormName} noValidate>
          <div className="profile__line">
            <p className="profile__info">Имя</p>
            <input onChange={handleChangeName} type="text" value={name} name="name"
                   className={`profile__input ${isOpenForm && 'profile__input_open'}`} required minLength="1"
                   ref={refName} placeholder="Имя"/>
            <span className={`profile__span ${!isOpenForm && 'profile__span_open'}`}>{name}</span>
          </div>
          <span className={`register__error ${!nameVal && 'register__error_open'}`}>{errorText.errorNameForm}</span>
          <div className="profile__horizontal-line" />
          <div className="profile__line">
            <p className="profile__info">E-mail</p>
            <input onChange={handleChangeEmail} type="email" value={email} name="email"
                   className={`profile__input ${isOpenForm && 'profile__input_open'}`} required minLength="1"
                   ref={refEmail} placeholder="Email"/>
            <span className={`profile__span ${!isOpenForm && 'profile__span_open'}`}>{email}</span>
          </div>
          <span className={`register__error ${!emailVal && 'register__error_open'}`}>{errorText.errorEmailForm}</span>
          <button onClick={handleEditProfile} type="button"
                  className={`profile__button-edit profile__button-edit_close profile__button-edit_active ${!isOpenForm && 'profile__button_open'}`}>
            Редактировать
          </button>
          <button
            type="submit"
            className={`profile__button-edit profile__button-edit_close ${isOpenForm && 'profile__button_open'}
            ${nameVal && emailVal && 'profile__button-edit_active'}`}
            disabled={!nameVal || !emailVal}
          >
            Отправить
          </button>
        </form>
        <button onClick={handleLogOut} type="button" className="profile__button-exit">
          Выйти из аккаунта
        </button>
      </div>
      <Navigation
        isLogin={isLogin}
        isMain={isMain}
        isOpenMenu={isOpenMenu}
        handleCloseNavigation={handleCloseNavigation}
      />
    </>
  )
}

export default Profile
