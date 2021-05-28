import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from './Lg.png';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "../index.css"
import"../Pages/st.css"
import {Button} from "react-bootstrap";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import geography from '../Pages/geography';
import history from '../Pages/history';
import math from '../Pages/math';
import biology from '../Pages/biology';
import ukranian from '../Pages/ukranian';
import physics from '../Pages/physics';
import results from './results';
import { useAuth0 } from '@auth0/auth0-react';
const Header = () => {
    const { loginWithRedirect,logout, isAuthenticated } = useAuth0();
    return (
         <>
           <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
               <Container>
                   <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="60"
                            width="60"
                            className="d-inline-block align-top"
                            alt="Logo"
                            style={{'borderRadius':'100%'}}
                        /> 
                   </Navbar.Brand>
                   <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                   <Navbar.Collapse id="responsive-navbar-nav">
                       <Nav className="mr-auto">
                           <Nav.Link href="/"> Головна сторінка </Nav.Link>
                           <Nav.Link href="/about"> Про нас </Nav.Link>
                           <Nav.Link href="/contacts"> Контакти </Nav.Link>
                           <Nav.Link href="/results">Результати тестування</Nav.Link>
                           
                       </Nav>
                       <Nav>
                            { isAuthenticated  ?
                                <Button onClick={() => logout()}>
                                    Вийти
                                </Button>
                                :
                                <Button onClick={() => loginWithRedirect()}>
                                    Увійти
                                </Button>
                            }   
                       </Nav>
                   </Navbar.Collapse>
               </Container>
           </Navbar>

            <Router>
                <Switch>
                   <Route exact path="/" component={Home} />
                   <Route exact path="/about" component={About} />
                   <Route exact path="/contacts" component={Contacts} />
                   <Route exact path="/geography" component={geography} />
                   <Route exact path="/physics" component={physics} />
                   <Route exact path="/history" component={history} />
                   <Route exact path="/ukranian" component={ukranian} />
                   <Route exact path="/biology" component={biology} />
                   <Route exact path="/math" component={math} />
                   <Route exact path="/results" component={results} />
                </Switch>
            </Router>
         </>
    )
}
export default Header;
