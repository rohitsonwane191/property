import React from 'react'
import Navbars from '../Nav/Navbars'
import { Button, Card} from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import imgs from "./img/Screenshot (14).png"
import imgs1 from "./img/Screenshot (15).png"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
    <Navbars/>
    <div id='BodyColor'>
    <div >
    <img id='CompanyLogo' loading="lazy" width="160" height="160" src="https://www.jotform.com/uploads/guest_d9e74b5dc2e0fe5b/form_files/pfc_clone_650932e2ccc88.png?nc=1" alt=" Logo" data-testid="logo-img"></img>
    <h3 style={{"textAlign":"center","color":"white",}} id='tx'>property Management App </h3>
   <div id='cardSize'>
   <Card id='cardStyle'>
   <Card.Body>
   <h3 id='textProperty'> You are a Property</h3>
  <div id='btn'>
  <Link to="/Management">
  <Button type='button' id='btn-1'>Management</Button>
  </Link>
  <Link to="/Tenant">
  <Button type='button' id='btn-2'>Tenant</Button>
  </Link>
  </div>     
     </Card.Body>
     <div id='SliderBody'>
     <Carousel class="carousel-control-prev-icon" >
     <Carousel.Item>
       <img src={imgs} alt='netwok slow'/>
     </Carousel.Item>
     <Carousel.Item>
     <img src={imgs1} alt='netwok slow' />
     </Carousel.Item>
        </Carousel>
  </div>    
      </Card>
      </div>
    </div>

    </div>
    </div>
  )
}

export default Home