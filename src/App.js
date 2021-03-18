import React from "react";
import "./style.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import Perfil from './Components/profile';

export default function App() {
  return (
    <div>
      <h1> Hello StackBlitz!</h1>
      <p>Bienvenido</p>
      <Router>
        <Link to="/">Home</Link>
        <br />
        <Link to="/Perfil/109">Perfil</Link>
        <br />
        <Link to="/About">About</Link>
        <br />
        <Link to="/About/me">About Me</Link>
        <br />
        <Link to="/Contact">Contacto</Link>
        <br />
        <Link to="/NavBar">Componente Externo</Link>
        <hr />

        <Switch>
         <Route path="/About/me">
          <AboutMe />
        </Route>
         <Route path="/NavBar">
          <NavBar />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Perfil/id?">
          <Perfil />
        </Route>
        <Route exact path="/"><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return <div>Soy el home</div>;
}

function About() {
  return <div>Sobre nosotros</div>;
}

function AboutMe() {
  return <div>Soy Maurico Developer</div>;
}

function Contact() {
  return <div>Soy Contacto</div>;
}

