import { Link } from "react-router-dom";
import React, { Component } from "react";
import UserService from "../Services/UserService";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      BackendError: "",

      username: "",
      password: "",
      userrole: "",
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.signUpHandler = this.signUpHandler.bind(this);
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  signUpHandler = () => {
    this.props.history.push("/roles");
  };

  loginHandler = (event) => {
    event.preventDefault();
    const authUser = {
      userEmail: this.state.username,
      userPassword: this.state.password,
      userRole: this.state.userrole,
    };

    UserService.authenticateUser(authUser)
      .then((response) => {
        if (this.state.userrole === "admin") {
          localStorage.setItem("userData", JSON.stringify(response.data));
          localStorage.setItem("userrole", "admin");
          const data = JSON.parse(localStorage.getItem("userData"));
          console.log(JSON.stringify(data));
          this.props.history.push("/adminfunctions");
        }
        if (this.state.userrole === "mentor") {
          localStorage.setItem("userData", JSON.stringify(response.data));
          localStorage.setItem("userrole", "mentor");
          const data = JSON.parse(localStorage.getItem("userData"));
          console.log(JSON.stringify(data));
          this.props.history.push("/mentorfunctions");
        }

        if (this.state.userrole === "student") {
          localStorage.setItem("userData", JSON.stringify(response.data));
          localStorage.setItem("userrole", "student");
          const data = JSON.parse(localStorage.getItem("userData"));
          console.log(JSON.stringify(data));
          this.props.history.push("/studentfunctions");
        }
        alert("Form submitted successfully")
      })
      .catch((error) => {
        console.error(error.response.data.message);
        this.setState({ BackendError: error.response.data.message });
        alert(error.response.data.message)
      });
  };

  componentDidMount() {
    var data = JSON.parse(localStorage.getItem("userData"));
    if (localStorage.getItem("userrole") === "admin") {
      if (data) {
        this.props.history.push("/adminfunctions");
      } else {
        console.log("stay on login page");
      }
    }
    if (localStorage.getItem("userrole") === "student") {
      if (data) {
        this.props.history.push("/studentfunctions");
      } else {
        console.log("stay on login page");
      }
    }
    if (localStorage.getItem("userrole") === "mentor") {
      if (data) {
        this.props.history.push("/mentorfunctions");
      } else {
        console.log("stay on login page");
      }
    }
  }

  render() {
    return (
      <div className="container">
        <form className="form-horizontal loginform">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-8">
              <h2>Login</h2>
            </div>
          </div>

          <div className="form-group">
            <strong className="col-sm-3 control-label">Username : </strong>
            <div className="col-sm-9">
              <input
                type="email"
                placeholder="email@example.com"
                className="form-control"
                name="username"
                onChange={this.changeHandler}
                value={this.state.username}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <strong className="col-sm-3 control-label">Password :</strong>
            <div className="col-sm-9">
              <input
                type="password"
                placeholder="********"
                className="form-control"
                name="password"
                onChange={this.changeHandler}
                value={this.state.password}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <strong className="col-sm-3 control-label">Login As :</strong>
            <div className="col-sm-3">
              <input
                type="radio"
                name="userrole"
                value="admin"
                onChange={this.changeHandler}
              />{" "}
              Admin
            </div>
            <div className="col-sm-3">
              <input
                type="radio"
                name="userrole"
                value="student"
                onChange={this.changeHandler}
              />{" "}
              Student
            </div>
            <div className="col-sm-3">
              <input
                type="radio"
                name="userrole"
                value="mentor"
                onChange={this.changeHandler}
              />{" "}
              Mentor
            </div>
          </div>
          <br />

          <div className="form-group">
            <div className="row">
              <div className="col-sm-3">
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.loginHandler}
                >
                  Log In
                </button>
              </div>
              <div className="col-sm-6">
                <Link>
                  <button
                    className="btn btn-success "
                    onClick={this.signUpHandler}
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
