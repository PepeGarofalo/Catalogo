import { useLocation, NavLink, useNavigate } from 'react-router-dom'; // Importa useNavigate
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import './navbar.css';
import CompShowIniciativa from '../iniciativaMethods/ShowIniciativa';
import CreateIniciativa from '../iniciativaMethods/CreateIniciativa';
import EditIniciativa from '../iniciativaMethods/EditIniciativa';
import axios from 'axios';
import API_ENDPOINTS from '../../src/config/apiConfig';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Inicializa useNavigate
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [iniciativas, setIniciativas] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.INICIATIVA);
        setIniciativas(response.data); // Corrige esto
      } catch (error) {
        console.error('Error al obtener la lista de iniciativas:', error);
      }
    };

    fetchData();
  }, []); // Solo se ejecuta una vez al montar el componente

  useEffect(() => {
    // Lógica de búsqueda aquí...
    if (searchTerm) {
      const filtered = iniciativas.filter((iniciativa) =>
        iniciativa.nombre_iniciativa.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(filtered.slice(0, 8));
      setShowResults(true);
      setSearchResultsVisible(true);
    } else {
      setFilteredResults([]);
      setShowResults(false);
      setSearchResultsVisible(false);
    }
  }, [searchTerm, iniciativas]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.INICIATIVA);
        setIniciativas(response.data); // Corrige esto
      } catch (error) {
        console.error('Error al obtener la lista de iniciativas:', error);
      }
    };

    if (!(location.pathname === '/CreateIniciativa' || location.pathname.includes('/EditIniciativa/'))) {
      fetchData();
    }
  }, [location.pathname]);

  useEffect(() => {
    clearSearch();
  }, [location.pathname]);

  const handleResultClick = (iniciativa) => {
    navigate(`/ficha/${iniciativa.identificador}`); // Usa navigate para la redirección
    clearSearch();
  };

  const closeSearchResults = () => {
    setSearchResultsVisible(false);
    clearSearch();
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredResults([]);
  };

  if (location.pathname === '/ShowIniciativa') {
    return <CompShowIniciativa />;
  }
  if (location.pathname === '/CreateIniciativa') {
    return <CreateIniciativa />;
  }
  if (location.pathname.includes('/EditIniciativa/')) {
    return <EditIniciativa />;
  }

  return (
    <>
      <Navbar className="degradate" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src="/assets/logoCatalogo.png" className='imgnvbr' alt="logo del catálogo" />
          </Navbar.Brand>
          <input
            className="inpts dnonelg"
            type="text"
            placeholder="   Buscar iniciativas"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='' id="basic-navbar-nav">
            <Nav.Link className={`Clr ajust colorLinks ${location.pathname === '/' ? 'active' : ''}`} as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link className={`Clr ajust colorLinks ${location.pathname === '/mapa' ? 'active' : ''}`} as={Link} to="/mapa">
              Mapa
            </Nav.Link>
            <NavLink
              className={`Clr nav-link ajust colorLinkss ${location.pathname.includes('/ficha') ? 'active' : ''}`}
              to="/ficha"
              style={{ textDecoration: 'none' }}
            >
              Ficha Técnica
            </NavLink>
            <Nav.Link className={`Clr ajust colorLinkss ${location.pathname === '/estadistica' ? 'active' : ''}`} as={Link} to="/estadistica">
              Estadística
            </Nav.Link>
          </Navbar.Collapse>
          <Nav.Link className="rgt dnonelg" as={Link} to="/login">
            <img className="iconlg" src="/assets/ADM.png" alt="logo de admin" />
          </Nav.Link>
        </Container>
      </Navbar>
      {showResults && (
        <div className={`search-results ml-5 positionsearch ${searchResultsVisible ? 'visible' : ''}`}>
          <div className='final'>
            <img className='closebtn' src="/assets/close.png" alt="Cerrar búsqueda" onClick={closeSearchResults} />
          </div>
          <ul className='searcnavbar'>
            {filteredResults.map((iniciativa) => (
              <li className='serachresult' key={iniciativa.identificador} onClick={() => handleResultClick(iniciativa)}>
                <img className="imglist" src="/assets/icon.png" alt="Icono" />
                <Link className='serachresult' to={`/ficha/${iniciativa.identificador}`}>{iniciativa.nombre_iniciativa}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default NavBar;
