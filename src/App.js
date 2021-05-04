import React from 'react';
import {Container} from 'reactstrap';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import HomePage from './pages/home';
import ImagesPage from './pages/images';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <Container>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/images" component={ImagesPage}/>
                        <Redirect to="/"/>
                    </Switch>
                </BrowserRouter>
            </Container>
        </div>
    );
}

export default App;
