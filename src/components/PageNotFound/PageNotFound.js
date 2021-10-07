import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';
import notFound from '../../images/404.svg';

function PageNotFound () {
  return (
    <div className="not-found">
      <img className="not-found__image" src={notFound} alt=""/>
      <h3 className="not-found__title">Страница не найдена</h3>
      <Link className="not-found__back" to="/">Назад</Link>
    </div>
  )
}

export default PageNotFound;
