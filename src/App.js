import React from 'react';
import {Container} from 'reactstrap';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import HomePage from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <Container>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Redirect to="/"/>
                    </Switch>
                </BrowserRouter>
            </Container>
        </div>
    );
}

export default App;
