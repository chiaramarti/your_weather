import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/images/logo.png'; 
import sun from '../assets/images/sun.png'; 
import stormy from '../assets/images/stormy.png'; 
import search from '../assets/images/lente-ingrandimento.png';

    
 

const NavBar = ({ onCityChange, onSearch }) => {

    const [searchCity, setSearchCity] = useState(''); // Stato per memorizzare la città di ricerca

    const handleCityClick = (city) => {
      onCityChange(city);
    }
  
    const handleSearchInputChange = (e) => {
      setSearchCity(e.target.value); // Aggiorna lo stato della città di ricerca
    };
  
    const handleSearchButtonClick = () => {
      onSearch(searchCity); // Richiama la funzione onSearch passando la città di ricerca
      setSearchCity(''); // Resetta lo stato della città di ricerca
    };

  return (
    <Navbar variant="dark" className='bg-indigo'>
      {/* Logo del sito */}
      <Navbar.Brand href="#home">
        <img
          src={logo}
          height={70}
          className="d-block align-top my-0 py-0"
          alt="Your Weather Logo"
        />
      </Navbar.Brand>
      {/* Form di ricerca della località */}
      <Form className="position-relative d-flex ms-auto rounded-pill" style={{ backgroundColor: 'white' }}>
        <FormControl type="text" placeholder="Cerca località" className="mr-sm-2 border-0 rounded-pill" width="300" value={searchCity} onChange={handleSearchInputChange} /> {/* Aggiunta la funzione di gestione del cambio */}
        <div className="position-absolute end-0 top-0 h-100 d-flex align-items-center">
          {/* Bottone di ricerca */}
          <Button variant="white" className="bg-none border-0 rounded-pill" onClick={handleSearchButtonClick}>
            <img
              src={search}
              height={24}
              width={24}
              className="d-block align-top m-0 p-0"
              alt="sun"
            />
          </Button>
        </div>
      </Form>
      {/* Link per le località più popolari */}
      <Nav className="mr-auto">
        <Nav.Link href="#popular" className="d-flex justify-content-center align-items-center">Popular</Nav.Link>
        <Nav.Link href="#roma"  onClick={() => handleCityClick('Roma')} className="d-flex justify-content-center align-items-center">
          Roma
          <img
            src={sun}
            height={30}
            width={30}
            className="d-block align-top mt-1 py-0 ms-2"
            alt="sun"
          />
        </Nav.Link>
        <Nav.Link href="#milano" onClick={() => handleCityClick('Milano')} className="d-flex justify-content-center align-items-center">
          Milano
          <img
            src={sun}
            height={30}
            width={30}
            className="d-block align-top mt-1 py-0 ms-2"
            alt="sun"
          />
        </Nav.Link>
        <Nav.Link href="#firenze" onClick={() => handleCityClick('Firenze')} className="d-flex justify-content-center align-items-center">
          Firenze
          <img
            src={sun}
            height={30}
            width={30}
            className="d-block align-top mt-1 py-0 ms-2"
            alt="sun"
          />
        </Nav.Link>
        <Nav.Link href="#napoli" onClick={() => handleCityClick('Napoli')} className="d-flex justify-content-center align-items-center">
          Napoli
          <img
            src={stormy}
            height={30}
            width={30}
            className="d-block align-top mt-1 py-0 ms-2"
            alt="sun"
          />
        </Nav.Link>
        <Nav.Link href="#palermo" onClick={() => handleCityClick('Palermo')} className="d-flex justify-content-center align-items-center">
          Palermo
          <img
            src={stormy}
            height={30}
            width={30}
            className="d-block align-top mt-1 py-0 ms-2"
            alt="sun"
          />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;


