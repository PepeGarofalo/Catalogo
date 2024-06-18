/* eslint-disable no-unused-vars */
import React from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_ENDPOINTS from '../../src/config/apiConfig';

const Login = () => {
  const navigate = useNavigate();

  const login = async (e) => {
    try {
      e.preventDefault();
      const data = new FormData(e.target);
      const userscatalogo = data.get('username');
      const pasworddd = data.get('password');

      const d = { userscatalogo, pasworddd };

      // Realiza la solicitud al endpoint de autenticación
      const resp = await axios.post(API_ENDPOINTS.AUTH, d);

      // Verifica si la respuesta indica que las credenciales son correctas
      if (resp.data?.isAuthenticated) {
        navigate('/ShowIniciativa', { replace: true });
      } else {
        alert('Credenciales Incorrectas');
      }
    } catch (error) {
      alert('Error en la autenticación');
    }
  };

  return (
    <div className="row d-flex">
      <div className="col-lg-4 containform">
        <div className="margincont">
          <form onSubmit={login}>
            <div className="center pasing">
              <img className="medidaslogo" src="/assets/consultorcolor.png" alt="" />
            </div>
            <div className="center mgtp">
              <label className="txt divnm" htmlFor="username">
                Usuario
              </label>
            </div>
            <div className="center mgtp">
              <input
                className="inpt"
                type="text"
                id="username"
                name="username"
                required
                placeholder="Nombre de Usuario"
              />
            </div>
            <div className="center mgtp">
              <label className="txt divnm" htmlFor="password">
                Contraseña
              </label>
            </div>
            <div className="center mgtp">
              <input
                className="inpt"
                type="password"
                id="password"
                name="password"
                required
                placeholder="Contraseña"
              />
            </div>
            <div className="center">
              <button className="btStyle" type="submit">
                Autenticarse
              </button>
            </div>
          </form>
        </div>
      </div>
      <img className="pdimg" src="/assets/login.jpg" alt="" />
    </div>
  );
};

export default Login;
