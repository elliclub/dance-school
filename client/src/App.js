import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Today from "./components/Today";
import CommingClass from "./components/Comming";
import EndedClass from "./components/Ended";
import ApiService from "./services/ApiService";
import  "./index.css";

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
          <div className="title" />
          <ul className="header">
            <li>
              <NavLink className="links" exact to="/">
                Dagens klasser
              </NavLink>
            </li>
            <li>
              <NavLink className="links" to="/comming">
                Kommande klasser
              </NavLink>
            </li>
            <li>
              <NavLink className="links" to="/ended">
                Avslutade klasser
              </NavLink>
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
            <Route
              path="/ended"
              render={props => (
                <EndedClass
                  {...props}
                  students={this.state.students}
                  classes={this.state.classes}
                  teachers={this.state.teachers}
                />
              )}
            />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
