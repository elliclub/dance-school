import React, { Component } from "react";

class EndedClass extends Component {
  endedClasses() {
    const { classes, teachers } = this.props;

    const currentDate = new Date().toLocaleDateString();

    const endedClasses = classes
      .filter(c => c.dates.indexOf(currentDate) === -1)
      .map(c => {
        c.dates = c.dates.filter(x => x < currentDate);
        const currentTeacher = teachers.filter(
          t => t.classes.indexOf(c.name) !== -1
        );
        if (currentTeacher.length) {
          c.teacher = currentTeacher[0];
        }

        return c;
      });

    return endedClasses;
  }
  render() {
    const classes = this.endedClasses();
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
          <tbody>
            {classes.map((c, ci) => (
              <tr key={ci}>
                <td>{c.name}</td>
                <td>{c.dates}</td>
                <td>{c.start}</td>
                <td>
                  {c.teacher && c.teacher.firstname + " " + c.teacher.lastname}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EndedClass;
