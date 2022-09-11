import React from 'react';
import './FormLogin.css';

const FormLogin = (props) => {
  return (
    <form className="form form-login">
      <div className="form-group">
        <p className="form-group__element">
          <label htmlFor="login">Логин:</label>
          <input type="text" id="login" placeholder="Ввведите логин" />
        </p>
        <p className="form-group__element">
          <label htmlFor="password">Пароль:</label>
          <input type="password" id="password" placeholder="Введите пароль" />
        </p>
        <p className="form-group__element">
          <label htmlFor="show">
            <input type="checkbox" id="show" />
            Показать пароль
          </label>
        </p>
        <button className="button button-submit">Войти</button>
      </div>
    </form>
  );
};

export default FormLogin;
