import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Today from "./components/Today";
import CommingClass from "./components/Comming";
import EndedClass from "./components/Ended";
import ApiService from "./services/ApiService";

class App extends Component {
  state = {
    students: [],
    classes: [],
    teachers: [],
  };

  async componentDidMount() {
    this.setState({
      students: await ApiService.fetchStudents(),
      classes: await ApiService.fetchClasses(),
      teachers: await ApiService.fetchTeachers(),
    });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Dance You Off</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Dagens klasser
              </NavLink>
            </li>
            <li>
              <NavLink to="/comming">Kommande</NavLink>
            </li>
            <li>
              <NavLink to="/ended">Avslutade</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route
              exact
              path="/"
              render={props => (
                <Today
                  {...props}
                  students={this.state.students}
                  classes={this.state.classes}
                  teachers={this.state.teachers}
                />
              )}
            />
            <Route
              path="/comming"
              render={props => (
                <CommingClass
                  {...props}
                  students={this.state.students}
                  classes={this.state.classes}
                  teachers={this.state.teachers}
                />
              )}
            />
            <Route path="/ended" component={EndedClass} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
