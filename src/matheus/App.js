import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap' 
import Home from './Home';
import Carros from './Carros';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <BrowserRouter>
            <main>
              <nav className="menu">
                <ul>
                  <li><Link to="/" className="menu-links">Home</Link></li>
                  <li><Link to="/carros" className="menu-links">Carros</Link></li>
                  <li><Link to="/cadastro" className="menu-links">Cadastro</Link></li>
                </ul>
              </nav>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/carros" component={Carros}></Route>
                <Route path="/cadastro" render={() => <h1>Cadastro</h1>}></Route>
              </Switch>
            </main>
          </BrowserRouter>
        </Row>
        <Row xs="12" className="footer"> 
            <p>Página desenvolvida por Matheus Rocco © 2020</p>
        </Row>
      </Container>
    </div>
  );
}

export default App;
