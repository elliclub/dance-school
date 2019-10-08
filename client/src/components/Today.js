import React, { Component } from "react";

class Today extends Component {
  currentClasses() {
    const { classes, teachers } = this.props;
    const currentDate = new Date().toLocaleDateString();
    const currentClasses = classes
      .filter(c => c.dates.indexOf(currentDate) !== -1)
      .map(c => {
        c.dates = c.dates.filter(x => x === currentDate);

        const currentTeacher = teachers.filter(
          t => t.classes.indexOf(c.name) !== -1
        );

        if (currentTeacher.length) {
          c.teacher = currentTeacher[0];
        }

        return c;
      });

    return currentClasses;
  }

  render() {
    const classes = this.currentClasses();

    return (
      <div>
        <h2>Dagens klasser</h2>
        <table id="student-classes" className="table">
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
                <td>{c.teacher && c.teacher.firstname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Today;
