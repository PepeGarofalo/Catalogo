import { useEffect, useState } from 'react';
import Ban from '../layouts/banner-img';
import Info from '../layouts/infoF';
import Footers from '../layouts/footer';
import './ficha.css';
import { useParams } from 'react-router-dom';
import { Element } from 'react-scroll';
import axios from 'axios';
import API_ENDPOINTS from '../../src/config/apiConfig';


const Ficha = () => {
  const { identificador } = useParams();
  const [iniciativaAleatoria, setIniciativaAleatoria] = useState(null);
  const [iniciativas, setIniciativas] = useState([]);

  useEffect(() => {
    const fetchIniciativas = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.INICIATIVA);
        setIniciativas(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de iniciativas:', error);
      }
    };

    fetchIniciativas();
  }, []);

  useEffect(() => {
    if (!identificador && iniciativas.length > 0) {
      const iniciativaRandom = iniciativas[Math.floor(Math.random() * iniciativas.length)];
      setIniciativaAleatoria(iniciativaRandom);
    }
  }, [identificador, iniciativas]);

  return (
    <>
     {iniciativaAleatoria && !identificador && (
      <Ban iniciativa={iniciativaAleatoria} />
    )}

    {identificador && (
      <Element name="infoSection" className="element">
        <Info identificador={identificador.toString()} />
      </Element>
    )}
       <Footers></Footers>
    </>
  );
};

export default Ficha;
