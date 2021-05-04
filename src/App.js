import React from 'react';
import {Container, Navbar, NavbarBrand, NavLink} from 'reactstrap';
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import HomePage from './pages/home';
import ImagesPage from './pages/images';
import {Envs, Links} from './utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Router = Envs.isDevelopment()
    ? BrowserRouter
    : HashRouter;

function App() {
    return (
        <div className="App">
            <Navbar color="light">
                <NavbarBrand href={Links.localLink('/')}>Images</NavbarBrand>
                <NavLink href={Links.localLink('/images')}>See all images</NavLink>
            </Navbar>

            <Container>
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/images" component={ImagesPage}/>
                        <Redirect to="/"/>
                    </Switch>
                </Router>
            </Container>
        </div>
    );
}

export default App;
