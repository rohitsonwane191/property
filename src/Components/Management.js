import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BiSolidUserDetail  } from 'react-icons/bi';
import { RiMoneyDollarBoxFill  } from 'react-icons/ri';
import { ImHome  } from 'react-icons/im';
import { IoIosAdd  } from 'react-icons/io';

import Navbars from '../Nav/Navbars.js';
const Management = () => {
  return (
    <div>
    <Navbars/>
    <div id='MainManagement'>
    &nbsp;
    &nbsp;
    <h1 style={{"color":"rgb(63, 152, 196)","textAlign":"center "}}> Management</h1>
    <Card id='ManagementCard'>
    <Link to="/Login">
    <BiSolidUserDetail id='logo1'/>
    </Link>
    <h4 style={{"color":"rgb(63, 152, 196)","textAlign":"center "}} >New Tenant Checklist</h4>
    </Card>
    <Card id='ManagementCard1'>
    <Link to="/Login">
    <RiMoneyDollarBoxFill id='logo2'/>
    </Link>
    <h4 style={{"color":"rgb(63, 152, 196)","textAlign":"center "}}  >Rental payment Log</h4>
    </Card>
    <div className='d-flex'>
    <Card id='ManagementCard2'>
    <Link to="/Login">
    </Link>
    <ImHome class='logo3'/>
    <h4 style={{"color":"rgb(63, 152, 196)","textAlign":"center "}}  >Propey-Tenant Info</h4>
    </Card>
    <Card id='ManagementCard3'>
    <Link to="/Login">
    </Link>
    <IoIosAdd class='logo3'/>
    <h4 style={{"color":"rgb(63, 152, 196)","textAlign":"center "}}  >Lease Tracker</h4>
    </Card>
    </div>
    <button  style={{"background-color":"rgb(63, 152, 196)"}} id='HomePage-btn'>HomePage</button>
    </div>
    </div>
  )
}
export default Management