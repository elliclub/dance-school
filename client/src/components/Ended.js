import React, { Component } from "react";

class EndedClass extends Component {
  render() {
    return (
      <div>
        <h2>Avslutade klasser</h2>
        <table id="completed-Sclasses" className="table">
          <thead>
            <tr>
              <th scope="col">Klass</th>
              <th scope="col">Datum</th>
              <th scope="col">Tid</th>
              <th scope="col">Lärare</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    );
  }
}

export default EndedClass;
