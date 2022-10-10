import { render } from '@testing-library/react';
import React from 'react'; // Importing Component Nav 
import Container from 'react-bootstrap/Container'; // Importing Container component from bootstrap 
import Nav from 'react-bootstrap/Nav'; // Importing Nav componenet from bootstrap
import Navbar from 'react-bootstrap/Navbar'; // Importing Navbar Component from bootstrap 
import {    // Importing Component Route, Routes and BrowserRouter from react libraries
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";

import { Content } from './content'; // Importing Component 
import { Create } from './create'; // Importing Component 
import { Read } from './read'; // Importing Component



export class Cnav extends React.Component {
    render(){
        return (
            <Router>
                <Navbar bg="dark" variant="dark">
                <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link> 
                    <Nav.Link href="read">Read</Nav.Link>
                    <Nav.Link href="create">Create</Nav.Link>
                </Nav>
                </Container>
            </Navbar>


            {/* Links the nav option with its indivual component */}
            <Routes>  
                <Route path='/' element={<Content></Content>}></Route>
                <Route path='/read' element={<Read></Read>}></Route>
                <Route path='/create' element={<Create></Create>}></Route>
               
            </Routes>

          </Router>
          );

    }
  
}


