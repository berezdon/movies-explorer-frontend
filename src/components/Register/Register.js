import { useState, useContext } from "react";
import "./Register.css";
import logoHeader from "../../images/logo-header.svg";
import {NavLink, useHistory} from "react-router-dom";
import MainApi from "../../utils/MainApi/MainApi"
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import validationRegForm from "../../utils/Validation/validationRegForm";
import * as errorText from "../../utils/Constants/errorText";

function Register () {
  const value = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameVal, setNameVal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);

  function handleChangeName (evt) {
    setName(evt.target.value);
    setNameVal(validationRegForm.name(evt.target.value));
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    setEmailVal(validationRegForm.email(evt.target.value));
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
    setPasswordVal(validationRegForm.password(evt.target.value));
  }

  const history = useHistory();

  function handleSubmitRegistration(evt) {
    evt.preventDefault();
    MainApi.register(name, password, email)
      .then((res) => {
        if (!res.ok) throw res;
      })
      .then(() => {
        setName('');
        setEmail('');
        setPassword('');
        MainApi.authorize(password, email)
          .then((res) => {
            if (!res.ok) throw res;
          })
          .then(() => {
            value.setIsLogin(true);
            history.push('/movies');
          })
      })
      .catch((err) => {
        value.setErrors(err);
      })
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
          <span className={`register__error ${!nameVal && 'register__error_open'}`}>{errorText.errorNameForm}</span>
          <p className="register__info">E-mail</p>
          <input onChange={handleChangeEmail} type="email" value={email} name="email"
                   className="register__input" required minLength="1"
                   placeholder="Email"/>
          <span className={`register__error ${!emailVal && 'register__error_open'}`}>{errorText.errorEmailForm}</span>
          <input onChange={handleChangePassword} type="password" value={password} name="password"
                 className="register__input register__input_last" required minLength="1"
                 placeholder="password"/>
          <span className={`register__error ${!passwordVal && 'register__error_open'}`}>{errorText.errorPasswordForm}</span>
          <button type="submit"
                  className={`register__button ${nameVal && emailVal && passwordVal && 'register__button_active'}`}
                  disabled={!nameVal || !emailVal || !passwordVal}
          >
            Зарегистрироваться
          </button>
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
