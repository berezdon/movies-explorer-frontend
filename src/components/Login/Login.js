import React from "react";
import "./Login.css";
import logoHeader from "../../images/logo-header.svg";
import {NavLink} from "react-router-dom";

function Login () {
  const [email, setEmail] = React.useState('pochta@yandex.ru');
  const [password, setPassword] = React.useState('12345678');

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
        <h1 className="register__header-text">Рады видеть!</h1>
      </div>
      <div className="register__form">
        <form onSubmit={handleSubmitRegistration} className="register__form-submit" noValidate>
          <p className="register__info">E-mail</p>
          <input onChange={handleChangeEmail} type="email" value={email} name="email"
                 className="register__input" required minLength="1"
                 placeholder="Email"/>
          <input onChange={handleChangePassword} type="password" value={password} name="password"
                 className="register__input register__input_last" required minLength="1"
                 placeholder="password"/>
          <p className="register__error login__error">Что-то пошло не так...</p>
          <button type="submit" className="register__button">Войти</button>
        </form>
        <div className="register__footer">
          <p className="register__footer-text">Ещё не зарегистрированы?</p>
          <NavLink to='/signup' className="menu__link register__footer-link" >Регистрация</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Login
