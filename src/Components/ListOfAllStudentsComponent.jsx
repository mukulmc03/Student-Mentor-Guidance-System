import React, { Component } from "react";

import StudentService from "../Services/StudentService";

import Header from "./HeaderComponent";

class ListOfAllStudents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
    this.deleteMentorHandler = this.deleteMentorHandler.bind(this);
  }

  deleteMentorHandler(studentId) {
    StudentService.deleteStudentByStudentId(studentId).then((res) => {
      this.setState({
        students: this.state.students.filter((a) => a.studentId !== studentId),
      });
    });
  }

  componentDidMount() {
    StudentService.getStudentList().then((response) => {
      this.setState({ students: response.data });
    });
  }

  render() {
    return (
      <div>
        <Header title={"Student List"} />

        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">First_Name</th>
              <th scope="col">Last_Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mo_No</th>
              <th scope="col">D.O.B.</th>
              <th scope="col">Gender</th>
              <th scope="col">Marks</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.students.map((student) => (
              <tr key={student.studentId}>
                <th>{student.studentId}</th>
                <td>{student.studentFirstName}</td>
                <td>{student.studentFirstName}</td>
                <td>{student.studentEmail}</td>
                <td>{student.studetMobileNo}</td>
                <td>{student.studentDob}</td>
                <td>{student.studentGender}</td>
                <td>{student.studentMarks}</td>
                <td>
                  <button
                    onClick={() => this.deleteMentorHandler(student.studentId)}
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

export default ListOfAllStudents;
