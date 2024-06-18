// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/ficha.css';
import PropTypes from 'prop-types';

import API_ENDPOINTS from '../../src/config/apiConfig';

const GaleriaImagenes = ({ imagenes }) => {
  console.log('Imágenes recibidas:', imagenes); // Agregamos un log para ver las imágenes recibidas

  return (
    <div className="container continfo">
      <div className="row centerdiv margin">
        <div className="col-12 centrate color divgalera">
          <img className="iconimgsize" src="/assets/img.png" alt="" />
          <p className="fontimgs">Galería de imágenes</p>
        </div>
      </div>
      <div className="row paddes">
        {/* Renderizar imágenes de la iniciativa */}
        {(imagenes || []).map((imagen, index) => (
          <div key={index} className="col-lg-3 pdboton fontimgs">
            <img className="stgaleriaimg" src={imagen} alt={`Imagen ${index}`} />
          </div>
        ))}
        {/* Renderizar marcadores de posición si no hay suficientes imágenes */}
        {[...Array(Math.max(0, 4 - (imagenes ? imagenes.length : 0)))].map((_, index) => (
          <div key={index} className="col-lg-3 pdboton">
            <img className="stgaleriaimg" src="/assets/placeholderimg.png" alt={`Marcador de posición ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

GaleriaImagenes.propTypes = {
  imagenes: PropTypes.arrayOf(PropTypes.string),
};

const Info = ({ identificador, iniciativaData }) => {
  const [infoIniciativa, setInfoIniciativa] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (identificador) {
          response = await axios.get(`${API_ENDPOINTS.INICIATIVA}/${identificador}`);
        } else if (iniciativaData) {
          response = { data: iniciativaData };
        }
        if (response) {
          setInfoIniciativa(response.data);
        }
      } catch (error) {
        // console.error("Error al obtener la información de la iniciativa:", error);
      }
    };

    fetchData();
  }, [identificador, iniciativaData]);

  // Extraer las URLs de las imágenes del arreglo infoIniciativa.imagenes
  const imagenes = infoIniciativa.imagenes || (iniciativaData && iniciativaData.imagenes) || [];

  console.log('Imágenes a pasar a GaleriaImagenes:', imagenes); // Agregamos un log para ver las imágenes a pasar al componente GaleriaImagenes

  return (
    <>
      <div className="container continfo">
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            <div className="card-info">
              <div className="paddeeste">
                <div className="divver">
                  <img src="/assets/persona contacto.png" className="divver" alt="Contactos" />&nbsp;Contactos
                </div>
                <div className="envolver">
                  <div className="color centerdiv">
                    <div className="marg">
                      Nombre:
                    </div>
                    <p className="colorpp">
                      {infoIniciativa.contacto || (iniciativaData && iniciativaData.contacto)}
                    </p>
                  </div>
                  <div className="centerdiv">
                    <img className="cliconcontact" src="/assets/telefono.png" alt="Telefono" />
                    <p className="colorpp">
                      {infoIniciativa.telefonos || (iniciativaData && iniciativaData.telefonos)}
                    </p>
                  </div>
                  <div className="centerdiv">
                    <img className="cliconcontact" src="/assets/correo.png" alt="Correo" />
                    <p className="colorpp">
                      {infoIniciativa.correo || (iniciativaData && iniciativaData.correo)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* el segundo --------------------- */}
          <div className="col-lg-4 col-xs-12">
            <div className="card-info">
              <div className="paddeeste">
                <div className="divver">
                  <img src="/assets/direccion.png" className="divver" alt="Contactos" />&nbsp;Dirección
                </div>
                <div className="envolver">
                  <div className="color centerdiv">
                    <div className="marg">
                      Provincia:
                    </div>
                    <p className="colorpp">
                      {infoIniciativa.nombre_provincia || (iniciativaData && iniciativaData.nombre_provincia)}
                    </p>
                  </div>
                  <div className="centerdiv">
                    <div className="color marg">
                      Municipio:
                    </div>
                    <div className="mgdireccin">
                      <p className="colorpp">
                        {infoIniciativa.nombre_municipio || (iniciativaData && iniciativaData.nombre_municipio)}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <p className="colorst">
                      {infoIniciativa.direccion || (iniciativaData && iniciativaData.direccion)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* el tercero-------------------------- */}
          <div className="col-lg-4 col-xs-12">
            <div className="card-info">
              <div className="paddeeste">
                <div className="divver">
                  <img src="/assets/redes sociales.png" className="divver" alt="Contactos" />&nbsp;Redes Sociales
                </div>
                <div className="color centerdiv red contenedor">
                <div className='div1'>
  <a href={infoIniciativa.facebook || (iniciativaData && iniciativaData.facebook)} target="_blank" rel="noopener noreferrer" className="cursorpt redesres">
    <img className='hver' src="/assets/feic.png" alt="Redes"/>
  </a>
</div>
<div className='div2'>
  <a href={infoIniciativa.instagram || (iniciativaData && iniciativaData.instagram)} target="_blank" rel="noopener noreferrer" className="cursorpt redesres">
    <img className='hver' src="/assets/inst.png" alt="Redes"/>
  </a>
</div>
<div className='div3'>
  <a href={infoIniciativa.twitter || (iniciativaData && iniciativaData.twitter)} target="_blank" rel="noopener noreferrer" className="cursorpt redesres">
    <img className='hver' src="/assets/x.png" alt="Redes"/>
  </a>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pasar el arreglo de imágenes al componente GaleriaImagenes */}
        <GaleriaImagenes imagenes={imagenes} />
      </div>
    </>
  );
};

Info.propTypes = {
  identificador: PropTypes.string,
  iniciativaData: PropTypes.object,
};

export default Info;
