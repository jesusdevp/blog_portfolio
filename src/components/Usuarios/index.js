import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { combineReducers } from "redux";

class Usuarios extends Component {
  // async componentDidMount() {
  //   const respuesta = await axios.get(
  //     " https://jsonplaceholder.typicode.com/users"
  //   );

  //   this.setState({
  //     usuarios: respuesta.data
  //   });
  // }

  ponerFIlas = () =>
    this.props.usuarios.map(usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
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

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, {})(Usuarios);
