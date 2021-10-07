import React, {useRef} from 'react';
import "./Profile.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function Profile ({
                    isLogin,
                    isMain,
                    handleOpenNavigation,
                    isOpenMenu,
                    handleCloseNavigation,
                  }) {
  const [isOpenForm, setIsOpenForm] = React.useState(false);
  const [name, setName] = React.useState('Максим');
  const [email, setEmail] = React.useState('pochta@yandex.ru');

  const refName = useRef(null);
  const refEmail = useRef(null);
  const refFormName = useRef(null);

  function handleSubmitProfile(evt) {
    evt.preventDefault();
    const name = refName.current.value;
    const email = refEmail.current.value;
    console.log(`${name} - ${email}`)
    setName(name);
    setEmail(email);
    setIsOpenForm(false);
  }

  function handleChangeName (evt) {
    setName(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
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
          <div className="profile__horizontal-line" />
          <div className="profile__line">
            <p className="profile__info">E-mail</p>
            <input onChange={handleChangeEmail} type="email" value={email} name="email"
                   className={`profile__input ${isOpenForm && 'profile__input_open'}`} required minLength="1"
                   ref={refEmail} placeholder="Email"/>
            <span className={`profile__span ${!isOpenForm && 'profile__span_open'}`}>{email}</span>
          </div>
          <button onClick={handleEditProfile} type="button"
                  className={`profile__button-edit profile__button-edit_close ${!isOpenForm && 'profile__button_open'}`}>
            Редактировать
          </button>
          <button type="submit" className={`profile__button-edit profile__button-edit_close ${isOpenForm && 'profile__button_open'}`}>
            Отправить
          </button>
        </form>
        <button type="button" className="profile__button-exit">
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
