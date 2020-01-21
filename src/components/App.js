import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Usuarios from "./Usuarios";

const Tareas = () => <div>Tareas</div>;

const App = props => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Route exact path="/" component={Usuarios} />
      <Route exact path="/Tareas" component={Tareas} />
    </div>
  </BrowserRouter>
);

export default App;
