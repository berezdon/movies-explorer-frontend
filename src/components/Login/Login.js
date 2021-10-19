import {useContext, useState} from "react";
import "./Login.css";
import logoHeader from "../../images/logo-header.svg";
import {NavLink, useHistory} from "react-router-dom";
import MainApi from "../../utils/MainApi/MainApi"
import { CurrentUserContext} from "../../contexts/CurrentUserContext";
import * as errorText from "../../utils/Constants/errorText";
import validationRegForm from "../../utils/Validation/validationRegForm";

function Login () {
  const value = useContext(CurrentUserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    setEmailVal(validationRegForm.email(evt.target.value));
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
    setPasswordVal(validationRegForm.password(evt.target.value));
  }

  const history = useHistory();

  function handleSubmitLogin(evt) {
    evt.preventDefault();
    MainApi.authorize(password, email)
      .then((res) => {
        if (!res.ok) throw res;
      })
      .then(() => {
        setEmail('');
        setPassword('');
        value.setIsLogin(true);
        history.push('/movies');
      })
      .catch((err) => {
        value.setErrors(err);
      });
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
        <form onSubmit={handleSubmitLogin} className="register__form-submit" noValidate>
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
                  className={`register__button ${emailVal && passwordVal && 'register__button_active'}`}
                  disabled={!emailVal || !passwordVal}
          >
            Войти
          </button>
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
