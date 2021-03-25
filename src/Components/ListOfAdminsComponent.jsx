import React, { Component } from "react";
import AdminService from "../Services/AdminService";
import Header from "./HeaderComponent";

class ListOfAdmins extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminList: [],
    };
    this.deleteMentorHandler = this.deleteMentorHandler.bind(this);
  }

  deleteMentorHandler(adminId) {
    AdminService.deleteAdminByAdminId(adminId).then((res) => {
      this.setState({
        adminList: this.state.adminList.filter((a) => a.adminId !== adminId),
      });
    });
  }

  componentDidMount() {
    AdminService.getListOfAdmin().then((response) => {
      this.setState({ adminList: response.data });
    });
  }

  render() {
    return (
      <div>
        <Header title={"Admin List"} />

        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">UserName</th>
              <th scope="col">Date Of Birth</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>

          <tbody>
            {this.state.adminList.map((admin) => (
              <tr key={admin.mentorId}>
                <th>{admin.mentorId}</th>
                <td>{admin.adminEmail}</td>
                <td>{admin.adminDob}</td>
                <td>{admin.adminGender}</td>

                <td>
                  <button
                    onClick={() => this.deleteMentorHandler(admin.adminId)}
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListOfAdmins;
