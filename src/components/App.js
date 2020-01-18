import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: []
    };
  }

  async componentDidMount() {
    const respuesta = await axios.get(
      " https://jsonplaceholder.typicode.com/users"
    );
    console.log("respuesta: ", respuesta);
    this.setState({
      usuarios: [
        {
          nombre: "Jesus",
          correo: "jesusdevelp@gmail.com",
          enlace: "jesusdevp.com"
        },
        {
          nombre: "Ainat",
          correo: "ainat97@gmail.com",
          enlace: "ainat97.com"
        }
      ]
    });
  }

  ponerFIlas = () =>
    this.state.usuarios.map(usuario => (
      <tr>
        <td>{usuario.nombre}</td>
        <td>{usuario.correo}</td>
        <td>{usuario.enlace}</td>
      </tr>
    ));

  render() {
    return (
      <div className="margen">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>{this.ponerFIlas()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
