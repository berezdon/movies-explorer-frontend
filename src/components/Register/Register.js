import "./Register.css";
import logoHeader from "../../images/logo-header.svg";
import React from "react";
import {NavLink} from "react-router-dom";

function Register () {
  const [name, setName] = React.useState('Максим');
  const [email, setEmail] = React.useState('pochta@yandex.ru');
  const [password, setPassword] = React.useState('12345678');

  function handleChangeName (evt) {
    setName(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmitRegistration(evt) {
    evt.preventDefault();
  }

  return (
    <section className="register">
      <div className="register__header">
        <NavLink to='/'>
          <img className="logo" src={logoHeader} alt={"Логотип в шапке сайта"} />
        </NavLink>
        <h1 className="register__header-text">Добро пожаловать!</h1>
      </div>
      <div className="register__form">
        <form onSubmit={handleSubmitRegistration} className="register__form-submit" noValidate>
          <p className="register__info">Имя</p>
          <input onChange={handleChangeName} type="text" value={name} name="name"
                 className="register__input" required minLength="1"
                 placeholder="Имя"/>
          <p className="register__info">E-mail</p>
          <input onChange={handleChangeEmail} type="email" value={email} name="email"
                   className="register__input" required minLength="1"
                   placeholder="Email"/>
          <input onChange={handleChangePassword} type="password" value={password} name="password"
                 className="register__input register__input_last" required minLength="1"
                 placeholder="password"/>
          <p className="register__error">Что-то пошло не так...</p>
          <button type="submit" className="register__button">Зарегистрироваться</button>
        </form>
        <div className="register__footer">
          <p className="register__footer-text">Уже зарегистрированы?</p>
          <NavLink to='/signin' className="menu__link register__footer-link" >Войти</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Register
