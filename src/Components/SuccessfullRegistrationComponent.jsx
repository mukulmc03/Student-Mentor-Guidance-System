import { Link } from "react-router-dom";
import React, { Component } from "react";

class SuccessfullRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: "",
    };
  }

  componentDidMount() {
    this.setState({ details: this.props.location.state.state1 });
  }

  render() {
    return (
      <div>
        <div className="container successfullRegLines">
          <h3> Thanku For Registration </h3>
          <h3> It Has Been Completed Successfully..!!!</h3>
        </div>

        <div className="card text-white bg-dark mb-3 successfullRegCard">
          <div className="card-header">
            Hello {this.state.details.FirstName} Please Remember Your Details:{" "}
          </div>
          <div className="card-body">
            <h5 className="card-title">Details:</h5>
            <p className="card-text">
              You Have Registered With Username :- {this.state.details.Email}{" "}
            </p>
            <p className="card-text">
              Your Course ID :- {this.state.details.courseId}{" "}
            </p>
            <p className="card-text">
              Your Mo_No Is :- {this.state.details.MobileNo}{" "}
            </p>
            <p className="card-text">
              Your Address :- {this.state.details.addressLine1}{" "}
              {this.state.details.addressLine2}{" "}
            </p>
            <Link to="/login">
              <button> Click Here To Login </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SuccessfullRegistration;
