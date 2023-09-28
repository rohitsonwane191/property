import React from 'react'
import { Link } from 'react-router-dom';

import "./Navbar.css"
import { AiOutlineHome } from 'react-icons/ai';
import { RiLoginBoxLine } from 'react-icons/ri';
const Navbars = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg  " id='NavbarSize'>
      <div class="container-fluid" >
        <h4 class="navbar-brand" href="/"> <img loading="lazy" width="35" id='logo' height="35" src="https://www.jotform.com/uploads/guest_d9e74b5dc2e0fe5b/form_files/_mainPWAIcon650932e38eb9f.png?nc=1" alt="Property Management App Icon" data-testid="logo-img"></img></h4>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            </li>
          </ul>
          <form >
          <Link to="/" id='HomePage'><AiOutlineHome/> HomePage</Link>
          <Link to="/Tenant" id='Tenant'>  Tenant</Link>
          <Link to="/management" id='Management'>  Management</Link>
          <Link to="/Login" id='Login'> <RiLoginBoxLine/></Link>
          </form>
        </div>
      </div>
    </nav>
    </div>
    )
}
  
export default Navbars