import React from "react";

const App = () => {
  const ponerFIlas = () => [
    <tr>
      <td>Jesus</td>
      <td>jesudevelp@gmail.com</td>
      <td>jesudevp.com</td>
    </tr>,
    <tr>
      <td>Ainat</td>
      <td>ainat46@gmail.com</td>
      <td>ainat97.com</td>
    </tr>
  ];

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
        <tbody>{ponerFIlas()}</tbody>
      </table>
    </div>
  );
};

export default App;
