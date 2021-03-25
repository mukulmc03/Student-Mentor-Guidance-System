import React, { Component } from "react";

import AdminService from "../Services/AdminService";

class AdminProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminDetails: "",
    };
  }

  componentDidMount() {
    AdminService.getAdminDetailsByAdminId(this.props.data1).then((response) => {
      this.setState({ adminDetails: response.data });
    });
  }

  render() {
    return (
      <div>
        <div className="card text-white bg-dark mb-3 adminprofilecard">
          <div className="card-body">
            <div className="container">
              <br />
              <h5 className="card-title">Profile Information:</h5>
              <p className="card-text">
                Admin UserName :- {this.state.adminDetails.adminEmail}{" "}
              </p>
              <p className="card-text">
                Date Of Birth :- {this.state.adminDetails.adminDob}{" "}
              </p>
              <p className="card-text">
                Gender :- {this.state.adminDetails.adminGender}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProfileCard;
