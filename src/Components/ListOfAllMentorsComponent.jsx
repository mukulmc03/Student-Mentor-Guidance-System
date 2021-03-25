import React, { Component } from "react";
import MentorService from "../Services/MentorService";
import Header from "./HeaderComponent";

class ListOfAllMentors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mentors: [],
    };
    this.deleteMentorHandler = this.deleteMentorHandler.bind(this);
  }

  deleteMentorHandler(mentorId) {
    MentorService.deleteMentor(mentorId).then((res) => {
      this.setState({
        mentors: this.state.mentors.filter((a) => a.mentorId !== mentorId),
      });
    });
  }

  componentDidMount() {
    MentorService.getAllMentors().then((response) => {
      this.setState({ mentors: response.data });
    });
  }

  render() {
    return (
      <div>
        <Header title={"Mentor List"} />

        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">First_Name</th>
              <th scope="col">Last_Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Batch_Size</th>
              <th scope="col">Current_Students</th>
              <th scope="col">Skill_Rate</th>
              <th scope="col">Mo_No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.mentors.map((mentor) => (
              <tr key={mentor.mentorId}>
                <th>{mentor.mentorId}</th>
                <td>{mentor.mentorFirstName}</td>
                <td>{mentor.mentorLastName}</td>
                <td>{mentor.mentorEmail}</td>
                <td>{mentor.mentorGender}</td>
                <td>{mentor.batchSize}</td>
                <td>{mentor.currentBatchSize}</td>
                <td>{mentor.avgRating}</td>
                <td>{mentor.mentorMoNo}</td>
                <td>
                  <button
                    onClick={() => this.deleteMentorHandler(mentor.mentorId)}
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

export default ListOfAllMentors;
